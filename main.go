package main

import (
	"github.com/aspenjames/aspenjames.dev/api"
	"github.com/gin-gonic/contrib/static"
)

func main() {
	// Set up api router
	router := api.SetupRouter()

	// Serve frontend files
	router.Use(static.Serve("/", static.LocalFile("./ui/public", true)))
	router.Use(static.Serve("/dist", static.LocalFile("./ui/dist", true)))

	// run on port 4000
	router.Run(":4000")
}
