package com.ksolves.assessment.event_service.repository;

import com.ksolves.assessment.event_service.entity.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EventRepository extends JpaRepository<Event,Integer> {
    @Query(value = "select * from event where userID:=userid",nativeQuery = true)
    List<Event> findByUserId(int userid);

}
