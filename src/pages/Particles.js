import { useEffect } from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((_) => ({
  canvas: {
    margin: 0,
    padding: 0,
    position: "absolute",
    top: 0,
    left: 0,
  },
}));

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
  const classes = useStyles();
  return <canvas id="canvas" className={classes.canvas}></canvas>;
}

export default Particles;
