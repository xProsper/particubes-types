
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



/**
Block's palette index. (first index is `1`)

⚠️ [Block.Properties](#property-properties) remains [nil] if the block does not belong to a [Shape] or [MutableShape] (instances owning a [Palette]).


[Samples]

local b = someMutableShape:GetBlock(1, 2, 3)

if b ~= nil then
  -- changes block's properties
  -- using different palette index
  b.PaletteIndex = 10 
end

*/
const PaletteIndex: number;

/**
Block's coordinates in [Shape] or [MutableShape].


[Samples]

local b = someShape:GetBlock(1, 2, 3)

if b ~= nil then
  print(b.Coordinates) -- prints "[Number3 X: 1 Y: 2 Z: 3]"
end

*/
const Coordinates: Number3;

/**
Shortcut to [Coordinates](/reference/block#property-coordinates).


*/
const Coords: Number3;

/**
Position of [Block]'s negative X-Y-Z corner in world coordinates.


[Samples]

local b = someShape:GetBlock(1, 2, 3)

if b ~= nil then
  print(b.Position)
end

*/
const Position: Number3;

/**
Shortcut to [Position](/reference/block#property-position).


*/
const Pos: Number3;

/**
Position of [Block]'s center in local coordinates (local to parent [Shape] or [MutableShape])


[Samples]

local b = someShape:GetBlock(1, 2, 3)

if b ~= nil then
  print(b.LocalPosition)
end

*/
const LocalPosition: Number3;

/**
Returns Block's [BlockProperties].

[nil] if the [Block] does not belong to a [Shape] or [MutableShape].


*/
const Properties: BlockProperties;


/**
Adds a [Block], adjacent to the face passed as parameter.

Returns created [Block] (or [nil] if it fails).

⚠️ Won't work with `readOnly` Blocks.


[Samples]

-- add block when Action2 is triggered

Client.Action2 = function()
  -- cast a ray, see if it touches a block
  local impact = Player:CastRay()
  if impact.Block ~= nil then
    -- add block, adjacent to the face that's been touched
    impact.Block:AddNeighbor(Block(1), impact.FaceTouched)
  end
end

*/
const AddNeighbor = (block: Block, face: Face): Block => {};

/**
Removes the `Block` from its parent [MutableShape].

⚠️ Won't work with `readOnly` Blocks.


[Samples]

-- remove block when Action2 is triggered

Client.Action2 = function()
  -- cast a ray, see if it touches a block
  local impact = Player:CastRay()
  -- won't do anything if impact.Block is nil
  impact.Block:Remove()
end

*/

/**
Replaces the `Block` with the one passed as parameter. The position remains the same, [Block.PaletteIndex](#property-paletteindex) is the only property being set.

`block:Replace(otherBlock)` actually has the same effect as `block.PaletteIndex = otherBlock.PaletteIndex`

⚠️ Won't work with `readOnly` Blocks.


[Samples]

-- replace block when Action2 is triggered

Client.Action2 = function()
  -- cast a ray, see if it touches a block
  local impact = Player:CastRay()
  -- won't do anything if impact.Block is nil
  impact.Block:Replace(Block(1)) -- make it a block with PaletteIndex == 1
end

*/
const Replace = (block: Block): void => {};

}