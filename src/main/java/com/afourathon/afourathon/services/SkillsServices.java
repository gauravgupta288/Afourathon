package com.afourathon.afourathon.services;

import com.afourathon.afourathon.dao.SkillsRepository;
import com.afourathon.afourathon.entities.Skills;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SkillsServices {

    @Autowired
    private SkillsRepository skillsRepository;

    public Skills getSkillIdBySkillName(String skillName, int empId) {
        List<Skills> skillDbData = skillsRepository.findAll();

//        Optional<Skills> result = skillDbData.stream().filter(skill ->
//                skillName.equals(skill.getSkill()) && empId == skill.getEmp_id()).findFirst();

//        if(result.isEmpty()){
//            return null;
//        }
        return null;
    }
}
