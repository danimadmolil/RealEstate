import React, { useState, useEffect, useRef } from 'react';
import { Grid, styled, Typography, Stack, Box } from '@mui/material';
import Brand from '../common/Brand';
import AccountMenu from "../components/AccountMenu";

const menus = [
  { title: 'Search' },
  { title: 'About' },
  { title: 'Help' },
  { title: 'Real Estate Agents' },
  { title: 'Blog' },
];
const Item = styled(Box)(({ theme }) => ({
  ':hover': {
    color: 'blue',
    cursor: 'pointer',
  },
  textAlign: 'start',
  fontWeight: 'bold',
  color: 'gray',
  marginRight: '24px',
}));
export default function Header(props) {
  return (
    <Grid container alignItems="center" sx={{ padding: '12px 24px' }}>
      <Brand />
      <Navbar menus={menus} />
      <AccountMenu/>
    </Grid>
  );
}

function Navbar({ menus = [] }) {
  return (
    <Stack direction="row" sx={{ marginLeft: '25px' }}>
      {menus.map((menu) => {
        return <MenuItem menu={menu} />;
      })}
    </Stack>
  );
}
function MenuItem({ menu }) {
  const [showUnderLine, setShowUnderLine] = useState(false);
  function handleMouseOver() {
    setShowUnderLine(true);
  }
  function handleMouseLeave() {
    setShowUnderLine(false);
  }
  return (
    <Stack
      sx={{ mt: '12px' }}
      onMouseLeave={handleMouseLeave}
      onMouseOver={handleMouseOver}
    >
      <Item>{menu?.title}</Item>
      <div
        style={{
          paddingTop: '4px',
          transition: 'all 0.2s ease-in-out',
          width: showUnderLine ? 'calc(100% - 24px)' : '0%',
          height: '1px',
          backgroundColor: 'blue',
        }}
      ></div>
      
    </Stack>
  );
}
