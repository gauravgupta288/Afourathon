package com.afourathon.afourathon.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
public class SkillDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @NotBlank(message = "Skill level is required")
    @Column(name = "skill_level")
    private String skillLevel;

    @NotBlank(message = "Years of experience is required")
    @Column(name = "years_of_experience")
    private double yearsOfExperience;

    @ManyToMany(mappedBy = "skillDetails", fetch = FetchType.LAZY)
    private Set<Employee> employees;

    private int skill_id_fk;
}
