# My personal website


# How to host your own React website on github

- 1) make a new github repo and don't initialize with a README

- 2) create new react project sync with github repo
```shell
$ create-react-app project_name
$ git init
$ git add .
$ git commit -m "set up website"
$ git remote add origin https://github.com/GITHUB_USERNAME/GITHUB_USERNAME.github.io.git
```

- 3) Resolve modules absolutely by adding a jsconfig.json file at the root with the following contents:
```
{
  "compilerOptions": {
    "baseUrl": "./src"
  },
  "include": ["src"]
}
```

- 4) Install the npm gh-pages package
```shell
$ npm i -D gh-pages
```

- 5) add "homepage" attributes to package.json
```
{
  ...,
  "homepage": "https://GITHUB_USERNAME.github.io/",
  ...,
}
```

- 6) add "predeploy" and "deploy" attributes to scripts attribute to package.json
```
{
  ...,
  "scripts":{
    ...,
    "predeploy": "yarn run build",
    "deploy": "gh-pages -d build",
    ...,
  }
  ...,
}
```

- 7) Deploy website to Github pages
```shell
$ npm run deploy
```

- 8) Update Github repo
```shell
$ git add .
$ git commit -m "deploy website"
$ git push
```