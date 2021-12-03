
/**
Config holds the configuration for your game. The items it depends on, the map that should be used and other important things.
*/

declare interface Config {



/**
When set to `true`, the users are able to use the chat. If set to `false` they cannot talk.

`true` by default.


*/
ChatAvailable: boolean;

/**
Acceleration applied to all physically simulated [Object]s in the scene. 

By default, it represents the gravity.


[Samples]

-- turn off gravity:

Config.ConstantAcceleration = {0, 0, 0}
-- or
Config.ConstantAcceleration.Y = 0

-- turn off gravity for one Object only:

myObject.Acceleration = -Config.ConstantAcceleration
-- myObject's acceleration is now the invert of 
-- Config.ConstantAcceleration, cancelling it.

*/
ConstantAcceleration: Number3;

/**
Indicates the map that should be loaded.

*/
Map: string;

/**
A list of items ([string] references) that should be loaded.

You'll be able to use thoses items to create [Shape]s, [MutableShape]s and other things.

See [Items] for more details.


*/
Items: array;

/**
A collection of [Map] [Palette] indexes that you want to override in the game.


*/
MapPaletteOverrides: table;

/**
Allows the users to change the pointer mode by pressing on TAB or clicking on the pointer mode button.

The function `[Pointer]:Show()` and `[Pointer]:Hide()` can still be used.

`false` by default.


*/
PointerToggleAvailable: boolean;


}

export default Config;