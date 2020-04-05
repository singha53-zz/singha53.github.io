# My personal website


# How to host your own React website on github

- 1) make a new github repo and don't initialize with a README

- 2) create new react project
```shell
$ create-react-app project_name
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
