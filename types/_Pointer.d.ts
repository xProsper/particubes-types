
import { _boolean } from "../Manual";
import { _function } from "../Manual";

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

export default _Pointer;