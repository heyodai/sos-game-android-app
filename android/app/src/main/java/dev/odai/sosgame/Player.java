package dev.odai.sosgame;

public class Player {
    private boolean is_human;
    private boolean is_active;

    private EnumLetter letter;
    private EnumPlayer color;

    private int score = 0;

    public Player(boolean is_human, boolean is_active, EnumLetter letter, EnumPlayer color, int score) {
        this.is_human = is_human;
        this.is_active = is_active;
        this.letter = letter;
        this.color = color;
        this.score = score;
    }

    public boolean is_human() {
        return this.is_human;
    }

    public boolean is_active() {
        return this.is_active;
    }

    public EnumLetter get_letter() {
        return this.letter;
    }

    public EnumPlayer get_color() {
        return this.color;
    }

    public int get_score() {
        return this.score;
    }

    public void set_is_human(boolean is_human) {
        this.is_human = is_human;
    }

    public void set_is_active(boolean is_active) {
        this.is_active = is_active;
    }

    public void set_letter(EnumLetter letter) {
        this.letter = letter;
    }

    public void set_color(EnumPlayer color) {
        this.color = color;
    }

    public void set_score(int score) {
        this.score = score;
    }
}
