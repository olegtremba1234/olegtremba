import Button from '@mui/material/Button';

export const OutlinedButton = (name, styles) => {
  return (
    <Button
      variant="outlined"
      sx={styles}
      type='submit'
    >
      {name}
    </Button>

  )
}