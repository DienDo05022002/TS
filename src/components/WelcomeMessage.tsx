import { Box } from '@mui/material';
import { useContext } from 'react';
import {AuthContext} from '../context/AuthContext';

interface WelcomeMessageProps {
  position: string;
  country?: string;
}
const WelcomeMessage = ({ position, country = 'USA' }: WelcomeMessageProps) => {
  const {authInfo: {username}} = useContext(AuthContext)
  return (
    <Box mb={1} style={{display: 'flex'}}>
      Welcome <p style={{margin: '0px 2px', padding: '0px 3px', border: '1px solid'}}>{username}</p> - {position} from {country}
    </Box>
  );
};

export default WelcomeMessage;
