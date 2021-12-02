
/**
Fog is a shortcut to [Client].[Fog].

Fog gives control over distance fog settings.

*/

declare namespace Fog {



/**
Enables or disables Fog.

[Samples]

Fog.On = true
Fog.On = false
-- toggles fog

Fog.On = not Fog.On

*/
const On: boolean;

/**
Sets [Fog].[Near](#property-near) while maintaining offset between [Fog].[Near](#property-near) & [Fog].[Far](#property-far)


[Samples]

Fog.Distance = 100
*/
const Distance: number;

/**
Distance at which Fog starts. (in blocks)

[Samples]

Fog.Near = 50
*/
const Near: number;

/**
Distance at which Fog ends. (in blocks)

[Samples]

Fog.Far = 100
-- both near and far can be set at once this way

Fog.Near, Fog.Far = 50, 100

*/
const Far: number;

/**
Fog absorption factor regarding light emissive blocks.

0.0 ➡️ the color can 100% be seen through the fog.
1.0 ➡️ the color is totally absorbed, like any other block.


[Samples]

Fog.LightAbsorption = 0.1
*/
const LightAbsorption: number;


}