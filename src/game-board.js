import { GAME_BOARD_WIDTH, GAME_BOARD_HEIGHT } from './config.js';
// import { Tile } from './tile.js';

class Tile {
    constructor(y, x) {
        const $tile = document.createElement('div');
        $tile.className = 'tile';
        $tile.id = `position-${y}-${x}`;
        return $tile;
    }
}

export class GameBoard {
    constructor($gameBoard, height, width) {
        this.element = $gameBoard;
        this.height = height;
        this.width = width;
        for (let y = 0; y < this.height; ++y) {
            for (let x = 0; x < this.width; ++x) {
                // console.log(this.element);
                this.element.append(new Tile(y, x));
            }
        }
    }

    getTile(y, x) {
        return (this.element.children[y * GAME_BOARD_WIDTH + x]);
        // return this.tiles[y * GAME_BOARD_WIDTH + x];
    }

    // enableTile(y, x) {
    //     console.log(updateCurrentState());
    //     this.getTile(x, y).classList.add('active');
    // }

    // disableTile(y, x) {
    //     this.getTile(x, y).classList.remove('active');
    // }

    setTile(y, x, value) {
        if (value) {
            this.getTile(x, y).classList.add('active');
        } else {
            this.getTile(x, y).classList.remove('active');
        }
    }

    reset() {
        for (let y = 0; y < this.height; ++y) {
            for (let x = 0; x < this.width; ++x) {
                this.disableTile(y, x);
            }
        }
    }
}
