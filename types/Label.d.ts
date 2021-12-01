
/**
Label is a shortcut to [Client].[UI].[Label].

Allows adding text on the interface.

Labels are automatically displayed on the screen upon creation.

*/

declare namespace Label {

/**
Creates a Label with optional parameters:
- `text` displayed text
- `horizontal_anchor` possible values: `Anchor.Left`, `Anchor.HCenter`, `Anchor.Right` (defaut)
- `vertical_anchor` possible values: `Anchor.Top` (defaut), `Anchor.VCenter`, `Anchor.Bottom`

*/
const constructor = (text: string, hAnchor: Anchor, vAnchor: Anchor) => Label;


}