#!/usr/bin/env bash
GOOS=js GOARCH=wasm go build -o public/wasm/particle.wasm wasm/main.go
