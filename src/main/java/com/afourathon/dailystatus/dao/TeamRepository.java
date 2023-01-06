package com.afourathon.dailystatus.dao;

import com.afourathon.dailystatus.cotrollers.TeamsController;
import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

public interface TeamRepository extends CrudRepository<TeamsController, Integer> {

}
