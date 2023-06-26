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
import { useMediaQuery } from '@mantine/hooks';
import { sizes } from 'styles/media';
import BGmobile from 'assets/images/background/mobileBG/bg1';

interface InPropsStyle {
  logos?: any;
}
const HeadernavMobile = memo(() => {
  const logo = images;
  const mobile = useMediaQuery(`(max-width:${sizes.medium}px)`);
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
  console.log(dataMenu, 'this is data menu');
  return (
    <Flex className={c.headerBox}>
      <Flex></Flex>
      <Box>
        <BGmobile />
      </Box>
      <Flex></Flex>
    </Flex>
  );
});
const createStyleProps = createStyles((theme, params: InPropsStyle) => ({
  headerBox: {
    maxWidth: '100%',
    width: '100%',
    height: '64px',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1111,
  },
}));

export default HeadernavMobile;
