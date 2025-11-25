document.addEventListener('DOMContentLoaded', function() {
    particlesJS('particles-js', {
      "particles": {
        "number": {
          "value": 200, 
          "density": {
            "enable": true,
            "value_area": 600
          }
        },
        "color": {
          "value": ["#ff0000", "#00ffff"] 
        },
        "shape": {
          "type": "circle",
        },
        "opacity": {
          "value": 0.5,
          "random": true,
          "anim": {
            "enable": false,
          }
        },
        "size": {
          "value": 2.5,
        },
        "line_linked": {
          "enable": true,
          "distance": 500, 
          "color": "#1e3a8a", 
          "opacity": 0.5,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 1,
          "direction": "none",
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": false,
          },
          "resize": true
        },
      },
      "retina_detect": true
    });
});