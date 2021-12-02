
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


[Samples]

local myLabel = Label("❤❤❤")
*/
const constructor = (text: string, hAnchor: Anchor, vAnchor: Anchor) => Label;



/**
Text that's being displayed by the Label.

[Samples]

-- update displayed text

myLabel.Text = "❤❤"

*/
const Text: string;

/**
Label's text color.

[Samples]

myLabel.TextColor = Color(255, 0, 0)


*/
const TextColor: Color;


/**
Removes the Label.

[Samples]

myLabel:Remove()
*/

/**
Displays a label that has been removed.
By default, original anchors are kepts, but it's possible to supply new ones.

Calling `Add` for a label that's already displayed has no effect.


*/
const Add = (hAnchor: Anchor, vAnchor: Anchor) => 
}