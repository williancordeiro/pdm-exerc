import React from 'react';
import { render } from '@testing-library/react-native';
import Home from '../app/index';

jest.mock('expo-router', () => {
  const { Text } = require('react-native');
  return {
    Link: ({ children, ...props }: any) => <Text {...props}>{children}</Text>,
    Stack: {
      Screen: () => null,
    },
    Tabs: {},
  };
});

test('deve exibir o link com o texto "Go to Feed"', () => {
  const { getByText } = render(<Home />);
  expect(getByText('Go to Feed')).toBeTruthy();
});

test('deve renderizar o componente Home sem erros', () => {
  const { getByText } = render(<Home />);
  expect(getByText('Go to Feed')).toBeTruthy();
});
