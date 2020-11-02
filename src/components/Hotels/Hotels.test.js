import React from "react";
import { mount } from "enzyme";
import Hotels from "./Hotels";

let useContextMock;

beforeEach(() => {
  useContextMock = React.useContext = jest.fn();
});

afterEach(() => {
  useContextMock.mockReset();
});

describe("the <Hotels /> component", () => {
  it("should handle the first mount", () => {
    const mockContext = {
      loading: true,
      error: "",
      hotels: [],
      getHotelsRequest: jest.fn(),
    };
    useContextMock.mockReturnValue(mockContext);
    const wrapper = mount(<Hotels />);

    expect(mockContext.getHotelsRequest).toHaveBeenCalled();
  });
});
