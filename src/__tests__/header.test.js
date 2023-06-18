import { render } from '@testing-library/react';
import Header from '../components/Header';
import { StaticRouter } from 'react-router-dom/server';

jest.mock('react-dom', () => {
  return {
    render: jest.fn(),
  };
});

test('Cart items should be 0 in header', () => {
  const header = render();
});
