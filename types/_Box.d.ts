
import _Number3 from "./_Number3";

/**
A Box represents a box in the 3D world.

In Particubes, a Box is always aligned with the world coordinate system.

*/

declare interface _Box {


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