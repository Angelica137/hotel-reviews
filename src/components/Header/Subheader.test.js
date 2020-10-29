import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import Subheader from "./Subheader";

describe("the <Subheader /> component", () => {
  const renderer = new ShallowRenderer();

  it("should render", () => {
    renderer.render(<Subheader />);
    const component = renderer.getRenderOutput();

    expect(component).toMatchSnapshot();
  });

  it("should render with a dynamic title", () => {
    renderer.render(<Subheader title="Test Application Test" />);
    const component = renderer.getRenderOutput();

    expect(component).toMatchSnapshot();
  });

  it("should render with a goback button", () => {
    renderer.render(<Subheader goBack={() => {}} />);
    const component = renderer.getRenderOutput();

    expect(component).toMatchSnapshot();
  });
});
