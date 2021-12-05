
import _Anchor from "./_Anchor";
import _Color from "./_Color";
import { _string } from "../Manual";

/**
Label is a shortcut to [Client].[UI].[Label].

Allows adding text on the interface.

Labels are automatically displayed on the screen upon creation.

*/

declare interface _Label {


/**
Text that's being displayed by the Label.

[Samples]

-- update displayed text

myLabel.Text = "❤❤"

*/
Text: _string;

/**
Label's text color.

[Samples]

myLabel.TextColor = Color(255, 0, 0)


*/
TextColor: _Color;


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
Add(hAnchor: _Anchor, vAnchor: _Anchor): void;

}

export default _Label;