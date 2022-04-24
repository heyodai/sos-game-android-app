package dev.odai.sosgame;

public class Board {
    private int MIN_SIZE = 3;
    private int MAX_SIZE = 5;

    private int rows, columns;
    private Square[][] content;

    public Board(int size) {
        this.rows = size;
        this.columns = size;
        this.init_board();
    }

    private void init_board() {
        EnumLetter letter = EnumLetter.NULL;
        EnumPlayer player = EnumPlayer.NULL;
        this.content = new Square[this.rows][this.columns];

        for (int i = 0; i < this.rows; i++) {
            for (int j = 0; j < this.columns; j++) {
                Coordinates location = new Coordinates(i, j);
                content[i][j] = new Square(letter, location, player);
            }
        }
    }

    public void search() {

    }
}
