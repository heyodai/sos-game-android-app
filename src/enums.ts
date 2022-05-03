enum GameMode {
    SIMPLE,
    GENERAL,
}

enum PlayerColor {
    RED,
    BLUE,
    NULL,
}

enum Letter {
    S,
    O,
    NULL,
}

enum Direction {
    UP,
    UPRIGHT,
    RIGHT,
    DOWNRIGHT,
    DOWN,
    DOWNLEFT,
    LEFT,
    UPLEFT,
}

enum UiScreen {
    HOME,
    CREDITS,
    REPLAY,
    SETUP,
    MATCH,
}

enum MatchTransition {
    START,
    END,
}

export { GameMode, PlayerColor, Letter, Direction, UiScreen, MatchTransition, }
