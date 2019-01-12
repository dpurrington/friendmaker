**Friendmaker** discovers all the repositories under a given Github org and outputs configuration lines that can be used in a config file for [myrepos](https://myrepos.branchable.com/).

## Pre-requisites
* Install "myrepos" (`brew install mr`)
* Setup [ssh access in GitHub](https://help.github.com/articles/connecting-to-github-with-ssh/).
* Create or locate your [GitHub personal access token](https://github.com/settings/tokens).

## Execution
To use the tool:
`friendmaker <org name> <your github token> > ./.mrconfig`

If you prefer, you can export your token to `GITHUB_TOKEN` and skip passing it on the command line.

After you have created the .mrconfig file, simply run `mr up` in that directory, and all repos in the org you specified will be fetched to that directory. For more information on using myrepos, see [the documentation](https://myrepos.branchable.com/)


