import { Letter } from "@/enums"
import Coordinates from "./Coordinates"
import Square from "./Square"

/**
 * Class for storing board data for match.
 */
class Board {
    public readonly MIN_SIZE: number = 3
    public readonly MAX_SIZE: number = 5

    public readonly rows: number
    public readonly columns: number

    public content: Square[][]

    constructor(rows: number, columns: number) {
        this.rows = rows
        this.columns = columns

        this.content = []
        for (let i = 0; i < this.rows; i++) {
            this.content[i] = []
            for (let j = 0; j < columns; j++) {
                const location = new Coordinates(i, j)
                this.content[i][j] = new Square(location)
            }
        }
    }

    /**
     * Retrieve a square based on Coordinates object.
     * 
     * @param location Coordinates object to use
     * @returns Square of requested location, or an empty square if out of bounds
     */
    public get_square(location: Coordinates): Square {
        if (location.row < this.rows && location.column < this.columns) {
            return this.content[location.row][location.column]
        }
        else {
            return new Square(location)
        }
    }

    /**
     * Boolean check on if any board squares are empty.
     * 
     * @returns TRUE if empty squares exist, FALSE otherwise
     */
    public has_empty_spaces(): boolean {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                if (this.content[i][j].content == Letter.NULL) {
                    return true
                }
            }
        }

        return false
    }
}

export default Board
