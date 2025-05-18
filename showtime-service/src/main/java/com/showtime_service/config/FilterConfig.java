package com.showtime_service.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FilterConfig {

    @Autowired
    private JwtValidationFilter jwtValidationFilter;
    
    @Bean
    public FilterRegistrationBean<JwtValidationFilter> jwtFilterRegistration() {
        FilterRegistrationBean<JwtValidationFilter> registrationBean = new FilterRegistrationBean<>();
        registrationBean.setFilter(jwtValidationFilter);
        registrationBean.addUrlPatterns("/api/movies/admin/*"); // Only apply to admin endpoints
        registrationBean.setOrder(1); // Set order of execution
        return registrationBean;
    }
}