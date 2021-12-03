

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
CastRay(filterIn: _CollisionGroups): Impact;
CastRay(filterIn: _Shape): Impact;
CastRay(filterIn: _nil, filterOut: _Object): Impact;
CastRay(filterIn: _CollisionGroups, filterOut: _Object): Impact;
CastRay(filterIn: _Shape, filterOut: _Object): Impact;

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

export default _Player;