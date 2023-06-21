import { Box, Flex, Stack, Text, createStyles } from '@mantine/core';
import { images } from 'assets/images';
import React, { useRef } from 'react';
import { dataCard } from './data';
import { useIntersection } from '@mantine/hooks';

interface InPropsStyle {}

const BoxCart = () => {
  const containerRef = useRef();
  const { ref, entry } = useIntersection({
    root: containerRef.current,
    threshold: 0.6,
  });
  return (
    <Flex
      sx={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      {dataCard?.map((v, i) => {
        return (
          <Box
            ref={ref}
            key={i}
            sx={{
              maxWidth: '358px',
              width: '100%',
              height: '400px',
              background: 'white',
              margin: '15px',
              borderRadius: '10px',
              willChange: 'auto',
              boxShadow: 'var(--shadow2)',

              '&:hover': {
                border: '2px solid var(--primary-1)',
                boxShadow: '0px 14px 20px 0px #EC593880',
              },

              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
              transition: `all .4s 0.${i}s linear`,
              transform: entry?.isIntersecting
                ? 'translateY(0px)'
                : 'translateY(50px)',
              opacity: entry?.isIntersecting ? 1 : 0,
            }}
          >
            <Stack
              sx={{
                width: '85%',
                margin: '10px 20px 40px 20px',
                height: '100%',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
              }}
            >
              <Flex
                sx={{
                  width: '100%',
                  height: '100%',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                }}
              >
                <Box
                  sx={{
                    width: '97px',
                    height: '90px',
                    background: `url(${v.icon})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                  }}
                ></Box>
                <Box
                  sx={{
                    margin: '24px 0 16px 0',
                    width: '97%',
                    height: '100px',
                  }}
                >
                  <Text
                    sx={{
                      flexWrap: 'nowrap',
                    }}
                    fw={800}
                    fz={18}
                  >
                    {v.label}
                  </Text>
                </Box>
                <Text fw={400} fz={16}>
                  {v.subLabel}
                </Text>
              </Flex>
            </Stack>
          </Box>
        );
      })}
    </Flex>
  );
};

export const CardInfo1 = () => {
  const { classes: c } = createStyleProps({});
  return (
    <Box
      sx={{
        zIndex: 111,
      }}
      w={'100%'}
    >
      <Box
        sx={{
          // background: `url(${images.bg1})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '0% 100%',
          backgroundSize: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
        className={c.BodyIntro1}
      >
        <BoxCart></BoxCart>
      </Box>
    </Box>
  );
};
const createStyleProps = createStyles((theme, params: InPropsStyle) => ({
  BodyIntro1: {
    maxWidth: '100%',
    width: '100%',
    height: '100vh',
  },
}));
