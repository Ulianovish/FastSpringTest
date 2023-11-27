package com.fastpizza.config.swagger;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
//import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
//import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
//import springfox.documentation.service.ApiInfo;
//import springfox.documentation.service.ApiKey;
//import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;
//import springfox.documentation.swagger2.annotations.EnableSwagger2WebMvc;
import jakarta.servlet.http.HttpServletRequest;

import java.util.ArrayList;
import java.util.Arrays;


@Configuration
@EnableSwagger2
public class SwaggerConfig {
//    @Override
//    public void addResourceHandlers(ResourceHandlerRegistry registry)
//    {
//        //enabling swagger-ui part for visual documentation
//        registry.addResourceHandler("swagger-ui.html").addResourceLocations("classpath:/META-INF/resources/");
//        registry.addResourceHandler("/webjars/**").addResourceLocations("classpath:/META-INF/resources/webjars/");
//    }

    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(RequestHandlerSelectors.any())
                .paths(PathSelectors.any())
                .build();
//                .apiInfo(apiInfo())
//                .useDefaultResponseMessages(false)
//                .securitySchemes(new ArrayList<>(Arrays.asList(new ApiKey("Bearer %token", "Authorization", "Header"))));

    }

//    private ApiInfo apiInfo() {
//        ApiInfoBuilder apiInfoBuilder = new ApiInfoBuilder();
//        apiInfoBuilder.title("Generic REST API");
//        apiInfoBuilder.description("Simple REST API Generation");
//        apiInfoBuilder.version("0.0.1-SNAPSHOT");
//        apiInfoBuilder.contact(new Contact("Abdelilah Dehaoui", "https://www.linkedin.com/in/abdelilah-dehaoui-4a1a29190", "abdelilah0dehaoui@gmail.com"));
//        return apiInfoBuilder.build();
//    }


}