package dev.odai.sosgame;

/**
 * Class definition for Square object.
 */
public class Square {
    private EnumLetter content;
    private Coordinates location;
    private EnumPlayer player;

    /**
     * Class constructor.
     *
     * @param content Letter inside of the square.
     * @param location Board position for the square.
     * @param player Player who updated the square.
     */
    public Square(EnumLetter content, Coordinates location, EnumPlayer player) {
        this.content = content;
        this.location = location;
        this.player = player;
    }

    /**
     * Update the square content.
     *
     * @param content New data for square content.
     */
    public void set_content(EnumLetter content) {
        this.content = content;
    }

    /**
     * Update the square location.
     *
     * @param location New location data for square.
     */
    public void set_location(Coordinates location) {
        this.location = location;
    }

    /**
     * Update player data for square.
     *
     * @param player New player data for square.
     */
    public void set_player(EnumPlayer player) {
        this.player = player;
    }

    /**
     * Get square content.
     *
     * @return EnumLetter with square content.
     */
    public EnumLetter get_content() {
        return this.content;
    }

    /**
     * Get square location.
     *
     * @return Coordinates object with square location.
     */
    public Coordinates get_location() {
        return this.location;
    }

    /**
     * Get square player data.
     *
     * @return EnumPlayer for square.
     */
    public EnumPlayer get_player() {
        return this.player;
    }
}
