package com.afourathon.afourathon.controllers;

import com.afourathon.afourathon.dao.EmployeeRepository;
import com.afourathon.afourathon.dao.SkillsRepository;
import com.afourathon.afourathon.entities.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private SkillsRepository skillsRepository;

    @GetMapping
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    /**
     * Get a single employee details
     *
     * @param id
     * @return
     */
    @GetMapping("/{id}")
    public ResponseEntity<Employee> getASkill(@PathVariable("id") int id) {
        Employee emp = employeeRepository.findById(id);
        if (emp == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.status(HttpStatus.OK).body(emp);
    }

    @PutMapping("/{id}")
    public ResponseEntity updateEmployee(@RequestBody Employee emp) {
        try {
            Employee employee = employeeRepository.findById(emp.getId());
            if (employee == null) {
                employeeRepository.save(emp);
            } else {
                employeeRepository.updateEmployeeInfo(emp.getFullName(), emp.getEmail(),
                        emp.getCity(), emp.getMobile(), emp.getId());
            }
            return ResponseEntity.status(HttpStatus.CREATED).build();
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping
    public ResponseEntity addEmployee(@RequestBody Employee emp) {
        try {
            employeeRepository.save(emp);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }
}