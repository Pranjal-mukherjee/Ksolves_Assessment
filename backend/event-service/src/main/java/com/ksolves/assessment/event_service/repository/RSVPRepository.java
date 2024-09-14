package com.ksolves.assessment.event_service.repository;

import com.ksolves.assessment.event_service.entity.RSVP;
import com.ksolves.assessment.event_service.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RSVPRepository extends JpaRepository<RSVP,Integer> {

}