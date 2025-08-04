export const GAME_BOARD_WIDTH = 10;
export const GAME_BOARD_HEIGHT = 20;

export const rootStyles = {
    '--tile-size': '20px',
    '--tile-color': '#eee',
    '--tile-active-color': '#222',
    '--game-board-width': GAME_BOARD_WIDTH,
    '--game-board-width2': 4,
    '--game-board-height': GAME_BOARD_HEIGHT,
    '--game-board-gap': '2px',
    '--game-board-background': '#333',
};

// export const keyCodes = {
//     start: ['Enter'],
//     pause: ['KeyP'],
//     terminate: ['Escape', 'KeyQ'],
//     up: ['ArrowUp', 'KeyW', 'KeyI'],
//     right: ['ArrowRight', 'KeyD', 'KeyL'],
//     down: ['ArrowDown', 'KeyS', 'KeyK'],
//     left: ['ArrowLeft', 'KeyA', 'KeyJ'],
//     action: ['Space'],
// };


export const keyCodes = [
    ['Enter'],
    ['KeyP'],
    ['KeyQ', 'Escape'],
    ['ArrowLeft', 'KeyA'],
    ['ArrowRight', 'KeyD'],
    ['ArrowUp', 'KeyW'],
    ['ArrowDown', 'KeyS'],
    ['Space'] ];
