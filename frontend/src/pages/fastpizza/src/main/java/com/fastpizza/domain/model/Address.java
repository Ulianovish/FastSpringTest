package com.fastpizza.domain.model;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Address extends BaseModel{
    @ManyToOne
    @JoinColumn(name="userId")
    private User user;

    private String address;
    private String town;
    private String city;
    private String state;
}