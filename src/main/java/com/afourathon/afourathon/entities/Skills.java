package com.afourathon.afourathon.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.util.List;
import java.util.Set;
@Entity
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
@Setter
public class Skills {

    @Id
    @NotNull
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @NotBlank(message = "domain is required")
    private String domain;

    @NotBlank(message = "skill is required")
    private String skill;

    @NotNull
    private int yearsOfExperience;

    @NotBlank
    private String skillLevel;

    private int empId;

    public void setSkill(String skill){
        this.skill = skill.toLowerCase();
    }
}