package api

import (
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/go-playground/assert/v2"
)

func TestPingGet(t *testing.T) {
	router := SetupRouter()
	w := httptest.NewRecorder()
	req, _ := http.NewRequest("GET", "/ping", nil)
	router.ServeHTTP(w, req)

	type pingReturn struct {
		Message string `json:"message"`
	}

	expectedResponse := &pingReturn{
		"[from api service] ping!",
	}

	var pingResponse pingReturn
	if e := json.NewDecoder(w.Body).Decode(&pingResponse); e != nil {
		t.Fatal(e)
	}

	assert.Equal(t, 200, w.Code)
	assert.Equal(t, expectedResponse, pingResponse)
}
