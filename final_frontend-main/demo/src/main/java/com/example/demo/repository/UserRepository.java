package com.example.demo.repository;

import com.example.demo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // Kusa nang ibibigay ng Spring JPA ang mga methods tulad ng:
    // .save(), .findAll(), .findById(), .deleteById()
}