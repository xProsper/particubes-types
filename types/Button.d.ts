
/**
Buttons are user interface elements allowing users to take actions.

Button is a shortcut to [Client].[UI].[Button].

Buttons are automatically displayed on the screen upon creation.

*/

declare interface Button {

/**
Creates a Button with optional parameters:
- `text` displayed text
- `horizontal_anchor` possible values: `Anchor.Left`, `Anchor.HCenter`, `Anchor.Right` (defaut)
- `vertical_anchor` possible values: `Anchor.Top` (defaut), `Anchor.VCenter`, `Anchor.Bottom`


[Samples]

-- adds a button at top right of the screen

local btn1 = Button("I'm a button")
-- adds a button at the center of the screen
local btn2 = Button("I'm a button", Anchor.HCenter, Anchor.VCenter)

*/
constructor: (text: string, hAnchor: Anchor, vAnchor: Anchor) => Button;



/**
Button's color.

[Samples]

-- set button color

local btn = Button("test button")
btn.Color = Color(255, 0, 0) -- make it red

*/
Color: Color;

/**
Function triggered when pressing the button.

[Samples]

-- set button's press callback

local btn = Button("test button")
btn.OnPress = function()
  print("button pressed")
end

*/
OnPress: function;

/**
Function triggered when releasing the button.

[Samples]

-- set button's release callback

local btn = Button("test button")
btn.OnRelease = function()
  print("button released")
end

*/
OnRelease: function;

/**
Text being displayed by the Button.

[Samples]

-- update displayed text

local btn = Button()
btn.Text = "test button"

*/
Text: string;

/**
Button's text color.

[Samples]

-- set button text color

local btn = Button()
btn.TextColor = Color(100, 0, 0)

*/
TextColor: Color;


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
Add(hAnchor: Anchor, vAnchor: Anchor): void;

}

export default Button;