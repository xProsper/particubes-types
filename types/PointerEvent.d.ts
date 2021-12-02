
declare namespace PointerEvent {



/**
Horizontal position of the pointer when the event happens, in screen coordinates. `{0,0}` represents the bottom left of the screen, and `{1,1}` the top right. `X` is close to `0.5` when pointing the horizontal center.


*/
const X: number;

/**
Vertical position of the pointer when the event happens, in screen coordinates. `{0,0}` represents the bottom left of the screen, and `{1,1}` the top right. `Y` is close to `0.5` when pointing the vertical center.


*/
const Y: number;

/**
Horizontal delta, not `0` when moving the pointer (see [Pointer].[Drag](/reference/pointer#property-drag) or [Pointer].[Drag2](/reference/pointer#property-drag2))


*/
const DX: number;

/**
Vertical delta, not `0` when moving the pointer (see [Pointer].[Drag](/reference/pointer#property-drag) or [Pointer].[Drag2](/reference/pointer#property-drag2))


*/
const DY: number;

/**
[PointerEvent]'s location, in world coordinate system.


*/
const Position: Number3;

/**
The direction in which a ray would go based on the [PointerEvent].


*/
const Direction: Number3;

/**
Indicates whether the [This] represents a touch/click "down" event. If false, it represents a "up" event.


*/
const Down: boolean;


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
const CastRay = () => PointerEvent;
const CastRay = (filterIn: CollisionGroups, filterIn: Shape, filterIn: nil, filterOut: Object, filterIn: CollisionGroups, filterOut: Object, filterIn: Shape, filterOut: Object) => Impact;

}