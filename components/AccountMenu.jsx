import React, { useState, useRef, useEffect } from 'react';
import {
  Avatar,
  MenuItem,
  ListItemText,
  ListItemIcon,
  Menu,
  IconButton,
} from '@mui/material';
import { MenuBook, Person, Settings } from '@mui/icons-material';

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  function openMenu(e) {
    setAnchorEl(e.currentTarget);
  }
  function closeMenu(e) {
    setAnchorEl(false);
  }
  return (
    <React.Fragment>
      <IconButton onClick={openMenu}>
        <Avatar src="https://static.wikia.nocookie.net/jamescameronsavatar/images/e/e5/Avatar_TWoW_Neytiri_Textless_Poster.jpg/revision/latest?cb=20221125232909" />
      </IconButton>
      <Menu onClose={closeMenu} open={Boolean(anchorEl)} anchorEl={anchorEl}>
        <MenuItem>
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          <ListItemText>Account</ListItemText>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
