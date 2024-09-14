package com.ksolves.assessment.event_service.controller;


import com.ksolves.assessment.event_service.entity.User;
import com.ksolves.assessment.event_service.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/user")
@CrossOrigin(origins = {"*"} , methods = {RequestMethod.GET , RequestMethod.DELETE,RequestMethod.POST,RequestMethod.PATCH,RequestMethod.PUT} , allowedHeaders = "*" , exposedHeaders = "Access-Control-Allow-Origin")
public class UserController {
@Autowired
    private UserService userService;
@PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody User userDTO){
    User userDTO1 = userService.saveUser(userDTO);
    return new ResponseEntity<>(userDTO1, HttpStatus.CREATED);}
    @GetMapping
    public List<User> getAll(){
        return userService.getAll();
    }
}
}

