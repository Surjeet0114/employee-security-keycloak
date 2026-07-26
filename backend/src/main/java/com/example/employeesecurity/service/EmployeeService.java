package com.example.employeesecurity.service;

import com.example.employeesecurity.dto.EmployeeResponse;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    public List<EmployeeResponse> listEmployees() {
        return List.of(
                new EmployeeResponse(1L, "Alice Johnson", "ADMIN"),
                new EmployeeResponse(2L, "Bob Smith", "EMPLOYEE")
        );
    }
}
