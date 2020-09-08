package api

import "github.com/gin-gonic/gin"

// SetupRouter sets up the gin.Engine (default for now), defines routes, and
// reutrns a pointer to gin.Engine
func SetupRouter() *gin.Engine {
	router := gin.Default()
	routes(router)
	return router
}

func routes(r *gin.Engine) {
	r.GET("/ping", PingGet)
}

// PingGet defines a GET '/ping', returning 200 JSON
func PingGet(c *gin.Context) {
	c.JSON(200, gin.H{
		"message": "[from api service] ping!",
	})
}
