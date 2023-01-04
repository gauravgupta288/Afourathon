package com.afourathon.afourathon.controllers;

import com.afourathon.afourathon.dao.EmployeeRepository;
import com.afourathon.afourathon.dao.SkillsRepository;
import com.afourathon.afourathon.entities.Skills;
import com.afourathon.afourathon.services.SkillsServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/skills")
public class SkillsController {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private SkillsRepository skillsRepository;

    @Autowired
    private SkillsServices skillsServices;

    /**
     * Get all skills with employee details present on Database
     *
     * @return
     */
    @GetMapping
    public List<Skills> getSkills() {
        return skillsRepository.findAll();
    }

    /**
     * Add new skill with employee data
     *
     * @return Skills object
     */
    @PostMapping("/{id}")
    public ResponseEntity<Skills> addSkills(@PathVariable int id, @RequestBody Skills skill) {
        Skills skillResult = skillsServices.getSkillIdBySkillName(skill.getSkill(), id);

        if (skillResult == null) {
            skillsRepository.save(skill);
        } else {
            updateASkill(id, skill);
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(skill);
    }

    /**
     * Update a skill based on skill name
     *
     * @param empId      employee id
     * @param skillsJson json of skill data to update
     * @return
     */
    @PutMapping("/{empId}")
    public ResponseEntity<Skills> updateASkill(@PathVariable int empId, @RequestBody Skills skillsJson) {
        Skills skill = skillsServices.getSkillIdBySkillName(skillsJson.getSkill(), empId);
        if (skill == null) {
            skillsRepository.save(skillsJson);
            return ResponseEntity.status(HttpStatus.CREATED).build();
        }
        skillsJson.setId(skill.getId());
        Skills updatedSkill = skillsServices.updateSkill(empId, skillsJson);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(updatedSkill);
    }

    /**
     * Delete a skill based on name
     *
     * @param id   skill id
     * @param name skill name to delete
     * @return
     */
    @DeleteMapping("/{id}/{name}")
    public ResponseEntity<Skills> deleteASkill(@PathVariable int id, @PathVariable String name) {
        Skills skill = skillsServices.getSkillIdBySkillName(name, id);
        if (skill == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        skillsRepository.deleteById(skill.getId());
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    /**
     * Get all skills based on domain
     *
     * @return
     */
    @GetMapping("/domain/{domain}")
    public List<String> getSkills(@PathVariable String domain) {
        return skillsRepository.getSkillsOnDomain(domain);
    }
}
