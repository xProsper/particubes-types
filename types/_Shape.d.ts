

/**
A [Shape] is an [Object] that carries and displays a set of [Block]s.
*/

declare interface _Shape {

/**
Creates a Shape with imported [Item].

[Samples]

local myShape = Shape(Items.someuser.someitem)

myShape.Position = { Map.Width * 0.5, Map.Height, Map.Depth * 0.5 }
Map:AddChild(myShape) -- adds created shape in the map

*/
constructor: (item: _Item) => _Shape;



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
Pivot: _Number3;

/**
Returns [This]'s depth, measured in cubes.

*/
Depth: _number;

/**
Returns [This]'s height, measured in cubes.

*/
Height: _number;

/**
Returns [This]'s width, measured in cubes.

*/
Width: _number;

/**
The BoundingBox represents the bounds of the [This]. It is the limits of the Shape's blocks.


*/
BoundingBox: _Box;

/**
The coordinates of the min limit of the [This]'s BoundingBox.


*/
Min: _Number3;

/**
The coordinates of the center of the [This]'s BoundingBox.


*/
Center: _Number3;

/**
The coordinates of the max limit of the [This]'s BoundingBox.


*/
Max: _Number3;


/**
Gets a [Block] from the [Shape].
Returned [Block] is readOnly because [Shape] is immutable, unlike [MutableShape].
Returns [nil] if there is no [Block] at those coordinates (i. e. if it's "air").


*/
GetBlock(X: _number, Y: _number, Z: _number): Block;
GetBlock(coordinates: _Number3): Block;

/**
Converts Block coordinates to world coordinate system.

*/
_Number3;
BlockToWorld(b: _Block): Number3;
BlockToWorld(n: _Number3): Number3;

/**
Converts Block coordinates to local coordinate system.

*/
_Number3;
BlockToLocal(b: _Block): Number3;
BlockToLocal(n: _Number3): Number3;

/**
Converts world coordinates to Block coordinate system.

*/
_Number3;
WorldToBlock(n: _Number3): _Number3;

/**
Converts local coordinates to Block coordinate system.

*/
_Number3;
LocalToBlock(n: _Number3): _Number3;

}

export default _Shape;