package dev.odai.sosgame;

/**
 * Class definition for Coordinates object.
 *
 * Allows standardized way of passing coordinate info.
 */
public class Coordinates {
    private int row, column;

    /**
     * Class constructor for Coordinates object.
     *
     * @param row The row on the board.
     * @param column The column on the board.
     */
    public Coordinates(int row, int column) {
        this.row = row;
        this.column = column;
    }

    /**
     * Update the row.
     *
     * @param row The new row location.
     */
    public void set_row(int row) {
        this.row = row;
    }

    /**
     * Update the column.
     *
     * @param column The new column location.
     */
    public void set_column(int column) {
        this.column = column;
    }

    /**
     * Get the row for the object.
     *
     * @return int for row.
     */
    public int get_row() {
        return this.row;
    }

    /**
     * Get the column for the object.
     *
     * @return int for the column.
     */
    public int get_column() {
        return this.column;
    }
}
