import NextLink from 'next/link';
import { useRouter } from 'next/router';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MLink from '@mui/material/Link';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { MAIN_FONT_CLASSNAME } from '@application/helpers/fonts';
import { LOCALES } from '@shared/lib/types/common';
import LHeaderTitleLink from './LHeaderTitleLink';
import LHeaderTitleMenu from './LHeaderTitleMenu';
import { IHeaderLinkButton } from '../types';

interface HeaderProps {
  linkButtons: IHeaderLinkButton[];
  title: string;
}

export default function LHeaderTitle(props: HeaderProps) {
  const router = useRouter();
  const { linkButtons, title } = props;

  const indexURL = router.locale === LOCALES.EN
    ? ``
    : `/${router.locale}`;

  return (
    <>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
          className={MAIN_FONT_CLASSNAME}
        >
          <MLink
            href={indexURL}
            component={NextLink}

            color="inherit"
            noWrap
            sx={{ p: 1, flexShrink: 0, textDecoration: 'none' }}
          >
            {title}
          </MLink>
        </Typography>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto', width: '100%' }}
      >
        {linkButtons.map((linkButton) => (
          linkButton.url
            ? <LHeaderTitleLink
              key={linkButton.url}
              href={linkButton.url}
            >
              {linkButton.title}
            </LHeaderTitleLink>
            : <LHeaderTitleMenu
              // @ts-ignore - Type 'IListLink[] | undefined' is not assignable to type 'IListLink[]'
              linkList={linkButton.linkList}
              key={linkButton.title}
            >
              {linkButton.title}
              <KeyboardArrowDownIcon sx={{ verticalAlign: 'middle' }} />
            </LHeaderTitleMenu>
        ))}
      </Toolbar>
    </>
  );
}
