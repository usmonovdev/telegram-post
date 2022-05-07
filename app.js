// let circle = document.querySelector('.circle');
// let moveBy = 50;

// window.addEventListener('load', () => {
//     circle.style.position = 'absolute';
//     circle.style.left = 0;
//     circle.style.top = 0;
// });


// window.addEventListener('keyup', (f) => {
//     switch (f.key) {
//         case 'ArrowLeft':
//             circle.style.left = parseInt(circle.style.left) - moveBy + 'px';
//             break;
//         case 'ArrowRight':
//             circle.style.left = parseInt(circle.style.left) + moveBy + 'px';
//             break;
//         case 'ArrowUp':
//             circle.style.top = parseInt(circle.style.top) - moveBy + 'px';
//             break;
//         case 'ArrowDown':
//             circle.style.top = parseInt(circle.style.top) + moveBy + 'px';
//             break;
//     }
// });

let shipSize = { width: 30, height: 30};
let position = { x: 200, y: 200};
let moveRate = 9;
let turnRate = 5;
let angle = 0;
let spaceship = document.getElementById("spaceship");

function updatePosition(offset) {
    let rad = angle * (Math.PI/180);
    position.x += (Math.sin(rad) * offset);
    position.y -= (Math.cos(rad) * offset);
  
    if (position.x < 0) {
      position.x = 399;
    } else if (position.x > 399) {
      position.x = 0;
    }
  
    if (position.y < 0) {
      position.y = 399;
    } else if (position.y > 399) {
      position.y = 0;
    }
}

function refresh() {
    let x = position.x - (shipSize.width/2);
    let y = position.y - (shipSize.height/2);
    let transform = "translate(" + x + " " + y + ") rotate(" + angle + " 15 15) ";
  
    spaceship.setAttribute("transform", transform);
}

window.addEventListener("keydown", function(event) {
    if (event.defaultPrevented) {
      return; // Do nothing if event already handled
    }
  
    switch(event.code) {
      case "KeyF":
      case "ArrowDown":
        // Handle "back"
        updatePosition(-moveRate);
        break;

      case "KeyG":
      case "ArrowUp":
        // Handle "forward"
        updatePosition(moveRate);
        break;

      case "KeyH":
      case "ArrowLeft":
        // Handle "turn left"
        angle -= turnRate;
        break;
        
      case "KeyJ":
      case "ArrowRight":
        // Handle "turn right"
        angle += turnRate;
        break;
    }
  
    refresh();
  
    // Consume the event so it doesn't get handled twice
    event.preventDefault();
}, true);