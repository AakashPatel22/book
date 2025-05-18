package com.booking_service.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import feign.RequestInterceptor;
import jakarta.servlet.http.HttpServletRequest;
import java.util.Enumeration;

@Configuration
public class FeignClientConfig {

    @Bean
    public RequestInterceptor requestInterceptor() {
        return requestTemplate -> {
            ServletRequestAttributes requestAttributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
            if (requestAttributes != null) {
                HttpServletRequest request = requestAttributes.getRequest();
                
                // Forward Authorization header
                String authHeader = request.getHeader("Authorization");
                if (authHeader != null) {
                    requestTemplate.header("Authorization", authHeader);
                }
                
                // Forward user role and ID headers
                String userRoleHeader = request.getHeader("X-User-Role");
                if (userRoleHeader != null) {
                    requestTemplate.header("X-User-Role", userRoleHeader);
                }
                
                String userIdHeader = request.getHeader("X-User-Id");
                if (userIdHeader != null) {
                    requestTemplate.header("X-User-Id", userIdHeader);
                }
                
                // You can add more headers that need to be forwarded if necessary
            }
        };
    }
}