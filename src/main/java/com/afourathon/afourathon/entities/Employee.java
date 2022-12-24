package com.afourathon.afourathon.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.math.BigInteger;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "employee")
public class Employee {

    @Id
    @NotNull(message = "Employee Id is required")
    @Column(name = "id")
    private int id;

    @Column(name = "email")
    private String email;

    @NotBlank(message = "Name is required")
    @Column(name = "fullName")
    private String fullName;

    @NotBlank
    private String team;

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinTable(name = "EMPLOYEE_SKILLS",
            joinColumns = {
            @JoinColumn(name = "empId", referencedColumnName = "id")
            },
            inverseJoinColumns = {
            @JoinColumn(name = "skillId", referencedColumnName = "id")
            }
    )
    private List<Skills> skills;
}