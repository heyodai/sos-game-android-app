import { Direction } from '../enums'

/**
 * Class for containing a row/column pair.
 */
class Coordinates {
    public row: number
    public column: number

    constructor(row: number, column: number) {
        this.row = row
        this.column = column
    }

    /**
     * Get a Coordinates object offset in desired direction.
     * 
     * @param vector Vector object indicating the direction to offset
     * @returns Coordinates object offset by the requested vector
     */
    public get_offset(direction: Direction): Coordinates {
        let row_offset: number = this.row
        let column_offset: number = this.column

        switch(direction) {
            case Direction.UP:
                column_offset -= 1
                break

            case Direction.UPRIGHT:
                column_offset -= 1
                row_offset += 1
                break

            case Direction.RIGHT:
                row_offset += 1
                break

            case Direction.DOWNRIGHT:
                column_offset += 1
                row_offset += 1
                break

            case Direction.DOWN:
                column_offset += 1
                break

            case Direction.DOWNLEFT:
                column_offset += 1
                row_offset -= 1
                break

            case Direction.LEFT:
                row_offset -= 1
                break

            case Direction.UPLEFT:
            default:
                row_offset -= 1
                column_offset -= 1
                break
        }

        return new Coordinates(row_offset, column_offset)
    }
}

export default Coordinates
