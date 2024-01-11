/* tslint:disable */
import { useState, MouseEvent, ReactElement } from 'react';
import NextLink from 'next/link';
import MMenu from '@mui/material/Menu';
import MMenuItem from '@mui/material/MenuItem';
import MLink from '@mui/material/Link';

import { MAIN_FONT_CLASSNAME } from '@application/helpers/fonts';

import { IListLink } from '@views/layout/RootLayout/types';

interface ILHeaderTitleMenuProps {
  children: ReactElement | JSX.Element[] | string;
  linkList: IListLink[];
}

export default function LHeaderTitleMenu(props: ILHeaderTitleMenuProps) {
  const { children, linkList } = props;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'header-menu';

  return (
    <>
      <MLink
        aria-controls={open ? menuId : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant="body2"
        sx={{
          color: 'inherit',
          cursor: 'pointer',
          textDecorationColor: 'inherit',
          textDecoration: 'none',
        }}
      >
        {children}
      </MLink>
      <MMenu
        id={menuId}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': menuId,
        }}
        className={MAIN_FONT_CLASSNAME}
      >
        {linkList.map((link, index) => (
          <MMenuItem
            key={index}
            component={NextLink}
            href={link.url}
            onClick={handleClose}
          >
            {link.title}
          </MMenuItem>
        ))}
      </MMenu>
    </>
  );
}
