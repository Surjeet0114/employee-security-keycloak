package com.example.employeesecurity.dto;

import java.util.List;

public record DashboardResponse(String message, List<String> availableEndpoints) {
}
