import React from 'react';
import ReactDOM from 'react-dom';
// @ts-expect-error TS(6142): Module './App' was resolved to '/home/alexevs/pet_... Remove this comment to see the full error message
import SocialNetworkApp from './App';
import {unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";


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
});

it('renders without crashing', () => {
  act(() => {
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    ReactDOM.render(<SocialNetworkApp />, container);
  });
});
