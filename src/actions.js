class MatchStartProposal {
    constructor(board_size, game_mode) {
        this.board_size = board_size
        this.game_mode = game_mode
    }
}

class MatchEndProposal {
    constructor() {

    }
}

class MoveProposalAi {
    constructor(player) {
        this.player = player
    }
}

class MoveProposalHuman extends MoveProposalAi {
    constructor(player, location, letter) {
        super(player)
        this.location = location
        this.letter = letter
    }
}

// class HistoryProposal {
    /**
     * Placeholder class for now. Next sprint will add the following:
     * 
     * - rewind move
     * - replay match
     * - save match
     * - export match
     */
// }

export default { 
    MatchStartProposal, 
    MatchEndProposal,
    MoveProposalAi,
    MoveProposalHuman, 
}