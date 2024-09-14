import React, { useState } from 'react';
import { AppBar, Tabs, Tab, Toolbar, Typography, IconButton, Box, Container, Button, styled } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import './index.css'; // Custom CSS for styling
import EventRegistrationForm from '../../Cards/EventForm';
import NotificationModal from '../../Cards/NotificationCard';

const HomePage: React.FC = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);
const [open,setOpen] = useState<boolean>(false);
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  return (
    <Box className="home-page">
      {/* Header */}
      <AppBar position="static" className="header-bar">
        <Toolbar className="header-toolbar">
          <IconButton edge="start" color="inherit" aria-label="home">
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" className="page-title">
            Home
          </Typography>
          <Box className="header-icons">
            <IconButton color="inherit" onClick={()=>setOpen(true)}>
              <NotificationsIcon />
            </IconButton>
            <IconButton color="inherit">
              <LogoutIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
{open && <NotificationModal isOpen={open} handleClose={()=>setOpen(false)} notifications={["fkjankfj","dlbs","dkdbkdb"]}/>}
      {/* Body with Tabs */}
      <Container maxWidth="md" className="tab-container">
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          indicatorColor="secondary"
          textColor="inherit"
          className="custom-tabs"
          centered
        >
          <Tab label="Scheduled Events" className="custom-tab" />
          <Tab label="My Events" className="custom-tab" />
        </Tabs>

        {/* Tab Content */}
        <Box className="tab-content">
          {tabIndex === 0 && <Typography>Scheduled Events Content</Typography>}
          {tabIndex === 1 && <EventRegistrationForm/>}
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
