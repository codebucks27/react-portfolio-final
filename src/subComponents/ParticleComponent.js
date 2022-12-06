import styled from "styled-components";
import ConfigDark from "../config/particlesjs-config.json";
import ConfigLight from "../config/particlesjs-config-light.json";

// import Particles from "react-particles-js"
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Box = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
`;

const ParticlesComponent = (props) => {
// This is new implementation where I have used react-tsparticles instead of react-particles-js
  const particlesInit = async (main) => {
    await loadFull(main);
  };


  return (
    <Box>
      <Particles
        id="tsparticles"
        style={{ position: "absolute", top: 0 }}
        params={props.theme === "light" ? ConfigLight : ConfigDark}
        init={particlesInit} 
      />
    </Box>
  );
};

export default ParticlesComponent;
