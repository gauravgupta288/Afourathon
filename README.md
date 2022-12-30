Skills API :- 
1. Get all skills of any employee using employee id
   -- URI - "/skills/id"
   --Method - Get
   --Response - 200 - List of skills

2. Add a skill of a employee
      -- URI - "localhost:8080/skills/419"
      -- Method - Post
      --Response - 201
      body -
   {
   "skill" : "Java",
   "domain" : "tech",
   "skillLevel" : "Intermideate",
   "yearsOfExperience" : 5,
   "empId" : 419
   }

3. Update a skill :
   URI - "localhost:8080/skills/419"
   Method - Put
   Response - 204 
   Body -
   {
   "skill" : "Java",
   "domain" : "tech",
   "skillLevel" : "Intermideate",
   "yearsOfExperience" : 5,
   "empId" : 419
   }

4. Delete a skill :
   --Method - Delete
   --URI - "localhost:8080/skills/419/java"
   --Body - {}
   --Response - 204
5. 