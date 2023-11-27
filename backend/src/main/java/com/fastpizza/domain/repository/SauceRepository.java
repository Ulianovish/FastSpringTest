package com.fastpizza.domain.repository;

import com.fastpizza.domain.model.Sauce;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SauceRepository extends JpaRepository<Sauce, Long> {
}
