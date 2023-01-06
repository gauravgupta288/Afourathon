package com.afourathon.dailystatus.entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
public class Teams {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String teamName;

    private Date startDate;

    private Date endDate;

    private String teamLeadName;

    private String teamLeadEmail;

    private List<String> listOfEmails;

    @OneToMany(targetEntity = Tickets.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "ticketId", referencedColumnName = "id")
    private List<Tickets> tickets;
}
