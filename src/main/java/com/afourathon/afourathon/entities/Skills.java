package com.afourathon.afourathon.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
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
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @NotBlank(message = "domain is required")
    private String domain;

    @NotBlank(message = "skill is required")
    private String skill;

    @OneToMany(mappedBy = "skill_id_fk", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<SkillDetails> skillDetails;
}