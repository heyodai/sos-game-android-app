import Coordinates from "@/classes/Coordinates"
import { PlayerColor, Letter, } from "@/enums"
import MoveEvaluationAi from "./MoveEvaluationAi"

/**
 * Class for evaluation responses to human moves.
 * Extension of AI class.
 */
class MoveEvaluationHuman extends MoveEvaluationAi {
    constructor(player: PlayerColor, letter: Letter, location: Coordinates, 
        is_scoring: boolean, is_winning: boolean, is_accepted: boolean) {
            super(player, letter, location, is_scoring, is_winning)
            this.is_accepted = is_accepted
    }
}

export default MoveEvaluationHuman
