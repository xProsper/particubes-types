
import _Button from "./_Button";
import _Label from "./_Label";

/**
The `RootNode` represents the root of the UI of the game.

It contains eerything UI (Labels, Buttons, etc)

*/

declare interface _RootNode {



/**
Add a UI Node to the game's UI, at the top level of the hierarchy.


*/
AddChild(button: _Button): void;
AddChild(label: _Label): void;

}

export default _RootNode;