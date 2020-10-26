FROM golang:1.15-alpine AS go_builder

WORKDIR /go/src/github.com/aspenjames/aspenjames.dev

COPY go.mod go.sum ./

RUN go mod download

COPY main.go .
COPY api ./api

RUN go build -o /main main.go

FROM node:lts-alpine AS fe_builder

WORKDIR /app

COPY ui/package.json ui/yarn.lock ./

RUN yarn install

COPY ui/webpack.config.js .
COPY ui/src ./src

RUN yarn build

FROM alpine:latest AS runner
COPY --from=go_builder /main ./
COPY ui/public ./ui/public
COPY --from=fe_builder /app/dist ./ui/dist
ENTRYPOINT ["./main"]
