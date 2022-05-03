import { PlayerColor, GameMode, } from "@/enums"
import Board from "./Board"
import Player from "./Player"
import MoveRecord from "../actions/MoveRecord"

class Match {
    private turn: number
    // private history: MoveRecord[]

    public red_player: Player
    public blue_player: Player

    public board: Board
    public mode: GameMode

    constructor(mode: GameMode, size: number, is_red_human: boolean, is_blue_human: boolean) {
        this.turn = 0

        this.board = new Board(size, size)
        this.mode = mode

        this.red_player = new Player(PlayerColor.RED, is_red_human)
        this.blue_player = new Player(PlayerColor.BLUE, is_blue_human)
    }
}

export default Match
