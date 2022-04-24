class PlayerDataObject {
    constructor(color, letter) {
        this.color = color
        this.letter = letter
        
        this.is_active = false
        this.is_human = true
    }
}

export default PlayerDataObject