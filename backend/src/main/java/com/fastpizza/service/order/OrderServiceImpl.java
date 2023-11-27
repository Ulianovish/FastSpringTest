package com.fastpizza.service.order;

import com.fastpizza.domain.DTO.OrderDTO;
import com.fastpizza.domain.DTO.UserDTO;
import com.fastpizza.domain.model.Order;
import com.fastpizza.domain.model.User;
import com.fastpizza.domain.repository.OrderRepository;
import com.fastpizza.service.user.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;
    private final UserService userService;  // Assuming you have a UserService to retrieve the user
    private final ModelMapper modelMapper;

    @Autowired
    public OrderServiceImpl(OrderRepository orderRepository, UserService userService, ModelMapper modelMapper) {
        this.orderRepository = orderRepository;
        this.userService = userService;
        this.modelMapper = modelMapper;
    }

    @Override
    @Transactional
    public OrderDTO saveOrder(String email, OrderDTO orderDTO) {
        // Retrieve the user
        UserDTO userDTO = userService.getByEmail(email);

        // Map the DTO to an entity
        Order order = modelMapper.map(orderDTO, Order.class);
        order.setUser(modelMapper.map(userDTO, User.class));

        // Save the order
        Order savedOrder = orderRepository.save(order);

        // Map the saved entity back to DTO
        return modelMapper.map(savedOrder, OrderDTO.class);
    }

    @Override
    @Transactional(readOnly = true)
    public List<OrderDTO> getAllOrdersByUser(String email) {
        // Retrieve the user
        UserDTO userDTO = userService.getByEmail(email);

        // Retrieve orders for the user
        List<Order> userOrders = orderRepository.findByUser(modelMapper.map(userDTO, User.class));

        // Map entities to DTOs
        return userOrders.stream()
                .map(order -> modelMapper.map(order, OrderDTO.class))
                .collect(Collectors.toList());
    }
}