package com.afourathon.afourathon.services;

import com.afourathon.afourathon.dao.SkillsRepository;
import com.afourathon.afourathon.entities.Skills;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SkillsServices {

    @Autowired
    private SkillsRepository skillsRepository;

    public Skills getSkillIdBySkillName(String skillName, int id) {
        return skillsRepository.findByName(skillName, id);
    }

    /**
     * Get skill id from skill table
     * @param skill skill name
     * @return skill id
     */
    public int getSkillId(String skill){
        List<Skills> skills = skillsRepository.getAllSkills();

        Optional<Skills> result = skills.stream().filter(s -> s.getSkill().equals(skill)).findAny();
        if(result.isEmpty()){
            return -1;
        }
        return result.get().getId();
    }

    public Skills updateSkill(int empId, Skills skillsJson){
        skillsRepository.updateSkill(empId, skillsJson.getId(), skillsJson.getSkill(),skillsJson.getYearsOfExperience(),
                skillsJson.getDomain(), skillsJson.getSkillLevel());

        return skillsJson;
    }
}
