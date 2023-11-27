package com.fastpizza.domain.repository;

import com.fastpizza.domain.model.Crust;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CrustRepository extends JpaRepository<Crust, Long> {
}
