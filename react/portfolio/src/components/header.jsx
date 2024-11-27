import React, { useState } from 'react';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import { useNavigate } from 'react-router-dom';
import '../index.css';

function Header() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: '100px', 
        backgroundImage: `url(https://legonerd34.github.io/Portfolio/motherboard%20GREY.png)`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2, 
        color: '#fff', 
        textAlign: 'center',
        marginBottom: '100px',
      }}
    >
      <Typography level="h1" sx={{ fontSize: '2rem', fontWeight: 'bold' , color: "White"}}>
        My Portfolio
      </Typography>
      <Typography level="body-md" sx={{ marginBottom: 2 , color: "White"}}>
        Explore my projects
      </Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        
        <Button variant="soft" color="primary" onClick={() => navigate('/')}>
        Home
        </Button>
        <Button variant="solid" color="neutral" onClick={() => navigate('/python')}>
        Flappy Brid   
        </Button>
        <Button variant="solid" color="neutral" onClick={() => navigate('/web')}>
        Web Design
        </Button>
        <Button variant="solid" color="neutral" onClick={() => navigate('/weather')}>
        Weather App
        </Button>
        <Button variant="solid" color="neutral" onClick={() => navigate('/recipe')}>
        Recipe Finder
        </Button>
        <Button variant="solid" color="neutral" onClick={() => navigate('/calc')}>
        Calculator
        </Button>
      
      </Box>
    </Box>
  );
}

export default Header;
