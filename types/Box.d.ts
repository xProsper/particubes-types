
/**
A Box represents a box in the 3D world.

In Particubes, a Box is always aligned with the world coordinate system.

*/

declare namespace Box {

/**
Creates a Number3 with values x, y and z.

[Samples]

-- creates a box with both min & max = {0,0,0}

local box = Box()

box = Box({0,0,0}, {10,10,10})

*/
const constructor = () => Box;
const constructor = (min: Number3, max: Number3) => Box;



/**
Box corner coordinates with smaller X,Y,Z components.


*/
const Min: Number3;

/**
Box corner coordinates with bigger X,Y,Z components.


*/
const Max: Number3;


/**
Returns a copy of the [Box].


*/
const Copy = (b: Box) => Box;

}