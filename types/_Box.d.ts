

/**
A Box represents a box in the 3D world.

In Particubes, a Box is always aligned with the world coordinate system.

*/

declare interface _Box {

/**
Creates a Number3 with values x, y and z.

[Samples]

-- creates a box with both min & max = {0,0,0}

local box = Box()

box = Box({0,0,0}, {10,10,10})

*/
constructor: () => _Box;
constructor: (min: _Number3, max: _Number3) => _Box;



/**
Box corner coordinates with smaller X,Y,Z components.


*/
Min: _Number3;

/**
Box corner coordinates with bigger X,Y,Z components.


*/
Max: _Number3;


/**
Returns a copy of the [Box].


*/
Copy(b: _Box): _Box;

}

export default _Box;