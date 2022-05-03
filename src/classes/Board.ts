import { Letter } from "@/enums"
import Coordinates from "./Coordinates"
import Square from "./Square"

class Board {
    public readonly MIN_SIZE: number = 3
    public readonly MAX_SIZE: number = 5

    public readonly rows: number
    public readonly columns: number

    public content: Square[][]

    constructor(rows: number, columns: number) {
        this.rows = rows
        this.columns = columns

        this.content = [];
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < columns; j++) {
                const location = new Coordinates(i, j)
                this.content[i][j] = new Square(location)
            }
        }
    }
}

export default Board
