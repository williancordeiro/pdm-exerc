import React from 'react';
import { render } from '@testing-library/react-native';
import Profile from '../app/profile/[userName]';

jest.mock('expo-router', () => {
  const { Text } = require('react-native');
  return {
    useLocalSearchParams: () => ({ userName: 'willian' }),
    Stack: {
      Screen: () => null,
    },
  };
});

describe('Profile [userName]', () => {
  it('deve exibir o título do perfil com o nome do usuário', () => {
    const { getByText } = render(<Profile />);
    expect(getByText('Profile')).toBeTruthy();
  });

  it('deve exibir o nome do usuário no campo Name', () => {
    const { getByText } = render(<Profile />);
    expect(getByText(/Name:/)).toBeTruthy();
    expect(getByText('willian')).toBeTruthy();
  });
});
