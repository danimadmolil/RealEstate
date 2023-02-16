import React from 'react';
import { Stack,Typography, Box, styled } from '@mui/material';
const Logo = styled(Box)(({ theme }) => ({
  width: '50px',
  height: '30px',
  objectSize: 'cover',
}));
export default function Brand() {
  return (
    <Stack direction="row" alignItems="center" sx={{boxSizing:"content-box",width:"140px"}} justifyContent="space-between">
      <Logo
        src="https://cdn-icons-png.flaticon.com/128/821/821560.png"
        component="img"
      />
      <Typography sx={{fontWeight:"bold",mt:0.5}}>RealState</Typography>
    </Stack>
  );
}
