package com.fastpizza.domain.repository;

import com.fastpizza.domain.model.Address;
import com.fastpizza.domain.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long> {
    List<Address> findByUser(User user);
    void deleteById(Long id);
}
