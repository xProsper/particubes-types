

/**
Client is storing variables and running functions on all connected user devices (clients). It contains everything needed for the local simulation.

Client is nil in the [Server] execution context.

*/

declare interface _Client {



/**
This function is triggered when receiving an [Event].

Events are useful to establish communication between the [Server] and all connected [Player]s.


[Samples]

Client.DidReceiveEvent = function(event)

  -- do something with the event

  -- respond (if it makes sense in the situation)
  local response = Event()
  response.content = "Here's my response!"
  response:SendTo(event.Sender)
end

*/
DidReceiveEvent: _function;

/**
Triggered when pressing action 1 button. (space bar by default with a keyboard)


[Samples]

Client.Action1 = function()

  print("action1")
end

*/
Action1: _function;

/**
Triggered when releasing action 1 button. (space bar by default with a keyboard)


[Samples]

Client.Action1Release = function()

  print("action1 released")
end

*/
Action1Release: _function;

/**
Triggered when pressing action 2 button. (left click by default when using a mouse)

(turned off when [Pointer] is hidden)


[Samples]

Client.Action2 = function()

  print("action2")
end

*/
Action2: _function;

/**
Triggered when releasing action 2 button. (left click by default when using a mouse)

(turned off when [Pointer] is hidden)


[Samples]

Client.Action2Release = function()

  print("action2 released")
end

*/
Action2Release: _function;

/**
Triggered when pressing action 3 button. (right click by default when using a mouse)

(turned off when [Pointer] is hidden)


[Samples]

Client.Action3 = function()

  print("action3")
end

*/
Action3: _function;

/**
Triggered when releasing action 3 button. (left click by default when using a mouse)

(turned off when [Pointer] is hidden)


[Samples]

Client.Action3Release = function()

  print("action3 released")
end

*/
Action3Release: _function;

/**
See [Camera].

*/
Camera: _Camera;

/**
See [Clouds].

*/
Clouds: _Clouds;

/**
Triggered when what we call the "directional pad" or "D-pad" is activated. 

The D-pad maps to the direction keys when using a keyboard (WASD by default).

When using a touch screen, the D-pad is by default represented by the virtual pad that's on the left side of the screen.

The function receives 2 arguments `x` & `y` to represent 8 possible directions or the idle state:

`0,0 -> IDLE`
`0,1 -> UP`, `1,0 -> RIGHT`, `0,-1 -> DOWN`, `-1,0 -> LEFT`
`√2,√2 -> UP/RIGHT`, `√2,-√2 -> DOWN/RIGHT`, `-√2,-√2 -> DOWN/LEFT`, `-√2,√2 -> UP/LEFT`

The norm (or length) of the (x,y) vector is always `1.0`, or `0.0` when idle.


[Samples]

-- DEFAULT IMPLEMENTATION

-- (those functions can be redefined)

Client.DirectionalPad = function(x, y)
    -- storing globals here for AnalogPad
    -- to update Player.Motion
    dpadX = x dpadY = y
    Player.Motion = (Player.Forward * y + Player.Right * x) * 10
end

Client.AnalogPad = function(dx, dy)
    Player.LocalRotation.Y = Player.LocalRotation.Y + dx * 0.01
    Player.LocalRotation.X = Player.LocalRotation.X + -dy * 0.01

    if dpadX ~= nil and dpadY ~= nil then
        Player.Motion = (Player.Forward * dpadY + Player.Right * dpadX) * 10
    end
end

*/
DirectionalPad: _function;

/**
Shortcut to [DirectionalPad](/reference/client#property-directionalpad).


*/
DPad: _function;

/**
Triggered when what we call the "analog pad" or "A-pad" is activated. 

The A-pad maps to the mouse mouvements when using a mouse.

When using a touch screen, the A-pad is activated when moving the finger after a touch down from anywhere outside the [DirectionalPad](/reference/client#property-directionalpad).

The function receives 2 arguments `dx` & `dy` to represent the delta compared to the previous position. When both `dx` & `dy` are equal to `0.0`, it means the pad is back to idle state.

(turned off when [Pointer] is hidden)


[Samples]

-- DEFAULT IMPLEMENTATION

-- (those functions can be redefined)

Client.AnalogPad = function(dx, dy)
    Player.LocalRotation.Y = Player.LocalRotation.Y + dx * 0.01
    Player.LocalRotation.X = Player.LocalRotation.X + -dy * 0.01

    if dpadX ~= nil and dpadY ~= nil then
        Player.Motion = (Player.Forward * dpadY + Player.Right * dpadX) * 10
    end
end

Client.DirectionalPad = function(x, y)
    -- storing globals here for AnalogPad
    -- to update Player.Motion
    dpadX = x dpadY = y
    Player.Motion = (Player.Forward * y + Player.Right * x) * 10
end

*/
AnalogPad: _function;

/**
Shortcut to [AnalogPad](/reference/client#property-analogpad).


*/
APad: _function;

/**
See [Fog].

*/
Fog: _Fog;

/**
See [Inputs].

*/
Inputs: _Inputs;

/**
Triggered when a message is submitted through the chat input. Receives the message ([string]) in parameter.

In the default implementation, messages aren't sent to other connected users.
But it's easy to do using [Event] and [Client.DidReceiveEvent](/reference/client#property-didreceiveevent).


[Samples]

-- the default implementation does this:

Client.OnChat = function(message)
    print(Player.Username .. ": " .. message)
    Player:TextBubble(message, 3, true)
end

*/
OnChat: _function;

/**
Triggered when a player joins the game.

It doens't mean the [Player] has spawned, just that there's a new connection.


[Samples]

Client.OnPlayerJoin = function(player)

  print(player.Username .. " joined the game!")
end

*/
OnPlayerJoin: _function;

/**
Triggered when a player leaves the game.


[Samples]

Client.OnPlayerLeave = function(player)

  print("So long " .. player.Username .. "!")
end

*/
OnPlayerLeave: _function;

/**
Triggered when the game starts.

This is the very first Lua function to be called, a good place to initialize variables.


[Samples]

Client.OnStart = function()

  -- add local Player to the World and place it above the center of the map
  World:AddChild(Player)
  Player.Position = {Map.Width / 2, Map.Height + 10, Map.Depth / 2}
end

*/
OnStart: _function;

/**
See [Player].

*/
Player: _Player;

/**
Executed ~30 times per second. Provides the elapsed time in seconds as parameter.


[Samples]

-- executed ~30 times per second on each user device

Client.Tick = function(dt)
  print("elapsed:", dt, "seconds")
end

*/
Tick: _function;

/**
See [UI].

*/
UI: _UI;

/**
See [Pointer].

*/
Pointer: _Pointer;

/**
This function is triggered when the user is about to open the menu that offers to resume or leave the experience.


[Samples]

Client.WillOpenGameMenu = function()

  -- possible things to do:
  -- - save user data
  -- - inform other users
  -- - if in a chat experience, set status as "away from keyboard" or something
end

*/
WillOpenGameMenu: _function;


/**
Opens the chat input.


*/

/**
Shows the game menu.

From there, players can exit or resume the game.


*/

}

export default _Client;