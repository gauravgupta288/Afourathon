package com.afourathon.dailystatus.dao;

import com.afourathon.dailystatus.cotrollers.ProjectControllers;
import org.springframework.data.repository.CrudRepository;

public interface ProjectRepository extends CrudRepository<ProjectControllers, Integer> {
}
