import {
  Box,
  Center,
  Flex,
  Stack,
  Text,
  TextInput,
  Textarea,
  Transition,
  createStyles,
} from '@mantine/core';
import { useIntersection } from '@mantine/hooks';
import { images } from 'assets/images';
import React, { memo, useCallback, useMemo, useRef } from 'react';
import { useForm } from '@mantine/form';
import { dataCard2, dataCard3 } from './data';
import { ButtonIntro } from 'app/components/button/ButtonIntro';
import { IsContent } from './IsContent';

interface InPropsStyle {}

const ContentBox5 = () => {
  const containerRef = useRef();
  const { classes: c } = createStyleProps({});
  const { ref, entry } = useIntersection({
    root: containerRef.current,
    threshold: 0.6,
  });
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      yourmessage: '',
      phone: '',
    },
    validate: {
      name: value => (value.length <= 0 ? 'Hãy nhập họ tên của bạn.' : ''),
      email: value => (/^\S+@\S+$/.test(value) ? null : 'Nhập email của bạn.'),
      yourmessage: value =>
        value.length <= 0
          ? 'Hãy gửi lời nhắn tới chúng tôi, hoặc hãy để lại số điện thoại nếu bạn cần tư vấn trực tiếp.'
          : '',
    },
  });
  const submitInfoNewUser = () => {
    console.log('hello');
  };
  return (
    <Flex
      sx={{
        maxWidth: '100%',
        width: '100%',
        height: '100vh',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundSize: '100%',
      }}
    >
      <Flex
        sx={{
          maxWidth: '1440px',
          width: '100%',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Text
          sx={{ transform: 'translateY(90px)' }}
          mt={70}
          fw={800}
          fz={48}
          color="var(--primary-1)"
        >
          Liên hệ chúng tôi
        </Text>
        <Flex
          ref={ref}
          sx={{
            maxWidth: '1170px',
            width: '100%',
            marginTop: '50px',
            transition: `all .4s 0.1s linear`,
            transform: entry?.isIntersecting
              ? 'translateY(0px)'
              : 'translateY(50px)',
            opacity: entry?.isIntersecting ? 1 : 0,
          }}
        >
          <Flex
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
              maxWidth: '1170px',
              width: '100%',
            }}
          >
            <form
              onSubmit={form.onSubmit(value => {
                submitInfoNewUser();
              })}
            >
              <Flex
                sx={{
                  maxWidth: '1170px',
                  width: '100%',
                  height: '500px',
                  justifyContent: 'Center',
                  alignItems: 'center',
                }}
              >
                <Stack>
                  <TextInput
                    placeholder="Tên của bạn"
                    type="text"
                    {...form.getInputProps('name')}
                    classNames={{ input: c.input }}
                  ></TextInput>
                  <TextInput
                    placeholder="Email của bạn"
                    type="email"
                    classNames={{ input: c.input }}
                    {...form.getInputProps('email')}
                  ></TextInput>
                  <TextInput
                    placeholder="Số điện thoại của bạn"
                    {...form.getInputProps('phone')}
                    type="number"
                    classNames={{ input: c.input }}
                  ></TextInput>
                </Stack>
                <Box>
                  <Textarea
                    placeholder="Tin nhắn của bạn"
                    classNames={{ input: c.input2 }}
                  ></Textarea>
                </Box>
              </Flex>
              <Center
                w={'100%'}
                sx={{
                  display: 'flex',
                  marginBottom: '20px',
                  transform: 'translateY(-60px)',
                }}
              >
                <ButtonIntro justify={'center'} width={'242px'} height={'70px'}>
                  Gửi
                </ButtonIntro>
              </Center>
            </form>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export const CardInfo5 = () => {
  const { classes: c } = createStyleProps({});
  return (
    <Flex className={c.Box3}>
      <Box
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <ContentBox5></ContentBox5>
      </Box>
    </Flex>
  );
};

const createStyleProps = createStyles((theme, params: InPropsStyle) => ({
  Box3: {
    maxWidth: '100%',
    width: '100%',
  },
  input: {
    maxWidth: '515px',
    width: '515px',
    height: '55px',
    background: 'none',
    borderRadius: '50px',
    '&::placeholder': {
      color: '#929292',
      fontSize: '18px',
      fontWeight: 600,
    },
    '&:focus': {
      border: '1px solid var(--primary-1)',
      color: 'var(--primary-1)',
    },
    '&:focus::placeholder': {
      color: 'var(--primary-1)',
    },
    '&:hover': {
      border: '1px solid var(--primary-1)',
    },
    '&:hover::placeholder': {
      color: 'var(--primary-1)',
    },
  },
  input2: {
    maxWidth: '515px',
    width: '515px',
    height: '200px',
    marginLeft: '30px',
    background: 'none',
    '&::placeholder': {
      color: '#929292',
      fontSize: '18px',
      fontWeight: 600,
    },
    color: '#3d3737',
    fontSize: '18px',
    borderRadius: '50px',
    fontWeight: 600,
    paddingTop: '20px',
    paddingLeft: '30px',

    '&:focus': {
      border: '1px solid var(--primary-1)',
      color: 'var(--primary-1)',
    },
    '&:focus::placeholder': {
      color: 'var(--primary-1)',
    },
    '&:hover': {
      border: '1px solid var(--primary-1)',
    },
    '&:hover::placeholder': {
      color: 'var(--primary-1)',
    },
  },
}));
