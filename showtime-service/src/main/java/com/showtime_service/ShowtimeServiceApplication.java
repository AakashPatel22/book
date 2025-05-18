package com.showtime_service;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
@EnableFeignClients
public class ShowtimeServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ShowtimeServiceApplication.class, args);
	}

}
