
/**
Camera is a shortcut to [Client].[Camera].

Controls camera movement and position.

All camera modes listed on this page are implemented in Lua, it's totally possible to implement custom ones.

*/

declare interface Camera {



/**
Can be set to change Camera's vertical field of view.

The default value is 60 degrees.


[Samples]

Camera.FieldOfView = 40.0


*/
FieldOfView: number;


/**
Shows an object that's been hidden to the local camera with [Camera:Hide](/reference/camera#functions-hide)


*/
Show(o: Object): void;

/**
Hides an object for the local camera only. Other players will still be able to see it if `object.IsHidden` remains `false`.

It's usefull when implementing a first person camera for example, to hide local player's body parts.


*/
Hide(o: Object): void;

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
Impact;
CastRay(): void;

/**
Puts Camera in "first person" mode. Looking at the world from `target`'s perspective.

When calling `SetModeFirstPerson` without parameters, the target defaults to [Player] (local player).

When `offset` is set to an [number], the offset is set on the vertical axis only, (`Number3(0, offset, 0)`)


[Samples]

Camera:SetModeFirstPerson(Player, 3.0)


*/
SetModeFirstPerson(): void;

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

/**
When in that mode, the camera rotates around its target, maintaining its distance from it.

When calling `SetModeSatellite` without parameters, the target defaults the current position of the camera.

`SetModeSatellite` can be called several time to update the `distance`.

Once the "satellite mode" is set, [Camera.LocalRotation](#property-localrotation) can be used to rotate around the target.


[Samples]

Camera:SetModeSatellite(Player, 10.0)


*/
SetModeSatellite(): void;

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
FitToScreen(target: Shape, screenRatio: number, spherize: boolean): void;

}

export default Camera;