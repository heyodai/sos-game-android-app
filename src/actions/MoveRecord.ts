import Coordinates from "@/classes/Coordinates"
import { PlayerColor, Letter, } from "@/enums"
import MoveEvaluationAi from "./MoveEvaluationAi"

class MoveRecord extends MoveEvaluationAi {
    public turn: number

    constructor(player: PlayerColor, letter: Letter, location: Coordinates, 
        is_scoring: boolean, is_winning: boolean, turn: number) {
            super(player, letter, location, is_scoring, is_winning)
            this.turn = turn
    }
}

export default MoveRecord
