import { render, screen } from '@testing-library/react';
import CalendarView from './index';

// eslint-disable-next-line no-undef
test('prints component', () => {
  // eslint-disable-next-line react/react-in-jsx-scope
  render(<CalendarView />);
  screen.debug();
});
