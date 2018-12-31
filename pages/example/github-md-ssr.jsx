import React from "react";

import { Component } from "@Components/framework";
import { Page, Section } from "reactjs-layout-slot";
import { ReadmeRenderSsr } from "../../src/Screens/example/github-readme/readme-render-ssr";
import { httpGet } from "../../src/Util/http";

export default class GithubMdSsr extends Component {

  static async getInitialProps({ req }) {

    const { query } = req || window.__NEXT_DATA__;

    const githubLink = query["github_link"];
    let markdownRes = {};

    if (githubLink) {
      markdownRes = await httpGet({ url: githubLink });
    }
    return { githubLink, markdownRes };
  }

  render() {
    return (
      <>
        <Page layout={"OneColumn"}>
          <Section slot="content">
            <div className='w-full max-w-2xl mx-auto'>
              <div className="bg-white shadow p-8">
                <h2 className='text-center text-xl mb-3 uppercase font-thin'>Github Markdown Viewer</h2>
                <ReadmeRenderSsr key={Math.random()} githubLink={this.props.githubLink} markdownRes={this.props.markdownRes} />
              </div>
            </div>
          </Section>
        </Page>
      </>
    );
  }
}
