package com.example.employeesecurity.service;

import com.example.employeesecurity.dto.DashboardResponse;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DashboardService {

    public DashboardResponse buildDashboard(Authentication authentication) {
        return new DashboardResponse(
                "Dashboard access granted",
                List.of("/api/dashboard", "/api/profile", "/api/employees")
        );
    }
}
