package com.itv.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class TestController {

    @GetMapping("/api/test")
    public String testApi() {
        return "Backend is running";
    }
}
