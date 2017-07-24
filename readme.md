
## uilab-github.github.io

This is a homepage of KAIST Users & Information Lab. served as GitHub Pages.

If you need to edit contents of the homepage, please edit, commit, push, and merge your change into
the master branch of this repository.

This is a React-based single page web application written in ES2015, so you need to set up an appropriate
development environment to build the application bundle if you want to edit this app.
However, if you need to simply edit or add some contents in *Members*, *Research*, or *Links* page,
you can simply edit and push some JSON files then the change will be reflected on the homepage
without building the application.

If you are a member of the lab and need permission to this repository,
ask Jeongmin Byun or Jungkook Park via email or [slack](https://uilab.slack.com) to invite you to
[uilab-github](https://github.com/uilab-github) organization.

### Set up

To set up a development environment for this project, follow the instructions below.

1. Make sure to install [node.js](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/en/docs/install).
1. Run this command to install dependencies: `uilab-github.github.io$ yarn install`
1. Run this command to start development server: `uilab-github.github.io$ yarn start`
1. Open http://localhost:8080 in your web browser to see live transpiled version of your code locally served.
1. Edit code. Changes are reflected when you simply refresh the web page on the web browser.
1. Run this command to build the bundled JS file when you're done. `uilab-github.github.io$ yarn build`
1. Commit & push your change.

### Edit contents

If you want to simply edit contents in *Members*, *Research*, or *Links* page,
edit JSON files in `{repository}/public/data`.
Add files in `{repository}/public/cv`, `{repository}/public/images`, or `{repository}/public/research` if you need and
refer to them on the JSON files.

Since the files in `{repository}/public` are dynamically fetched by the client's web browser,
you don't have to build the `{repository}/build/bundle.js` file before commit & push your change to the GitHub.

When you're editing those JSON files without development environment, just make sure to check the edited JSON files
contain **valid** JSON values before uploading.

### Hosting big files for research

GitHub Pages site has a size limit of 1 GB, and have a soft bandwidth limit of 100GB per month.
Therefore, if you want to serve big files on the web and link from the *Research* page,
upload them in [uilab-github/uilab-files](https://github.com/uilab-github/uilab-files) repository rather than
directly include the files in this repository.

You can easily make a link toward files in the repository in a following format:
`https://raw.githubusercontent.com/uilab-github/uilab-files/master/{path}`.

For example, if you want to link a file `{repository}/TACL2017/TACL2017.zip`, its url would be
`https://raw.githubusercontent.com/uilab-github/uilab-files/master/TACL2017/TACL2017.zip`.

Please use `uilab-files` repository to serve the file if the file size is **over 30MB**.
