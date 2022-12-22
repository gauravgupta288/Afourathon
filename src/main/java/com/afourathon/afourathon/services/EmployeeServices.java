package com.afourathon.afourathon.services;

import com.afourathon.afourathon.dao.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class EmployeeServices {

    @Autowired
    private EmployeeRepository employeeRepository;
}
