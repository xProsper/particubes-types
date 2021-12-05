
import _Anchor from "./_Anchor";
import _Color from "./_Color";
import { _function } from "../Manual";
import { _string } from "../Manual";

/**
Buttons are user interface elements allowing users to take actions.

Button is a shortcut to [Client].[UI].[Button].

Buttons are automatically displayed on the screen upon creation.

*/

declare interface _Button {


/**
Button's color.

[Samples]

-- set button color

local btn = Button("test button")
btn.Color = Color(255, 0, 0) -- make it red

*/
Color: _Color;

/**
Function triggered when pressing the button.

[Samples]

-- set button's press callback

local btn = Button("test button")
btn.OnPress = function()
  print("button pressed")
end

*/
OnPress: _function;

/**
Function triggered when releasing the button.

[Samples]

-- set button's release callback

local btn = Button("test button")
btn.OnRelease = function()
  print("button released")
end

*/
OnRelease: _function;

/**
Text being displayed by the Button.

[Samples]

-- update displayed text

local btn = Button()
btn.Text = "test button"

*/
Text: _string;

/**
Button's text color.

[Samples]

-- set button text color

local btn = Button()
btn.TextColor = Color(100, 0, 0)

*/
TextColor: _Color;


/**
Removes the Button.

[Samples]

-- removes button from screen

btn:Remove()

*/

/**
Displays a button that has been removed.
By default, original anchors are kepts, but it's possible to supply new ones.

Calling `Add` for a button that's already displayed has no effect.


[Samples]

myButton = Button("do something")

-- by default, the button is displayed upon creation
-- let's remove it:
myButton:Remove()
-- we can add it back with different anchors: 
btn:Add(Anchor.Center, Anchor.Bottom)

*/
Add(hAnchor: _Anchor, vAnchor: _Anchor): void;

}

export default _Button;