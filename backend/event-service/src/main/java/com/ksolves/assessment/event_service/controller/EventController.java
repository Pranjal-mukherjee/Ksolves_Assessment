package com.ksolves.assessment.event_service.controller;

import com.ksolves.assessment.event_service.entity.Event;
import com.ksolves.assessment.event_service.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/event")
@CrossOrigin(origins = {"*"} , methods = {RequestMethod.GET , RequestMethod.DELETE,RequestMethod.POST,RequestMethod.PATCH,RequestMethod.PUT} , allowedHeaders = "*" , exposedHeaders = "Access-Control-Allow-Origin")
public class EventController {
    @Autowired
    private EventService eventService;
    @PostMapping
    public ResponseEntity<Event> save(@RequestBody Event eventDTO){
        Event eventDTO1 = eventService.createEvent(eventDTO);
        return new ResponseEntity<>(eventDTO1, HttpStatus.CREATED);}
    @GetMapping("/{id}")
    public List<Event> getAll(@PathVariable int id){
        return eventService.getAllByUserId(id);
    }
    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable int id){
        eventService.deleteEvent(id);
    }
}
