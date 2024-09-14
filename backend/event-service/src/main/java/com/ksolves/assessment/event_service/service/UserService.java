package com.ksolves.assessment.event_service.service;

import com.ksolves.assessment.event_service.entity.User;

import java.util.List;

public interface UserService {
    User saveUser(User userDTO);
    List<User> getAll();
    User getByEmail(String email);
}
