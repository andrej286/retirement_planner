package com.retirementplanner.web.controller;

import com.retirementplanner.core.model.AuthResponse;
import com.retirementplanner.core.model.LoginRequest;
import com.retirementplanner.core.model.RegisterRequest;
import com.retirementplanner.core.model.UserDto;
import com.retirementplanner.core.service.UserService;
import com.retirementplanner.web.security.JwtTokenProvider;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider tokenProvider;
    private final UserService userService;
    private final PasswordEncoder passwordEncoder;

    public AuthController(AuthenticationManager authenticationManager, JwtTokenProvider tokenProvider,
                         UserService userService, PasswordEncoder passwordEncoder) {
        this.authenticationManager = authenticationManager;
        this.tokenProvider = tokenProvider;
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody RegisterRequest registerRequest) {
        try {
            UserDto user = userService.registerUser(registerRequest);
            String token = tokenProvider.generateToken(user.getUsername());

            // Include full user data with relationships
            UserDto userWithData = userService.getUserByUsername(user.getUsername());

            return ResponseEntity.ok(new AuthResponse(token, userWithData, true));
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body("Error: " + e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest) {
        try {
            UserDto user = userService.getUserByUsername(loginRequest.getUsername());

            if (user == null) {
                return ResponseEntity.badRequest().body("Error: User not found");
            }

            // Since we don't have raw password stored, we check via authentication manager
            try {
                authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsername(),
                        loginRequest.getPassword()
                    )
                );
            } catch (Exception e) {
                return ResponseEntity.badRequest().body("Error: Invalid username or password");
            }

            String token = tokenProvider.generateToken(loginRequest.getUsername());

            // Reload user to get all relationships
            UserDto userWithData = userService.getUserByUsername(loginRequest.getUsername());

            return ResponseEntity.ok(new AuthResponse(token, userWithData, true));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error: Login failed - " + e.getMessage());
        }
    }

    @GetMapping("/user/{username}")
    public ResponseEntity<?> getUserData(@PathVariable String username) {
        UserDto user = userService.getUserByUsername(username);
        if (user == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(user);
    }
}

