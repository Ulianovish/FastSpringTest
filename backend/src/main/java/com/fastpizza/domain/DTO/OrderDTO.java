package com.fastpizza.domain.DTO;

import lombok.Data;

import java.util.Set;

@Data
public class OrderDTO {
    private Long id;
    private int price;
    private Set<OrderPizzaDTO> pizzaOrders;
}
