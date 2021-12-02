
/**
Map is a global variable that represents the game map.
*/

declare interface Map {



/**
Returns an [array] of [BlockProperties] ([Palette])

Note: non-opaque and light emissive block colors can't be changed after game start.


*/
LocalPalette: Palette;


}

export = Map;