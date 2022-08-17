import { Box } from '@mui/material';
import { styled } from '@mui/system';

const StyledApp = styled(Box)({
  padding: '10px 15px',
  '& .title': {
    marginBottom: '20px',
  },
});

export default StyledApp;
