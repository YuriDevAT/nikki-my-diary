import { render, screen } from '@testing-library/react';
import HomeView from './index';

// eslint-disable-next-line no-undef
it('prints component', () => {
  // eslint-disable-next-line react/react-in-jsx-scope
  render(<HomeView />);
  screen.debug();
});
