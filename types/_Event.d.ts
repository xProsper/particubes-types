
import _Player from "./_Player";
import _OtherPlayers from "./_OtherPlayers";
import _Players from "./_Players";
import _Server from "./_Server";

import { _array } from "../Manual";

/**
Events are useful to establish communication between the [Server] and all connected [Player]s.

*/

declare interface _Event {


/**
Who sent the event. A useful property when you want to send a response:


[Samples]

Server.DidReceiveEvent = function(event)

  -- `action` here is a custom field set by the developer
  if event.action == "ping" then

    local response = Event()
    response.action = "pong"
    response:SendTo(event.Sender)

  end
end

*/
Sender: _Server | _Player;

/**
An array containing all recipients for that event.
Recipients can contain individual [Player]s, [OtherPlayers], [Players] or [Server].


*/
Recipients: (_Player | _OtherPlayers | _Players | _Server)[];


/**
Sends the [Event] to recipients in parameters.

Recipients can be individual [Player]s, [OtherPlayers], [Players] or [Server].


[Samples]

local e = Event()

e.someMessage = "Something I'd like to say!"
e:SendTo(Player[2], Player[3]) -- send to player 2 & 3

*/
SendTo(recipients: _Event["Recipients"]): void;

}

export default _Event;