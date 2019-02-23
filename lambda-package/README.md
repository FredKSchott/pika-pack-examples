# lambda-package

Example of how to bundle an AWS Lambda function for distribution using `@ryaninvents/plugin-bundle-zip-node` and `@ryaninvents/plugin-bundle-dependencies`. This example demonstrates using Express to create a web server facilitated by API Gateway. _(Note: API Gateway setup is beyond the scope of this example.)_

## Build

```
npm i
pika build
```

## Deployment

You can upload `pkg/dist-node.zip` as a Lambda function, and `pkg/dist-dependencies.zip` as a Lambda Layer. When you update your Lambda code, you can upload the much smaller `pkg/dist-node.zip` for faster iteration.
