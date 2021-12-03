
/**
UI is a shortcut to [Client].[UI]

UI contains user interface accessors.

*/

declare interface UI {



/**
See [Anchor].

*/
Anchor: Anchor;

/**
See [Button].

*/
Button: Button;

/**
Indicates if the crosshair should be displayed.

[Samples]

UI.Crosshair = false -- hides the crosshair


*/
Crosshair: boolean;

/**
See [Label].

*/
Label: Label;

/**
Coming soon.

*/
Box: Box;

/**
Top level user interface [Box].

*/
RootBox: Box;


}

export default UI;