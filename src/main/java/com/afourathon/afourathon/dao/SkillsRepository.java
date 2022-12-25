package com.afourathon.afourathon.dao;

import com.afourathon.afourathon.entities.Skills;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface SkillsRepository extends JpaRepository<Skills, Integer> {

    @Modifying
    @Transactional
    @Query(value = "UPDATE Skills SET skill = ?3, years_of_experience = ?4 ,domain = ?5, skill_level = ?6 WHERE emp_id = ?1 and id = ?2", nativeQuery = true)
    public void updateSkill(int id, int skillId, String skillName, int yoe, String domain, String skillLevel);

    public Skills findById(int id);

    @Transactional
    @Query(value = "select * from skills where skill = LOWER(?1) and emp_id = ?2  LIMIT 1", nativeQuery = true)
    public Skills findByName(String skill, int id);


    @Query(value =  "select * from skills",  nativeQuery = true)
    public List<Skills> getAllSkills();

}