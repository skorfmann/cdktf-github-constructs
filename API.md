# API Reference

**Classes**

Name|Description
----|-----------
[Member](#cdktf-github-constructs-member)|*No description*
[Repository](#cdktf-github-constructs-repository)|*No description*
[Team](#cdktf-github-constructs-team)|*No description*


**Structs**

Name|Description
----|-----------
[MemberConfig](#cdktf-github-constructs-memberconfig)|*No description*
[RepositoryConfig](#cdktf-github-constructs-repositoryconfig)|*No description*


**Enums**

Name|Description
----|-----------
[RepositoryPermissions](#cdktf-github-constructs-repositorypermissions)|*No description*



## class Member  <a id="cdktf-github-constructs-member"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IResource](#cdktf-iresource), [IConstruct](#constructs-iconstruct)
__Extends__: [Resource](#cdktf-resource)

### Initializer




```ts
new Member(scope: Construct, name: string, config: MemberConfig)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  *No description*
* **name** (<code>string</code>)  *No description*
* **config** (<code>[MemberConfig](#cdktf-github-constructs-memberconfig)</code>)  *No description*
  * **teams** (<code>Array<[Team](#cdktf-github-constructs-team)></code>)  *No description* 
  * **isOwner** (<code>boolean</code>)  *No description* __*Optional*__



### Properties


Name | Type | Description 
-----|------|-------------
**isOwner** | <code>boolean</code> | <span></span>
**name** | <code>string</code> | <span></span>
**role** | <code>string</code> | <span></span>



## class Repository  <a id="cdktf-github-constructs-repository"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IResource](#cdktf-iresource), [IConstruct](#constructs-iconstruct)
__Extends__: [Resource](#cdktf-resource)

### Initializer




```ts
new Repository(scope: Construct, name: string, config: RepositoryConfig)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  *No description*
* **name** (<code>string</code>)  *No description*
* **config** (<code>[RepositoryConfig](#cdktf-github-constructs-repositoryconfig)</code>)  *No description*
  * **allowMergeCommit** (<code>boolean</code>)  Add all commits from the head branch to the base branch with a merge commit. __*Optional*__
  * **allowRebaseMerge** (<code>boolean</code>)  *No description* __*Optional*__
  * **allowSquashMerge** (<code>boolean</code>)  *No description* __*Optional*__
  * **archived** (<code>boolean</code>)  *No description* __*Optional*__
  * **autoInit** (<code>boolean</code>)  *No description* __*Optional*__
  * **defaultBranch** (<code>string</code>)  Can only be set after initial repository creation, and only if the target branch exists. __*Optional*__
  * **deleteBranchOnMerge** (<code>boolean</code>)  *No description* __*Optional*__
  * **description** (<code>string</code>)  *No description* __*Optional*__
  * **gitignoreTemplate** (<code>string</code>)  *No description* __*Optional*__
  * **hasDownloads** (<code>boolean</code>)  *No description* __*Optional*__
  * **hasIssues** (<code>boolean</code>)  *No description* __*Optional*__
  * **hasProjects** (<code>boolean</code>)  *No description* __*Optional*__
  * **hasWiki** (<code>boolean</code>)  *No description* __*Optional*__
  * **homepageUrl** (<code>string</code>)  *No description* __*Optional*__
  * **isTemplate** (<code>boolean</code>)  *No description* __*Optional*__
  * **licenseTemplate** (<code>string</code>)  *No description* __*Optional*__
  * **private** (<code>boolean</code>)  *No description* __*Optional*__
  * **topics** (<code>Array<string></code>)  *No description* __*Optional*__



### Properties


Name | Type | Description 
-----|------|-------------
**name** | <code>string</code> | <span></span>
**resource** | <code>[Repository](#cdktf-provider-github-repository)</code> | <span></span>
*static* **Permissions** | <code>[RepositoryPermissions](#cdktf-github-constructs-repositorypermissions)</code> | <span></span>

### Methods


#### addTeam(team, permission) <a id="cdktf-github-constructs-repository-addteam"></a>



```ts
addTeam(team: Team, permission: RepositoryPermissions): void
```

* **team** (<code>[Team](#cdktf-github-constructs-team)</code>)  *No description*
* **permission** (<code>[RepositoryPermissions](#cdktf-github-constructs-repositorypermissions)</code>)  *No description*






## class Team  <a id="cdktf-github-constructs-team"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IResource](#cdktf-iresource), [IConstruct](#constructs-iconstruct)
__Extends__: [Resource](#cdktf-resource)

### Initializer




```ts
new Team(scope: Construct, name: string)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  *No description*
* **name** (<code>string</code>)  *No description*



### Properties


Name | Type | Description 
-----|------|-------------
**resource** | <code>[Team](#cdktf-provider-github-team)</code> | <span></span>

### Methods


#### addMember(member) <a id="cdktf-github-constructs-team-addmember"></a>



```ts
addMember(member: Member): void
```

* **member** (<code>[Member](#cdktf-github-constructs-member)</code>)  *No description*






## struct MemberConfig  <a id="cdktf-github-constructs-memberconfig"></a>






Name | Type | Description 
-----|------|-------------
**teams** | <code>Array<[Team](#cdktf-github-constructs-team)></code> | <span></span>
**isOwner**? | <code>boolean</code> | __*Optional*__



## struct RepositoryConfig  <a id="cdktf-github-constructs-repositoryconfig"></a>






Name | Type | Description 
-----|------|-------------
**allowMergeCommit**? | <code>boolean</code> | Add all commits from the head branch to the base branch with a merge commit.<br/>__*Optional*__
**allowRebaseMerge**? | <code>boolean</code> | __*Optional*__
**allowSquashMerge**? | <code>boolean</code> | __*Optional*__
**archived**? | <code>boolean</code> | __*Optional*__
**autoInit**? | <code>boolean</code> | __*Optional*__
**defaultBranch**? | <code>string</code> | Can only be set after initial repository creation, and only if the target branch exists.<br/>__*Optional*__
**deleteBranchOnMerge**? | <code>boolean</code> | __*Optional*__
**description**? | <code>string</code> | __*Optional*__
**gitignoreTemplate**? | <code>string</code> | __*Optional*__
**hasDownloads**? | <code>boolean</code> | __*Optional*__
**hasIssues**? | <code>boolean</code> | __*Optional*__
**hasProjects**? | <code>boolean</code> | __*Optional*__
**hasWiki**? | <code>boolean</code> | __*Optional*__
**homepageUrl**? | <code>string</code> | __*Optional*__
**isTemplate**? | <code>boolean</code> | __*Optional*__
**licenseTemplate**? | <code>string</code> | __*Optional*__
**private**? | <code>boolean</code> | __*Optional*__
**topics**? | <code>Array<string></code> | __*Optional*__



## enum RepositoryPermissions  <a id="cdktf-github-constructs-repositorypermissions"></a>



Name | Description
-----|-----
**PULL** |Recommended for non-code contributors who want to view or discuss your project.
**TRIAGE** |Recommended for contributors who need to proactively manage issues and pull requests without write access.
**PUSH** |Recommended for contributors who actively push to your project.
**MAINTAIN** |Recommended for project managers who need to manage the repository without access to sensitive or destructive actions.
**ADMIN** |Recommended for people who need full access to the project, including sensitive and destructive actions like managing security or deleting a repository.


