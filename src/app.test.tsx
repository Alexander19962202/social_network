import React from 'react';
import ReactDOM from 'react-dom';
import SocialNetworkApp from './app';
import {unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import mockAxios from 'jest-mock-axios';

let container: any = null;
beforeEach(() => {
  // подготавливаем DOM-элемент, куда будем рендерить
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // подчищаем после завершения
  unmountComponentAtNode(container);
  container.remove();
  container = null;
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
