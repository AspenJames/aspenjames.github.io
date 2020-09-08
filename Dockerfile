FROM golang:1.15-alpine AS builder

WORKDIR /app

COPY go.mod go.sum ./

RUN go mod download

COPY . .

RUN go build -o /main .

FROM alpine:latest AS runner
COPY --from=builder /main ./
ENTRYPOINT ["./main"]
