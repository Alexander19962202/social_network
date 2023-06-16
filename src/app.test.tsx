import React from 'react';
import ReactDOM from 'react-dom';
import SocialNetworkApp from 'src/app';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import mockAxios from 'jest-mock-axios';

describe('App', () => {
  let container: HTMLDivElement | null;
  beforeEach(() => {
    // prepare DOM-element for rendering
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    // clean after test
    if (container) {
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    }
    // cleaning up the mess left behind the previous test
    mockAxios.reset();
  });

  it('renders without crashing', () => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      mockAxios.get.mockResolvedValue({ data: { resultCode: 0 }, resultCode: 0 });
      mockAxios.post.mockResolvedValue({ data: {}, resultCode: 0 });

      ReactDOM.render(<SocialNetworkApp />, container);
    });
  });
});
