const { JsiiProject, Semver } = require('projen');

const githubProviderVersion = Semver.caret('0.0.5')

const project = new JsiiProject({
  name: "cdktf-github-constructs",
  authorName: "Sebastian Korfmann",
  authorEmail: "sebastian@korfmann.net",
  repository: "https://github.com/skorfmann/cdktf-github-constructs.git",
  dependencies: {
    '@cdktf/provider-github': githubProviderVersion
  }
});

project.synth();
