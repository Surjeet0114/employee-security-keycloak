package com.example.employeesecurity.service;

import com.example.employeesecurity.dto.ProfileResponse;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@Service
public class ProfileService {

    public ProfileResponse buildProfile(Authentication authentication) {
        return new ProfileResponse(
                authentication.getName(),
                authentication.getName() + "@example.com",
                authentication.getAuthorities().toString()
        );
    }
}
