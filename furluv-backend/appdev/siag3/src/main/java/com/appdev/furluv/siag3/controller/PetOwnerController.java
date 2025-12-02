package com.appdev.furluv.siag3.controller;

import com.appdev.furluv.siag3.entity.PetOwner;
import com.appdev.furluv.siag3.service.PetOwnerService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/petowners")
@CrossOrigin(origins = "http://127.0.0.1:5173")
public class PetOwnerController {
    private final PetOwnerService petOwnerService;

    public PetOwnerController(PetOwnerService petOwnerService) {
        this.petOwnerService = petOwnerService;
    }

    @GetMapping
    public List<PetOwner> getAllPetOwners() {
        return petOwnerService.getAllPetOwners();
    }

    @GetMapping("/{id}")
    public PetOwner getPetOwner(@PathVariable Long id) {
        return petOwnerService.getPetOwnerById(id);
    }

    @PostMapping
    public PetOwner createPetOwner(@RequestBody PetOwner petOwner) {
        return petOwnerService.createPetOwner(petOwner);
    }

    @PutMapping("/{id}")
    public PetOwner updatePetOwner(@PathVariable Long id, @RequestBody PetOwner petOwner) {
        return petOwnerService.updatePetOwner(id, petOwner);
    }
}
