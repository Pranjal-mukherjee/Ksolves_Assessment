package com.ksolves.assessment.event_service.repository;

import com.ksolves.assessment.event_service.entity.Notification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface NotificationRepository  extends JpaRepository<Notification,Integer> {
    @Query(value = "select message from notification where userID:=userid",nativeQuery = true)
    List<String> findByUserId(int userid);
}
