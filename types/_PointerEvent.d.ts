
import _CollisionGroups from "./_CollisionGroups";
import _Impact from "./_Impact";
import _Number3 from "./_Number3";
import _Object from "./_Object";
import _Shape from "./_Shape";
import { _boolean } from "../Manual";
import { _nil } from "../Manual";
import { _number } from "../Manual";

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

export default _PointerEvent;