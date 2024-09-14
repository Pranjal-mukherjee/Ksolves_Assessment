package com.ksolves.assessment.event_service.service;

import com.ksolves.assessment.event_service.entity.Event;

import java.util.List;

public interface EventService {
    Event createEvent(Event event);
    List<Event> getAllByUserId(int id);
    void deleteEvent(int id);
}
