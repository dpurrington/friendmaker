**Friendmaker** discovers all the repositories under a given Github org and outputs configuration lines that can be used in a config file for [myrepos](https://myrepos.branchable.com/). In order to run correctly, you will need to have a GitHub token that can be used to query GitHub. That token needs to be exported to the variable `GITHUB_TOKEN`.

The tool uses the ssh link for all repos.

To use this tool, use the following format:
`node get-org-repo-urls <org name>`
