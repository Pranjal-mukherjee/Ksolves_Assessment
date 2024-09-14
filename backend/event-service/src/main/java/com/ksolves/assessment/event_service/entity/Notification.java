package com.ksolves.assessment.event_service.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "notification")
public class Notification {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;
    private int message;
}
