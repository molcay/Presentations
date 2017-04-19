# Git Implementation

## Git Installation & Configuration

* to install `git`: `sudo apt-get install git`
> for more detail please visit [this page](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

* after installing git, you need the specify your email and name to git.

> It is necessary because the version (commit) recorded with this.
```
git config --global user.name YOURNAME
git config --global user.email EMAIL
```

> to check:

```
git config --global user.name
git config --global user.email
```

* before continue you need to know getting help:
```
git [command] --help (e.g: git config --help)
git help [command] (e.g: git help config)
```

---

## Git Commands:

1. Use case: Clone Repository
* to clone Remote Repository to Working Directory: `git clone $url_of_remote_repository `
* change file/s.
* to check any changes in your git chain, first change your directory to **Working Directory** (`cd $repositoryname`): `git status`
* to add all changed files from **Working Directory** to **Staging Area**: `git add .`
* to copy your files from **Staging Area** to **Local Repository** : `git commit -m "$message"`
* to send changes from **Local Repository** to **Remote Repository**: `git push $remotename $branchname`
    > git push origin master
* after a while
* to get differences from **Remote Repository** to your **Working Directory**: `git pull $remotename $branchname`
    > git pull origin master
* 


2. Use case: From Scratch
* to create git **Working Directory**: `git init`
* to check any changes in your git chain: `git status`
* to add a file to your **Staging Area**: `git add $filename`
    > to add all files from **Working Directory** to **Staging Area**: `git add .` or `git add *` or `git add --all`

* to copy your files from **Staging area** to **Local Repository** : `git commit -m "$message"`
    > to see the history of your commit: `git log`

* to send changes from **Local Repository** to **Remote Repository**: `git push $remotename $branchname`
    > for example: `git push origin master`

    > origin: the name of your remote repository

    > If your project has currently no remote (repository), you need to add one before `git push` command and use with `-u` parameter: `git remote add origin $url_of_remote_repository`

    > and then: `git push -u origin master`

!!! Create new Remote Repository on GitLab to see recommended commands.

#### Git Cheat Sheet:
![Git Cheat Sheet](images/Git%20Cheat%20Sheet.png)

---

### Usefull Links:

* [Codecademy](https://www.codecademy.com/learn/learn-git)
* [Türkçe Git 101](https://www.gitbook.com/book/aliozgur/git101/details)
* [Git 101](https://www.slideshare.net/phpguru/git-101-31908275)