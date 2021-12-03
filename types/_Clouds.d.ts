

/**
Clouds is a shortcut to [Client].[Clouds].

Clouds gives control over cloud settings.

*/

declare interface _Clouds {



/**
Set to false to remove the coulds.

[Samples]

-- show clouds

Clouds.On = true
-- hide them
Clouds.On = false

*/
On: _boolean;

/**
Altitude of the clouds in blocks

*/
Altitude: _number;


}

export default _Clouds;