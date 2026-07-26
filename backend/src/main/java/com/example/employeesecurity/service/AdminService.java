package com.example.employeesecurity.service;

import com.example.employeesecurity.dto.AdminResponse;
import org.springframework.stereotype.Service;

@Service
public class AdminService {

    public AdminResponse buildAdminResponse() {
        return new AdminResponse("Admin access granted", "admin-only operations");
    }
}
