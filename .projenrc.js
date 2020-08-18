const { JsiiProject, Semver } = require('projen');

const cdktfVersion = Semver.caret('0.0.15')
const constructsVersion = Semver.caret('3.0.0')
const githubProviderVersion = Semver.caret('0.0.5')

const project = new JsiiProject({
  name: "cdktf-github-constructs",
  authorName: "Sebastian Korfmann",
  authorEmail: "sebastian@korfmann.net",
  repository: "https://github.com/skorfmann/cdktf-github-constructs.git",
  dependencies: {
    '@cdktf/provider-github': githubProviderVersion
  },
  devDependencies: {
    '@cdktf/provider-github': githubProviderVersion,
    'cdktf': cdktfVersion,
    'constructs': constructsVersion
  },
  peerDependencies: {
    'cdktf': cdktfVersion,
    'constructs': constructsVersion,
    '@cdktf/provider-github': githubProviderVersion
  }
});

project.synth();
