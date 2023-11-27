package com.fastpizza.domain.DTO;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
public class AddressDTO {
    private Long id;
    private String address;
    private String town;
    private String city;
    private String state;
}
