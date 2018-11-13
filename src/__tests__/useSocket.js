import { useContext, useState, useEffect } from "react";
import { useSocket } from "../useSocket";

jest.mock("react");

describe("useStore", () => {
  let setMock;
  let socketMock;

  beforeEach(() => {
    socketMock = { on: jest.fn() };
    setMock = jest.fn();
    useContext.mockImplementation(() => socketMock);
    useState.mockImplementation(() => ["value", setMock]);
    useEffect.mockImplementation(fn => fn());
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should have called the useContext, useState and useEffect hooks", () => {
    useSocket("something");

    expect(useContext).toHaveBeenCalled();
    expect(useState).toHaveBeenCalled();
    expect(useEffect).toHaveBeenCalled();
  });

  it("should have called the socket handler with the change state method", () => {
    useSocket("something");

    expect(socketMock.on).toHaveBeenCalledWith("something", setMock);
  });

  it("should have return the socket value and the socket himself", () => {
    expect(useSocket("something")).toEqual(["value", socketMock]);
  });
});
