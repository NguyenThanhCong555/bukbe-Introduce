import { Center, createStyles } from '@mantine/core';
import { images } from 'assets/images';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { HeaderIntro } from '../header/HeaderIntro';
import { BodyIntro } from '../body/BodyIntro';
import { FooterIntro } from '../footer/FooterIntro';

interface InPropsStyle {}
export function HomePage() {
  const { classes: c } = createStyleProps({});
  return (
    <>
      <Helmet>
        <title>Bukbe</title>
        <link rel="icon" href={`${images.logoBukbe}`} />
      </Helmet>
      <Center className={c.BoxIntroduce}>
        <HeaderIntro></HeaderIntro>
        <BodyIntro></BodyIntro>
        <FooterIntro></FooterIntro>
      </Center>
    </>
  );
}
const createStyleProps = createStyles((theme, params: InPropsStyle) => ({
  BoxIntroduce: {
    maxWidth: '100vw',
    width: '100%',
    flexDirection: 'column',
  },
}));
