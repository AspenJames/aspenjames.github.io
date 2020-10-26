package main

import (
	"net/http"

	"github.com/aspenjames/aspenjames.dev/api"
	"github.com/gin-gonic/gin"
)

func main() {
	// Set up api router
	router := api.SetupRouter()

	// Serve frontend files
	router.StaticFile("/", "./ui/public/index.html")
	router.StaticFS("/dist", http.Dir("./ui/dist"))

	// Override NoRoute to serve ./ui/public/index.html,
	// pass rest of route path to ReactRouter
	router.NoRoute(func(c *gin.Context) {
		c.Request.URL.Path = "/"
		router.HandleContext(c)
	})

	// run on port 4000
	router.Run(":4000")
}
