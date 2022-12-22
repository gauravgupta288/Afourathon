package com.afourathon.afourathon.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
public class EmployeeSkills {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String domain;

    @Column(name = "skill_level")
    private String skillLevel;

    @Column(name = "years_of_experience")
    private int yearsOfExperience;
}
