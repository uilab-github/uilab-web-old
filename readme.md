
### Edit Contents

If you want to simply edit contents in *Members*, *Research*, or *Links* page,
edit JSON files in `{repository}/public/data`.
Add files in `{repository}/public/cv`, `{repository}/public/images`, or `{repository}/public/research` if you need and
refer to them on the JSON files.

Since the files in `{repository}/public` are dynamically fetched by the client's web browser,
you don't have to build the `{repository}/build/bundle.js` file before commit & push your change to the Github.

When you're editing those JSON files without development environment, just make sure to check the edited JSON files
contain **valid** JSON values before uploading.

### Set up

To set up a development environment for this project, follow the instructions below.

1. Make sure to install [node.js](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/en/docs/install).
1. Run this command to install dependencies.
  ```
  uilab-github.github.io$ yarn install
  ```
1. Run this command to start development server.
  ```
  uilab-github.github.io$ yarn start
  ```
1. Open http://localhost:8080 in your web browser to see live transpiled version of your code locally served.
1. Edit code. Changes are reflected when you simply refresh the web page on the web browser.
1. Run this command to build the bundled JS file when you're done.
  ```
  uilab-github.github.io$ yarn build
  ```
1. Commit & push your change.
