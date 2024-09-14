package com.ksolves.assessment.event_service.service;

import com.ksolves.assessment.event_service.entity.Notification;

import java.util.List;

public interface NotificationService {
    Notification createNotification(Notification notification);
    List<String> getNotificationByUserId(int id);
}
