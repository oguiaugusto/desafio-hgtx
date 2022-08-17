import { styled } from '@mui/system';

const modalBoxStyle = {
  position: 'absolute',
  top: '45%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '650px',
  height: '500px',
  bgcolor: 'background.paper',
  boxShadow: 10,
  p: 3,
  px: 4,
  display: 'flex',
  flexDirection: 'column',
};

const StyledInformationsTab = styled('div')({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '& .fields': {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateAreas: '"name name" "email email" "password confirmPassword"',
    gridTemplateRows: 'repeat(3, 1fr)',
    alignItems: 'center',
    gap: 20,
    marginTop: 20,
  },
  '& .buttons': {
    display: 'flex',
    gap: 20,
    alignSelf: 'flex-end',
  },
});

export { modalBoxStyle, StyledInformationsTab };
