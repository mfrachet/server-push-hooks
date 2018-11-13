import { useContext } from "react";
import { useStore } from "../useStore";

jest.mock("react");

describe("useStore", () => {
  let changeStateMock;
  let setMock;

  beforeEach(() => {
    setMock = jest.fn();
    changeStateMock = jest.fn(() => setMock);

    useContext.mockImplementation(() => ({
      state: { name: "Marvin" },
      changeState: changeStateMock
    }));
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should have provided a pair of value / setter for a given state key", () => {
    const storeKey = "name";

    expect(useStore(storeKey)).toEqual(["Marvin", setMock]);
  });

  it("should have provided a pair of value / setter for the global state", () => {
    expect(useStore()).toEqual([{ name: "Marvin" }, setMock]);
  });

  it("should have called the changeState function with store key argument", () => {
    const storeKey = "name";

    useStore(storeKey);

    expect(changeStateMock).toHaveBeenCalledWith(storeKey);
  });
});
