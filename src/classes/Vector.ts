import { Direction } from '../enums'

/**
 * Class for containing a direction of movement. 
 * Used for implementing search logic.
 */
class Vector {
    public direction: Direction

    constructor(direction: Direction) {
        this.direction = direction
    }

    /**
     * Return the opposing direction enum.
     * E.g. if vector contains UP, this function will return DOWN.
     * 
     * @returns Enum for opposite direction
     */
    public get_inverse(): Direction {
        switch(this.direction) {
            case Direction.UP:
                return Direction.DOWN

            case Direction.UPRIGHT:
                return Direction.DOWNLEFT

            case Direction.RIGHT:
                return Direction.LEFT

            case Direction.DOWNRIGHT:
                return Direction.UPLEFT

            case Direction.DOWN:
                return Direction.UP

            case Direction.DOWNLEFT:
                return Direction.UPRIGHT

            case Direction.LEFT:
                return Direction.RIGHT

            case Direction.UPLEFT:
            default:
                return Direction.DOWNRIGHT
        }
    }
}

export default Vector
