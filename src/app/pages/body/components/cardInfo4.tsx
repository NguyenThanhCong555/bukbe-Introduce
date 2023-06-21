import { Box, Center, Flex, Stack, Text, createStyles } from '@mantine/core';
import { useIntersection, useWindowScroll } from '@mantine/hooks';
import { images } from 'assets/images';
import React, { memo, useCallback, useMemo, useRef } from 'react';
import { dataCard4 } from './data';
import { ButtonIntro } from 'app/components/button/ButtonIntro';
import { IsContent } from './IsContent';

interface InPropsStyle {}

const ContentBox4 = () => {
  const [scroll, scrollTo] = useWindowScroll();
  const containerRef = useRef();
  const { ref, entry } = useIntersection({
    root: containerRef.current,
    threshold: 0.6,
  });
  return (
    <Flex
      sx={{
        maxWidth: '100%',
        width: '100%',
        height: '100%',
        // background: `url(${images.bg4})`,
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundSize: 'cover',
      }}
    >
      <Flex
        sx={{
          maxWidth: '1440px',
          width: '100%',
          height: '100%',
        }}
      >
        <Box
          sx={{
            maxWidth: '50%',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Center
            sx={{
              maxWidth: '80%',
              transition: 'all .4s linear',
              width: '80%',
              height: '80%',
            }}
          >
            <Flex
              sx={{
                maxWidth: '50%',
                width: '100%',
                height: '100%',
                justifyContent: 'flex-end',
                transition: `all .3s 0.1s linear`,
                transform: entry?.isIntersecting
                  ? 'translateX(0px) scale(1.1)'
                  : 'translateX(-50px)',
                opacity: entry?.isIntersecting ? 1 : 0,
                zIndex: 1111,
                willChange: 'auto',
                alignItems: 'center',
              }}
            >
              <Box
                ref={ref}
                sx={{
                  width: '179px',
                  height: '349px',
                  opacity: entry?.isIntersecting ? 1 : 0,
                  marginRight: '23.2px',
                  background: `url(${images.phone8})`,
                  backgroundRepeat: 'no-repeat',
                  willChange: 'auto',
                  backgroundSize: 'cover',
                }}
              ></Box>
            </Flex>
            <Flex
              sx={{
                maxWidth: '50%',
                width: '100%',
                height: '100%',
                justifyContent: 'flex-start',
                alignItems: 'center',
                transition: `all .4s 0.4s linear`,
                transform: entry?.isIntersecting
                  ? 'translateX(-65px) translateY(30px) rotate(23deg) scale(1.1)'
                  : 'translateX(-150px) ',
                opacity: entry?.isIntersecting ? 1 : 0,
              }}
              ref={ref}
            >
              <Box
                sx={{
                  width: '179px',
                  height: '349px',
                  opacity: entry?.isIntersecting ? 1 : 0,
                  marginRight: '15.2px',
                  background: `url(${images.phone7})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}
              ></Box>
            </Flex>
          </Center>
        </Box>
        <Box
          sx={{
            maxWidth: '50%',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <Flex
            sx={{
              maxWidth: '540px',
              width: '100%',
              height: '426px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {dataCard4?.map((v, i) => {
              return (
                <Flex
                  key={i}
                  ref={ref}
                  sx={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transition: `all .4s 0.${i}s linear`,
                    transform: entry?.isIntersecting
                      ? 'translateY(0px)'
                      : 'translateY(50px)',
                    opacity: entry?.isIntersecting ? 1 : 0,
                  }}
                >
                  <IsContent
                    id={v.id}
                    label={v.label}
                    labelButton={v.labelButton}
                    icon={v.icon}
                    subLabel={v.subLabel}
                  ></IsContent>
                </Flex>
              );
            })}
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

const CardInfo4 = () => {
  const { classes: c } = createStyleProps({});
  return (
    <Flex className={c.Box2}>
      <Box
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <ContentBox4></ContentBox4>
      </Box>
    </Flex>
  );
};

const createStyleProps = createStyles((theme, params: InPropsStyle) => ({
  Box2: {
    maxWidth: '100%',
    width: '100%',
    height: '100vh',
  },
}));
export default CardInfo4;
