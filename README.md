# Terraform CDK - Level 2 Constructs for Github Provider

Provide simple Level 2 Constructs for the [Github Provider](https://cdk.tf/provider/github) for [Terraform CDK](https://cdk.tf).

## Install

Just the constructs

```
npm install cdktf-github-constructs
```

Or with all peer dependencies

```
npm install cdktf constructs @cdktf/provider-github cdktf-github-constructs
```

## Example

```ts
import { Construct } from 'constructs';
import { Resource } from 'cdktf';
import { Repository, RepositoryConfig } from 'cdktf-github-constructs';

export class MyRepos extends Resource {
  constructor(scope: Construct, name: string) {
    const myTeam = new Team(this, 'my-team'),

    const website = new Repository(this, 'website', {
      description: 'Our awesome website',
      topics: ['our', 'awesome', 'website']
    })

    website.addTeam(myTeam, Repository.Permissions.PUSH)
  }
}
```

## Docs

See [API Docs](./API.md)
