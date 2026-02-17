import Fab from '@mui/material/Fab';
import Icon from '@mui/material/Icon';

interface AddLotteryButtonProps {
  onClick: () => void;
}

function AddLotteryButton({ onClick }: AddLotteryButtonProps) {
  return (
    <Fab
      variant="extended"
      color="primary"
      aria-label="add lottery"
      onClick={onClick}
      sx={{ position: 'fixed', bottom: 24, right: 24 }}
    >
      <Icon sx={{ mr: 1 }}>add</Icon>
      Add Lottery
    </Fab>
  );
}

export default AddLotteryButton;
