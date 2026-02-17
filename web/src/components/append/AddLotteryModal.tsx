import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  name: yup
    .string()
    .required('Lottery Name is required')
    .min(4, 'Lottery Name must be at least 4 characters'),
  prize: yup
    .number()
    .typeError('Lottery Prize must be a number')
    .required('Lottery Prize is required')
    .min(1, 'Lottery Prize must be at least 1'),
});

interface AddLotteryModalProps {
  open: boolean;
  onClose: () => void;
  onAdd: () => void | Promise<void>;
}

function AddLotteryModal({ open, onClose, onAdd }: AddLotteryModalProps) {
  const formik = useFormik({
    initialValues: { name: '', prize: '' },
    validationSchema,
    onSubmit: async () => await handleSubmit(),
  });

  const handleSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await onAdd();
    onClose();
    formik.resetForm();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          color: 'white',
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <Typography variant="h6">Add a new lottery</Typography>
        <TextField
          label="Lottery Name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && !!formik.errors.name}
          helperText={formik.touched.name && formik.errors.name}
          fullWidth
          sx={{
            input: { color: 'white' },
            label: { color: 'white' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'white' },
              '&:hover fieldset': { borderColor: 'white' },
            },
            '& .MuiFormHelperText-root': { color: 'white' },
          }}
        />
        <TextField
          label="Lottery Prize"
          name="prize"
          value={formik.values.prize}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.prize && !!formik.errors.prize}
          helperText={formik.touched.prize && formik.errors.prize}
          fullWidth
          sx={{
            input: { color: 'white' },
            label: { color: 'white' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'white' },
              '&:hover fieldset': { borderColor: 'white' },
            },
            '& .MuiFormHelperText-root': { color: 'white' },
          }}
        />
        <Button
          variant="contained"
          type="submit"
          loading={formik.isSubmitting}
          sx={{ '& .MuiCircularProgress-root': { color: 'white' } }}
        >
          Add
        </Button>
      </Box>
    </Modal>
  );
}

export default AddLotteryModal;
