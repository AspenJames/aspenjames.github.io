package main

import (
	"fmt"
	"math"
	"math/rand"
	"syscall/js"
)

var (
	canvas    js.Value
	ctx       js.Value
	document  js.Value
	colors    []color
	mouse     cursor
	particles []*particle
	done      chan bool
)

type color struct {
	r int
	g int
	b int
}

type cursor struct {
	x      float64
	y      float64
	radius float64
}

type particle struct {
	x          float64
	y          float64
	directionX float64
	directionY float64
	size       float64
	c          color
}

func (p *particle) colorStr() string {
	return fmt.Sprintf("rgba(%d, %d, %d, 1)", p.c.r, p.c.g, p.c.b)
}

func (p *particle) draw() {
	ctx.Call("beginPath")
	ctx.Call("arc", p.x, p.y, p.size, 0, math.Pi*2)
	ctx.Set("fillStyle", p.colorStr())
	ctx.Call("fill")
}

func newRandomParticle() *particle {
	size := rand.Float64()*5 + 1
	canvW := float64(canvas.Get("width").Int())
	canvH := float64(canvas.Get("height").Int())
	colorIdx := rand.Intn(len(colors))

	return &particle{
		x:          rand.Float64()*((canvW-size*2)-size*2) + size*2,
		y:          rand.Float64()*((canvH-size*2)-size*2) + size*2,
		directionX: rand.Float64()*5 - 2.5,
		directionY: rand.Float64()*5 - 2.5,
		size:       size,
		c:          colors[colorIdx],
	}
}

func init() {
	// Create "done" channel -- keeps thread from exiting early.
	done = make(chan bool)
	// Grab documment and canvas element.
	document = js.Global().Get("document")
	canvas = document.Call("getElementById", "canvas")
	// Get canvas 2d context.
	ctx = canvas.Call("getContext", "2d")
	// Add particle colors.
	pink := &color{r: 244, g: 143, b: 177}
	blue := &color{r: 0, g: 204, b: 204}
	colors = append(colors, *pink, *blue)
	// Fit canvas to window size, populate particles.
	fitCanvasAndInitParticles()
	bindEventListeners()
}

func bindEventListeners() {
	// Set mouse position on mousemove.
	mouseCb := js.FuncOf(func(this js.Value, args []js.Value) interface{} {
		ev := args[0]
		mouse.x = float64(ev.Get("x").Int())
		mouse.y = float64(ev.Get("y").Int())
		return nil
	})
	js.Global().Call("addEventListener", "mousemove", mouseCb)
	// Re-init on window resize.
	resizeCb := js.FuncOf(func(this js.Value, args []js.Value) interface{} {
		fitCanvasAndInitParticles()
		return nil
	})
	js.Global().Call("addEventListener", "resize", resizeCb)
}

func fitCanvasAndInitParticles() {
	windowW := js.Global().Get("innerWidth").Int()
	windowH := js.Global().Get("innerHeight").Int()
	canvas.Set("width", windowW)
	canvas.Set("height", windowH)
	// Scale mouse radius relative to window size.
	mouse.radius = (float64(windowW) / 120) * float64((windowH)/120)
	// Reset particles array, populate proportional to canvas size.
	particles = []*particle{}
	numParticles := (windowW * windowH) / 9000
	for i := 0; i < numParticles; i++ {
		particles = append(particles, newRandomParticle())
	}
}

func main() {
	// Draw each particle.
	for _, p := range particles {
		p.draw()
	}
	<-done
}
