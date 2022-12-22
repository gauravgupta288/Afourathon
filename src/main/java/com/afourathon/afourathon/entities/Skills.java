package com.afourathon.afourathon.entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Data
public class Skills {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String domain;

    private String skill;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "skill_id_fk", referencedColumnName = "id")
    private List<EmployeeSkills> employeeSkills;


}