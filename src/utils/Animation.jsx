import React from "react";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const headerAnimation = keyframes`
    from {
        opacity: 0;
        transform: translateY(90px)
    }
    to {
        opacity: 1;
        transform: translateY(0)
    }
`

const projectsAnimation = keyframes`
    from {
        opacity: 0;
        transform: translateY(50px)
    }
    to {
        opacity: 1;
        transform: translateY(0)
    }
`

function HeaderAnimation({children}) {
    return <Reveal keyframes={headerAnimation} triggerOnce>{children}</Reveal>
}

function ProjectsAnimation({children}) {
    return <Reveal cascade damping={0.3} keyframes={projectsAnimation} triggerOnce>{children}</Reveal>
}

export {
    HeaderAnimation,
    ProjectsAnimation
}