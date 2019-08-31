import React from "react"
import renderer from "react-test-renderer"
import HeadComponent from "../head"
import * as Gatsby from 'gatsby';

describe("Header", () => {
    const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
useStaticQuery.mockImplementation(() => ({
  site: {
    siteMetadata: {
      title: 'Tsibato',
    },
  },
}));

  it("renders correctly", () => {
    const tree = renderer
      .create(<HeadComponent title="Default Starter" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})