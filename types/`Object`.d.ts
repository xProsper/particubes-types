
/**
An ``Object`` is the most basic thing that can be added to the game 3D scene.

It has a position, a rotation and a scale and can contain child [`Object`]s, including [`Object`] extensions like [Shape].

An `Object` by itself does not render anything on screen, but it can contain [Shape]s and thus become a parent coordinate system for them.

An ``Object`` can also take part in the physics simulation when setting [`Object`.Physics](#property-physics) to `true`.

*/

declare namespace `Object` {

/**
Creates an `Object`.

[Samples]

local o = `Object`()

World:AddChild(o) -- adds o to the [World] (top level `Object` in the game scene)

*/



/**
[This]'s constant acceleration in world coordinates per second squared.

⚠️ `Acceleration` will only affect [This]'s position while [This].[Physics](#property-physics) is `true`.


[Samples]

-- Acceleration can be used to compensate gravity: 

my`Object`.Acceleration = -Config.ConstantAcceleration
-- my`Object`'s acceleration is now the invert of 
-- Config.ConstantAcceleration, cancelling it.

*/
const Acceleration: Number3;

/**
Collision groups the [This] belongs to. 

⚠️ It doesn't mean the [This] will collide with other [`Object`]s in these groups. 

If the [This] belongs to group number `3` for example, it means all [`Object`]s that have group number `3` in their [`Object`].[CollidesWithGroups](#property-collideswithgroups) property will collide with it.

By default:
- [`Object`]s collide with the [Map] and other [`Object`]s
- [Player]s collide with the [Map] only

That can all be configured differently depening on your needs.


[Samples]

local `Object`1 = `Object`()

local `Object`2 = `Object`()
-- It's not mandatory to set Physics to true
-- An `Object` with Physics set to false contributes to the
-- physics simulation as a static item (can't be moved)
`Object`1.Physics = true
`Object`2.Physics = true

-- making sure 2 `Object`s collide with each other
-- NOTE: by default:
-- Map.CollisionGroups == {1},
-- Player.CollisionGroups == {2},
-- `Object`.CollisionGroups == {3}
`Object`1.CollisionGroups = {5}
`Object`2.CollisionGroups = {5}
`Object`1.CollidesWithGroups = {1, 5} -- collides with Map + `Object`s in group 5
`Object`2.CollidesWithGroups = {1, 5} -- collides with Map + `Object`s in group 5

-- would also work this way if you don't 
-- remember Map's group (which can be changed too by the way)
`Object`1.CollidesWithGroups = Map.CollisionGroups + {5}

-- making an `Object` collides with the Map and Players
local `Object` = `Object`()
`Object`.CollidesWithGroups = Map.CollisionGroups + Player.CollisionGroups

-- for Player (local player) to collide with other players and the Map
Player.CollidesWithGroups = Map.CollisionGroups + Player.CollisionGroups

*/
const CollisionGroups: CollisionGroups;

/**
Collision groups the [This] collides with. 

By default:
- [`Object`]s collide with the [Map] and other [`Object`]s
- [Player]s collide with the [Map] only

That can all be configured differently depening on your needs.


[Samples]

local `Object` = `Object`()

-- It's not mandatory to set Physics to true
-- An `Object` with Physics set to false contributes to the
-- physics simulation as a static item (can't be moved)
`Object`.Physics = true

-- making an `Object` collide with the Map and Players
`Object`.CollidesWithGroups = Map.CollisionGroups + Player.CollisionGroups

-- for an `Object` to collide with other `Object`s only
-- (won't collide with the map)
`Object`.CollidesWithGroups = `Object`.CollisionGroups

-- for Player (local player) to collide with other players and the Map
Player.CollidesWithGroups = Map.CollisionGroups + Player.CollisionGroups

-- making sure 2 `Object`s collide with each others
-- NOTE: by default:
-- Map.CollisionGroups == {1},
-- Player.CollisionGroups == {2},
-- `Object`.CollisionGroups == {3}
local `Object`1 = `Object`()
local `Object`2 = `Object`()
`Object`1.CollisionGroups = {5}
`Object`2.CollisionGroups = {5}
`Object`1.CollidesWithGroups = {1, 5} -- collides with Map + `Object`s in group 5
`Object`2.CollidesWithGroups = {1, 5} -- collides with Map + `Object`s in group 5

-- would also work this way if you don't 
-- remember Map's group (which can be changed too by the way)
`Object`1.CollidesWithGroups = Map.CollisionGroups + {5}

*/
const CollidesWithGroups: CollisionGroups;

/**
Turns physic simulation on/off when set.

⚠️ When turned off, [This].[Velocity](#property-velocity) & [This].[Motion](#property-motion) are set to `{0,0,0}`.


*/
const Physics: boolean;

/**
[nil] by default. Can be set to a function that will be triggered when the [This] collides with another [`Object`].

The function is called with 3 parameters: the `Object` the callback was set for, the other actor in the collision and the [Face] of the first actor that's in contact.

Note: it's not necessary to do use all 3 parameters.


[Samples]

`Object`.OnCollision = function(o1, o2)

  -- `o1` is ``Object`` here
  print("collision detected between", o1, "and", o2)
end

`Object`.OnCollision = function(o1, o2, face)
  -- `o1` is ``Object`` here
  print("collision detected between", o1, "'s", face, "and", o2)
end

*/
const OnCollision: function;

/**
[nil] by default. Can be set to a function that will be triggered when the [This] ends colliding with another [`Object`].

The function is called with 2 parameters: the `Object` the callback was set for and the other actor in the collision.


[Samples]

`Object`.OnCollisionEnd = function(o1, o2)

  -- `o1` is ``Object`` here
  print("collision ended between", o1, "and", o2)
end

*/
const OnCollisionEnd: function;

/**
Executed when the [Pointer] is dragged (moved while down). Receives a [PointerEvent] parameter, just like [Pointer.Drag](/reference/pointer#property-drag).

([nil] by default)


[Samples]

my`Object`.OnPointerDrag = function(pointerEvent)

  print("dx:", pointerEvent.DX, "dy:", pointerEvent.DY)
end

*/
const OnPointerDrag: function;

/**
Position of the [This] in the world.


[Samples]

local o = `Object`()

-- places the `Object` where the local player is
o.Position = Player.Position

*/
const Position: Number3;

/**
`true` when the [This] is not falling.

⚠️ `IsOnGround` only makes sense when [This].Physics is `true`.


*/
const IsOnGround: boolean;

/**
Can be set to `true` for the [This] to be hidden.
Nothing else changes, the [This] remains in the scene and it keeps being affected by the simulation (collisions, etc.).


*/
const IsHidden: boolean;

/**
Position of the [This] in its parent.
In other words, `LocalPosition` refers to the position of the [This] relative to the `{0,0,0}` position of its parent.


*/
const LocalPosition: Number3;

/**
Rotation of the [This] in the world (as seen on screen).

While it usually works for simple operations (like `Rotation.X = Rotation.X + someAngle`), we advise you to use [Number3].[Rotate](/reference/number3#functions-rotate) to rotate an `Object` around X, Y & Z axis.

You can also set unit vectors like [This].[Up](#property-up), [This].[Right](#property-right) or [This].[Forward](#property-forward) to orient your `Object`.


[Samples]

local o = `Object`()

o.Rotation = {0, math.pi, 0}
-- o revolved half a turn on Y axis

-- another way to rotate the `Object`:
o.Forward:Rotate({0, 0, math.pi / 2})
o.Forward = Camera.Forward

*/
const Rotation: Number3;

/**
Tick is a [function] executed ~30 times per second when set ([nil] by default). Provides the [This] and elapsed time in seconds as parameters.


[Samples]

-- executed ~30 times per second on each user device

my`Object`.Tick = function(`Object`, dt)
  print("elapsed:", dt, "seconds")
end

*/
const Tick: function;

/**
Rotation of the [This] in its parent.

Nested [`Object`] local rotations are combined to obtain the "world rotation" ([`Object`.Rotation](#property-rotation)), the [`Object`]'s final on-screen rotation.


*/
const LocalRotation: Number3;

/**
Velocity of the [This] in world coordinates per second.

⚠️ `Velocity` will only affect [This]'s position while [This].[Physics](#property-physics) is `true`. Whenever it is set to `false`, `Velocity` is set to `{0,0,0}`.


[Samples]

-- makes my`Object` jump:

my`Object`.Velocity.Y = 100

*/
const Velocity: Number3;

/**
Be aware, this `Motion` property is a hack regarding laws of physics. (sorry Isaac)

But it's very practical to move `Object`s without worrying about forces at play.

This is what's being used by default when you're moving around with your avatar (see [Client.DirectionalPad](/reference/client#property-directionalpad)). It's the reason why you can stop moving horizontally while in the air.

Basically, `Motion` is an instantaneous displacement that contributes to moving [This] every frame, without changing [This].[Velocity](#property-velocity) directly.

`Motion` is expressed in world coordinates per second.

⚠️ `Motion` will only affect [This]'s position while [This].[Physics](#property-physics) is `true`. Whenever it is set to `false`, `Motion` is set to `{0,0,0}`.


[Samples]

local speed = 10

my`Object`.Motion = Camera.Forward * speed
-- my`Object` will move in the same direction the camera is currently facing.
-- If the Camera rotates after this, it won't change where my`Object` is heading.

*/
const Motion: Number3;

/**
Scale of the [`Object`], in its parent.

Nested [`Object`] local scales are combined to obtain the "world scale" ([`Object`.LossyScale](#property-lossyscale)), the [`Object`]'s final scale.


[Samples]

my`Object`.LocalScale = 2 -- the `Object` is now 2 times bigger


topLevel`Object`.LocalScale = 2

local o = `Object`()
o.LocalScale = 0.5
topLevel`Object`:AddChild(o) -- o becomes a child of topLevel`Object`
-- o ends up being displayed with a scale of 1

*/
const LocalScale: number;

/**
Convenience property that attempts to match the actual world scale as much as it can. Note that [`Object`]s that have multiple levels of nested rotations and scales will return a skewed lossy scale.


*/
const LossyScale: number;

/**
The mass of the [`Object`] determines how much a given force can move it and whether or not another `Object` can be pushed by it. It cannot be zero, a neutral mass is a mass of 1.


*/
const Mass: number;

/**
The combined friction of 2 [`Object`]s in contact represents how much the moving [`Object`] will be able to slide along the colliding [`Object`]. It is a rate between 0 (full stop on contact) and 1 (full slide, no friction), values higher than 1 are allowed and will create an increasing momentum, like sliding on ice.


*/
const Friction: number;

/**
The combined bounciness of 2 [`Object`]s in contact represents how much of the moving [`Object`]'s velocity is produced after being in contact with colliding [`Object`], it is a rate between 0 (no bounce) and 1 (100% of the velocity bounced). Values higher than 1 are allowed and will create an increasing momentum at each bounce (try at your own risk).


*/
const Bounciness: number;

/**
All [`Object`]s have a collision box that represents the space occupied in the scene with regards to collisions. For [Shape]s and [Player]s, the collision box is updated with their bounding box. For [`Object`]s, it is a 1-cube by default after physics was enabled for the first time.


*/
const CollisionBox: Box;

/**
Returns number of child [`Object`]s.


*/
const ChildrenCount: number;

/**
`Up` is a unit vector (vector with a length of 1). It determines which direction is "up" for the [This].

Setting it is a way to rotate the [This].


*/
const Up: Number3;

/**
`Right` is a unit vector (vector with a length of 1). It determines which direction is "right" for the [This].

Setting it is a way to rotate the [This].


*/
const Right: Number3;

/**
`Forward` is a unit vector (vector with a length of 1). It determines which direction is "forward" for the [This].

Setting it is a way to rotate the [This].


*/
const Forward: Number3;

/**
`Left` is a unit vector (vector with a length of 1). It determines which direction is "left" for the [This].

Setting it is a way to rotate the [This].


*/
const Left: Number3;

/**
`Down` is a unit vector (vector with a length of 1). It determines which direction is "down" for the [This].

Setting it is a way to rotate the [This].


*/
const Down: Number3;

/**
`Backward` is a unit vector (vector with a length of 1). It determines which direction is "backward" for the [This].

Setting it is a way to rotate the [This].


*/
const Backward: Number3;


/**
Adds given [`Object`] as a child.

[`Object`] extensions like [Shape] or [MutableShape] are naturally accepted too.

By default, when using AddChild, the child maintains it's [LocalPosition](/reference/`Object`#property-localposition). But since the local position remains the same in the new parent, it means the child's world position may change.

The `keepWorld` optional parameter, `false` by default, can be used to maintain the child's [Position](/reference/`Object`#property-position) (world position) instead. 

It's also a good practice to set child/parent relationships before setting positions.


[Samples]

local o = `Object`()

local myShape = Shape(Items.someuser.someitem)
o:AddChild(myShape)

*/
const AddChild = (child: `Object`): void => {};
const AddChild = (child: `Object`, keepWorld: boolean): void => {};

/**
Unsets parent/child relationship with child parameter. The child ends up being deleted if it has no other references.

[Samples]

o:RemoveChild(someChild`Object`)


*/
const RemoveChild = (child: `Object`): void => {};

/**
Unsets parent/child relationship with all children. Individual children end up being deleted if they have no other references.

[Samples]

o:RemoveChildren()


*/
const RemoveChildren = (): 
/**
Get child [`Object`] at index.

[Samples]

if o.ChildrenCount > 0 then

  print(o:GetChild(1)) -- prints first child
end

*/
const GetChild = (index: number): void => {};

/**
Get [This]'s parent.

[Samples]

print(my`Object`:GetParent())


*/
const GetParent = (): 
/**
Sets parent/child relationship with parent parameter. [nil] can be used to remove the [`Object`] from its parent.

By default, when using SetParent, the child maintains it's [LocalPosition](/reference/`Object`#property-localposition). But since the local position remains the same in the new parent, it means the child's world position may change.

The `keepWorld` optional parameter, `false` by default, can be used to maintain the child's [Position](/reference/`Object`#property-position) (world position) instead. 

It's also a good practice to set child/parent relationships before setting positions.


[Samples]

local o = `Object`()

o:SetParent(Map) -- o is now a child of the map
-- (Map is an extension of `Object`)

*/
const SetParent = (parent: `Object`): void => {};
const SetParent = (parent: `Object`, keepWorld: boolean): void => {};

/**
Removes the [This] from its parent. Doesn't do anything if the [This] has no parent.

[Samples]

o:RemoveFromParent()


*/
const RemoveFromParent = (): 
/**
Converts a local position to world coordinate system.

[Samples]

local p = Number3(1, 2, 3)

local pInWorldCoords = my`Object`:PositionLocalToWorld(p)

*/
const PositionLocalToWorld = (p: Number3): Number3 => {};

/**
Converts a world position to local coordinate system.

[Samples]

local p = Number3(1, 2, 3)

local pInLocalCoords = my`Object`:PositionWorldToLocal(p)

*/
const PositionWorldToLocal = (p: Number3): Number3 => {};

/**
`Object`:RotateLocal(number3) -- euler angles
`Object`:RotateLocal(number3, number) -- axis angle

*/
const RotateLocal = (angles: Number3): void => {};
const RotateLocal = (axis: Number3, angle: number): void => {};

/**
`Object`:RotateWorld(number3) -- euler angles
`Object`:RotateWorld(number3, number) -- axis angle

*/
const RotateWorld = (angles: Number3): void => {};
const RotateWorld = (axis: Number3, angle: number): void => {};

/**
Converts a local rotation to world coordinate system.

*/
const RotationLocalToWorld = (p: Number3): Number3 => {};

/**
Converts a world rotation to local coordinate system.

*/
const RotationWorldToLocal = (p: Number3): Number3 => {};

/**
Adds a text bubble at [`Object`]'s position. For a [Shape] or [Player], the text bubble will appear above its bounding box.

You may use a duration of `-1` to set a permanent text bubble.


*/
const TextBubble = (text: string): void => {};
const TextBubble = (text: string, duration: number): void => {};
const TextBubble = (text: string, duration: number, offset: number): void => {};
const TextBubble = (text: string, duration: number, offset: number, color: Color): void => {};
const TextBubble = (text: string, duration: number, offset: number, color: Color, bgColor: Color): void => {};
const TextBubble = (text: string, duration: number, offset: number, color: Color, bgColor: Color, tail: boolean): void => {};

/**
Returns `true` if the two [`Object`]s may collide with each other.

*/
const CollidesWith = (self: `Object`): boolean => {};
const CollidesWith = (, other: `Object`): boolean => {};

/**
Apply a force to [`Object`], taking into account its [Mass](/reference/`Object`#property-mass).

*/
const ApplyForce = (self: `Object`): void => {};
const ApplyForce = (, value: Number3): void => {};

/**
Instantaneously remove any ongoing text bubble.

*/
const ClearTextBubble = (self: `Object`): void => {};

}