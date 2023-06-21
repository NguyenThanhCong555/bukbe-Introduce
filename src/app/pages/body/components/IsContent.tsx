import { Box, Text } from '@mantine/core';
import { ButtonIntro } from 'app/components/button/ButtonIntro';
import React, { memo } from 'react';

interface IContent {
  id: number;
  label: string;
  labelButton: string;
  icon: string;
  subLabel: string;
}

export const IsContent: React.FC<IContent> = memo(props => {
  const { id, label, labelButton, icon, subLabel } = props;
  return (
    <Box
      sx={{
        maxWidth: '545px',
        width: '100%',
        height: '100%',
      }}
    >
      <Text
        sx={{
          fontWeight: 800,
          display: 'inline-block',
          fontSize: 48,
          color: 'var(--primary-1)',
          lineHeight: '1.1',
          marginBottom: '24px',
        }}
      >
        {label}
      </Text>
      <Text
        sx={{
          fontWeight: 400,
          fontSize: 24,
          marginBottom: '32px',
        }}
      >
        {subLabel}
      </Text>
      <ButtonIntro justify={'center'} width={'242px'} height={'70px'}>
        {labelButton}
      </ButtonIntro>
    </Box>
  );
});
