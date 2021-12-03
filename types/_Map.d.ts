

/**
Map is a global variable that represents the game map.
*/

declare interface _Map {



/**
Returns an [array] of [BlockProperties] ([Palette])

Note: non-opaque and light emissive block colors can't be changed after game start.


*/
LocalPalette: _Palette;


}

export default _Map;