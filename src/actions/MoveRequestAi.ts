import { PlayerColor } from '../enums'

class MoveRequestAi {
    public player: PlayerColor
    public is_ai: boolean

    constructor(player: PlayerColor) {
        this.player = player
        this.is_ai = true
    }
}

export default MoveRequestAi
