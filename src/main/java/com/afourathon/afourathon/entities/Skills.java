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

    @ManyToMany(mappedBy = "skills", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<Employee> employees;


    @OneToMany(targetEntity = SkillDetails.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "skillId_fk", referencedColumnName = "id")
    private List<SkillDetails> skillDetails;

}