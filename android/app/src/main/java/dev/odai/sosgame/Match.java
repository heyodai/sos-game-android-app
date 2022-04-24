package dev.odai.sosgame;

public class Match {
    private CompletedMove[] turn_history;
    private int current_turn_number;

    private Player red_player;
    private Player blue_player;

    private Board board;
    private EnumMode game_mode;

    public Match(int board_size, EnumMode game_mode) {
        this.current_turn_number = 1;

        this.red_player = new Player();
        this.blue_player = new Player();

        this.board = new Board(board_size);
        this.game_mode = game_mode;
    }

    public boolean check_move() {
        return false;
    }
}
