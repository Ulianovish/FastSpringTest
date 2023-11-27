package com.fastpizza.domain.repository;

import com.fastpizza.domain.model.Pizza;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface PizzaRepository extends JpaRepository<Pizza, Long> {
    Set<Pizza> findAllByOrderById();
}
