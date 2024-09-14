package com.ksolves.assessment.event_service.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "rsvp")
public class RSVP {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String receiverEmail;
    private Status status;
    private enum Status {
        ACCEPT,
        DENY
    }
}
