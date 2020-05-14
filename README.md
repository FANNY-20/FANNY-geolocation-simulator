# FANNY geolocation simulator

![Release](https://img.shields.io/badge/Release-0.1.2-blue.svg)

## Context

This project is part of the implementation of the FANNY protocol, divided into 2 main distinct projects
([the API backend](https://github.com/FANNY-20/FANNY-backend) and
[the hybrid mobile application](https://github.com/FANNY-20/FANNY-hybrid-app)).
A third project ([the geolocation simulator](https://github.com/FANNY-20/FANNY-geolocation-simulator))
is also available as a development tool or for manual testing.
You can learn more about the FANNY protocol itself [here](https://github.com/FANNY-20/The_FANNY_protocol_V0.1).

## Commands

### Install dependencies

```bash
$ yarn
```

### Run application with HMR on localhost:3000

```bash
$ yarn dev
```

### Run production build and start server

```bash
$ yarn build
$ yarn start
```

### Run all linters - ESLint + StyleLint (with automatic fix)

```bash
$ yarn lint
```

### Run all linters - ESLint + StyleLint (report only)

```bash
$ yarn lint:check
```

### Run ESLint (with automatic fix)

```bash
$ yarn eslint
```

### Run ESLint (report only)

```bash
$ yarn eslint:check
```

### Run StyleLint (with automatic fix)

```bash
$ yarn stylelint
```

### Run StyleLint (report only)

```bash
$ yarn stylelint:check
```

### Run Prettier (write)

```bash
$ yarn prettify
```

### Run Prettier (no write)

```bash
$ yarn prettify:check
```

### Run all tests (unit + end-to-end)

```bash
$ yarn test
```

### Run end-to-end tests only

```bash
$ yarn e2e
```

### Run unit tests only

```bash
$ yarn unit
```

## Resources / documentation

[See documentation](./DOCS.md)

## Changelog

[See CHANGELOG](./CHANGELOG.md)

## License

[MIT](./LICENSE)
