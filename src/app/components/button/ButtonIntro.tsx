import { Box, Button, Center, Text, createStyles } from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom';

interface InPropsStyle {
  children?: string | number;
  width?: string | number;
  maWidth?: string | number;
  height?: string | number;
  maHeight?: string | number;
  justify?: string | number;
  shadow?: number;
  isShadow?: boolean;
  fz?: string | number;
  fw?: string | number;
  color?: string | number;
}
export const ButtonIntro = ({
  width,
  maWidth,
  height,
  shadow,
  isShadow,
  children,
  justify,
  maHeight,
  fz,
  fw,
  color,
}: InPropsStyle) => {
  const { classes: c } = createStyleProps({
    width,
    height,
    shadow,
    justify,
    isShadow,
  });
  const navButton = () => {
    // nav('https://www.bukbe.me');
  };
  return (
    <a
      target="_self"
      href={'https://brand.bukbe.me/brand'}
      style={{ textDecoration: 'none', listStyleType: 'none', width: '100%' }}
    >
      <Box onClick={() => navButton()} className={c.centerBox}>
        <Button className={c.buttonConfig}>
          <Text className={c.text}>{children}</Text>
        </Button>
      </Box>
    </a>
  );
};
const createStyleProps = createStyles((theme, params: InPropsStyle) => ({
  centerBox: {
    width: '100%',
    display: 'flex',
    justifyContent: `${params.justify}`,
    alignItems: 'center',
    '.mantine-td7nd9:hover': {
      background: 'var(--primary-after-1)',
      transition: 'all .4s linear',
      transform: 'translateY(1px) ',
      boxShadow: 'var(--shadow2)',
    },
    '.mantine-td7nd9': {
      background: 'var(--primary-1)',
      boxShadow: params.isShadow
        ? params.shadow == 1
          ? 'var(--shadow2)'
          : 'var(--shadow)'
        : '',

      '& :hover': {
        background: 'var(--primary-after-1)',
        borderRadius: '50px',
        padding: '0px',
        margin: '0px',
      },
      '& :active': {
        background: 'var(--primary-after-1)',
      },
    },
  },
  text: {
    fontWeight: 800,
    fontSize: '20px',
    color: '#FFFFFF',
  },
  buttonConfig: {
    width: '100%',
    maxWidth: params.width,
    height: params.height,
    background: 'var(--primary-1)',
    margin: '10px',
    borderRadius: '16px',
  },
}));
