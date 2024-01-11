import NextLink from 'next/link';
import { ReactElement } from 'react';
import MLink from '@mui/material/Link';

import { MAIN_FONT_CLASSNAME } from '@application/helpers/fonts';

interface LHeaderTitleLinkProps {
  children: ReactElement | JSX.Element[] | string;
  href: string;
}

export default function LHeaderTitleLink(props: LHeaderTitleLinkProps) {
  const { href, children } = props;

  return (
    <>
      <MLink
        href={href}
        component={NextLink}

        color="inherit"
        noWrap
        variant="body2"
        sx={{
          p: 1,
          flexShrink: 0,
          textDecoration: 'none',
        }}
        className={MAIN_FONT_CLASSNAME}
      >
        {children}
      </MLink>
    </>
  );
}
