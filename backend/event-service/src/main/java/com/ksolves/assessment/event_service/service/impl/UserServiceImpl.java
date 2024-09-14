package com.ksolves.assessment.event_service.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ksolves.assessment.event_service.entity.User;
import com.ksolves.assessment.event_service.repository.UserRepository;
import com.ksolves.assessment.event_service.service.UserService;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;


    @Override
    public User saveUser(User userDTO) {
        return userRepository.save(userDTO);
    }


    @Override
    public List<User> getAll() {
       return userRepository.findAll();
    }

    @Override
    public User getByEmail(String email) {
        return userRepository.findByEmail(email).get();
    }
}

