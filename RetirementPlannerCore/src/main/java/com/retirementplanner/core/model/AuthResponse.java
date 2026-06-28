package com.retirementplanner.core.model;

public class AuthResponse {
    private String token;
    private UserDto user;
    private boolean authenticated;

    public AuthResponse() {
    }

    public AuthResponse(String token, UserDto user, boolean authenticated) {
        this.token = token;
        this.user = user;
        this.authenticated = authenticated;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public UserDto getUser() {
        return user;
    }

    public void setUser(UserDto user) {
        this.user = user;
    }

    public boolean isAuthenticated() {
        return authenticated;
    }

    public void setAuthenticated(boolean authenticated) {
        this.authenticated = authenticated;
    }
}

