package com.afourathon.afourathon.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "employee")
public class Employee {

    @Id
    @NotBlank(message = "Employee Id is must")
    @Column(name = "id")
    private int id;

    @Email(regexp = "^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\\\.[A-Z]{2,6}$")
    @Column(name = "email")
    private String email;

    @NotBlank(message = "Name must not be blank")
    @Column(name = "fullName")
    private String fullName;

    @NotBlank(message = "Password must not be blank")
    @Column(name = "password")
    private String password;

    @NotBlank(message = "City not be blank")
    @Column(name = "city")
    private String city;

    @Size(min = 10, max = 10, message = "Mobile number must be in 10 digits only")
    @NotBlank(message = "Mobile number must not be blank")
    @Column(name = "mobile")
    private long mobile;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "emp_id_fk", referencedColumnName = "id")
    private List<EmployeeSkills> employeeSkills;
}