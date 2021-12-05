


/**
A `Face` represents the face of a [Block].

It can be returned when casting a ray, to know which block face has been touched. (see [Impact.FaceTouched](/reference/impact#property-facetouched))

It's also a useful parameter to functions like [Block.AddNeighbor](/reference/block#functions-addneighbor), to indicate where to place a [Block] next to another.

Builtin `Face` instances can be used, there's no way to create custom Faces.

*/

declare interface _Face {

/**
Top face.
*/
readonly Top: _Face;

/**
Bottom face.
*/
readonly Bottom: _Face;

/**
Front face.
*/
readonly Front: _Face;

/**
Back face.
*/
readonly Back: _Face;

/**
Left face.
*/
readonly Left: _Face;

/**
Right face.
*/
readonly Right: _Face;



}

export default _Face;