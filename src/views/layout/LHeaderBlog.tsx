import Toolbar from '@mui/material/Toolbar';
import { Roboto } from 'next/font/google';
import NextLink from 'next/link';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import MLink from '@mui/material/Link';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin', 'cyrillic'],
  variable: '--font-roboto',
  display: 'swap',
})

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}

export default function LHeaderBlog(props: HeaderProps) {
  const { sections, title } = props;

  return (
    <>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
        {/*<Button size="small">Subscribe</Button>*/}

        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
          className={roboto.className}
        >
          {title}
        </Typography>

        {/*<IconButton>*/}
        {/*  <SearchIcon />*/}
        {/*</IconButton>*/}

        {/*<Button variant="outlined" size="small">*/}
        {/*  Sign up*/}
        {/*</Button>*/}
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto', width: '100%' }}
      >
        {sections.map((section) => (
          <MLink
            key={section.url}
            href={section.url}
            component={NextLink}

            color="inherit"
            noWrap
            variant="body2"
            sx={{ p: 1, flexShrink: 0 }}
            className={roboto.className}
          >
            {section.title}
          </MLink>
          ))}
      </Toolbar>
    </>
  );
}
