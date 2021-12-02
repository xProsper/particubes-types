
/**
A [MutableShape] is an [Object] that carries and displays a set of [Block]s. The difference with [Shape] is that [MutableShape] [Block]s can be modified.
*/

declare namespace MutableShape {

/**
Creates a MutableShape with imported [Item].

[Samples]

local s = MutableShape(R.username.itemName)
*/
const constructor = (item: Item) => MutableShape;




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
const AddBlock = (block: Block): Block => {};
const AddBlock = (paletteIndex: number, position: Number3): Block => {};
const AddBlock = (paletteIndex: number, X: number, Y: number, Z: number): Block => {};

/**
Gets a [Block] from the [This]. 
Returns [nil] if there is no [Block] at the given coordinates (i. e. if it's "air").


*/
const GetBlock = (X: number, Y: number, Z: number): Block => {};

}