# getUsers

Modules, packages and tests.

A complete round trip test of create-react-library, publish to npm and test  
independently in a create-react-app.

## Verdacccio

```sh
# run the docker instance of Verdaccio
docker run -it --rm --name verdaccio -p 4873:4873 verdaccio/verdaccio
```

```sh
# add local user -- matt.pazaryna / Password
npm adduser --registry  http://0.0.0.0:4873
```

```sh
# from the working directory
npm set registry http://0.0.0.0:4873
npm publish --registry http://0.0.0.0:4873
npm publish --registry http://0.0.0.0:4873
```

Verdaccio server is running at http://0.0.0.0:4873/#/
