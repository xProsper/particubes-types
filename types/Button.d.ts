
/**
Buttons are user interface elements allowing users to take actions.

Button is a shortcut to [Client].[UI].[Button].

Buttons are automatically displayed on the screen upon creation.

*/

declare namespace Button {

/**
Creates a Button with optional parameters:
- `text` displayed text
- `horizontal_anchor` possible values: `Anchor.Left`, `Anchor.HCenter`, `Anchor.Right` (defaut)
- `vertical_anchor` possible values: `Anchor.Top` (defaut), `Anchor.VCenter`, `Anchor.Bottom`

*/
const constructor = (text: string, hAnchor: Anchor, vAnchor: Anchor) => Button;


}