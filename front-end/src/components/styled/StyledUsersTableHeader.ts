import { Box, colors } from '@mui/material';
import { styled } from '@mui/system';

const StyledUsersTableHeader = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '20% 66% 14%',
  alignItems: 'center',
  width: '60%',
  minWidth: '700px',
  '& .new-user-button': {
    justifySelf: 'center',
    paddingY: '14px',
  },
  '& .search-input': {
    backgroundColor: colors.grey[300],
    borderColor: colors.grey[400],
  },
  '& .refresh-button': {
    justifySelf: 'center',
    backgroundColor: colors.grey[200],
    color: colors.grey[800],
    border: `1px solid ${colors.grey[400]}`,
    boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.1)',
    ':hover': {
      backgroundColor: colors.grey[300],
      color: colors.grey[900],
    },
  },
});

export default StyledUsersTableHeader;
