

/**
Anchor is a shortcut to [Client].[UI].Anchor.

Anchors are used to position user interface elements.

A few builtin `Anchor` instances can be used, there's no way to create custom Anchors.

*/

declare interface _Anchor {


/**
Top position Anchor.
*/
readonly Top: _Anchor;

/**
Vertical center position Anchor.
*/
readonly VCenter: _Anchor;

/**
Bottom position Anchor.
*/
readonly Bottom: _Anchor;

/**
Left position Anchor.
*/
readonly Left: _Anchor;

/**
Horizontal center position Anchor.
*/
readonly HCenter: _Anchor;

/**
Right position Anchor.
*/
readonly Right: _Anchor;



}

export default _Anchor;