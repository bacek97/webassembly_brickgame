import { applyRootStyles } from './src/utils.js';
import { GameBoard } from './src/game-board.js';
import { rootStyles, keyCodes, GAME_BOARD_HEIGHT, GAME_BOARD_WIDTH } from './src/config.js';


// import createModule from './tetris.js';
import createModule from './tetris.js';
const Module = await createModule();
// Module._userInput(0, 0);
// Module._userInput(0, 0);
// Module._userInput(0, 0);
// Module._userInput(0, 0);
console.log(Module);

applyRootStyles(rootStyles);
const field = new GameBoard(document.querySelector('#field'), GAME_BOARD_HEIGHT, GAME_BOARD_WIDTH);
const next = new GameBoard(document.querySelector('#next'), 4, 4);

const $sidePanel = document.querySelector('#side-panel');

function createEnum(...keys) {
  return Object.freeze(
    keys.reduce((acc, key, i) => {
    //   acc[key] = Symbol("UserAction_t: " + key);
      acc[key] = i;
      return acc;
    }, {})
  );
}

const action = createEnum('Start', 'Pause', 'Terminate', 'Up', 'Right', 'Down', 'Left', 'Action');
console.log(action); // Symbol(ADD)

// let recipeMap = new Map([
//   ["огурец", 500],
//   ["помидор", 350],
//   ["лук",    50]
// ]);

requestAnimationFrame(function raf1() {
                    Module._updateCurrentState();
                let arr = field.element.children;
                for (let i = 0; i < arr.length; ++i) {
                    if (Module.HEAPU32[( Module.HEAPU32[( Module.HEAPU32[0/4] )/4] )/4 + i]) {
                        field.element.children[i].classList.add('active');
                    } else {
                        field.element.children[i].classList.remove('active');
                    }
                }

                
                arr = next.element.children;
                for (let i = 0; i < arr.length; ++i) {
                    if (Module.HEAPU32[( Module.HEAPU32[( Module.HEAPU32[4/4] )/4] )/4 + i]) {
                        next.element.children[i].classList.add('active');
                    } else {
                        next.element.children[i].classList.remove('active');
                    }
                }

                // console.log("okey");

                setTimeout(() => {
                    requestAnimationFrame(raf1);
                }, 100);
})

document.addEventListener('keydown', function (event) {
    let action = (keyCodes.findIndex(e => e.includes(event.code)) )
    if (action !== -1) {
        // console.log(`Action: ${action}, Hold: ${event.repeat}`);
        // Module._updateCurrentState();
        console.log(action)
        Module._userInput(action, false);
        // if (action === 3) {
            // setTimeout(() => {
            //     Module._updateCurrentState();
            //     let arr = field.element.children;
            //     for (let i = 0; i < arr.length; ++i) {
            //         if (Module.HEAPU32[( Module.HEAPU32[( Module.HEAPU32[0/4] )/4] )/4 + i]) {
            //             field.element.children[i].classList.add('active');
            //         } else {
            //             field.element.children[i].classList.remove('active');
            //         }
            //     }

                
            //     arr = next.element.children;
            //     for (let i = 0; i < arr.length; ++i) {
            //         if (Module.HEAPU32[( Module.HEAPU32[( Module.HEAPU32[4/4] )/4] )/4 + i]) {
            //             next.element.children[i].classList.add('active');
            //         } else {
            //             next.element.children[i].classList.remove('active');
            //         }
            //     }
            // }, 1000);
        // }
        console.log(Module.HEAPU32)
    }
    // if (keyCodes.up.includes(event.code)) {
    //     // field.enableTile(4, 5);
    //     Module._userInput(1,1);
    //     Module._updateCurrentState();
    //     let arr = field.element.children;
    //         for (let i = 0; i < arr.length; ++i)
    //             if (HEAPU32[( HEAPU32[( HEAPU32[0/4] )/4] )/4 + i] ) {
    //                 field.element.children[i].classList.add('active');
    //             } else {
    //                 field.element.children[i].classList.remove('active');
    //             }
    //     // });

    //     console.log(event.code);
    // }
    // if (keyCodes.right.includes(event.code)) {
    //     field.disableTile(4, 5);
    //     console.log('right');
    // }
    // if (keyCodes.down.includes(event.code)) {
    //     Module._userInput(4,1);
    //     Module._updateCurrentState();
    //     let arr = field.element.children;
    //         for (let i = 0; i < arr.length; ++i)
    //             if (HEAPU32[( HEAPU32[( HEAPU32[0/4] )/4] )/4 + i] ) {
    //                 field.element.children[i].classList.add('active');
    //             } else {
    //                 field.element.children[i].classList.remove('active');
    //             }
    // }
    // if (keyCodes.left.includes(event.code)) {
    //     field.reset();
    //     console.log('left');
    // }
});

// eval (await (await fetch("./a.out.js")).text())
