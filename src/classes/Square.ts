import { Letter, PlayerColor, } from "@/enums"
import Coordinates from "./Coordinates"

class Square {
    public content: Letter
    public location: Coordinates
    public player: PlayerColor

    constructor(location: Coordinates) {
        this.content = Letter.NULL
        this.player = PlayerColor.NULL

        this.location = location
    }
}

export default Square
