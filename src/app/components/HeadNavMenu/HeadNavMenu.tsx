import {
  Box,
  Center,
  Flex,
  NativeSelect,
  Select,
  Stack,
  Text,
  createStyles,
} from '@mantine/core';
import { images } from 'assets/images';
import { IconChevronDown } from '@tabler/icons-react';
import { ReactComponent as Logo } from 'assets/images/logoPage/logoBukbe.svg';
import React, { memo } from 'react';
import { dataLanguage, dataMenu } from './data/dataMenu';

interface InPropsStyle {
  logos?: any;
}
const HeadNavMenu = memo(() => {
  const logo = images;
  const { classes: c } = createStyleProps({ logos: logo });

  const [makeRoute, setMakeRoute] = React.useState(false);
  const [getid, setGetid] = React.useState(0);
  const [getidLanguage, setGetidLanguage] = React.useState(0);
  const navMenu = (v, i) => {
    setGetid(v.id);
  };

  const makeRotate = () => {
    setMakeRoute(!makeRoute);
  };
  const setCheckLanguage = v => {
    setGetidLanguage(v.id);
    setMakeRoute(false);
  };
  return (
    <Flex className={c.headerBox}>
      <Box ml={135}>
        <Logo></Logo>
      </Box>
      <Flex sx={{ justifyContent: 'center', alignItems: 'center' }} mr={135}>
        {dataMenu.map((v, i) => {
          return (
            <Box
              onClick={() => navMenu(v, i)}
              key={i}
              sx={{
                margin: i == 1 ? '0px 60px 0px 60px' : '0px ',
                padding: '5px',
              }}
            >
              <Text
                sx={{
                  fontWeight: 600,
                  fontSize: '18px',
                  color: i == getid ? 'var(--primary-1)' : '',
                  borderBottom: i == getid ? '1px solid var(--primary-1)' : '',
                  transition: ' all .3s linear',
                }}
              >
                {v.label}
              </Text>
            </Box>
          );
        })}

        <Flex
          sx={{
            flexDirection: 'column',
            transition: 'all .1 linear',
          }}
          w={'66px'}
          h={28}
          ml={40}
        >
          <Flex
            onClick={() => makeRotate()}
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '8px',
              background: 'var(--whileL)',
              maxWidth: '66px',
              width: '100%',
              height: '28px',
              boxShadow: '0px 2px 4px #d6d1d1',
            }}
          >
            <Text fw={600} fz={16} c={'var(--primary-1)'} mr={1}>
              {dataLanguage.map((v, i) => {
                return <Box key={i}>{getidLanguage == i ? v.label : ''}</Box>;
              })}
            </Text>
            <Center
              sx={{
                transform: makeRoute ? 'rotateX(180deg)' : 'rotateX(0deg)',
              }}
            >
              <IconChevronDown size="1.3rem" color="#929292" />
            </Center>
          </Flex>
          <Box
            sx={{
              width: '100%',
              background: 'var(--whileL)',
              borderRadius: '8px',
              marginTop: '3px',
              opacity: !makeRoute ? '0' : '1',
              transition: 'all .3s linear',
              boxShadow: '0px 2px 4px #d6d1d1',
            }}
          >
            {dataLanguage.map((v, i) => {
              return (
                <Flex
                  key={i}
                  onClick={() => setCheckLanguage(v)}
                  sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    ':hover': {
                      background: 'var(--primary-1)',
                    },
                  }}
                  m={3}
                >
                  <Box>
                    <Text sx={{ fontWeight: 400, fontSize: '13px' }}>
                      {v.label}
                    </Text>
                  </Box>
                </Flex>
              );
            })}
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
});
const createStyleProps = createStyles((theme, params: InPropsStyle) => ({
  headerBox: {
    maxWidth: '100%',
    width: '100%',
    height: '100px',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1111,
  },
}));

export default HeadNavMenu;
