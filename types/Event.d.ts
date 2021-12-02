
/**
Events are useful to establish communication between the [Server] and all connected [Player]s.

*/

declare namespace Event {

/**
Creates an empty event.

Custom fields can then be set with [string], [number] and [boolean] values. (more value types will be supported soon)


[Samples]

local e = Event()

e.someMessage = "Something I'd like to say!"
e.someNumber = 42
e:SendTo(OtherPlayers)

*/



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
const Sender: 
/**
An array containing all recipients for that event.
Recipients can contain individual [Player]s, [OtherPlayers], [Players] or [Server].


*/
const Recipients: array;


/**
Sends the [Event] to recipients in parameters.

Recipients can be individual [Player]s, [OtherPlayers], [Players] or [Server].


[Samples]

local e = Event()

e.someMessage = "Something I'd like to say!"
e:SendTo(Player[2], Player[3]) -- send to player 2 & 3

*/
const SendTo = (...: recipients): void => {};

}