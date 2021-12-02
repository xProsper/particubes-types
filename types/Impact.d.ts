
declare namespace Impact {



/**
Block touched by the ray. Not `nil` if the [Impact] represents a [Block].

[Samples]

local impact = Player:CastRay()

print(impact.Block)	-- prints hit block's id

*/
const Block: Block;

/**
Distance to impact when casting a ray. (see [Camera].[CastRay](/reference/camera#functions-castray), [Player].[CastRay](/reference/player#functions-castray), [PointerEvent].[CastRay](/reference/pointerevent#functions-castray))

*/
const Distance: number;

/**
Not `nil` if the [Impact] represents a [Block].

Indicates what block face has been touched.


*/
const FaceTouched: Face;

/**
Object touched by the ray.

[Samples]

Pointer.Down = function(event)

  local impact = event:CastRay()
  print(impact.Object) -- can be nil if no Object has been touched
end

*/
const Object: Object;

/**
Player touched by the ray.

[Samples]

Pointer.Down = function(event)

  local impact = event:CastRay()
  print(impact.Player) -- can be nil if no Player has been touched
end

*/
const Player: Player;

/**
Shape touched by the ray. Not `nil` if the [Impact] represents a [Shape].

*/
const Shape: Shape;


}