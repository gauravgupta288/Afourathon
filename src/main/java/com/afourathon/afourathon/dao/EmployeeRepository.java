package com.afourathon.afourathon.dao;

import com.afourathon.afourathon.entities.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
    public Employee findById(int id);

    @Modifying
    @Transactional
    @Query(value = "UPDATE Employee SET full_name = ?1, email = ?2, address = ?3, mobile = ?4 WHERE employee_id = ?5", nativeQuery = true)
    public void updateEmployeeInfo(String name, String email, String address, long mobile, int empId);

}
