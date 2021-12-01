
/**
A `Block` represents one block in a [Shape] or [MutableShape] (like the [Map]).

A `Block` can be built with one of the [constructors](/reference/block#constructors), but it can also be obtained from a [Shape] or [MutableShape] with [Shape.GetBlock](/reference/shape#functions-getblock) or [MutableShape.GetBlock](/reference/mutableshape#functions-getblock).

⚠️ A `Block` obtained from an immutable object (like [Shape]) is in fact `readOnly`, none of its properties can be set in that case.

*/

declare namespace Block {

/**
Creates a `Block` with `{0,0,0}` coordinates. ([Block.Position](#property-position))

[Block.PaletteIndex](#property-paletteindex) is set to `paletteIndex`, but [Block.Properties](#property-properties) remains [nil] before the block is added to a [MutableShape] (owns the [Palette]).

*/
const constructor = (paletteIndex: number) => Block;

/**
Creates a `Block` with `{x,y,z}` coordinates. ([Block.Position](#property-position))

[Block.PaletteIndex](#property-paletteindex) is set to `paletteIndex`, but [Block.Properties](#property-properties) remains [nil] before the block is added to a [MutableShape] (owns the [Palette]).

*/
const constructor = (paletteIndex: number, x: number, y: number, z: number) => Block;

/**
Creates a `Block` with `position` coordinates. ([Block.Position](#property-position))

[Block.PaletteIndex](#property-paletteindex) is set to `paletteIndex`, but [Block.Properties](#property-properties) remains [nil] before the block is added to a [MutableShape] (owns the [Palette]).

*/
const constructor = (paletteIndex: number, position: Number3) => Block;


}