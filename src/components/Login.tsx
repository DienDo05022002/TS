import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
} from '@mui/material';
import React, { ChangeEvent, useState, useContext, Dispatch, SetStateAction } from 'react';
import { AuthContext } from '../context/AuthContext';

interface LoginProps {
    isOpen: boolean
    handleClose: Dispatch<SetStateAction<boolean>>
}
const Login = ({isOpen, handleClose}: LoginProps) => {
  const { toggleAuth } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const onChangeUser = (e: ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);

  const onLogin = () => {
    toggleAuth(username);
    setUsername('');
    handleClose(false)
  };

  return (
    <Dialog open={isOpen} onClose={handleClose.bind(this, false)}>
      <DialogContent>
        <TextField label="username" value={username} onChange={onChangeUser} />
      </DialogContent>
      <DialogActions>
        <Button
          color="primary"
          variant="contained"
          onClick={onLogin}
          disabled={username === ''}
        >
          Login
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Login;
