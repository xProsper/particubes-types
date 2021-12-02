
/**
A [Shape] is an [Object] that carries and displays a set of [Block]s.
*/

declare namespace Shape {

/**
Creates a Shape with imported [Item].

[Samples]

local myShape = Shape(Items.someuser.someitem)

myShape.Position = { Map.Width * 0.5, Map.Height, Map.Depth * 0.5 }
Map:AddChild(myShape) -- adds created shape in the map

*/
const constructor = (item: Item) => Shape;



/**
`Pivot` is a point that you set as a way to specify what part of the [Shape] will be used when setting its [Position](/reference/shape#property-position).

A [Shape] rotates around this point. The Pivot point can be outside your shape.

`Pivot` coordinates are local to the [Shape].

As a convenience, `Pivot` can be set to a [Block], the [Number3] value is then set to represent its center.


[Samples]

-- Anchor at the center of a 3x3x3 shape:

myShape.Anchor = {1.5, 1.5, 1.5}
-- same result:
myShape.Anchor = myShape:GetBlock(1,1,1)

*/
const Pivot: Number3;

/**
Returns [This]'s depth, measured in cubes.

*/
const Depth: number;

/**
Returns [This]'s height, measured in cubes.

*/
const Height: number;

/**
Returns [This]'s width, measured in cubes.

*/
const Width: number;

/**
The BoundingBox represents the bounds of the [This]. It is the limits of the Shape's blocks.


*/
const BoundingBox: Box;

/**
The coordinates of the min limit of the [This]'s BoundingBox.


*/
const Min: Number3;

/**
The coordinates of the center of the [This]'s BoundingBox.


*/
const Center: Number3;

/**
The coordinates of the max limit of the [This]'s BoundingBox.


*/
const Max: Number3;


/**
Gets a [Block] from the [Shape].
Returned [Block] is readOnly because [Shape] is immutable, unlike [MutableShape].
Returns [nil] if there is no [Block] at those coordinates (i. e. if it's "air").


*/
const GetBlock = (X: number, Y: number, Z: number, coordinates: Number3) => Block;

/**
Converts Block coordinates to world coordinate system.

*/
const BlockToWorld = (b: Block, n: Number3) => Number3;

/**
Converts Block coordinates to local coordinate system.

*/
const BlockToLocal = (b: Block, n: Number3) => Number3;

/**
Converts world coordinates to Block coordinate system.

*/
const WorldToBlock = (n: Number3) => Number3;

/**
Converts local coordinates to Block coordinate system.

*/
const LocalToBlock = (n: Number3) => Number3;

}