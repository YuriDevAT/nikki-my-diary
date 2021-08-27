/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import ProfileView from './index';

it('prints component', () => {
  render(<ProfileView />);
  screen.debug();
});
