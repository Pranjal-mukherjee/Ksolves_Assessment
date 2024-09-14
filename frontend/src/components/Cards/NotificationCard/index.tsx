import React, { useState } from 'react';
import { Modal, Box, Typography, Card, CardContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './index.css'; // Custom CSS for additional styling

interface NotificationModalProps {
  notifications: string[];
  isOpen: boolean;
  handleClose?: ()=>void;
}

const NotificationModal: React.FC<NotificationModalProps> = ({ notifications , isOpen , handleClose}) => {


  return (
    <>


      {/* Modal Component */}
      <Modal open={isOpen} onClose={handleClose} className="notification-modal">
        <Box className="modal-box">
          {/* Close Icon at Top Right */}
          <IconButton className="close-icon" onClick={handleClose}>
            <CloseIcon />
          </IconButton>

          {/* Header */}
          <Typography variant="h5" className="modal-header">
            Notification
          </Typography>

          {/* Notifications List */}
          <Box className="notification-list" display="flex" flexDirection="column" gap={2} mt={2}>
            {notifications.length > 0 ? (
              notifications.map((notification, index) => (
                <Card key={index} className="notification-card">
                  <CardContent>
                    <Typography>{notification}</Typography>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Typography color="text.secondary">No notifications available.</Typography>
            )}
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default NotificationModal;
