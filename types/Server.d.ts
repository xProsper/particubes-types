
/**
The `Server` acts as a host and director for the game.

For example, if your game requires a minimum amount of players, it's a good idea to use the [Server] to count and trigger game start.

⚠️ Multiplayer has been turned off in the first beta versions. It will be back soon, and this page will be updated with more details.

*/

declare namespace Server {



/**
Executed when the [This] receives an [Event] from a game client. Provides the received [Event] as parameter.


[Samples]

-- executed ~30 times per second on each user device

Server.DidReceiveEvent = function(event)
  print("event received:", event)
end

*/
const DidReceiveEvent: function;

/**
Executed ~30 times per second. Provides the elapsed time in seconds as parameter.


[Samples]

-- executed ~30 times per second on each user device

Server.Tick = function(dt)
  print("elapsed:", dt, "seconds")
end

*/
const Tick: function;


/**
Returns the current UTC time as a Unix Timestamp.


*/
number;

}