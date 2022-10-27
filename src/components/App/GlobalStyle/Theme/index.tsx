import { ThemeProvider } from '@emotion/react';
import React, { FC, useState } from 'react';

const theme = {
  LIGHT: {
    gray: {
      1: '#f2f2f2',
    },
  },
  DARK: {},
};

type IProps = {
  children: JSX.Element;
};

const Theme: FC<IProps> = ({ children }) => {
  const [mode] = useState<string>('LIGHT');
  // @ts-ignore
  return <ThemeProvider theme={theme[mode]}>{children}</ThemeProvider>;
};

export default Theme;
