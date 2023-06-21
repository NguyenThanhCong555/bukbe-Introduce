import { Box, Center, Flex, Stack, Text } from '@mantine/core';
import React from 'react';
import { CardInfo6 } from '../body/components/cardInfo6';
import { images } from 'assets/images';
import { dataMenu } from 'app/components/HeadNavMenu/data/dataMenu';
import { dataList } from '../body/components/data';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@mantine/hooks';

export const FooterIntro = () => {
  const small = useMediaQuery('(max-width:1280px)');
  const nav = useNavigate();
  const changeRoute = (v, i) => {
    nav(v.ListLink[i]);
  };
  console.log(small, 'sáccs');
  return (
    <Center
      sx={{
        width: '100vw',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '100%',
        }}
      >
        <CardInfo6></CardInfo6>
      </Box>
      <Box
        sx={{
          width: '100%',
          height: '60vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Flex
          sx={{
            maxWidth: small ? '1070px' : '1270px',
            width: '100%',
            height: '100%',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              width: '100%',
              marginTop: '28px',
            }}
          >
            <Box
              sx={{
                maxWidth: '156px',
                width: '100%',
                height: '39px',
                background: `url(${images.logoBukbe})`,
              }}
            ></Box>
          </Box>
          <Box
            sx={{
              width: '100%',
              height: '222px',
              marginTop: '29px',
              display: 'flex',
              borderBottom: '1px solid var(--primary-1)',
            }}
          >
            {dataList.map((v, ie) => {
              const a = v.ListName;
              const data = Object.values(a).map((v, i) => {
                return v;
              });
              return (
                <Stack
                  key={ie}
                  sx={{
                    '& li': {
                      textDecoration: 'none',
                      listStyleType: 'none',
                      fontSize: '16px',
                      fontWeight: 600,
                      marginRight: '200px',
                    },
                  }}
                >
                  <Text
                    sx={{
                      fontWeight: 800,
                      fontSize: '24px',
                      lineHeight: 1,
                    }}
                  >
                    {v.menu}
                  </Text>
                  <ul>
                    {data?.map((value, id) => {
                      return (
                        <li
                          onMouseOver={e =>
                            (e.currentTarget.style.textDecoration = 'underline')
                          }
                          onMouseOut={e =>
                            (e.currentTarget.style.textDecoration = 'none')
                          }
                          key={id}
                          onClick={() => changeRoute(v, id)}
                        >
                          <Text>{value}</Text>
                        </li>
                      );
                    })}
                  </ul>
                </Stack>
              );
            })}
          </Box>
          <Box
            sx={{
              width: '100%',
              height: '50%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Text
              sx={{
                fontSize: '16',
                fontWeight: 600,
              }}
            >
              Công ty TNHH VIETDEFI
            </Text>
            <Text
              sx={{
                fontSize: '16',
                fontWeight: 600,
              }}
            >
              Địa chỉ công ty: Lô 6 khu đô thị Nam Thanh, ngõ 1 đường Nguyễn Thị
              Duệ, Yên Hòa, Cầu Giấy, Hà Nội
            </Text>
            <Text
              sx={{
                fontSize: '16',
                fontWeight: 600,
              }}
            >
              © 2021 VIETDEFI
            </Text>
          </Box>
        </Flex>
      </Box>
    </Center>
  );
};
