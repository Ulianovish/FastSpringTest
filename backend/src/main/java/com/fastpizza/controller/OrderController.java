package com.fastpizza.controller;

import com.fastpizza.service.order.OrderService;
import com.fastpizza.domain.DTO.OrderDTO;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@SecurityRequirement(name = "basicAuth")
@RequestMapping("/api/orders")
public class OrderController {

    private final OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping("/{email}")
    public ResponseEntity<OrderDTO> saveOrder(@PathVariable String email, @RequestBody OrderDTO orderDTO) {
        OrderDTO savedOrder = orderService.saveOrder(email, orderDTO);
        return new ResponseEntity<>(savedOrder, HttpStatus.CREATED);
    }

    @GetMapping("/{email}")
    public ResponseEntity<List<OrderDTO>> getAllOrdersByUser(@PathVariable String email) {
        List<OrderDTO> orders = orderService.getAllOrdersByUser(email);
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }
}