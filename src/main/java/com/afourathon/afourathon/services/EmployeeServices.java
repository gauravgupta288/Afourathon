package com.afourathon.afourathon.services;

import com.afourathon.afourathon.dao.EmployeeRepository;
import com.afourathon.afourathon.dao.SkillsRepository;
import com.afourathon.afourathon.entities.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class EmployeeServices {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private SkillsRepository skillsRepository;

    public List<Map<String, Object>> getTeamSpecifDetails(String teamName){
        List<Map<String, Object>> map = new ArrayList<>();
        List<Employee> emps = employeeRepository.getTeamSpecificDetails(teamName);

        for(Employee emp : emps){
            Map<String, Object> innerMap = new LinkedHashMap<>();

            innerMap.put("empId", emp.getId());
            innerMap.put("name", emp.getFullName());
            innerMap.put("email", emp.getEmail());
            int skillSize = emp.getSkills().size();
            if(skillSize == 0){
                innerMap.put("years of experience", null);
                innerMap.put("skill", null);
                innerMap.put("skill-level", null);
                innerMap.put("doamin", null);
            }else{
                innerMap.put("skill", emp.getSkills().get(0).getSkill());
                innerMap.put("years of experience", (Object)emp.getSkills().get(0).getYearsOfExperience());
                innerMap.put("skill-level", emp.getSkills().get(0).getSkillLevel());
                innerMap.put("doamin", emp.getSkills().get(0).getDomain());
            }
            map.add(innerMap);
        }
        return map;
    }
}
