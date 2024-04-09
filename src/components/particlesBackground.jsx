import React, { useCallback, useMemo } from 'react'
import Particles from "react-tsparticles";
import ParticlesConfiguration from './config/particles.config';
// import {loadFull} from "tsparticles"
import {loadSlim} from "tsparticles-slim"
import {Box } from "@mui/material";

const ParticlesBackground = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    
  return (
    <>
    <Box sx={{position:"absolute"}}>
     <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            // options={{
            //     background: {
            //         color: {
            //             value: "#ffffff",
            //         },
            //     },
               
            //     fpsLimit: 120,
            //     interactivity: {
            //         events: {
            //             onClick: {
            //                 enable: true,
            //                 mode: "push",
            //             },
            //             onHover: {
            //                 enable: true,
            //                 mode: "repulse",
            //             },
            //             resize: true,
            //         },
            //         modes: {
            //             push: {
            //                 quantity: 4,
            //             },
            //             repulse: {
            //                 distance: 200,
            //                 duration: 0.4,
            //             },
            //         },
            //     },
            //     particles: {
            //         color: {
            //             value: "#00FF00",
            //         },
            //         links: {
            //             color: "#000",
            //             distance: 150,
            //             enable: true,
            //             opacity: 0.5,
            //             width: 1,
            //         },
            //         move: {
            //             direction: "none",
            //             enable: true,
            //             outModes: {
            //                 default: "bounce",
            //             },
            //             random: false,
            //             speed: 6,
            //             straight: false,
            //         },
            //         number: {
            //             density: {
            //                 enable: true,
            //                 area: 800,
            //             },
            //             value: 80,
            //         },
            //         opacity: {
            //             value: 0.5,
            //         },
            //         shape: {
            //             type: "circle",
            //         },
            //         size: {
            //             value: { min: 1, max: 5 },
            //         },
            //     },
            //     detectRetina: true,
            // }}
            options={{
                background: {
                    color: {
                        value: "#fff",
                    },
                },
                fullScreen: false,
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                            mode: "push",
                        },
                        onHover: {
                            enable: false,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                smooth:true,
                particles: {
                    color: {
                        value: "#0d47a1",
                    },
                    links: {
                        color: "#0d47a1",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 3,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1000,
                        },
                        value: 150,
                    },
                    opacity: {
                        value: 0.6,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
            // options={
            // ParticlesConfiguration}
        />
    </Box>
    </>
  )
}

export default ParticlesBackground
