import { Box, Center, Stack, createStyles } from '@mantine/core';
import { images } from 'assets/images';
import React from 'react';
import { CardInfo1 } from './components/cardInfo1';
import CardInfo2 from './components/CardInfo2';
import { CardInfo3 } from './components/cardInfo3';
import CardInfo4 from './components/cardInfo4';
import { CardInfo5 } from './components/cardInfo5';
import { CardInfo6 } from './components/cardInfo6';

interface InPropsStyle {}

export const BodyIntro = () => {
  const { classes: c } = createStyleProps({});
  return (
    <Stack
      sx={{
        gap: 0,
        maxWidth: '100%',
        width: '100%',
        height: '100%',
        background: `url(${images.bgall})`,
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundSize: ' 100%',
      }}
      w={'100%'}
    >
      <CardInfo1></CardInfo1>
      <CardInfo2></CardInfo2>
      <CardInfo3></CardInfo3>
      <CardInfo4></CardInfo4>
      <CardInfo5></CardInfo5>
    </Stack>
  );
};

const createStyleProps = createStyles((theme, params: InPropsStyle) => ({}));
