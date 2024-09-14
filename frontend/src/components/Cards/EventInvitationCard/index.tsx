import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import './index.css'; // Custom CSS for additional styling

interface EventCardProps {
  eventName: string;
  senderEmail: string;
  eventDate: string;
  eventTime: string;
}

const EventCard: React.FC<EventCardProps> = ({ eventName, senderEmail, eventDate, eventTime }) => {
  return (
    <Card className="event-card">
      <CardContent>
        {/* Event Name */}
        <Typography variant="h5" component="div" className="event-name">
          {eventName}
        </Typography>

        {/* Sender Email */}
        <Typography color="text.secondary" className="sender-email">
          Sent by: {senderEmail}
        </Typography>

        {/* Date and Time */}
        <Typography color="text.secondary" className="event-date-time">
          Date: {eventDate}, Time: {eventTime}
        </Typography>

        {/* Action Buttons */}
        <Box className="action-buttons" display="flex" justifyContent="flex-end" mt={2}>
          <Button variant="contained" color="primary" className="accept-btn">
            Accept
          </Button>
          <Button variant="outlined" color="secondary" className="decline-btn" style={{ marginLeft: '10px' }}>
            Decline
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default EventCard;
