
/**
A `Face` represents the face of a [Block].

It can be returned when casting a ray, to know which block face has been touched. (see [Impact.FaceTouched](/reference/impact#property-facetouched))

It's also a useful parameter to functions like [Block.AddNeighbor](/reference/block#functions-addneighbor), to indicate where to place a [Block] next to another.

Builtin `Face` instances can be used, there's no way to create custom Faces.

*/

declare interface Face {


/**
Top face.
*/
readonly Top: Face;

/**
Bottom face.
*/
readonly Bottom: Face;

/**
Front face.
*/
readonly Front: Face;

/**
Back face.
*/
readonly Back: Face;

/**
Left face.
*/
readonly Left: Face;

/**
Right face.
*/
readonly Right: Face;



}

export default Face;