package com.ksolves.assessment.event_service.repository;

import com.ksolves.assessment.event_service.entity.Notification;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NotificationRepository  extends JpaRepository<Notification,Integer> {
    
}
