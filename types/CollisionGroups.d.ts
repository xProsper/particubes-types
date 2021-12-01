
/**
`CollisionGroups` represents an [array] of collision group numbers.

Collision groups are used to define how objects in the world collide with each others.

Group numbers go from `1` to `8`. The [Map] by default is in group `1`, and by default, all [Object]s collide with that group, but that behavior can be changed.

*/

declare namespace CollisionGroups {

/**
Creates an empty [CollisionGroups].

*/

/**
Creates a [CollisionGroups] with given group numbers.

*/
const constructor = (group1: number, group2: number, ...: number) => CollisionGroups;


}