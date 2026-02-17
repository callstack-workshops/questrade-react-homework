import Fab from '@mui/material/Fab';
import Icon from '@mui/material/Icon';

function AddLottery() {
  return (
    <Fab
      variant="extended"
      color="primary"
      aria-label="add lottery"
      sx={{ position: 'fixed', bottom: 24, right: 24 }}
    >
      <Icon sx={{ mr: 1 }}>add</Icon>
      Add Lottery
    </Fab>
  );
}

export default AddLottery;
