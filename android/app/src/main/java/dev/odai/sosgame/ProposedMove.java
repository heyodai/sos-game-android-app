package dev.odai.sosgame;

public class ProposedMove {
    private EnumPlayer player;
    private EnumLetter letter;
    private Coordinates location;

    public ProposedMove(EnumPlayer player, EnumLetter letter, Coordinates location) {
        this.player = player;
        this.letter = letter;
        this.location = location;
    }

    public EnumPlayer getPlayer() {
        return player;
    }

    public void setPlayer(EnumPlayer player) {
        this.player = player;
    }

    public EnumLetter getLetter() {
        return letter;
    }

    public void setLetter(EnumLetter letter) {
        this.letter = letter;
    }

    public Coordinates getLocation() {
        return location;
    }

    public void setLocation(Coordinates location) {
        this.location = location;
    }
}
