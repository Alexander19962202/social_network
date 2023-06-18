import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import mockAxios from 'jest-mock-axios';
import router from './router';
import { RouterProvider } from 'react-router-dom';
import { act } from 'react-test-renderer';

describe('App', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
    mockAxios.reset();
  });

  it('renders without crashing', () => {
    mockAxios.get.mockResolvedValue({ data: { resultCode: 0 }, resultCode: 0 });
    mockAxios.post.mockResolvedValue({ data: {}, resultCode: 0 });

    act(() => {
      ReactDOM.createRoot(container).render(<RouterProvider router={router} />);
    });
  });
});
