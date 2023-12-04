package com.fastpizza.domain.DTO;

import lombok.*;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Data
public class PizzaDTO {
    private Long id;
    private String name;
    private int price;
    private String image;
}
