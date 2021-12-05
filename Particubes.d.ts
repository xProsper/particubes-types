import { _number } from "./Manual";
import { _nil } from "./Manual";
import { _boolean } from "./Manual";
import { _function } from "./Manual";
import { _array } from "./Manual";
import { _string } from "./Manual";
import { _table } from "./Manual";
import { _Item } from "./Manual";
import { _Inputs } from "./Manual";


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


/**
A `Block` represents one block in a [Shape] or [MutableShape] (like the [Map]).

A `Block` can be built with one of the [constructors](/reference/block#constructors), but it can also be obtained from a [Shape] or [MutableShape] with [Shape.GetBlock](/reference/shape#functions-getblock) or [MutableShape.GetBlock](/reference/mutableshape#functions-getblock).

⚠️ A `Block` obtained from an immutable object (like [Shape]) is in fact `readOnly`, none of its properties can be set in that case.

*/

declare interface _Block {


/**
Block's palette index. (first index is `1`)

⚠️ [Block.Properties](#property-properties) remains [nil] if the block does not belong to a [Shape] or [MutableShape] (instances owning a [Palette]).


[Samples]

local b = someMutableShape:GetBlock(1, 2, 3)

if b ~= nil then
  -- changes block's properties
  -- using different palette index
  b.PaletteIndex = 10 
end

*/
PaletteIndex: _number;

/**
Block's coordinates in [Shape] or [MutableShape].


[Samples]

local b = someShape:GetBlock(1, 2, 3)

if b ~= nil then
  print(b.Coordinates) -- prints "[Number3 X: 1 Y: 2 Z: 3]"
end

*/
Coordinates: _Number3;

/**
Shortcut to [Coordinates](/reference/block#property-coordinates).


*/
Coords: _Number3;

/**
Position of [Block]'s negative X-Y-Z corner in world coordinates.


[Samples]

local b = someShape:GetBlock(1, 2, 3)

if b ~= nil then
  print(b.Position)
end

*/
Position: _Number3;

/**
Shortcut to [Position](/reference/block#property-position).


*/
Pos: _Number3;

/**
Position of [Block]'s center in local coordinates (local to parent [Shape] or [MutableShape])


[Samples]

local b = someShape:GetBlock(1, 2, 3)

if b ~= nil then
  print(b.LocalPosition)
end

*/
LocalPosition: _Number3;

/**
Returns Block's [BlockProperties].

[nil] if the [Block] does not belong to a [Shape] or [MutableShape].


*/
Properties: _BlockProperties;


/**
Adds a [Block], adjacent to the face passed as parameter.

Returns created [Block] (or [nil] if it fails).

⚠️ Won't work with `readOnly` Blocks.


[Samples]

-- add block when Action2 is triggered

Client.Action2 = function()
  -- cast a ray, see if it touches a block
  local impact = Player:CastRay()
  if impact.Block ~= nil then
    -- add block, adjacent to the face that's been touched
    impact.Block:AddNeighbor(Block(1), impact.FaceTouched)
  end
end

*/
AddNeighbor(block: _Block, face: _Face): _Block;

/**
Removes the `Block` from its parent [MutableShape].

⚠️ Won't work with `readOnly` Blocks.


[Samples]

-- remove block when Action2 is triggered

Client.Action2 = function()
  -- cast a ray, see if it touches a block
  local impact = Player:CastRay()
  -- won't do anything if impact.Block is nil
  impact.Block:Remove()
end

*/

/**
Replaces the `Block` with the one passed as parameter. The position remains the same, [Block.PaletteIndex](#property-paletteindex) is the only property being set.

`block:Replace(otherBlock)` actually has the same effect as `block.PaletteIndex = otherBlock.PaletteIndex`

⚠️ Won't work with `readOnly` Blocks.


[Samples]

-- replace block when Action2 is triggered

Client.Action2 = function()
  -- cast a ray, see if it touches a block
  local impact = Player:CastRay()
  -- won't do anything if impact.Block is nil
  impact.Block:Replace(Block(1)) -- make it a block with PaletteIndex == 1
end

*/
Replace(block: _Block): void;

}


/**
`BlockProperties` describes possible properties for a [Block].

In most cases, [BlockProperties] are `readOnly`.

Except entries in [Config.MapPaletteOverrides](/reference/config#property-mappaletteoverrides), to override map block properties for a game.

[BlockProperties] in [Map.LocalPalette](/reference/map#property-localpalette) can also be set at any time as long as the block is opaque and not light emissive.

*/

declare interface _BlockProperties {


/**
[Block]'s color.


*/
Color: _Color;

/**
Indicates if the [Block] is light emissive. Light color is tight to the color of the [Block].

*/
Light: _boolean;

/**
BlockProperties' index in the [Palette] or [array] it belongs to.

*/
ID: _number;


}


/**
A Box represents a box in the 3D world.

In Particubes, a Box is always aligned with the world coordinate system.

*/

declare interface _Box {


/**
Box corner coordinates with smaller X,Y,Z components.


*/
Min: _Number3;

/**
Box corner coordinates with bigger X,Y,Z components.


*/
Max: _Number3;


/**
Returns a copy of the [Box].


*/
Copy(b: _Box): _Box;

}


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


/**
Camera is a shortcut to [Client].[Camera].

Controls camera movement and position.

All camera modes listed on this page are implemented in Lua, it's totally possible to implement custom ones.

*/

declare interface _Camera {


/**
Can be set to change Camera's vertical field of view.

The default value is 60 degrees.


[Samples]

Camera.FieldOfView = 40.0


*/
FieldOfView: _number;


/**
Shows an object that's been hidden to the local camera with [Camera:Hide](/reference/camera#functions-hide)


*/
Show(o: _Object): void;

/**
Hides an object for the local camera only. Other players will still be able to see it if `object.IsHidden` remains `false`.

It's usefull when implementing a first person camera for example, to hide local player's body parts.


*/
Hide(o: _Object): void;

/**
Casts a ray and returns an [Impact] (can be [nil]).

The [Impact] contains information about the kind of thing that's been hit.

💡 Calls [Ray].[Cast](/reference/ray#functions-cast) under the hood. See [Ray].[Cast](/reference/ray#functions-cast) definition for more details about possible filters.


[Samples]

local impact = Camera:CastRay()

if impact.Block ~= nil then
  print("block hit:", impact.Block)
end

*/
CastRay(): _Impact;
CastRay(filterIn: _CollisionGroups): _Impact;
CastRay(filterIn: _Shape): _Impact;
CastRay(filterIn: _nil, filterOut: _Object): _Impact;
CastRay(filterIn: _CollisionGroups, filterOut: _Object): _Impact;
CastRay(filterIn: _Shape, filterOut: _Object): _Impact;

/**
Puts Camera in "first person" mode. Looking at the world from `target`'s perspective.

When calling `SetModeFirstPerson` without parameters, the target defaults to [Player] (local player).

When `offset` is set to an [number], the offset is set on the vertical axis only, (`Number3(0, offset, 0)`)


[Samples]

Camera:SetModeFirstPerson(Player, 3.0)


*/
SetModeFirstPerson(): void;
SetModeFirstPerson(target: _Object): void;
SetModeFirstPerson(target: _Object, offset: _number): void;
SetModeFirstPerson(target: _Object, offset: _Number3): void;

/**
Puts Camera in "third person" mode. (looking at Camera's target, from a behind-the-shoulder perspective)

When calling `SetModeThirdPerson` without parameters, the target defaults to [Player] (local player).

By default, the Camera is placed beind its target. But it's then possible to change its [LocalRotation](#property-localrotation) to look at the target from a different angle.

`minDist`, `maxDist` and `offset` settings are optional but can be provided to tweak positioning.


[Samples]

Camera:SetModeThirdPerson()


Camera:SetModeThirdPerson(someShape)

*/
SetModeThirdPerson(): void;
SetModeThirdPerson(target: _Object): void;
SetModeThirdPerson(target: _Object, minDist: _number, maxDist: _number, offset: _number): void;
SetModeThirdPerson(target: _Object, minDist: _number, maxDist: _number, offset: _Number3): void;

/**
When in that mode, the camera rotates around its target, maintaining its distance from it.

When calling `SetModeSatellite` without parameters, the target defaults the current position of the camera.

`SetModeSatellite` can be called several time to update the `distance`.

Once the "satellite mode" is set, [Camera.LocalRotation](#property-localrotation) can be used to rotate around the target.


[Samples]

Camera:SetModeSatellite(Player, 10.0)


*/
SetModeSatellite(): void;
SetModeSatellite(target: _Object): void;
SetModeSatellite(target: _Number3): void;
SetModeSatellite(target: _Object, distance: _number): void;
SetModeSatellite(target: _Number3, distance: _number): void;

/**
Fits the target to the screen.

`screenRatio` indicates the percentage of the screen that should be covered by the target.

When `spherize` is `true`, a sphere that contains the target is used to place the camera.


[Samples]

local myShape = Shape(R.usename.myShape)

Map:AddChild(myShape)
Camera:FitToScreen(myShape, 0.6, false)
-- the shape now covers 60% of the screen

*/
FitToScreen(target: _Shape, screenRatio: _number, spherize: _boolean): void;

}


/**
Client is storing variables and running functions on all connected user devices (clients). It contains everything needed for the local simulation.

Client is nil in the [Server] execution context.

*/

declare interface _Client {


/**
This function is triggered when receiving an [Event].

Events are useful to establish communication between the [Server] and all connected [Player]s.


[Samples]

Client.DidReceiveEvent = function(event)

  -- do something with the event

  -- respond (if it makes sense in the situation)
  local response = Event()
  response.content = "Here's my response!"
  response:SendTo(event.Sender)
end

*/
DidReceiveEvent: _function;

/**
Triggered when pressing action 1 button. (space bar by default with a keyboard)


[Samples]

Client.Action1 = function()

  print("action1")
end

*/
Action1: _function;

/**
Triggered when releasing action 1 button. (space bar by default with a keyboard)


[Samples]

Client.Action1Release = function()

  print("action1 released")
end

*/
Action1Release: _function;

/**
Triggered when pressing action 2 button. (left click by default when using a mouse)

(turned off when [Pointer] is hidden)


[Samples]

Client.Action2 = function()

  print("action2")
end

*/
Action2: _function;

/**
Triggered when releasing action 2 button. (left click by default when using a mouse)

(turned off when [Pointer] is hidden)


[Samples]

Client.Action2Release = function()

  print("action2 released")
end

*/
Action2Release: _function;

/**
Triggered when pressing action 3 button. (right click by default when using a mouse)

(turned off when [Pointer] is hidden)


[Samples]

Client.Action3 = function()

  print("action3")
end

*/
Action3: _function;

/**
Triggered when releasing action 3 button. (left click by default when using a mouse)

(turned off when [Pointer] is hidden)


[Samples]

Client.Action3Release = function()

  print("action3 released")
end

*/
Action3Release: _function;

/**
See [Camera].

*/
Camera: _Camera;

/**
See [Clouds].

*/
Clouds: _Clouds;

/**
Triggered when what we call the "directional pad" or "D-pad" is activated. 

The D-pad maps to the direction keys when using a keyboard (WASD by default).

When using a touch screen, the D-pad is by default represented by the virtual pad that's on the left side of the screen.

The function receives 2 arguments `x` & `y` to represent 8 possible directions or the idle state:

`0,0 -> IDLE`
`0,1 -> UP`, `1,0 -> RIGHT`, `0,-1 -> DOWN`, `-1,0 -> LEFT`
`√2,√2 -> UP/RIGHT`, `√2,-√2 -> DOWN/RIGHT`, `-√2,-√2 -> DOWN/LEFT`, `-√2,√2 -> UP/LEFT`

The norm (or length) of the (x,y) vector is always `1.0`, or `0.0` when idle.


[Samples]

-- DEFAULT IMPLEMENTATION

-- (those functions can be redefined)

Client.DirectionalPad = function(x, y)
    -- storing globals here for AnalogPad
    -- to update Player.Motion
    dpadX = x dpadY = y
    Player.Motion = (Player.Forward * y + Player.Right * x) * 10
end

Client.AnalogPad = function(dx, dy)
    Player.LocalRotation.Y = Player.LocalRotation.Y + dx * 0.01
    Player.LocalRotation.X = Player.LocalRotation.X + -dy * 0.01

    if dpadX ~= nil and dpadY ~= nil then
        Player.Motion = (Player.Forward * dpadY + Player.Right * dpadX) * 10
    end
end

*/
DirectionalPad: _function;

/**
Shortcut to [DirectionalPad](/reference/client#property-directionalpad).


*/
DPad: _function;

/**
Triggered when what we call the "analog pad" or "A-pad" is activated. 

The A-pad maps to the mouse mouvements when using a mouse.

When using a touch screen, the A-pad is activated when moving the finger after a touch down from anywhere outside the [DirectionalPad](/reference/client#property-directionalpad).

The function receives 2 arguments `dx` & `dy` to represent the delta compared to the previous position. When both `dx` & `dy` are equal to `0.0`, it means the pad is back to idle state.

(turned off when [Pointer] is hidden)


[Samples]

-- DEFAULT IMPLEMENTATION

-- (those functions can be redefined)

Client.AnalogPad = function(dx, dy)
    Player.LocalRotation.Y = Player.LocalRotation.Y + dx * 0.01
    Player.LocalRotation.X = Player.LocalRotation.X + -dy * 0.01

    if dpadX ~= nil and dpadY ~= nil then
        Player.Motion = (Player.Forward * dpadY + Player.Right * dpadX) * 10
    end
end

Client.DirectionalPad = function(x, y)
    -- storing globals here for AnalogPad
    -- to update Player.Motion
    dpadX = x dpadY = y
    Player.Motion = (Player.Forward * y + Player.Right * x) * 10
end

*/
AnalogPad: _function;

/**
Shortcut to [AnalogPad](/reference/client#property-analogpad).


*/
APad: _function;

/**
See [Fog].

*/
Fog: _Fog;

/**
See [Inputs].

*/
Inputs: _Inputs;

/**
Triggered when a message is submitted through the chat input. Receives the message ([string]) in parameter.

In the default implementation, messages aren't sent to other connected users.
But it's easy to do using [Event] and [Client.DidReceiveEvent](/reference/client#property-didreceiveevent).


[Samples]

-- the default implementation does this:

Client.OnChat = function(message)
    print(Player.Username .. ": " .. message)
    Player:TextBubble(message, 3, true)
end

*/
OnChat: _function;

/**
Triggered when a player joins the game.

It doens't mean the [Player] has spawned, just that there's a new connection.


[Samples]

Client.OnPlayerJoin = function(player)

  print(player.Username .. " joined the game!")
end

*/
OnPlayerJoin: _function;

/**
Triggered when a player leaves the game.


[Samples]

Client.OnPlayerLeave = function(player)

  print("So long " .. player.Username .. "!")
end

*/
OnPlayerLeave: _function;

/**
Triggered when the game starts.

This is the very first Lua function to be called, a good place to initialize variables.


[Samples]

Client.OnStart = function()

  -- add local Player to the World and place it above the center of the map
  World:AddChild(Player)
  Player.Position = {Map.Width / 2, Map.Height + 10, Map.Depth / 2}
end

*/
OnStart: _function;

/**
See [Player].

*/
Player: _Player;

/**
Executed ~30 times per second. Provides the elapsed time in seconds as parameter.


[Samples]

-- executed ~30 times per second on each user device

Client.Tick = function(dt)
  print("elapsed:", dt, "seconds")
end

*/
Tick: _function;

/**
See [UI].

*/
UI: _UI;

/**
See [Pointer].

*/
Pointer: _Pointer;

/**
This function is triggered when the user is about to open the menu that offers to resume or leave the experience.


[Samples]

Client.WillOpenGameMenu = function()

  -- possible things to do:
  -- - save user data
  -- - inform other users
  -- - if in a chat experience, set status as "away from keyboard" or something
end

*/
WillOpenGameMenu: _function;


/**
Opens the chat input.


*/

/**
Shows the game menu.

From there, players can exit or resume the game.


*/

}


/**
Clouds is a shortcut to [Client].[Clouds].

Clouds gives control over cloud settings.

*/

declare interface _Clouds {


/**
Set to false to remove the coulds.

[Samples]

-- show clouds

Clouds.On = true
-- hide them
Clouds.On = false

*/
On: _boolean;

/**
Altitude of the clouds in blocks

*/
Altitude: _number;


}



/**
`CollisionGroups` represents an [array] of collision group numbers.

Collision groups are used to define how objects in the world collide with each others.

Group numbers go from `1` to `8`. The [Map] by default is in group `1`, and by default, all [Object]s collide with that group, but that behavior can be changed.

*/

declare interface _CollisionGroups {



}


/**
Represents a RGBA color (Red, Green, Blue, Alpha)
*/

declare interface _Color {


/**
Color's alpha component.

*/
Alpha: _number;

/**
Color's alpha component. (shortcut to [Alpha](#property-alpha))

*/
A: _number;

/**
Color's blue component.

*/
Blue: _number;

/**
Color's blue component. (shortcut to [Blue](#property-blue))

*/
B: _number;

/**
Color's green component.

*/
Green: _number;

/**
Color's green component. (shortcut to [Green](#property-green))

*/
G: _number;

/**
Color's red component.

*/
Red: _number;

/**
Color's red component. (shortcut to [Red](#property-red))

*/
R: _number;


}


/**
Config holds the configuration for your game. The items it depends on, the map that should be used and other */

declare interface _Config {


/**
When set to `true`, the users are able to use the chat. If set to `false` they cannot talk.

`true` by default.


*/
ChatAvailable: _boolean;

/**
Acceleration applied to all physically simulated [Object]s in the scene. 

By default, it represents the gravity.


[Samples]

-- turn off gravity:

Config.ConstantAcceleration = {0, 0, 0}
-- or
Config.ConstantAcceleration.Y = 0

-- turn off gravity for one Object only:

myObject.Acceleration = -Config.ConstantAcceleration
-- myObject's acceleration is now the invert of 
-- Config.ConstantAcceleration, cancelling it.

*/
ConstantAcceleration: _Number3;

/**
Indicates the map that should be loaded.

*/
Map: _string;

/**
A list of items ([string] references) that should be loaded.

You'll be able to use thoses items to create [Shape]s, [MutableShape]s and other things.

See [Items] for more details.


*/
Items: _array;

/**
A collection of [Map] [Palette] indexes that you want to override in the game.


*/
MapPaletteOverrides: _table;

/**
Allows the users to change the pointer mode by pressing on TAB or clicking on the pointer mode button.

The function `[Pointer]:Show()` and `[Pointer]:Hide()` can still be used.

`false` by default.


*/
PointerToggleAvailable: _boolean;


}


/**
Dev contains handy functions and attributes for developers.
*/

declare interface _Dev {


/**
Displays [Shape]s' bounding boxes when set to `true`. (`false` by default)


*/
DisplayBoxes: _boolean;

/**
Displays collision boxes when set to `true`. (`false` by default)


*/
DisplayColliders: _boolean;


/**
Takes a screenshot and sets it as a thumbnail for the game.


[Samples]

Client.Action3 = function()

    Dev:SetGameThumbnail()
end

*/

}



/**
Events are useful to establish communication between the [Server] and all connected [Player]s.

*/

declare interface _Event {


/**
Who sent the event. A useful property when you want to send a response:


[Samples]

Server.DidReceiveEvent = function(event)

  -- `action` here is a custom field set by the developer
  if event.action == "ping" then

    local response = Event()
    response.action = "pong"
    response:SendTo(event.Sender)

  end
end

*/
Sender: _Server | _Player;

/**
An array containing all recipients for that event.
Recipients can contain individual [Player]s, [OtherPlayers], [Players] or [Server].


*/
Recipients: (_Player | _OtherPlayers | _Players | _Server)[];


/**
Sends the [Event] to recipients in parameters.

Recipients can be individual [Player]s, [OtherPlayers], [Players] or [Server].


[Samples]

local e = Event()

e.someMessage = "Something I'd like to say!"
e:SendTo(Player[2], Player[3]) -- send to player 2 & 3

*/
SendTo(recipients: _Event["Recipients"]): void;

}



/**
A `Face` represents the face of a [Block].

It can be returned when casting a ray, to know which block face has been touched. (see [Impact.FaceTouched](/reference/impact#property-facetouched))

It's also a useful parameter to functions like [Block.AddNeighbor](/reference/block#functions-addneighbor), to indicate where to place a [Block] next to another.

Builtin `Face` instances can be used, there's no way to create custom Faces.

*/

declare interface _Face {

/**
Top face.
*/
readonly Top: _Face;

/**
Bottom face.
*/
readonly Bottom: _Face;

/**
Front face.
*/
readonly Front: _Face;

/**
Back face.
*/
readonly Back: _Face;

/**
Left face.
*/
readonly Left: _Face;

/**
Right face.
*/
readonly Right: _Face;



}


/**
Fog is a shortcut to [Client].[Fog].

Fog gives control over distance fog settings.

*/

declare interface _Fog {


/**
Enables or disables Fog.

[Samples]

Fog.On = true
Fog.On = false
-- toggles fog

Fog.On = not Fog.On

*/
On: _boolean;

/**
Sets [Fog].[Near](#property-near) while maintaining offset between [Fog].[Near](#property-near) & [Fog].[Far](#property-far)


[Samples]

Fog.Distance = 100
*/
Distance: _number;

/**
Distance at which Fog starts. (in blocks)

[Samples]

Fog.Near = 50
*/
Near: _number;

/**
Distance at which Fog ends. (in blocks)

[Samples]

Fog.Far = 100
-- both near and far can be set at once this way

Fog.Near, Fog.Far = 50, 100

*/
Far: _number;

/**
Fog absorption factor regarding light emissive blocks.

0.0 ➡️ the color can 100% be seen through the fog.
1.0 ➡️ the color is totally absorbed, like any other block.


[Samples]

Fog.LightAbsorption = 0.1
*/
LightAbsorption: _number;


}


declare interface _Impact {


/**
Block touched by the ray. Not `nil` if the [Impact] represents a [Block].

[Samples]

local impact = Player:CastRay()

print(impact.Block)	-- prints hit block's id

*/
Block: _Block;

/**
Distance to impact when casting a ray. (see [Camera].[CastRay](/reference/camera#functions-castray), [Player].[CastRay](/reference/player#functions-castray), [PointerEvent].[CastRay](/reference/pointerevent#functions-castray))

*/
Distance: _number;

/**
Not `nil` if the [Impact] represents a [Block].

Indicates what block face has been touched.


*/
FaceTouched: _Face;

/**
Object touched by the ray.

[Samples]

Pointer.Down = function(event)

  local impact = event:CastRay()
  print(impact.Object) -- can be nil if no Object has been touched
end

*/
Object: _Object;

/**
Player touched by the ray.

[Samples]

Pointer.Down = function(event)

  local impact = event:CastRay()
  print(impact.Player) -- can be nil if no Player has been touched
end

*/
Player: _Player;

/**
Shape touched by the ray. Not `nil` if the [Impact] represents a [Shape].

*/
Shape: _Shape;


}



/**
Items is a shortcut to [Config].Items.

*/

declare interface _Items {



}


/**
[KeyValueStore]s can be used to store and retrieve user data.

*/

declare interface _KeyValueStore {


/**
[KeyValueStore]'s name.


*/
Name: _string;


/**
Sets values for given keys.

Currently, values can be [string]s, [number]s or [boolean]s. More types are going to be supported soon.

Though the operation is supposed to be real quick, it can't be instantaneous. That's why you need to supply a callback function to get the response.

The callback function only takes one argument:
- a [boolean], indicating if the operation was successful (it could fail because of network issues).


[Samples]

local store = KeyValueStore("settings")

store:Set("currentChallenge", "halloween", "jumpStrength", 10, function(success)
    if success then
      -- operation was successful
    end
end)

*/
Set(key1: _string, value: _string, callback: _function): void;
Set(key1: _string, value: _number, callback: _function): void;
Set(key1: _string, value: _boolean, callback: _function): void;

/**
Gets values for given keys.

Though the operation is supposed to be real quick, it can't be instantaneous. That's why you need to supply a callback function to get the response.

The callback function only takes 2 arguments: 
- A [boolean], indicating if the operation was successful (it could fail because of network issues).
- A [table] containing values for requested keys.


[Samples]

local store = KeyValueStore("settings")

store:Get("currentChallenge", "jumpStrength", function(success, results)
    if success then
      -- do something with results.currentChallenge
      -- and results.jumpStrength
    end
end)

*/
Get(key1: _string, key2: _string, callback: _function): void;

}


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


/**
Map is a global variable that represents the game map.
*/

declare interface _Map {


/**
Returns an [array] of [BlockProperties] ([Palette])

Note: non-opaque and light emissive block colors can't be changed after game start.


*/
LocalPalette: _Palette;


}


/**
A [MutableShape] is an [Object] that carries and displays a set of [Block]s. The difference with [Shape] is that [MutableShape] [Block]s can be modified.
*/

declare interface _MutableShape {



/**
Adds a [Block] to the [This].

Returns created [Block] (or [nil] if it fails).


[Samples]

local block = Block(1, 10, 10, 10)

someMutableShape:AddBlock(block)

-- AddBlock can also be called using
-- block's palette index and coordinates:
someMutableShape:AddBlock(1, 10, 10, 10)

-- created block is returned:
local newBlock = someMutableShape:AddBlock(1, 10, 10, 10)
if newBlock ~= nil then
  -- block successfully created!
end

-- ⚠️
local block = Block(1, 10, 10, 10)
local newBlock = someMutableShape:AddBlock(block)
-- Here `newBlock` is not the same as `block`
-- they both have the same palette index and coordinates
-- but `newBlock` has a parent shape while `block` doesn't.

*/
AddBlock(block: _Block): _Block;
AddBlock(paletteIndex: _number, position: _Number3): _Block;
AddBlock(paletteIndex: _number, X: _number, Y: _number, Z: _number): _Block;

/**
Gets a [Block] from the [This]. 
Returns [nil] if there is no [Block] at the given coordinates (i. e. if it's "air").


*/
GetBlock(X: _number, Y: _number, Z: _number): _Block;

}


/**
A Number3 contains 3 [number] values (X, Y & Z). It can represent different things in 3D space (points, vectors, forces).
*/

declare interface _Number3 {


/**
X value of the Number3.

[Samples]

myNumber3.X = 42

print(myNumber3.X)

*/
X: _number;

/**
Y value of the Number3.

[Samples]

myNumber3.Y = 42

print(myNumber3.Y)

*/
Y: _number;

/**
Z value of the Number3.

[Samples]

myNumber3.Z = 42

print(myNumber3.Z)

*/
Z: _number;

/**
`Number3`'s length.
Technically, the square root of the sum of [X](/reference/number3#property-x), [Y](/reference/number3#property-y) & [Z](/reference/number3#property-z) components.


[Samples]

number3 = Number3(3,4,12)

print(number3.Length) -- prints 13
-- sqrt(3*3 + 4*4 + 12*12) = 13

*/
Length: _number;

/**
Reading `Number3.SquaredLength` is faster than reading `Number3.Length`.
This is the main reason why this attribute is exposed. 
It can be used when comparing distances.


[Samples]

-- compare distances between objects

local d2 = o1.Position - o2.Position
local d3 = o1.Position - o3.Position

if d2.SquaredLength < d3.SquaredLength then
  print("o1 is closer to o2")
else
  print("o1 is closer to o3")
end
-- Using Length instead of SquaredLength would give the same results,
-- but it would have to internally compute 2 square roots for nothing.

*/
SquaredLength: _number;


/**
Returns a copy of the [Number3].


[Samples]

local n1 = Number3(1, 0, 0)

local n2 = n1 -- n2 is not a copy but a direct reference to n1
n2.X = 10
print(n1.X) -- now n1.X == 10

-- using Copy:
local n1 = Number3(1, 0, 0)
local n2 = n1:Copy() -- n2 is a copy of n1, they're not the same Number3
n2.X = 10
print(n1.X) -- n1.X is still 1

*/
Copy(n: _Number3): _Number3;

/**
Returns the cross product of both [Number3]s.


[Samples]

local n1 = Number3(1, 0, 0)

local n2 = Number3(1, 0, 0)
local n3 = n1:Cross(n2)

*/
Cross(n: _Number3): _Number3;

/**
Returns the dot product of both [Number3]s.


[Samples]

local n1 = Number3(1, 0, 0)

local n2 = Number3(1, 0, 0)
local dot = n1:Dot(n2)

*/
_number;
Dot(n: _Number3): _number;

/**
Rotates the `Number3` using euler angles in parameters (in radians).


[Samples]

local someNumber3 = Number3(0,0,1)

local pi = 3.1415
someNumber3:Rotate(Number3(0,pi,0))
-- someNumber3 == Number3(0,0,-1), after a PI rotation around Y axis (180°)

*/
Rotate(angles: _Number3): void;

/**
Normalizes the `Number3`.
Scales [X](/reference/number3#property-x), [Y](/reference/number3#property-y) & [Z](/reference/number3#property-z) for the [Length](/reference/number3#property-length) to be `1.0`.


[Samples]

local someNumber3 = Number3(10,0,0)

someNumber3:Normalize()
-- someNumber3 == 1 now

-- NOTE: this also achieves normalization:
someNumber3.Length = 1.0

*/

}


/**
An `Object` is the most basic thing that can be added to the game 3D scene.

It has a position, a rotation and a scale and can contain child [Object]s, including [Object] extensions like [Shape].

An object by itself does not render anything on screen, but it can contain [Shape]s and thus become a parent coordinate system for them.

An `Object` can also take part in the physics simulation when setting [Object.Physics](#property-physics) to `true`.

*/

declare interface _Object {


/**
[This]'s constant acceleration in world coordinates per second squared.

⚠️ `Acceleration` will only affect [This]'s position while [This].[Physics](#property-physics) is `true`.


[Samples]

-- Acceleration can be used to compensate gravity: 

myObject.Acceleration = -Config.ConstantAcceleration
-- myObject's acceleration is now the invert of 
-- Config.ConstantAcceleration, cancelling it.

*/
Acceleration: _Number3;

/**
Collision groups the [This] belongs to. 

⚠️ It doesn't mean the [This] will collide with other [Object]s in these groups. 

If the [This] belongs to group number `3` for example, it means all [Object]s that have group number `3` in their [Object].[CollidesWithGroups](#property-collideswithgroups) property will collide with it.

By default:
- [Object]s collide with the [Map] and other [Object]s
- [Player]s collide with the [Map] only

That can all be configured differently depening on your needs.


[Samples]

local object1 = Object()

local object2 = Object()
-- It's not mandatory to set Physics to true
-- An object with Physics set to false contributes to the
-- physics simulation as a static item (can't be moved)
object1.Physics = true
object2.Physics = true

-- making sure 2 objects collide with each other
-- NOTE: by default:
-- Map.CollisionGroups == {1},
-- Player.CollisionGroups == {2},
-- Object.CollisionGroups == {3}
object1.CollisionGroups = {5}
object2.CollisionGroups = {5}
object1.CollidesWithGroups = {1, 5} -- collides with Map + objects in group 5
object2.CollidesWithGroups = {1, 5} -- collides with Map + objects in group 5

-- would also work this way if you don't 
-- remember Map's group (which can be changed too by the way)
object1.CollidesWithGroups = Map.CollisionGroups + {5}

-- making an object collides with the Map and Players
local object = Object()
object.CollidesWithGroups = Map.CollisionGroups + Player.CollisionGroups

-- for Player (local player) to collide with other players and the Map
Player.CollidesWithGroups = Map.CollisionGroups + Player.CollisionGroups

*/
CollisionGroups: _CollisionGroups;

/**
Collision groups the [This] collides with. 

By default:
- [Object]s collide with the [Map] and other [Object]s
- [Player]s collide with the [Map] only

That can all be configured differently depening on your needs.


[Samples]

local object = Object()

-- It's not mandatory to set Physics to true
-- An object with Physics set to false contributes to the
-- physics simulation as a static item (can't be moved)
object.Physics = true

-- making an object collide with the Map and Players
object.CollidesWithGroups = Map.CollisionGroups + Player.CollisionGroups

-- for an Object to collide with other objects only
-- (won't collide with the map)
object.CollidesWithGroups = object.CollisionGroups

-- for Player (local player) to collide with other players and the Map
Player.CollidesWithGroups = Map.CollisionGroups + Player.CollisionGroups

-- making sure 2 objects collide with each others
-- NOTE: by default:
-- Map.CollisionGroups == {1},
-- Player.CollisionGroups == {2},
-- Object.CollisionGroups == {3}
local object1 = Object()
local object2 = Object()
object1.CollisionGroups = {5}
object2.CollisionGroups = {5}
object1.CollidesWithGroups = {1, 5} -- collides with Map + objects in group 5
object2.CollidesWithGroups = {1, 5} -- collides with Map + objects in group 5

-- would also work this way if you don't 
-- remember Map's group (which can be changed too by the way)
object1.CollidesWithGroups = Map.CollisionGroups + {5}

*/
CollidesWithGroups: _CollisionGroups;

/**
Turns physic simulation on/off when set.

⚠️ When turned off, [This].[Velocity](#property-velocity) & [This].[Motion](#property-motion) are set to `{0,0,0}`.


*/
Physics: _boolean;

/**
[nil] by default. Can be set to a function that will be triggered when the [This] collides with another [Object].

The function is called with 3 parameters: the object the callback was set for, the other actor in the collision and the [Face] of the first actor that's in contact.

Note: it's not necessary to do use all 3 parameters.


[Samples]

object.OnCollision = function(o1, o2)

  -- `o1` is `object` here
  print("collision detected between", o1, "and", o2)
end

object.OnCollision = function(o1, o2, face)
  -- `o1` is `object` here
  print("collision detected between", o1, "'s", face, "and", o2)
end

*/
OnCollision: _function;

/**
[nil] by default. Can be set to a function that will be triggered when the [This] ends colliding with another [Object].

The function is called with 2 parameters: the object the callback was set for and the other actor in the collision.


[Samples]

object.OnCollisionEnd = function(o1, o2)

  -- `o1` is `object` here
  print("collision ended between", o1, "and", o2)
end

*/
OnCollisionEnd: _function;

/**
Executed when the [Pointer] is dragged (moved while down). Receives a [PointerEvent] parameter, just like [Pointer.Drag](/reference/pointer#property-drag).

([nil] by default)


[Samples]

myObject.OnPointerDrag = function(pointerEvent)

  print("dx:", pointerEvent.DX, "dy:", pointerEvent.DY)
end

*/
OnPointerDrag: _function;

/**
Position of the [This] in the world.


[Samples]

local o = Object()

-- places the object where the local player is
o.Position = Player.Position

*/
Position: _Number3;

/**
`true` when the [This] is not falling.

⚠️ `IsOnGround` only makes sense when [This].Physics is `true`.


*/
IsOnGround: _boolean;

/**
Can be set to `true` for the [This] to be hidden.
Nothing else changes, the [This] remains in the scene and it keeps being affected by the simulation (collisions, etc.).


*/
IsHidden: _boolean;

/**
Position of the [This] in its parent.
In other words, `LocalPosition` refers to the position of the [This] relative to the `{0,0,0}` position of its parent.


*/
LocalPosition: _Number3;

/**
Rotation of the [This] in the world (as seen on screen).

While it usually works for simple operations (like `Rotation.X = Rotation.X + someAngle`), we advise you to use [Number3].[Rotate](/reference/number3#functions-rotate) to rotate an object around X, Y & Z axis.

You can also set unit vectors like [This].[Up](#property-up), [This].[Right](#property-right) or [This].[Forward](#property-forward) to orient your object.


[Samples]

local o = Object()

o.Rotation = {0, math.pi, 0}
-- o revolved half a turn on Y axis

-- another way to rotate the object:
o.Forward:Rotate({0, 0, math.pi / 2})
o.Forward = Camera.Forward

*/
Rotation: _Number3;

/**
Tick is a [function] executed ~30 times per second when set ([nil] by default). Provides the [This] and elapsed time in seconds as parameters.


[Samples]

-- executed ~30 times per second on each user device

myObject.Tick = function(object, dt)
  print("elapsed:", dt, "seconds")
end

*/
Tick: _function;

/**
Rotation of the [This] in its parent.

Nested [Object] local rotations are combined to obtain the "world rotation" ([Object.Rotation](#property-rotation)), the [Object]'s final on-screen rotation.


*/
LocalRotation: _Number3;

/**
Velocity of the [This] in world coordinates per second.

⚠️ `Velocity` will only affect [This]'s position while [This].[Physics](#property-physics) is `true`. Whenever it is set to `false`, `Velocity` is set to `{0,0,0}`.


[Samples]

-- makes myObject jump:

myObject.Velocity.Y = 100

*/
Velocity: _Number3;

/**
Be aware, this `Motion` property is a hack regarding laws of physics. (sorry Isaac)

But it's very practical to move objects without worrying about forces at play.

This is what's being used by default when you're moving around with your avatar (see [Client.DirectionalPad](/reference/client#property-directionalpad)). It's the reason why you can stop moving horizontally while in the air.

Basically, `Motion` is an instantaneous displacement that contributes to moving [This] every frame, without changing [This].[Velocity](#property-velocity) directly.

`Motion` is expressed in world coordinates per second.

⚠️ `Motion` will only affect [This]'s position while [This].[Physics](#property-physics) is `true`. Whenever it is set to `false`, `Motion` is set to `{0,0,0}`.


[Samples]

local speed = 10

myObject.Motion = Camera.Forward * speed
-- myObject will move in the same direction the camera is currently facing.
-- If the Camera rotates after this, it won't change where myObject is heading.

*/
Motion: _Number3;

/**
Scale of the [Object], in its parent.

Nested [Object] local scales are combined to obtain the "world scale" ([Object.LossyScale](#property-lossyscale)), the [Object]'s final scale.


[Samples]

myObject.LocalScale = 2 -- the Object is now 2 times bigger


topLevelObject.LocalScale = 2

local o = Object()
o.LocalScale = 0.5
topLevelObject:AddChild(o) -- o becomes a child of topLevelObject
-- o ends up being displayed with a scale of 1

*/
LocalScale: _number;

/**
Convenience property that attempts to match the actual world scale as much as it can. Note that [Object]s that have multiple levels of nested rotations and scales will return a skewed lossy scale.


*/
LossyScale: _number;

/**
The mass of the [Object] determines how much a given force can move it and whether or not another object can be pushed by it. It cannot be zero, a neutral mass is a mass of 1.


*/
Mass: _number;

/**
The combined friction of 2 [Object]s in contact represents how much the moving [Object] will be able to slide along the colliding [Object]. It is a rate between 0 (full stop on contact) and 1 (full slide, no friction), values higher than 1 are allowed and will create an increasing momentum, like sliding on ice.


*/
Friction: _number;

/**
The combined bounciness of 2 [Object]s in contact represents how much of the moving [Object]'s velocity is produced after being in contact with colliding [Object], it is a rate between 0 (no bounce) and 1 (100% of the velocity bounced). Values higher than 1 are allowed and will create an increasing momentum at each bounce (try at your own risk).


*/
Bounciness: _number;

/**
All [Object]s have a collision box that represents the space occupied in the scene with regards to collisions. For [Shape]s and [Player]s, the collision box is updated with their bounding box. For [Object]s, it is a 1-cube by default after physics was enabled for the first time.


*/
CollisionBox: _Box;

/**
Returns number of child [Object]s.


*/
ChildrenCount: _number;

/**
`Up` is a unit vector (vector with a length of 1). It determines which direction is "up" for the [This].

Setting it is a way to rotate the [This].


*/
Up: _Number3;

/**
`Right` is a unit vector (vector with a length of 1). It determines which direction is "right" for the [This].

Setting it is a way to rotate the [This].


*/
Right: _Number3;

/**
`Forward` is a unit vector (vector with a length of 1). It determines which direction is "forward" for the [This].

Setting it is a way to rotate the [This].


*/
Forward: _Number3;

/**
`Left` is a unit vector (vector with a length of 1). It determines which direction is "left" for the [This].

Setting it is a way to rotate the [This].


*/
Left: _Number3;

/**
`Down` is a unit vector (vector with a length of 1). It determines which direction is "down" for the [This].

Setting it is a way to rotate the [This].


*/
Down: _Number3;

/**
`Backward` is a unit vector (vector with a length of 1). It determines which direction is "backward" for the [This].

Setting it is a way to rotate the [This].


*/
Backward: _Number3;


/**
Adds given [Object] as a child.

[Object] extensions like [Shape] or [MutableShape] are naturally accepted too.

By default, when using AddChild, the child maintains it's [LocalPosition](/reference/object#property-localposition). But since the local position remains the same in the new parent, it means the child's world position may change.

The `keepWorld` optional parameter, `false` by default, can be used to maintain the child's [Position](/reference/object#property-position) (world position) instead. 

It's also a good practice to set child/parent relationships before setting positions.


[Samples]

local o = Object()

local myShape = Shape(Items.someuser.someitem)
o:AddChild(myShape)

*/
AddChild(child: _Object): void;
AddChild(child: _Object, keepWorld: _boolean): void;

/**
Unsets parent/child relationship with child parameter. The child ends up being deleted if it has no other references.

[Samples]

o:RemoveChild(someChildObject)


*/
RemoveChild(child: _Object): void;

/**
Unsets parent/child relationship with all children. Individual children end up being deleted if they have no other references.

[Samples]

o:RemoveChildren()


*/

/**
Get child [Object] at index.

[Samples]

if o.ChildrenCount > 0 then

  print(o:GetChild(1)) -- prints first child
end

*/
GetChild(index: _number): void;

/**
Get [This]'s parent.

[Samples]

print(myObject:GetParent())


*/

/**
Sets parent/child relationship with parent parameter. [nil] can be used to remove the [Object] from its parent.

By default, when using SetParent, the child maintains it's [LocalPosition](/reference/object#property-localposition). But since the local position remains the same in the new parent, it means the child's world position may change.

The `keepWorld` optional parameter, `false` by default, can be used to maintain the child's [Position](/reference/object#property-position) (world position) instead. 

It's also a good practice to set child/parent relationships before setting positions.


[Samples]

local o = Object()

o:SetParent(Map) -- o is now a child of the map
-- (Map is an extension of Object)

*/
SetParent(parent: _Object): void;
SetParent(parent: _Object, keepWorld: _boolean): void;

/**
Removes the [This] from its parent. Doesn't do anything if the [This] has no parent.

[Samples]

o:RemoveFromParent()


*/

/**
Converts a local position to world coordinate system.

[Samples]

local p = Number3(1, 2, 3)

local pInWorldCoords = myObject:PositionLocalToWorld(p)

*/
PositionLocalToWorld(p: _Number3): _Number3;

/**
Converts a world position to local coordinate system.

[Samples]

local p = Number3(1, 2, 3)

local pInLocalCoords = myObject:PositionWorldToLocal(p)

*/
PositionWorldToLocal(p: _Number3): _Number3;

/**
Object:RotateLocal(number3) -- euler angles
Object:RotateLocal(number3, number) -- axis angle

*/
RotateLocal(angles: _Number3): void;
RotateLocal(axis: _Number3, angle: _number): void;

/**
Object:RotateWorld(number3) -- euler angles
Object:RotateWorld(number3, number) -- axis angle

*/
RotateWorld(angles: _Number3): void;
RotateWorld(axis: _Number3, angle: _number): void;

/**
Converts a local rotation to world coordinate system.

*/
RotationLocalToWorld(p: _Number3): _Number3;

/**
Converts a world rotation to local coordinate system.

*/
RotationWorldToLocal(p: _Number3): _Number3;

/**
Adds a text bubble at [Object]'s position. For a [Shape] or [Player], the text bubble will appear above its bounding box.

You may use a duration of `-1` to set a permanent text bubble.


*/
TextBubble(text: _string): void;
TextBubble(text: _string, duration: _number): void;
TextBubble(text: _string, duration: _number, offset: _number): void;
TextBubble(text: _string, duration: _number, offset: _number, color: _Color): void;
TextBubble(text: _string, duration: _number, offset: _number, color: _Color, bgColor: _Color): void;
TextBubble(text: _string, duration: _number, offset: _number, color: _Color, bgColor: _Color, tail: _boolean): void;

/**
Returns `true` if the two [Object]s may collide with each other.

*/
_boolean;
CollidesWith(self: _Object, other: _Object): _boolean;

/**
Apply a force to [Object], taking into account its [Mass](/reference/object#property-mass).

*/
ApplyForce(self: _Object, value: _Number3): void;

/**
Instantaneously remove any ongoing text bubble.

*/
ClearTextBubble(self: _Object): void;

}



/**
OtherPlayers is an array of Players that contains all players except the local one.
*/

declare interface _OtherPlayers {



}



/**
A Palette is an [array] of [BlockProperties].

*/

declare interface _Palette {



}


/**
Player is a shortcut to `Client.Player`.
Represents the local Player.

*/

declare interface _Player {


/**
The [Shape] of the [Player]'s head.

*/
Head: _Shape;

/**
The [Shape] of the [Player]'s body.

*/
Body: _Shape;

/**
The [Shape] of the [Player]'s left arm.

*/
LeftArm: _Shape;

/**
The [Shape] of the [Player]'s right arm.

*/
RightArm: _Shape;

/**
The [Shape] of the [Player]'s left leg.

*/
LeftLeg: _Shape;

/**
The [Shape] of the [Player]'s right leg.

*/
RightLeg: _Shape;

/**
Returns the block on which the Player is standing on.

*/
BlockUnderneath: _Block;

/**
Returns an [array] of [Block]s the player is standing on

[Samples]

local blocks = Player.BlocksUnderneath

for index, value in ipairs(blocks) do 
    -- greenColorIndex is a block previously defined
    local newBlock = Block(10) -- 10: BlockerProperties index
    value:Replace(newBlock)
end

*/
BlocksUnderneath: _array;

/**
Unique player ID for played game. A different ID can be attributed after reconnection.

*/
ID: _number;

/**
Player's account username. Usernames are unique.

*/
Username: _string;

/**
Player's account identifier (ID). Identifiers are unique.

*/
UserID: _string;

/**
Absolute world position of the Player.

*/
Position: _Number3;

/**
Player's rotation. (Y value is not considered)

*/
Rotation: _Number3;

/**
Player's velocity (speed + direction).

*/
Velocity: _Number3;

/**
Indicates whether the [Player] object is the local `Player`.
This is only valid on the [Client], not on the [Server].


*/
IsLocal: _boolean;


/**
Casts a ray from player's position, returns an [Impact] if it hits something, [nil] otherwise.

💡 Calls [Ray].[Cast](/reference/ray#functions-cast) under the hood. See [Ray].[Cast](/reference/ray#functions-cast) definition for more details about possible filters.


[Samples]

local impact = Player:CastRay()

if impact ~= nil then
  print(impact)
end

*/
CastRay(): _Impact;
CastRay(filterIn: _CollisionGroups): _Impact;
CastRay(filterIn: _Shape): _Impact;
CastRay(filterIn: _nil, filterOut: _Object): _Impact;
CastRay(filterIn: _CollisionGroups, filterOut: _Object): _Impact;
CastRay(filterIn: _Shape, filterOut: _Object): _Impact;

/**
Equips an [Item], [Shape] or [MutableShape] on the back of the [Player].
You can remove what's been equiped using [nil] argument


*/
EquipBackpack(item: _Item): void;
EquipBackpack(shape: _Shape): void;
EquipBackpack(shape: _MutableShape): void;
EquipBackpack(): void;

/**
Equips an Item, Shape or MutableShape on [Player]'s head.
You can remove what's been equiped using [nil] argument


*/
EquipHat(Item: _Item): void;
EquipHat(shape: _Shape): void;
EquipHat(shape: _MutableShape): void;
EquipHat(): void;

/**
Puts an [Item], [Shape] or [MutableShape] in [Player]'s left hand.
You can remove what's been equiped using [nil] argument


*/
EquipLeftHand(item: _Item): void;
EquipLeftHand(shape: _Shape): void;
EquipLeftHand(shape: _MutableShape): void;
EquipLeftHand(): void;

/**
Puts an [Item], [Shape] or [MutableShape] in [Player]'s right hand.
You can remove what's been equiped using [nil] argument


[Samples]

Config = {

  Items = { "aduermael.rainbow_sword" }
}

Client.OnStart = function()
  Player:EquipRightHand(Items.aduermael.rainbow_sword)
  -- or
  local s = Shape(Items.aduermael.rainbow_sword)
  Player:EquipRightHand(s)

  Player:EquipRightHand(nil) -- unequips the sword
end

*/
EquipRightHand(item: _Item): void;
EquipRightHand(shape: _Shape): void;
EquipRightHand(shape: _MutableShape): void;
EquipRightHand(): void;

/**
Swaps [Player]'s hand held items.
If one hand holds nothing, the [Item] switches hands.


*/

/**
Make [Player]'s right hand swing.


*/

/**
Make [Player]'s left hand swing.


*/

}



/**
Players is an array of Players, it contains all players who joined the game.
*/

declare interface _Players {



}


/**
Pointer is a shortcut to [Client].[Pointer].

Pointer allows to catch user pointer events. Mouse events or touch events depending on the device.

The goal is to create an abstraction for world inputs to work on any platform. A world that's been developped on PC should work great on mobile, and the developer shouldn't have to worry about this.

*/

declare interface _Pointer {


/**
Triggered when pressing the pointer. (left click or one finger touch down)

[Samples]

Pointer.Down = function( pointerEvent )

  
end

*/
Down: _function;

/**
Triggered when the pointer is dragged (moved while down).

[Samples]

Pointer.Drag = function( pointerEvent )

    print(pointerEvent.DX, pointerEvent.DY)
end

*/
Drag: _function;

/**
Triggered when the pointer is moved with right mouse button or 2 touch fingers down.

[Samples]

Pointer.Drag2 = function( pointerEvent )

    print(pointerEvent.DX, pointerEvent.DY)
end

*/
Drag2: _function;

/**
Triggered when the pointer is released.

[Samples]

Pointer.Up = function( pointerEvent )


end

*/
Up: _function;

/**
Triggered when scrolling with mouse or pinching in/out with 2 fingers.

[Samples]

Pointer.Zoom = function( pointerEvent )


end

*/
Zoom: _function;

/**
True if the [Pointer] is hidden, false otherwise.


[Samples]

Pointer:Show()

print(Pointer.IsHidden) -- false
Pointer:Hide()
print(Pointer.IsHidden) -- true

*/
IsHidden: _boolean;


/**
[Pointer] callbacks start being triggered on mouse and touch events.

User interface elements such as [Button]s become active.


[Samples]

Pointer:Show()


*/

/**
Virtual game pads appear on touch screens. 

Direction keys and gamepad start triggering [Client.DirectionDidChange](/reference/client#property-directiondidchange) 

The pointer is hidden by default.


[Samples]

Pointer:Hide()


*/

}


declare interface _PointerEvent {


/**
Horizontal position of the pointer when the event happens, in screen coordinates. `{0,0}` represents the bottom left of the screen, and `{1,1}` the top right. `X` is close to `0.5` when pointing the horizontal center.


*/
X: _number;

/**
Vertical position of the pointer when the event happens, in screen coordinates. `{0,0}` represents the bottom left of the screen, and `{1,1}` the top right. `Y` is close to `0.5` when pointing the vertical center.


*/
Y: _number;

/**
Horizontal delta, not `0` when moving the pointer (see [Pointer].[Drag](/reference/pointer#property-drag) or [Pointer].[Drag2](/reference/pointer#property-drag2))


*/
DX: _number;

/**
Vertical delta, not `0` when moving the pointer (see [Pointer].[Drag](/reference/pointer#property-drag) or [Pointer].[Drag2](/reference/pointer#property-drag2))


*/
DY: _number;

/**
[PointerEvent]'s location, in world coordinate system.


*/
Position: _Number3;

/**
The direction in which a ray would go based on the [PointerEvent].


*/
Direction: _Number3;

/**
Indicates whether the [This] represents a touch/click "down" event. If false, it represents a "up" event.


*/
Down: _boolean;


/**
Casts a ray from [PointerEvent] screen coordinates and returns an [Impact] (can be [nil]).

The [Impact] contains information about the kind of thing that's been hit.

💡 Calls [Ray].[Cast](/reference/ray#functions-cast) under the hood. See [Ray].[Cast](/reference/ray#functions-cast) definition for more details about possible filters.


[Samples]

Pointer.Down = function( pointerEvent )

    local impact = pointerEvent:CastRay()
    if impact.Block ~= nil then
      print("block hit:", impact.Block)
    end

    -- this can also be done using a Ray object:
    local ray = Ray(pointerEvent.Position, pointerEvent.Direction)
    impact = ray:Cast()
    if impact.Block ~= nil then
      print("block hit:", impact.Block)
    end
end

*/
CastRay(): _Impact;
CastRay(filterIn: _CollisionGroups): _Impact;
CastRay(filterIn: _Shape): _Impact;
CastRay(filterIn: _nil, filterOut: _Object): _Impact;
CastRay(filterIn: _CollisionGroups, filterOut: _Object): _Impact;
CastRay(filterIn: _Shape, filterOut: _Object): _Impact;

}


declare interface _Ray {


/**
The origin of the ray, in world coordinate system.

*/
Origin: _Number3;

/**
The direction of the ray, in world coordinate system.

*/
Direction: _Number3;

/**
Defines items colliding with the ray. [nil] by default, meaning the ray collides with everything.


*/
FilterIn: _nil | _CollisionGroups | _Shape;

/**
[nil] by default. Can be set to an [Object] to filter it out from possible collisions.


*/
FilterOut: _nil | _Object;


/**
Casts a ray and returns an [Impact] (can be [nil]).

The [Impact] contains information about what's been hit.

By default, a ray collides with all [CollisionGroups]. But filters can be set, if you want your ray to only collide with the [Map] for example. You can also filter out an [Object] of any kind.


[Samples]

Pointer.Down = function( pointerEvent )

    local ray = Ray(pointerEvent.Position, pointerEvent.Direction)
    local impact = ray:Cast()
    if impact.Block ~= nil then
      print("block hit:", impact.Block)
    end
end

-- cast rays from Camera's position to remove cubes in the map
Client.Action2 = function()
    local ray = Ray(Camera.Position, Camera.Forward)
    ray:Cast(Map.CollisionGroups) -- only consider the map for collisions
    if impact.Block ~= nil then
      impact.Block:Remove()
    end
end

-- cast ray down from Player's position to see
-- if there's something under it:
Client.Action3 = function()
    local ray = Ray(Player.Position, {0, -1, 0})
    ray:Cast(nil, Player) -- filter out Player to avoid direct impacts with it
    if impact ~= nil then
        print("found something under the player, distance:", impact.Distance)
    end
end

*/
Cast(): _Impact;
Cast(filterIn: _CollisionGroups): _Impact;
Cast(filterIn: _Shape): _Impact;
Cast(filterIn: _nil, filterOut: _Object): _Impact;
Cast(filterIn: _CollisionGroups, filterOut: _Object): _Impact;
Cast(filterIn: _Shape, filterOut: _Object): _Impact;

}


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


/**
The `Server` acts as a host and director for the game.

For example, if your game requires a minimum amount of players, it's a good idea to use the [Server] to count and trigger game start.

⚠️ Multiplayer has been turned off in the first beta versions. It will be back soon, and this page will be updated with more details.

*/

declare interface _Server {


/**
Executed when the [This] receives an [Event] from a game client. Provides the received [Event] as parameter.


[Samples]

-- executed ~30 times per second on each user device

Server.DidReceiveEvent = function(event)
  print("event received:", event)
end

*/
DidReceiveEvent: _function;

/**
Executed ~30 times per second. Provides the elapsed time in seconds as parameter.


[Samples]

-- executed ~30 times per second on each user device

Server.Tick = function(dt)
  print("elapsed:", dt, "seconds")
end

*/
Tick: _function;


/**
Returns the current UTC time as a Unix Timestamp.


*/
UnixTime(): _number;

}


/**
A [Shape] is an [Object] that carries and displays a set of [Block]s.
*/

declare interface _Shape {


/**
`Pivot` is a point that you set as a way to specify what part of the [Shape] will be used when setting its [Position](/reference/shape#property-position).

A [Shape] rotates around this point. The Pivot point can be outside your shape.

`Pivot` coordinates are local to the [Shape].

As a convenience, `Pivot` can be set to a [Block], the [Number3] value is then set to represent its center.


[Samples]

-- Anchor at the center of a 3x3x3 shape:

myShape.Anchor = {1.5, 1.5, 1.5}
-- same result:
myShape.Anchor = myShape:GetBlock(1,1,1)

*/
Pivot: _Number3;

/**
Returns [This]'s depth, measured in cubes.

*/
Depth: _number;

/**
Returns [This]'s height, measured in cubes.

*/
Height: _number;

/**
Returns [This]'s width, measured in cubes.

*/
Width: _number;

/**
The BoundingBox represents the bounds of the [This]. It is the limits of the Shape's blocks.


*/
BoundingBox: _Box;

/**
The coordinates of the min limit of the [This]'s BoundingBox.


*/
Min: _Number3;

/**
The coordinates of the center of the [This]'s BoundingBox.


*/
Center: _Number3;

/**
The coordinates of the max limit of the [This]'s BoundingBox.


*/
Max: _Number3;


/**
Gets a [Block] from the [Shape].
Returned [Block] is readOnly because [Shape] is immutable, unlike [MutableShape].
Returns [nil] if there is no [Block] at those coordinates (i. e. if it's "air").


*/
GetBlock(X: _number, Y: _number, Z: _number): _Block;
GetBlock(coordinates: _Number3): _Block;

/**
Converts Block coordinates to world coordinate system.

*/
BlockToWorld(b: _Block): _Number3;
BlockToWorld(n: _Number3): _Number3;

/**
Converts Block coordinates to local coordinate system.

*/
BlockToLocal(b: _Block): _Number3;
BlockToLocal(n: _Number3): _Number3;

/**
Converts world coordinates to Block coordinate system.

*/
WorldToBlock(n: _Number3): _Number3;

/**
Converts local coordinates to Block coordinate system.

*/
LocalToBlock(n: _Number3): _Number3;

}


/**
Time represents a ingame time of day.

*/

declare interface _Time {

/**
Current ingame day time.
Shortcut to [TimeCycle].[CurrentTime](/reference/timecycle#property-currenttime).

*/
Current: _Time;

/**
Dawn time.
*/
Dawn: _Time;

/**
Dusk time.
*/
Dusk: _Time;

/**
Midnight time.
*/
Midnight: _Time;

/**
Noon time.
*/
Noon: _Time;


/**
Hour represents the hour within [Time], in the range [0,23].


[Samples]

local t = Time.Noon

print(t.Hours) -- prints "12"

*/
Hour: _number;

/**
`H` is a shortcut to [Hour](/reference/time#property-hour).


[Samples]

local t = Time.Noon

print(t.H) -- prints "12"

*/
H: _number;

/**
Minute represents the minute offset within the hour of [Time], in the range [0,59].


[Samples]

local t = Time(12, 30, 45)

print(t.Minute) -- prints "30"

*/
Minute: _number;

/**
`M` is a shortcut to [Minute](/reference/time#property-minute).


[Samples]

local t = Time(12, 30, 45)

print(t.M) -- prints "30"

*/
M: _number;

/**
Second represents the second within the minute of [Time], in the range [0,59].


[Samples]

local t = Time(12, 30, 45)

print(t.Second) -- prints "45"

*/
Second: _number;

/**
`S` is a shortcut to [Second](/reference/time#property-second).


[Samples]

local t = Time(12, 30, 45)

print(t.S) -- prints "45"

*/
S: _number;


}


/**
TimeCycle gives control over game time cycle properties.

*/

declare interface _TimeCycle {


/**
Current time of day for all players.


[Samples]

-- 

print(TimeCycle.CurrentTime)
-- also accessible through:
print(Time.Current)

*/
CurrentTime: _Time;

/**
Time cycle duration in seconds.


[Samples]

TimeCycle.Duration = 10 -- from noon to noon in 10 seconds


*/
Duration: _number;

/**
Returns an [array] of [TimeCycleMark]s.


[Samples]

TimeCycle.On = false

Time.Current = Time.Noon
TimeCycle.Marks.Noon.SkyColor = Color(255, 0, 0)
TimeCycle.Marks.Noon.HorizonColor = Color(255, 0, 0)
-- we can also use indices
TimeCycle.Marks[3].AbyssColor = Color(255, 0, 0)

*/
Marks: _array;

/**
Turns on/off time cycle. Stops at current time when turned off.


[Samples]

TimeCycle.On = false


*/
On: _boolean;


}


/**
TimeCycleMark exposes properties for each mark in the [TimeCycle].

*/

declare interface _TimeCycleMark {


/**
Mark's sky [Color].


*/
AbyssColor: _Color;

/**
Mark's ambient light [Color].


*/
AmbientLightColor: _Color;

/**
Mark's sky [Color].


*/
HorizonColor: _Color;

/**
Mark's sky [Color].


*/
SkyColor: _Color;

/**
Mark's sky light [Color].


*/
SkyLightColor: _Color;

/**
Mark's [Time].


*/
Time: _Time;


}


/**
Calls a [function] after a given time.
*/

declare interface _Timer {


/**
Time remaining before the function is called.

*/
RemainingTime: _number;

/**
Time since the start of the [Timer].

*/
Time: _number;


/**
Cancels the [Timer].

*/

}


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



/**
[World] is the [Object] at the root of the 3D scene.

*/

declare interface _World {



}

export default _World;