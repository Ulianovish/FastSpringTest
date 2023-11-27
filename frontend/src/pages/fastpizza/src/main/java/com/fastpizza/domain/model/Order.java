package com.fastpizza.domain.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "orders")
public class Order extends BaseModel{
    @ManyToOne
    @JoinColumn(name="userId")
    private User user;

    private int price;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    private Set<OrderPizza> pizzas;
}