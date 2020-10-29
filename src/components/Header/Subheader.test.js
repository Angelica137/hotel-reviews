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
    renderer.render(<Subheader title="Test Application" />);
    const component = renderer.getRenderOutput();

    expect(component).toMatchSnapshot();
  });
});
