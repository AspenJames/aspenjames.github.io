[![Build Status](http://45.56.84.15/api/badges/AspenJames/aspenjames.dev/status.svg)](http://45.56.84.15/AspenJames/aspenjames.dev)

# aspenjames.dev

[Gin][gin] api server with a [React.js][react] frontend

## License and Contributing

Licensed under the GPL-3.0 (see [LICENSE](./LICENSE)). Contributions and
feedback welcome in the form of [issue reports][issue].

## Running Locally

### Using docker-compose
```bash
docker-compose up --build
```

### Run each service individually

- Install frontend dependencies
```bash
cd ui/
yarn install
```

- Run frontend development server
```bash
yarn run dev
```

- Run Go web/api development server
```bash
go run ./main.go
```

## Building for Production

- Build frontend files for production
```bash
cd ui/
yarn run build
```

- Build Go web/api server
```bash
go build ./main.go
```

## Deplopying

TODO

[issue]: https://github.com/AspenJames/aspenjames.dev/issues/new/choose
[gin]: https://gin-gonic.com/
[react]: https://reactjs.org/
