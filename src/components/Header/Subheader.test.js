import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import Subheader from "./Subheader";

describe("the <Subheader /> component", () => {
  it("should render", () => {
    const component = shallow(<Subheader />);

    expect(component).toMatchSnapshot();
  });

  it("should render with a dynamic title", () => {
    const component = shallow(<Subheader title="Test Application" />);

    expect(component).toMatchSnapshot();
  });

  it("should render with a goback button", () => {
    const component = shallow(<Subheader goBack={() => {}} />);

    expect(component).toMatchSnapshot();
  });

  it("should render with a form button", () => {
    const component = shallow(<Subheader openForm={() => {}} />);

    expect(component).toMatchSnapshot();
  });
});
