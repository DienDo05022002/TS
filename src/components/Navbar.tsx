import React, { useEffect, useState, ChangeEvent, useContext } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  FormControl,
  Select,
  MenuItem,
  Chip,
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import WelcomeMessage from './WelcomeMessage';
import { ProgressContext } from '../context/ProgressProvider';
import { ThemeContext } from '../context/ThemeProvider';
import Login from './Login';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  //Context
  const { lastTime, status } = useContext(ProgressContext);
  const { theme } = useContext(ThemeContext);
  const {
    authInfo: { isAuthenticated },
    toggleAuth,
  } = useContext(AuthContext);
  // console.log({theme})
  const [position, setPosition] = useState<string>('Full-stack');
  const [time, setTime] = useState(() => new Date());
  const [loginOpen, setloginOpen] = useState(false);
  // console.log(time);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const onChangePosition = (event: SelectChangeEvent<unknown>) =>
    setPosition(event.target.value as string);
  // console.log(position);

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        ></IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
        <Box textAlign="center">
          <WelcomeMessage position={position} />
          <Chip
            label={`Last time working on this project: ${lastTime} - Status: ${status}`}
          />
          <Box mt={1}>
            <FormControl>
              <Select value={position} onChange={onChangePosition}>
                <MenuItem value="Full-stack">Full-stack</MenuItem>
                <MenuItem value="Front-end">Front-end</MenuItem>
                <MenuItem value="Back-end">Back-end</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box textAlign="center">
          <Box my={1}>
            <Typography variant="h6">{time.toUTCString()}</Typography>
          </Box>
          <Button
            variant="contained"
            onClick={isAuthenticated ? toggleAuth.bind(this, '') : setloginOpen.bind(this, true)}
            style={{ background: 'white', color: 'black' }}
          >
            {isAuthenticated ? 'Logout' : 'Login'}
          </Button>

          <Login isOpen={loginOpen} handleClose={setloginOpen} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
