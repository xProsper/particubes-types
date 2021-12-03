
/**
Player is a shortcut to `Client.Player`.
Represents the local Player.

*/

declare interface Player {



/**
The [Shape] of the [Player]'s head.

*/
Head: Shape;

/**
The [Shape] of the [Player]'s body.

*/
Body: Shape;

/**
The [Shape] of the [Player]'s left arm.

*/
LeftArm: Shape;

/**
The [Shape] of the [Player]'s right arm.

*/
RightArm: Shape;

/**
The [Shape] of the [Player]'s left leg.

*/
LeftLeg: Shape;

/**
The [Shape] of the [Player]'s right leg.

*/
RightLeg: Shape;

/**
Returns the block on which the Player is standing on.

*/
BlockUnderneath: Block;

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
BlocksUnderneath: array;

/**
Unique player ID for played game. A different ID can be attributed after reconnection.

*/
ID: number;

/**
Player's account username. Usernames are unique.

*/
Username: string;

/**
Player's account identifier (ID). Identifiers are unique.

*/
UserID: string;

/**
Absolute world position of the Player.

*/
Position: Number3;

/**
Player's rotation. (Y value is not considered)

*/
Rotation: Number3;

/**
Player's velocity (speed + direction).

*/
Velocity: Number3;

/**
Indicates whether the [Player] object is the local `Player`.
This is only valid on the [Client], not on the [Server].


*/
IsLocal: boolean;


/**
Casts a ray from player's position, returns an [Impact] if it hits something, [nil] otherwise.

💡 Calls [Ray].[Cast](/reference/ray#functions-cast) under the hood. See [Ray].[Cast](/reference/ray#functions-cast) definition for more details about possible filters.


[Samples]

local impact = Player:CastRay()

if impact ~= nil then
  print(impact)
end

*/
CastRay(): Impact;
CastRay(filterIn: CollisionGroups): Impact;
CastRay(filterIn: Shape): Impact;
CastRay(filterIn: nil, filterOut: Object): Impact;
CastRay(filterIn: CollisionGroups, filterOut: Object): Impact;
CastRay(filterIn: Shape, filterOut: Object): Impact;

/**
Equips an [Item], [Shape] or [MutableShape] on the back of the [Player].
You can remove what's been equiped using [nil] argument


*/
EquipBackpack(item: Item): void;
EquipBackpack(shape: Shape): void;
EquipBackpack(shape: MutableShape): void;
EquipBackpack(): void;

/**
Equips an Item, Shape or MutableShape on [Player]'s head.
You can remove what's been equiped using [nil] argument


*/
EquipHat(Item: Item): void;
EquipHat(shape: Shape): void;
EquipHat(shape: MutableShape): void;
EquipHat(): void;

/**
Puts an [Item], [Shape] or [MutableShape] in [Player]'s left hand.
You can remove what's been equiped using [nil] argument


*/
EquipLeftHand(item: Item): void;
EquipLeftHand(shape: Shape): void;
EquipLeftHand(shape: MutableShape): void;
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
EquipRightHand(item: Item): void;
EquipRightHand(shape: Shape): void;
EquipRightHand(shape: MutableShape): void;
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

export default Player;