import { Link, useMediaQuery } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";

import ContainerRight from "../components/ContainerRight";
import TextRight from "../components/TextRight";

function About() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const containerWidth = isMobile ? "sm" : "md";
  return (
    <ContainerRight maxWidth={containerWidth}>
      <TextRight variant="h2" color="primary">
        Nice to meet you!
      </TextRight>
      <TextRight variant="h5" component="p" color="textPrimary">
        I'm a full stack engineer; I build web-based software products with a
        focus on developer tooling and automation. I am a trans/non-binary queer
        person, and I use they/them pronouns. I live and work on the{" "}
        <Link href="https://www.duwamishtribe.org/history">
          unceded territory of the Dx&#695;d&#601;w&#660;ab&scaron;
        </Link>
        , and it's important to me that I acknowledge this and{" "}
        <Link href="https://www.realrentduwamish.org/">pay rent</Link> to the
        original people of this land. When I'm not working, I enjoy making and
        drinking coffee, film and Polaroid photography, and generally being
        around trees and nature.
      </TextRight>
      <br />
      <TextRight variant="h5" component="p" color="textPrimary">
        Here's a fun{" "}
        <Link component={NavLink} to="/particles">
          particle animation
        </Link>{" "}
        I made with Go to experiment with and learn a bit about WebAssembly! If
        you're using a mouse, you can push the particles around with your mouse!
        For more info on the work I do, check out my{" "}
        <Link component={NavLink} to="/resume">
          resume
        </Link>.
      </TextRight>
    </ContainerRight>
  );
}

export default About;
