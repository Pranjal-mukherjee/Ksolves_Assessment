package com.ksolves.assessment.event_service.service.impl;

import com.ksolves.assessment.event_service.entity.Notification;
import com.ksolves.assessment.event_service.repository.NotificationRepository;
import com.ksolves.assessment.event_service.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NotificationServiceImpl implements NotificationService {
    @Autowired
private NotificationRepository notificationRepository;
    @Override
    public Notification createNotification(Notification notification) {
        return notificationRepository.save(notification);
    }

    @Override
    public List<String> getNotificationByUserId(int id) {
        List<String> noti = notificationRepository.findByUserId(id);
        return noti;
    }
}
