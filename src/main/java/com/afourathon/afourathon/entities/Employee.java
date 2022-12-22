package com.afourathon.afourathon.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
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
    @NotBlank
    @Column(name = "employeeId")
    private int employeeId;

    @Column(name = "email")
    private String email;

    @Column(name = "fullName")
    private String fullName;

    @Column(name = "city")
    private String city;

    @Column(name = "mobile")
    private long mobile;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "emp_id_fk", referencedColumnName = "employeeId")
    private List<EmployeeSkills> employeeSkills;

}