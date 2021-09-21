// @ts-nocheck
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import App from '@/App';

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


describe("App tests", () => {
  test("renders learn react link", () => {
    act(() => {
      render(App(), container);
    });

    expect(container.querySelector("[data-testid='home']")).toBeTruthy();
  })
});
