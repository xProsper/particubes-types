
import _Block from "./_Block";
import _Number3 from "./_Number3";
import { _number } from "../Manual";

/**
A [MutableShape] is an [Object] that carries and displays a set of [Block]s. The difference with [Shape] is that [MutableShape] [Block]s can be modified.
*/

declare interface _MutableShape {



/**
Adds a [Block] to the [This].

Returns created [Block] (or [nil] if it fails).


[Samples]

local block = Block(1, 10, 10, 10)

someMutableShape:AddBlock(block)

-- AddBlock can also be called using
-- block's palette index and coordinates:
someMutableShape:AddBlock(1, 10, 10, 10)

-- created block is returned:
local newBlock = someMutableShape:AddBlock(1, 10, 10, 10)
if newBlock ~= nil then
  -- block successfully created!
end

-- ⚠️
local block = Block(1, 10, 10, 10)
local newBlock = someMutableShape:AddBlock(block)
-- Here `newBlock` is not the same as `block`
-- they both have the same palette index and coordinates
-- but `newBlock` has a parent shape while `block` doesn't.

*/
AddBlock(block: _Block): _Block;
AddBlock(paletteIndex: _number, position: _Number3): _Block;
AddBlock(paletteIndex: _number, X: _number, Y: _number, Z: _number): _Block;

/**
Gets a [Block] from the [This]. 
Returns [nil] if there is no [Block] at the given coordinates (i. e. if it's "air").


*/
GetBlock(X: _number, Y: _number, Z: _number): _Block;

}

export default _MutableShape;