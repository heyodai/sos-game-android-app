package dev.odai.sosgame;

public class Coordinates {
    private int row, column;

    public Coordinates(int row, int column) {
        this.row = row;
        this.column = column;
    }

    public void set_row(int row) {
        this.row = row;
    }

    public void set_column(int column) {
        this.column = column;
    }

    public int get_row() {
        return this.row;
    }

    public int get_column() {
        return this.column;
    }
}
