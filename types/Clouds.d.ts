
/**
Clouds is a shortcut to [Client].[Clouds].

Clouds gives control over cloud settings.

*/

declare interface Clouds {



/**
Set to false to remove the coulds.

[Samples]

-- show clouds

Clouds.On = true
-- hide them
Clouds.On = false

*/
On: boolean;

/**
Altitude of the clouds in blocks

*/
Altitude: number;


}

export = Clouds;