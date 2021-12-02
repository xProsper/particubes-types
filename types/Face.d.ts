
/**
A `Face` represents the face of a [Block].

It can be returned when casting a ray, to know which block face has been touched. (see [Impact.FaceTouched](/reference/impact#property-facetouched))

It's also a useful parameter to functions like [Block.AddNeighbor](/reference/block#functions-addneighbor), to indicate where to place a [Block] next to another.

Builtin `Face` instances can be used, there's no way to create custom Faces.

*/

declare namespace Face {


/**
Top face.
*/
readonly const Top: Face;

/**
Bottom face.
*/
readonly const Bottom: Face;

/**
Front face.
*/
readonly const Front: Face;

/**
Back face.
*/
readonly const Back: Face;

/**
Left face.
*/
readonly const Left: Face;

/**
Right face.
*/
readonly const Right: Face;



}