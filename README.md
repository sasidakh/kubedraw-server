# KubeDraw Server
KubeDraw server is a graphql server for querying and mutating a kubernetes cluster specification.

## Nodemon
For development the service will run using nodemon. Nodemon will restart the server on every saved code change. To start nodemon run:
```sh
npm run nodemon
```
## Query
copy paste the following on the graphiql ui : 

{
  namespaces{
    metadata{name}
  }
}

## Mutation
copy paste the following on the graphiql to insert data to mongodb : 

mutation {
  createNamespace(metadata:{
    name: "test"
    annotations: "This is an annotation"
  }) {
    metadata {
      name,
      annotations
    }
  }
}