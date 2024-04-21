# AgnosticOps

## Build Environment
* linux/amd64
* Node v20.12.2
* NPM 10.5.0

## How to run?

Dev mode:
```
cd agnosticops-frontend/
npm install
npm run start:dev
```

Prod mode:
```
cd agnosticops-frontend/
npm install
npm run build
npm run start
```

## Container

```
cd agnosticops-frontend/
podman build -t agnosticops-frontend .
podman run -p 8080:8080 localhost/agnosticops-frontend
```

Docs used:
The following documentation and help was used:
* https://github.com/DefinitelyTyped/DefinitelyTyped/issues/35572
* https://www.patternfly.org/components/card/#basic-cards
* https://www.patternfly.org/components/drawer/
* https://www.patternfly.org/get-started/develop#start-with-the-react-seed