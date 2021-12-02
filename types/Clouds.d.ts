
/**
Clouds is a shortcut to [Client].[Clouds].

Clouds gives control over cloud settings.

*/

declare namespace Clouds {



/**
Set to false to remove the coulds.

[Samples]

-- show clouds

Clouds.On = true
-- hide them
Clouds.On = false

*/
const On: boolean;

/**
Altitude of the clouds in blocks

*/
const Altitude: number;


}