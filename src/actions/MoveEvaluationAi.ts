import Coordinates from "@/classes/Coordinates"
import { PlayerColor, Letter, } from "@/enums"

/**
 * Class for evaluation responses to AI moves.
 */
class MoveEvaluationAi {
    public player: PlayerColor
    public letter: Letter
    public location: Coordinates

    public is_scoring: boolean
    public is_winning: boolean
    public is_accepted = false

    constructor(player: PlayerColor, letter: Letter, location: Coordinates, 
        is_scoring: boolean, is_winning: boolean) {
            this.player = player
            this.letter = letter 
            this.location = location

            this.is_scoring = is_scoring
            this.is_winning = is_winning
    }
}

export default MoveEvaluationAi
