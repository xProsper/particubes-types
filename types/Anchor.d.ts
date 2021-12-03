
/**
Anchor is a shortcut to [Client].[UI].Anchor.

Anchors are used to position user interface elements.

A few builtin `Anchor` instances can be used, there's no way to create custom Anchors.

*/

declare interface Anchor {


/**
Top position Anchor.
*/
readonly Top: Anchor;

/**
Vertical center position Anchor.
*/
readonly VCenter: Anchor;

/**
Bottom position Anchor.
*/
readonly Bottom: Anchor;

/**
Left position Anchor.
*/
readonly Left: Anchor;

/**
Horizontal center position Anchor.
*/
readonly HCenter: Anchor;

/**
Right position Anchor.
*/
readonly Right: Anchor;



}

export default Anchor;