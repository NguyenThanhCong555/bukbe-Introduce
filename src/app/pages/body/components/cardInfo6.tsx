import {
  Box,
  Center,
  Flex,
  Stack,
  Text,
  Transition,
  createStyles,
} from '@mantine/core';
import { useIntersection } from '@mantine/hooks';
import { images } from 'assets/images';
import React, { memo, useCallback, useMemo, useRef } from 'react';
import { dataCard2, dataCard3 } from './data';
import { ButtonIntro } from 'app/components/button/ButtonIntro';
import { IsContent } from './IsContent';

interface InPropsStyle {}

const ContentBox6 = () => {
  const containerRef = useRef();
  const { ref, entry } = useIntersection({
    root: containerRef.current,
    threshold: 0.6,
  });
  return (
    <Flex
      sx={{
        maxWidth: '100%',
        width: '100vw',
        height: '100%',
        justifyContent: 'center',
      }}
    >
      <Flex
        sx={{
          maxWidth: '1440px',
          width: '100%',
          height: '100%',
        }}
      >
        <Center
          ref={ref}
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            transition: `all .4s 0.2s linear`,
            transform: entry?.isIntersecting
              ? 'translateY(0px)'
              : 'translateY(50px)',
            opacity: entry?.isIntersecting ? 1 : 0,
          }}
        >
          <Text
            fz={38}
            fw={600}
            c={'var(--primary-1)'}
            sx={{
              maxWidth: '612px',
              width: '100%',
              textAlign: 'center',
              marginBottom: '52px',
            }}
          >
            Quan tâm đến việc phát triển sự hiện diện trực tuyến của bạn?
          </Text>
          <ButtonIntro
            justify={'center'}
            width={'242px'}
            height={'70px'}
            isShadow={true}
            shadow={2}
          >
            Chuyển đến Bukbe
          </ButtonIntro>
        </Center>
      </Flex>
    </Flex>
  );
};

export const CardInfo6 = () => {
  const { classes: c } = createStyleProps({});
  return (
    <Flex className={c.Box3}>
      <Box
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          background: `url(${images.bg6})`,
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <ContentBox6></ContentBox6>
      </Box>
    </Flex>
  );
};

const createStyleProps = createStyles((theme, params: InPropsStyle) => ({
  Box3: {
    maxWidth: '100%',
    width: '100%',
    height: '60vh',
  },
}));
