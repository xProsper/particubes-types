
import _BlockProperties from "./_BlockProperties";
import _Face from "./_Face";
import _Number3 from "./_Number3";
import { _number } from "../Manual";

/**
A `Block` represents one block in a [Shape] or [MutableShape] (like the [Map]).

A `Block` can be built with one of the [constructors](/reference/block#constructors), but it can also be obtained from a [Shape] or [MutableShape] with [Shape.GetBlock](/reference/shape#functions-getblock) or [MutableShape.GetBlock](/reference/mutableshape#functions-getblock).

⚠️ A `Block` obtained from an immutable object (like [Shape]) is in fact `readOnly`, none of its properties can be set in that case.

*/

declare interface _Block {


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
PaletteIndex: _number;

/**
Block's coordinates in [Shape] or [MutableShape].


[Samples]

local b = someShape:GetBlock(1, 2, 3)

if b ~= nil then
  print(b.Coordinates) -- prints "[Number3 X: 1 Y: 2 Z: 3]"
end

*/
Coordinates: _Number3;

/**
Shortcut to [Coordinates](/reference/block#property-coordinates).


*/
Coords: _Number3;

/**
Position of [Block]'s negative X-Y-Z corner in world coordinates.


[Samples]

local b = someShape:GetBlock(1, 2, 3)

if b ~= nil then
  print(b.Position)
end

*/
Position: _Number3;

/**
Shortcut to [Position](/reference/block#property-position).


*/
Pos: _Number3;

/**
Position of [Block]'s center in local coordinates (local to parent [Shape] or [MutableShape])


[Samples]

local b = someShape:GetBlock(1, 2, 3)

if b ~= nil then
  print(b.LocalPosition)
end

*/
LocalPosition: _Number3;

/**
Returns Block's [BlockProperties].

[nil] if the [Block] does not belong to a [Shape] or [MutableShape].


*/
Properties: _BlockProperties;


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
AddNeighbor(block: _Block, face: _Face): _Block;

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
Replace(block: _Block): void;

}

export default _Block;