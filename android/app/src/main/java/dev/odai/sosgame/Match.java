package dev.odai.sosgame;

public class Match {
    private CompletedMove[] turn_history;
    private int current_turn_number;

    private Player red_player;
    private Player blue_player;

    private Board board;
    private EnumMode game_mode;

    public boolean check_move() {
        return false;
    }
}
