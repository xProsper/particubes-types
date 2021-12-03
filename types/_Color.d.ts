

/**
Represents a RGBA color (Red, Green, Blue, Alpha)
*/

declare interface _Color {

/**
Creates a Color with given red, green, blue and (optional) alpha values.

Parameters can be between 0.0 and 1.0 or between 0 and 255.


[Samples]

local red = Color(255, 0, 0)

local alsoRed = Color(1.0, 0.0, 0.0)
local semiTransparentRed = Color(1.0, 0.0, 0.0, 0.5)

*/
constructor: (red: _number, green: _number, blue: _number, alpha: _number) => _Color;



/**
Color's alpha component.

*/
Alpha: _number;

/**
Color's alpha component. (shortcut to [Alpha](#property-alpha))

*/
A: _number;

/**
Color's blue component.

*/
Blue: _number;

/**
Color's blue component. (shortcut to [Blue](#property-blue))

*/
B: _number;

/**
Color's green component.

*/
Green: _number;

/**
Color's green component. (shortcut to [Green](#property-green))

*/
G: _number;

/**
Color's red component.

*/
Red: _number;

/**
Color's red component. (shortcut to [Red](#property-red))

*/
R: _number;


}

export default _Color;