package com.example.fullstack_backend.controller;

import com.example.fullstack_backend.Repository.UserRepository;
import com.example.fullstack_backend.exception.UserNotFoundException;
import com.example.fullstack_backend.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")  // Allow requests from React frontend
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user")
    public User newUser(@RequestBody User newUser) {
        return userRepository.save(newUser);  // Save new user to the database
    }

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepository.findAll();  // Fetch all users from the database
    }

    @GetMapping("/user/{id}")
    User getUserById(@PathVariable long id) {
        return userRepository.findById(id).orElseThrow(()->new UserNotFoundException(id));
    }

}
