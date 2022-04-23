package dev.odai.sosgame;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "Echo")
public class EchoPlugin extends Plugin {

    @PluginMethod()
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", value);
        call.resolve(ret);
    }

    @PluginMethod()
    public void start(PluginCall call) {
        int board_size = call.getInt("board_size");
        String game_mode = call.getString("game_mode");

        int res = 0;
        if (board_size >= 3 && board_size <= 8) {
            res = 1;
        }

        JSObject ret = new JSObject();
        ret.put("value", res);
        call.resolve(ret);
    }
}
