import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import MButton from '@mui/material/Button';

export default function LHeader() {
  return <AppBar
    position="static"
    color="default"
    elevation={0}
    sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
  >
    <Toolbar sx={{ flexWrap: 'wrap' }}>
      <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
        Listing.Investments
      </Typography>

      {/*<nav>*/}
      {/*  <Link*/}
      {/*    variant="button"*/}
      {/*    color="text.primary"*/}
      {/*    href="#"*/}
      {/*    sx={{ my: 1, mx: 1.5 }}*/}
      {/*  >*/}
      {/*    Features*/}
      {/*  </Link>*/}
      {/*  <Link*/}
      {/*    variant="button"*/}
      {/*    color="text.primary"*/}
      {/*    href="#"*/}
      {/*    sx={{ my: 1, mx: 1.5 }}*/}
      {/*  >*/}
      {/*    Enterprise*/}
      {/*  </Link>*/}
      {/*  <Link*/}
      {/*    variant="button"*/}
      {/*    color="text.primary"*/}
      {/*    href="#"*/}
      {/*    sx={{ my: 1, mx: 1.5 }}*/}
      {/*  >*/}
      {/*    Support*/}
      {/*  </Link>*/}
      {/*</nav>*/}

      {/*<MButton href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>*/}
      {/*  Login*/}
      {/*</MButton>*/}
    </Toolbar>
  </AppBar>
}
