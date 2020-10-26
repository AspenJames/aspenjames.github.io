package main

import (
	"github.com/aspenjames/aspenjames.dev/api"
	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
)

func main() {
	// Set up api router
	router := api.SetupRouter()

	// Serve frontend files
	router.Use(static.Serve("/", static.LocalFile("./ui/public", false)))
	router.Use(static.Serve("/dist", static.LocalFile("./ui/dist", false)))

	// Override NoRoute to serve ./ui/public/index.html,
	// pass rest of route path to ReactRouter
	router.NoRoute(func(c *gin.Context) {
		c.Request.URL.Path = "/"
		router.HandleContext(c)
	})

	// run on port 4000
	router.Run(":4000")
}
