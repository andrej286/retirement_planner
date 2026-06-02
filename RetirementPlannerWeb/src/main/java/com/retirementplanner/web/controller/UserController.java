package com.retirementplanner.web.controller;

import com.retirementplanner.core.model.UserModel;
import com.retirementplanner.core.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity<UserModel> createUser(@RequestBody UserModel user) {
        UserModel saved = userService.saveUser(user);
        return ResponseEntity.ok(saved);
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserModel> getUser(@PathVariable Long id) {
        UserModel user = userService.getUserById(id);
        if (user == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(user);
    }

    @GetMapping
    public ResponseEntity<List<UserModel>> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }
}

