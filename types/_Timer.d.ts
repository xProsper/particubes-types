

/**
Calls a [function] after a given time.
*/

declare interface _Timer {

/**
Creates a [Timer].


[Samples]

-- prints "2 seconds" each 2 seconds

local myTimer = Timer(2.0, true, function()
  print("2 seconds")
end)

local callback = function()
  Player.Velocity.Y = 50
end
-- after 5 seconds the Player will jump
local myTimer2 = Timer(5.0, callback)

*/
constructor: (time: _number, repeat: _boolean, callback: _function) => _Timer;



/**
Time remaining before the function is called.

*/
RemainingTime: _number;

/**
Time since the start of the [Timer].

*/
Time: _number;


/**
Cancels the [Timer].

*/

}

export default _Timer;