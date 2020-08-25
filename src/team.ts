import { Construct } from 'constructs';
import { Resource } from 'cdktf';
import * as Github from '@cdktf/provider-github'
import { Member } from './member'

export class Team extends Resource {
  public readonly resource: Github.Team

  constructor(scope: Construct, name: string) {
    super(scope, name);

    this.resource = new Github.Team(this, 'team', {
      name,
      description: `${name} to cdk.dev`,
      privacy: 'closed',
    })
  }

  public addMember(member: Member): void {
    new Github.TeamMembership(this, `membership-${this.resource.name}-${member.name}`, {
      username: member.name,
      teamId: this.resource.id!,
      role: member.role,
    })
  }
}