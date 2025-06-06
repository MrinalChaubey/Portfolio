const particlesConfig = {
  background: {
    color: {
      value: "#121212", // very dark background
    },
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "connect", // new mode for linking nearby particles on hover
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      connect: {
        distance: 120,
        links: {
          opacity: 0.25,
        },
        radius: 150,
      },
    },
  },
  particles: {
    color: {
      value: "#80ffdb", // soft minty glow
    },
    links: {
      color: "#80ffdb",
      distance: 120,
      enable: true,
      opacity: 0.2,
      width: 1.2,
      blink: true, // links will softly blink for a nice effect
      consent: false,
    },
    move: {
      enable: true,
      speed: 0.6,
      direction: "none",
      random: true,
      straight: false,
      outModes: {
        default: "out",
      },
      attract: {
        enable: true,
        rotateX: 400,
        rotateY: 800,
      },
    },
    number: {
      value: 80,
      density: {
        enable: true,
        area: 900,
      },
    },
    opacity: {
      value: 0.3,
      animation: {
        enable: true,
        speed: 1,
        minimumValue: 0.1,
        sync: false,
      },
    },
    shape: {
      type: "polygon",
      options: {
        polygon: {
          sides: 6, // hexagon shape
        },
      },
    },
    size: {
      value: 4,
      random: { enable: true, minimumValue: 2 },
      animation: {
        enable: true,
        speed: 3,
        minimumValue: 1,
        sync: true,
      },
    },
  },
  detectRetina: true,
};

export default particlesConfig;
