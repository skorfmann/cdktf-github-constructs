import { Construct } from 'constructs';
import { Resource } from 'cdktf';
import * as Github from '@cdktf/provider-github'
import { Team } from './team'

export interface MemberConfig {
  readonly teams: Team[];
  readonly isOwner?: boolean;
}

export class Member extends Resource {
  public readonly name: string;
  public readonly isOwner: boolean;

  constructor(scope: Construct, name: string, config: MemberConfig) {
    super(scope, name);

    this.name = name;

    const { isOwner = false, teams } = config;

    if (!isOwner) {
      new Github.Membership(this, 'membership', {
        username: name,
        role: 'member',
      })
    }

    this.isOwner = isOwner;

    teams.forEach((team) => team.addMember(this))
  }

  public get role(): string {
    return this.isOwner ? 'maintainer' : 'member'
  }
}
