
/**
Represents a RGBA color (Red, Green, Blue, Alpha)
*/

declare interface Color {

/**
Creates a Color with given red, green, blue and (optional) alpha values.

Parameters can be between 0.0 and 1.0 or between 0 and 255.


[Samples]

local red = Color(255, 0, 0)

local alsoRed = Color(1.0, 0.0, 0.0)
local semiTransparentRed = Color(1.0, 0.0, 0.0, 0.5)

*/
constructor: (red: number, green: number, blue: number, alpha: number) => Color;



/**
Color's alpha component.

*/
Alpha: number;

/**
Color's alpha component. (shortcut to [Alpha](#property-alpha))

*/
A: number;

/**
Color's blue component.

*/
Blue: number;

/**
Color's blue component. (shortcut to [Blue](#property-blue))

*/
B: number;

/**
Color's green component.

*/
Green: number;

/**
Color's green component. (shortcut to [Green](#property-green))

*/
G: number;

/**
Color's red component.

*/
Red: number;

/**
Color's red component. (shortcut to [Red](#property-red))

*/
R: number;


}

export default Color;