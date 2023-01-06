package com.afourathon.dailystatus.entities;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.Table;

import java.util.Date;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
public class Project {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String projectName;

    private Date startDate;

    private Date endDate;

    private String managerName;

    private String managerEmail;

    private List<String> listOfEmails;

    @OneToMany(targetEntity = Teams.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "teamId", referencedColumnName = "id")
    private List<Teams> teams;
}
