import MoveRequestAi from "./MoveRequestAi"
import Coordinates from "@/classes/Coordinates"
import { PlayerColor, Letter, } from "@/enums" 

class MoveProposalHuman extends MoveRequestAi {
    public letter: Letter
    public location: Coordinates

    constructor(player: PlayerColor, letter: Letter, location: Coordinates) {
        super(player)
        this.is_ai = false
        this.letter = letter
        this.location = location
    }
}

export default MoveProposalHuman
