package com.ksolves.assessment.event_service.controller;

import com.ksolves.assessment.event_service.entity.Notification;
import com.ksolves.assessment.event_service.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/notification")
@CrossOrigin(origins = {"*"} , methods = {RequestMethod.GET , RequestMethod.DELETE,RequestMethod.POST,RequestMethod.PATCH,RequestMethod.PUT} , allowedHeaders = "*" , exposedHeaders = "Access-Control-Allow-Origin")
public class NotificationController {
    @Autowired
    private NotificationService notificationService;
    @PostMapping
    public ResponseEntity<Notification> save(@RequestBody Notification NotificationDTO){
        Notification notificationDTO1 = notificationService.createNotification(NotificationDTO);
        return new ResponseEntity<>(notificationDTO1, HttpStatus.CREATED);}
    @GetMapping("/{id}")
    public List<String> getAll(@PathVariable int id){
        return notificationService.getNotificationByUserId(id);
    }
}