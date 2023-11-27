package com.fastpizza.domain.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@Entity
public class Pizza extends BaseModel{
    private String name;
    private int price;

    @ManyToOne
    @JoinColumn(name="sizeId")
    private Size size;

    @ManyToOne
    @JoinColumn(name="sauceId")
    private Sauce sauce;

    @ManyToOne
    @JoinColumn(name="crustId")
    private Crust crust;

    @ManyToMany
    @JoinTable(
            name = "pizza_topping", // Name of the join table
            joinColumns = @JoinColumn(name = "pizza_id"),
            inverseJoinColumns = @JoinColumn(name = "topping_id")
    )
    private Set<Topping> toppings;
}
