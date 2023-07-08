import { render, screen, waitFor } from '@testing-library/react';
import mockAxios from 'jest-mock-axios';
import * as React from 'react';
import { RouterProvider } from 'react-router-dom';

import router from 'src/router';

describe('App', () => {
  afterEach(() => {
    mockAxios.reset();
  });

  it('should render without crashing and has App name', async () => {
    mockAxios.get.mockResolvedValue({ data: { resultCode: 0 }, resultCode: 0 });
    mockAxios.post.mockResolvedValue({ data: {}, resultCode: 0 });
    render(<RouterProvider router={router} />);
    await waitFor(() => {
      const linkElement = screen.getByText('SOWA');
      expect(linkElement).toBeInTheDocument();
    });
  });
});
