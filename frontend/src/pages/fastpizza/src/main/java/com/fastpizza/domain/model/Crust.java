package com.fastpizza.domain.model;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Crust extends BaseModel{
    private String name;
    private int price;
}