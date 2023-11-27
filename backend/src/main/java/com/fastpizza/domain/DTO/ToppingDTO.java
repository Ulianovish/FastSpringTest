package com.fastpizza.domain.DTO;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Data
public class ToppingDTO {
    private Long id;
    private String name;
    private int price;
    private String type;
    private String image;
}
