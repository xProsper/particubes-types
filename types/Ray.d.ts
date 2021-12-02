
declare interface Ray {

/**
Creates a Ray with an origin and a direction.

[Samples]

local ray = Ray(Camera.Position, Camera.Forward)

local impact = ray:Cast()

*/
constructor: (origin: Number3, direction: Number3) => Ray;



/**
The origin of the ray, in world coordinate system.

*/
Origin: Number3;

/**
The direction of the ray, in world coordinate system.

*/
Direction: Number3;

/**
Defines items colliding with the ray. [nil] by default, meaning the ray collides with everything.


*/
FilterIn: 
/**
[nil] by default. Can be set to an [Object] to filter it out from possible collisions.


*/
FilterOut: 

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
Impact;
Cast(): void;
Cast (filterIn: CollisionGroups): Impact;
Cast (filterIn: Shape): Impact;
Cast (filterIn: nil, filterOut: Object): Impact;
Cast (filterIn: CollisionGroups, filterOut: Object): Impact;
Cast (filterIn: Shape, filterOut: Object): Impact;

}

export = Ray;