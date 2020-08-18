import { Construct } from 'constructs';
import { Resource } from 'cdktf';
import * as Github from '@cdktf/provider-github'
import { Team } from './team';

export interface RepositoryConfig {
  /** Add all commits from the head branch to the base branch with a merge commit. */
  readonly allowMergeCommit?: boolean;
  readonly allowRebaseMerge?: boolean;
  readonly allowSquashMerge?: boolean;
  readonly archived?: boolean;
  readonly autoInit?: boolean;
  /** Can only be set after initial repository creation, and only if the target branch exists */
  readonly defaultBranch?: string;
  readonly deleteBranchOnMerge?: boolean;
  readonly description?: string;
  readonly gitignoreTemplate?: string;
  readonly hasDownloads?: boolean;
  readonly hasIssues?: boolean;
  readonly hasProjects?: boolean;
  readonly hasWiki?: boolean;
  readonly homepageUrl?: string;
  readonly isTemplate?: boolean;
  readonly licenseTemplate?: string;
  readonly private?: boolean;
  readonly topics?: string[];
}


export enum RepositoryPermissions {
  /** Recommended for non-code contributors who want to view or discuss your project */
  PULL = 'pull',

  /** Recommended for contributors who need to proactively manage issues and pull requests without write access */
  TRIAGE = 'triage',

  /** Recommended for contributors who actively push to your project */
  PUSH = 'push',

  /** Recommended for project managers who need to manage the repository without access to sensitive or destructive actions */
  MAINTAIN = 'maintain',

  /** Recommended for people who need full access to the project, including sensitive and destructive actions like managing security or deleting a repository */
  ADMIN = 'admin'
}

export class Repository extends Resource {
  public readonly name: string;
  public readonly resource: Github.Repository;
  public static readonly Permissions = RepositoryPermissions;

  constructor(scope: Construct, name: string, config: RepositoryConfig) {
    super(scope, name);

    this.name = name;

    const defaultRepositoryOptions: Github.RepositoryConfig = {
      name,
    }

    this.resource = new Github.Repository(this, 'repository', {
      ...defaultRepositoryOptions,
      ...config,
      lifecycle: { // there seems to be an issue in github actions with these attributes, they're assumed to be false all the time.
        ignoreChanges: ['delete_branch_on_merge', 'allow_merge_commit', 'allow_rebase_merge', 'allow_squash_merge'],
      },
    })
  }

  public addTeam(team: Team, permission: RepositoryPermissions): void {
    new Github.TeamRepository(this, `team-${team.resource.id}`, {
      teamId: team.resource.id!,
      repository: this.name,
      permission,
    })
  }
}
