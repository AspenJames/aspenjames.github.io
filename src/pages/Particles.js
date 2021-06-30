import { useEffect } from "react";

function Particles() {
  useEffect(() => {
    const go = new window.Go();
    window.WebAssembly.instantiateStreaming(
      fetch("wasm/particle.wasm", {
        headers: { Accept: "application/wasm" },
      }),
      go.importObject
    ).then((result) => {
      go.run(result.instance);
    });
  }, []);
  return <canvas id="canvas"></canvas>;
}

export default Particles;
