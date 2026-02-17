import { Snackbar } from '@mui/material';
import { useState } from 'react';
import './App.css';
import AddLotteryButton from './components/append/AddLotteryButton';
import AddLotteryModal from './components/append/AddLotteryModal';

function App() {
  const [open, setOpen] = useState(false);
  const [notification, setNotification] = useState(false);

  return (
    <>
      <AddLotteryModal
        open={open}
        onClose={() => setOpen(false)}
        onAdd={() => setNotification(true)}
      />
      <AddLotteryButton onClick={() => setOpen(true)} />
      <Snackbar
        open={notification}
        autoHideDuration={3000}
        onClose={() => setNotification(false)}
        message="New lottery created"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      />
    </>
  );
}

export default App;
