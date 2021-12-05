
import _Color from "./_Color";
import { _boolean } from "../Manual";
import { _number } from "../Manual";

/**
`BlockProperties` describes possible properties for a [Block].

In most cases, [BlockProperties] are `readOnly`.

Except entries in [Config.MapPaletteOverrides](/reference/config#property-mappaletteoverrides), to override map block properties for a game.

[BlockProperties] in [Map.LocalPalette](/reference/map#property-localpalette) can also be set at any time as long as the block is opaque and not light emissive.

*/

declare interface _BlockProperties {


/**
[Block]'s color.


*/
Color: _Color;

/**
Indicates if the [Block] is light emissive. Light color is tight to the color of the [Block].

*/
Light: _boolean;

/**
BlockProperties' index in the [Palette] or [array] it belongs to.

*/
ID: _number;


}

export default _BlockProperties;