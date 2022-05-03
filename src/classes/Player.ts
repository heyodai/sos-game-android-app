import { PlayerColor, } from "@/enums"

class Player {
    public readonly color: PlayerColor
    public readonly is_human: boolean

    constructor(color: PlayerColor, is_human: boolean) {
        this.color = color
        this.is_human = is_human
    }   
}

export default Player
