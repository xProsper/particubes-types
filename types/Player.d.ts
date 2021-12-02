
/**
Player is a shortcut to `Client.Player`.
Represents the local Player.

*/

declare namespace Player {



/**
The [Shape] of the [Player]'s head.

*/
const Head: Shape;

/**
The [Shape] of the [Player]'s body.

*/
const Body: Shape;

/**
The [Shape] of the [Player]'s left arm.

*/
const LeftArm: Shape;

/**
The [Shape] of the [Player]'s right arm.

*/
const RightArm: Shape;

/**
The [Shape] of the [Player]'s left leg.

*/
const LeftLeg: Shape;

/**
The [Shape] of the [Player]'s right leg.

*/
const RightLeg: Shape;

/**
Returns the block on which the Player is standing on.

*/
const BlockUnderneath: Block;

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
const BlocksUnderneath: array;

/**
Unique player ID for played game. A different ID can be attributed after reconnection.

*/
const ID: number;

/**
Player's account username. Usernames are unique.

*/
const Username: string;

/**
Player's account identifier (ID). Identifiers are unique.

*/
const UserID: string;

/**
Absolute world position of the Player.

*/
const Position: Number3;

/**
Player's rotation. (Y value is not considered)

*/
const Rotation: Number3;

/**
Player's velocity (speed + direction).

*/
const Velocity: Number3;

/**
Indicates whether the [Player] object is the local `Player`.
This is only valid on the [Client], not on the [Server].


*/
const IsLocal: boolean;


/**
Casts a ray from player's position, returns an [Impact] if it hits something, [nil] otherwise.

💡 Calls [Ray].[Cast](/reference/ray#functions-cast) under the hood. See [Ray].[Cast](/reference/ray#functions-cast) definition for more details about possible filters.


[Samples]

local impact = Player:CastRay()

if impact ~= nil then
  print(impact)
end

*/
const CastRay = () => Player;
const CastRay = (filterIn: CollisionGroups, filterIn: Shape, filterIn: nil, filterOut: Object, filterIn: CollisionGroups, filterOut: Object, filterIn: Shape, filterOut: Object) => Impact;

/**
Equips an [Item], [Shape] or [MutableShape] on the back of the [Player].
You can remove what's been equiped using [nil] argument


*/
const EquipBackpack = (item: Item, shape: Shape, shape: MutableShape) => 
/**
Equips an Item, Shape or MutableShape on [Player]'s head.
You can remove what's been equiped using [nil] argument


*/
const EquipHat = (Item: Item, shape: Shape, shape: MutableShape) => 
/**
Puts an [Item], [Shape] or [MutableShape] in [Player]'s left hand.
You can remove what's been equiped using [nil] argument


*/
const EquipLeftHand = (item: Item, shape: Shape, shape: MutableShape) => 
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
const EquipRightHand = (item: Item, shape: Shape, shape: MutableShape) => 
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