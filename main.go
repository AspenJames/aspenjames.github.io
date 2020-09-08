package main

import (
	"github.com/aspenjames/aspenjames.dev/api"
)

func main() {
	router := api.SetupRouter()
	router.Run(":4000") // run on port 4000
}
