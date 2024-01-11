import Paper from '@mui/material/Paper';

export const LPaper = ({ children }) => {
  return <><Paper
    sx={{
      p: 2,
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    {children}
  </Paper></>
}
