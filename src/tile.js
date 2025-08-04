export class Tile {
    constructor(y, x) {
        const $tile = document.createElement('div');
        $tile.className = 'tile';
        $tile.id = `position-${y}-${x}`;
        return $tile;
    }
}
