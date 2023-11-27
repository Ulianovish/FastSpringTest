package com.fastpizza.service.order;

import com.fastpizza.domain.DTO.OrderDTO;

import java.util.List;

public interface OrderService {
    OrderDTO saveOrder(String email, OrderDTO orderDTO);
    List<OrderDTO> getAllOrdersByUser(String email);
}
