import Typography from '@mui/material/Typography';

export const LH1 = ({ children }) => {
  return <Typography
    component="h1"
    variant="h5"
    color="inherit"
    align="center"
    noWrap
    sx={{ flex: 1, mb: 4 }}
  >
    {children}
  </Typography>
};
