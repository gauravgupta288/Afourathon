package com.afourathon.dailystatus;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import io.restassured.RestAssured;
import org.hamcrest.MatcherAssert;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Objects;

@SpringBootApplication
public class DailystatusApplication {
	public static void main(String[] args) throws JsonProcessingException {
		SpringApplication.run(DailystatusApplication.class, args);




	}

}
