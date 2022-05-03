import { PlayerColor } from "@/enums"
import Player from "./Player"

class ComputerPlayer extends Player {
    constructor(color: PlayerColor, is_human: boolean) {
        super(color, is_human)
    }   

    public get_move(): boolean {
        return false
    }
}

export default ComputerPlayer
