package com.appdev.furluv.siag3.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.appdev.furluv.siag3.entity.PetOwner;

@Repository
public interface PetOwnerRepository extends JpaRepository<PetOwner, Long> {
    // Additional query methods can be defined here if needed

}
