package com.fastpizza.domain.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Size extends BaseModel{
    private String name;
    private int price;
}