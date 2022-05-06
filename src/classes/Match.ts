import { PlayerColor, GameMode, Letter, Direction, } from "@/enums"
import Board from "./Board"
import Player from "./Player"
import Coordinates from "./Coordinates"
import MoveRecord from "../actions/MoveRecord"
import MoveRequestAi from "@/actions/MoveRequestAi"
import MoveProposalHuman from "@/actions/MoveProposalHuman"
import MoveEvaluationAi from "@/actions/MoveEvaluationAi"
import MoveEvaluationHuman from "@/actions/MoveEvaluationHuman"
import Square from "./Square"

/**
 * Class for match business logic.
 */
class Match {
    private turn: number
    private history: MoveRecord[]

    public red_player: Player
    public blue_player: Player

    public board: Board
    public mode: GameMode

    constructor(mode: GameMode, size: number, is_red_human: boolean, is_blue_human: boolean) {
        this.turn = 0
        this.history = []

        this.board = new Board(size, size)
        this.mode = mode

        this.red_player = new Player(PlayerColor.RED, is_red_human)
        this.blue_player = new Player(PlayerColor.BLUE, is_blue_human)
    }

    /**
     * Take a human move proposal and generate a response.
     * 
     * @param move Move that human player requests
     * @returns Evaluation of proposal
     */
    public check_human_move(move: MoveProposalHuman): MoveEvaluationHuman {
        const row = move.location.row
        const column = move.location.column
        const is_free = this.board.content[row][column].content == Letter.NULL

        let is_scoring = false
        let is_winning = false

        if (is_free) {
            is_scoring = this.is_scoring(move.letter, move.location)
            is_winning = this.mode == GameMode.SIMPLE ? is_scoring : this.board.has_empty_spaces()

            const record = new MoveRecord(move.player, move.letter, move.location, is_scoring, is_winning, this.turn)
            this.history.push(record)

            this.turn += 1
        }

        return new MoveEvaluationHuman(move.player, move.letter, move.location, is_scoring, is_winning, is_free)
    }

    public get_ai_move(move: MoveRequestAi): MoveEvaluationAi {
        const player = move.player
        const location = this.get_free_location()
        const letter = this.get_random(2) == 0 ? Letter.S : Letter.O

        const square = new Square(location)
        square.content = letter
        square.player = player
        this.board.content[location.row][location.column] = square

        const is_scoring = this.is_scoring(letter, location)
        const is_winning = this.mode == GameMode.SIMPLE ? is_scoring : this.board.has_empty_spaces()

        const record = new MoveRecord(player, letter, location, is_scoring, is_winning, this.turn)
        this.history.push(record)

        this.turn += 1
        return new MoveEvaluationAi(player, letter, location, is_scoring, is_winning)
    }

    private get_free_location(): Coordinates {
        let row = 0
        let column = 0

        let keep_going = true
        while (keep_going) {
            row = this.get_random(this.board.rows)
            column = this.get_random(this.board.columns)

            keep_going = !(this.board.content[row][column].content == Letter.NULL)
        }

        return new Coordinates(row, column)
    }

    /**
     * Get a random number between 0 and an optional max.
     * 
     * @param max (Optional | Default = 1) Upper limit for random number
     * @returns Random number
     * 
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
     */
    private get_random(max = 1): number {
        return Math.floor(Math.random() * max);
    }

    private is_scoring(letter: Letter, location: Coordinates): boolean {
        const upleft: Coordinates = location.get_offset(Direction.UPLEFT)
        const up: Coordinates = location.get_offset(Direction.UP)
        const upright: Coordinates = location.get_offset(Direction.UPRIGHT)
        const right: Coordinates = location.get_offset(Direction.RIGHT)
        const downright: Coordinates = location.get_offset(Direction.DOWNRIGHT)
        const down: Coordinates = location.get_offset(Direction.DOWN)
        const downleft: Coordinates = location.get_offset(Direction.DOWNLEFT)
        const left: Coordinates = location.get_offset(Direction.LEFT)

        if (letter == Letter.O) {
            if (this.board.get_square(upleft).content == Letter.S &&
                this.board.get_square(downright).content == Letter.S) {
                return true
            }

            if (this.board.get_square(up).content == Letter.S &&
                this.board.get_square(down).content == Letter.S) {
                return true
            }

            if (this.board.get_square(upright).content == Letter.S &&
                this.board.get_square(downleft).content == Letter.S) {
                return true
            }

            if (this.board.get_square(right).content == Letter.S &&
                this.board.get_square(left).content == Letter.S) {
                return true
            }
        }
        else { // Letter.S
            let offset: Coordinates;

            if (this.board.get_square(upleft).content == Letter.O) {
                offset = upleft.get_offset(Direction.UPLEFT)
                if (this.board.get_square(offset).content == Letter.S) {
                    return true
                }
            }

            if (this.board.get_square(up).content == Letter.O) {
                offset = up.get_offset(Direction.UP)
                if (this.board.get_square(offset).content == Letter.S) {
                    return true
                }
            }

            if (this.board.get_square(upright).content == Letter.O) {
                offset = upright.get_offset(Direction.UPRIGHT)
                if (this.board.get_square(offset).content == Letter.S) {
                    return true
                }
            }

            if (this.board.get_square(right).content == Letter.O) {
                offset = right.get_offset(Direction.RIGHT)
                if (this.board.get_square(offset).content == Letter.S) {
                    return true
                }
            }

            if (this.board.get_square(downright).content == Letter.O) {
                offset = downright.get_offset(Direction.DOWNRIGHT)
                if (this.board.get_square(offset).content == Letter.S) {
                    return true
                }
            }

            if (this.board.get_square(down).content == Letter.O) {
                offset = down.get_offset(Direction.DOWN)
                if (this.board.get_square(offset).content == Letter.S) {
                    return true
                }
            }

            if (this.board.get_square(downleft).content == Letter.O) {
                offset = downleft.get_offset(Direction.DOWNLEFT)
                if (this.board.get_square(offset).content == Letter.S) {
                    return true
                }
            }

            if (this.board.get_square(left).content == Letter.O) {
                offset = left.get_offset(Direction.LEFT)
                if (this.board.get_square(offset).content == Letter.S) {
                    return true
                }
            }
        }

        return false
    }
}

export default Match
