package com.ksolves.assessment.event_service.service.impl;

import com.ksolves.assessment.event_service.entity.Event;
import com.ksolves.assessment.event_service.repository.EventRepository;
import com.ksolves.assessment.event_service.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventServiceImpl implements EventService {
    @Autowired
    private EventRepository eventRepository;
    @Override
    public Event createEvent(Event event) {
        return eventRepository.save(event);
    }

    @Override
    public List<Event> getAllByUserId(int id) {
        return eventRepository.findByUserId(id);
    }

    @Override
    public void deleteEvent(int id) {
         eventRepository.deleteById(id);
    }
}
