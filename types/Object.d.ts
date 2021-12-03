
/**
An `Object` is the most basic thing that can be added to the game 3D scene.

It has a position, a rotation and a scale and can contain child [Object]s, including [Object] extensions like [Shape].

An object by itself does not render anything on screen, but it can contain [Shape]s and thus become a parent coordinate system for them.

An `Object` can also take part in the physics simulation when setting [Object.Physics](#property-physics) to `true`.

*/

declare interface Object {

/**
Creates an Object.

[Samples]

local o = Object()

World:AddChild(o) -- adds o to the [World] (top level object in the game scene)

*/
constructor: () => Object;



/**
[This]'s constant acceleration in world coordinates per second squared.

⚠️ `Acceleration` will only affect [This]'s position while [This].[Physics](#property-physics) is `true`.


[Samples]

-- Acceleration can be used to compensate gravity: 

myObject.Acceleration = -Config.ConstantAcceleration
-- myObject's acceleration is now the invert of 
-- Config.ConstantAcceleration, cancelling it.

*/
Acceleration: Number3;

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
CollisionGroups: CollisionGroups;

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
CollidesWithGroups: CollisionGroups;

/**
Turns physic simulation on/off when set.

⚠️ When turned off, [This].[Velocity](#property-velocity) & [This].[Motion](#property-motion) are set to `{0,0,0}`.


*/
Physics: boolean;

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
OnCollision: function;

/**
[nil] by default. Can be set to a function that will be triggered when the [This] ends colliding with another [Object].

The function is called with 2 parameters: the object the callback was set for and the other actor in the collision.


[Samples]

object.OnCollisionEnd = function(o1, o2)

  -- `o1` is `object` here
  print("collision ended between", o1, "and", o2)
end

*/
OnCollisionEnd: function;

/**
Executed when the [Pointer] is dragged (moved while down). Receives a [PointerEvent] parameter, just like [Pointer.Drag](/reference/pointer#property-drag).

([nil] by default)


[Samples]

myObject.OnPointerDrag = function(pointerEvent)

  print("dx:", pointerEvent.DX, "dy:", pointerEvent.DY)
end

*/
OnPointerDrag: function;

/**
Position of the [This] in the world.


[Samples]

local o = Object()

-- places the object where the local player is
o.Position = Player.Position

*/
Position: Number3;

/**
`true` when the [This] is not falling.

⚠️ `IsOnGround` only makes sense when [This].Physics is `true`.


*/
IsOnGround: boolean;

/**
Can be set to `true` for the [This] to be hidden.
Nothing else changes, the [This] remains in the scene and it keeps being affected by the simulation (collisions, etc.).


*/
IsHidden: boolean;

/**
Position of the [This] in its parent.
In other words, `LocalPosition` refers to the position of the [This] relative to the `{0,0,0}` position of its parent.


*/
LocalPosition: Number3;

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
Rotation: Number3;

/**
Tick is a [function] executed ~30 times per second when set ([nil] by default). Provides the [This] and elapsed time in seconds as parameters.


[Samples]

-- executed ~30 times per second on each user device

myObject.Tick = function(object, dt)
  print("elapsed:", dt, "seconds")
end

*/
Tick: function;

/**
Rotation of the [This] in its parent.

Nested [Object] local rotations are combined to obtain the "world rotation" ([Object.Rotation](#property-rotation)), the [Object]'s final on-screen rotation.


*/
LocalRotation: Number3;

/**
Velocity of the [This] in world coordinates per second.

⚠️ `Velocity` will only affect [This]'s position while [This].[Physics](#property-physics) is `true`. Whenever it is set to `false`, `Velocity` is set to `{0,0,0}`.


[Samples]

-- makes myObject jump:

myObject.Velocity.Y = 100

*/
Velocity: Number3;

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
Motion: Number3;

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
LocalScale: number;

/**
Convenience property that attempts to match the actual world scale as much as it can. Note that [Object]s that have multiple levels of nested rotations and scales will return a skewed lossy scale.


*/
LossyScale: number;

/**
The mass of the [Object] determines how much a given force can move it and whether or not another object can be pushed by it. It cannot be zero, a neutral mass is a mass of 1.


*/
Mass: number;

/**
The combined friction of 2 [Object]s in contact represents how much the moving [Object] will be able to slide along the colliding [Object]. It is a rate between 0 (full stop on contact) and 1 (full slide, no friction), values higher than 1 are allowed and will create an increasing momentum, like sliding on ice.


*/
Friction: number;

/**
The combined bounciness of 2 [Object]s in contact represents how much of the moving [Object]'s velocity is produced after being in contact with colliding [Object], it is a rate between 0 (no bounce) and 1 (100% of the velocity bounced). Values higher than 1 are allowed and will create an increasing momentum at each bounce (try at your own risk).


*/
Bounciness: number;

/**
All [Object]s have a collision box that represents the space occupied in the scene with regards to collisions. For [Shape]s and [Player]s, the collision box is updated with their bounding box. For [Object]s, it is a 1-cube by default after physics was enabled for the first time.


*/
CollisionBox: Box;

/**
Returns number of child [Object]s.


*/
ChildrenCount: number;

/**
`Up` is a unit vector (vector with a length of 1). It determines which direction is "up" for the [This].

Setting it is a way to rotate the [This].


*/
Up: Number3;

/**
`Right` is a unit vector (vector with a length of 1). It determines which direction is "right" for the [This].

Setting it is a way to rotate the [This].


*/
Right: Number3;

/**
`Forward` is a unit vector (vector with a length of 1). It determines which direction is "forward" for the [This].

Setting it is a way to rotate the [This].


*/
Forward: Number3;

/**
`Left` is a unit vector (vector with a length of 1). It determines which direction is "left" for the [This].

Setting it is a way to rotate the [This].


*/
Left: Number3;

/**
`Down` is a unit vector (vector with a length of 1). It determines which direction is "down" for the [This].

Setting it is a way to rotate the [This].


*/
Down: Number3;

/**
`Backward` is a unit vector (vector with a length of 1). It determines which direction is "backward" for the [This].

Setting it is a way to rotate the [This].


*/
Backward: Number3;


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
AddChild(child: Object): void;
AddChild(child: Object, keepWorld: boolean): void;

/**
Unsets parent/child relationship with child parameter. The child ends up being deleted if it has no other references.

[Samples]

o:RemoveChild(someChildObject)


*/
RemoveChild(child: Object): void;

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
GetChild(index: number): void;

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
SetParent(parent: Object): void;
SetParent(parent: Object, keepWorld: boolean): void;

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
Number3;
PositionLocalToWorld(p: Number3): Number3;

/**
Converts a world position to local coordinate system.

[Samples]

local p = Number3(1, 2, 3)

local pInLocalCoords = myObject:PositionWorldToLocal(p)

*/
Number3;
PositionWorldToLocal(p: Number3): Number3;

/**
Object:RotateLocal(number3) -- euler angles
Object:RotateLocal(number3, number) -- axis angle

*/
RotateLocal(angles: Number3): void;
RotateLocal(axis: Number3, angle: number): void;

/**
Object:RotateWorld(number3) -- euler angles
Object:RotateWorld(number3, number) -- axis angle

*/
RotateWorld(angles: Number3): void;
RotateWorld(axis: Number3, angle: number): void;

/**
Converts a local rotation to world coordinate system.

*/
Number3;
RotationLocalToWorld(p: Number3): Number3;

/**
Converts a world rotation to local coordinate system.

*/
Number3;
RotationWorldToLocal(p: Number3): Number3;

/**
Adds a text bubble at [Object]'s position. For a [Shape] or [Player], the text bubble will appear above its bounding box.

You may use a duration of `-1` to set a permanent text bubble.


*/
TextBubble(text: string): void;
TextBubble(text: string, duration: number): void;
TextBubble(text: string, duration: number, offset: number): void;
TextBubble(text: string, duration: number, offset: number, color: Color): void;
TextBubble(text: string, duration: number, offset: number, color: Color, bgColor: Color): void;
TextBubble(text: string, duration: number, offset: number, color: Color, bgColor: Color, tail: boolean): void;

/**
Returns `true` if the two [Object]s may collide with each other.

*/
boolean;
CollidesWith(self: Object, other: Object): boolean;

/**
Apply a force to [Object], taking into account its [Mass](/reference/object#property-mass).

*/
ApplyForce(self: Object, value: Number3): void;

/**
Instantaneously remove any ongoing text bubble.

*/
ClearTextBubble(self: Object): void;

}

export default Object;