import { Box, Center, Flex, Stack, Text, createStyles } from '@mantine/core';
import { useIntersection } from '@mantine/hooks';
import HeadNavMenu from 'app/components/HeadNavMenu/HeadNavMenu';
import { ButtonIntro } from 'app/components/button/ButtonIntro';
import { images } from 'assets/images';
import React, { useRef } from 'react';

interface InPropsStyle {}
export const HeaderIntro = () => {
  const { classes: c } = createStyleProps({});
  const containerRef = useRef();
  const { ref, entry } = useIntersection({
    root: containerRef.current,
    threshold: 0.6,
  });
  return (
    <Center className={c.boxHeader}>
      <HeadNavMenu></HeadNavMenu>
      <Flex
        sx={{
          maxWidth: '100%',
          width: '100%',
          height: '100%',
          background: `url(${images.bgfullHeader})`,
          backgroundSize: '100%',
          objectFit: 'cover',
          backgroundRepeat: 'no-repeat',
          transition: `all .5s 0.4s linear`,
          willChange: 'auto',
        }}
      >
        <Flex
          ref={ref}
          sx={{
            transition: `all .4s 0.4s linear`,
            transform: entry?.isIntersecting
              ? 'translateY(0px)'
              : 'translateY(50px)',
            opacity: entry?.isIntersecting ? 1 : 0,
          }}
          className={c.box1}
        >
          <Stack w={473}>
            <Text lh={1.2} fw={800} fz={48} c={'#EC5938'}>
              Bu
              <Text sx={{ display: 'inline', color: 'black' }}>kbe</Text> kết
              nối và quản lý
            </Text>
            <Text
              lh={1.2}
              fz={18}
              fw={600}
              sx={{ display: 'inline', marginBottom: '7px' }}
            >
              Kết nối bạn với cửa hàng nhỏ và quản lý cửa hàng một cách hiệu quả
            </Text>
            <Flex ml={-10}>
              <ButtonIntro
                shadow={2}
                isShadow={true}
                width={'242px'}
                height={'70px'}
              >
                Bắt đầu
              </ButtonIntro>
            </Flex>
          </Stack>
        </Flex>
        <Flex className={c.box2}>
          <Box
            sx={{
              width: '100%',
              height: '100%',
            }}
          ></Box>
        </Flex>
      </Flex>
    </Center>
  );
};
const createStyleProps = createStyles((theme, params: InPropsStyle) => ({
  box1: {
    zIndex: 22,
    maxWidth: '50%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  box2: {
    zIndex: 22,
    maxWidth: '50%',
    width: '100%',
    height: '100%',
  },
  boxHeader: {
    flexDirection: 'column',
    maxWidth: '100%',
    width: '100%',
    height: '100vh',
    justifyContent: 'flex-start',
  },
}));
