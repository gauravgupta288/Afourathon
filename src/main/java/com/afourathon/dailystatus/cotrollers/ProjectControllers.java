package com.afourathon.dailystatus.cotrollers;

import com.afourathon.dailystatus.dao.ProjectRepository;
import com.afourathon.dailystatus.dao.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/projects")
@CrossOrigin(origins = "*")
public class ProjectControllers {

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private TeamRepository teamRepository;

}
