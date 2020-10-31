import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import Subheader, { Title, SubHeaderButton } from "./Subheader";

describe("the <Subheader /> component", () => {
  it("should render", () => {
    const component = shallow(<Subheader />);

    expect(component).toMatchSnapshot();
  });

  it("should render with a dynamic title", () => {
    const title = "Test Application";
    const component = shallow(<Subheader title={title} />);

    expect(component.find(Title).text()).toEqual(title);
  });

  it("should render with a goback button", () => {
    const mockGoBack = jest.fn();
    const component = shallow(<Subheader goBack={mockGoBack} />);

    const goBackButton = component.find(SubHeaderButton);
    expect(goBackButton.exists()).toBe(true);

    goBackButton.simulate("click");
    expect(mockGoBack).toHaveBeenCalled();
  });

  it("should render with a form button", () => {
    const component = shallow(<Subheader openForm={() => {}} />);

    expect(component).toMatchSnapshot();
  });
});
