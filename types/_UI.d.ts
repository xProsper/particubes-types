

/**
UI is a shortcut to [Client].[UI]

UI contains user interface accessors.

*/

declare interface _UI {



/**
See [Anchor].

*/
Anchor: _Anchor;

/**
See [Button].

*/
Button: _Button;

/**
Indicates if the crosshair should be displayed.

[Samples]

UI.Crosshair = false -- hides the crosshair


*/
Crosshair: _boolean;

/**
See [Label].

*/
Label: _Label;

/**
Coming soon.

*/
Box: _Box;

/**
Top level user interface [Box].

*/
RootBox: _Box;


}

export default _UI;