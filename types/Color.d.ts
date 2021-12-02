
/**
Represents a RGBA color (Red, Green, Blue, Alpha)
*/

declare namespace Color {

/**
Creates a Color with given red, green, blue and (optional) alpha values.

Parameters can be between 0.0 and 1.0 or between 0 and 255.


[Samples]

local red = Color(255, 0, 0)

local alsoRed = Color(1.0, 0.0, 0.0)
local semiTransparentRed = Color(1.0, 0.0, 0.0, 0.5)

*/
const constructor = (red: number, green: number, blue: number, alpha: number) => Color;



/**
Color's alpha component.

*/
const Alpha: number;

/**
Color's alpha component. (shortcut to [Alpha](#property-alpha))

*/
const A: number;

/**
Color's blue component.

*/
const Blue: number;

/**
Color's blue component. (shortcut to [Blue](#property-blue))

*/
const B: number;

/**
Color's green component.

*/
const Green: number;

/**
Color's green component. (shortcut to [Green](#property-green))

*/
const G: number;

/**
Color's red component.

*/
const Red: number;

/**
Color's red component. (shortcut to [Red](#property-red))

*/
const R: number;


}