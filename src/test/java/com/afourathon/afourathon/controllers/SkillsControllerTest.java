package com.afourathon.afourathon.controllers;

import com.afourathon.afourathon.dao.EmployeeRepository;
import com.afourathon.afourathon.dao.SkillsRepository;
import com.afourathon.afourathon.entities.Employee;
import com.afourathon.afourathon.entities.Skills;
import jakarta.annotation.Priority;
import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class SkillsControllerTest {

    @Autowired
    private SkillsRepository skillsRepository;

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private SkillsController skillsController;

    @Autowired
    private EmployeeController employeeController;

    /**
     * Unit test for getSkill api
     */
    @Test
    void getSkills() {
        Skills skills = new Skills(1, "tech", "Java", 3,
                "Basic", 419);

        skillsController.addSkills(419, skills);
        List<Skills> allSkills = skillsController.getSkills();

        Skills result = allSkills.stream()
                .filter(s -> s.getSkill().equals(skills.getSkill())).findAny().get();

        assertEquals(result.getSkill(), skills.getSkill(), "Skill not matched");
        assertEquals(result.getDomain(), skills.getDomain(), "Domain not matched" );
        assertEquals( result.getYearsOfExperience(), skills.getYearsOfExperience(), "years of experience not matched");
    }

    @Test
    void addSkills() {
        Skills skills = new Skills(1, "tech", "Java", 3,
                "Basic", 419);

        ResponseEntity<Skills> response = skillsController.addSkills(419, skills);
        List<Skills> allSkills = skillsController.getSkills();


        Skills result = allSkills.stream()
                .filter(s -> s.getSkill().equals(skills.getSkill())).findAny().get();

        assertTrue(response.getStatusCode().is2xxSuccessful(), "Skill not saved in DB");
        assertEquals(result.getSkill(), skills.getSkill(), "Skill not matched");
        assertEquals(result.getDomain(), skills.getDomain(), "Domain not matched" );
        assertEquals( result.getYearsOfExperience(), skills.getYearsOfExperience(), "years of experience not matched");

    }

    @Test
    void updateASkill() {
        Skills skills = new Skills(1, "tech", "Java", 4,
                "Basic", 419);

        skillsController.updateASkill(419, skills);
        List<Skills> allSkills = skillsController.getSkills();

        Skills result = allSkills.stream()
                .filter(s -> s.getSkill().equals(skills.getSkill())).findAny().get();

        assertEquals(result.getSkill(), skills.getSkill(), "Skill not matched");
        assertEquals(result.getDomain(), skills.getDomain(), "Domain not matched" );
        assertEquals( result.getYearsOfExperience(), skills.getYearsOfExperience(), "years of experience not matched");
    }

    @Test
    void deleteASkill() {
        Employee employee = new Employee(419, "gaurav.gupta@aforutech.com", "Gaurav Gupta", "Resolve", List.of());
        employeeController.addEmployee(employee);
        String skillToDelete = "Test_SKILL_TO_DELTEE";
        Skills skills = new Skills(1, "tech", skillToDelete, 4,
                "Basic", 419);

        ResponseEntity<Skills> response = skillsController.addSkills(419, skills);

        assertTrue(response.getStatusCode().is2xxSuccessful(), "Skill not saved in DB");
        response = skillsController.deleteASkill(419, skillToDelete);

        List<Skills> allSkills = skillsController.getSkills();
        Skills result = allSkills.stream()
                .filter(s -> skillToDelete.equals(s.getSkill())).findAny().orElse(null);
        assertTrue(response.getStatusCode().is2xxSuccessful(), "Skill not deleted from DB");
        assertEquals(result, null, "Skill not deleted from db");
    }
}