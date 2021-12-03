

/**
TimeCycleMark exposes properties for each mark in the [TimeCycle].

*/

declare interface _TimeCycleMark {

/**
Creates a new TimeCycleMark at given [Time] and adds it in the [TimeCycle].Marks array.


[Samples]

local mark = TimeCycleMark(Time(9, 0, 0)) -- 9am's mark

mark.SkyColor = Color(255, 0, 0)

*/
constructor: (time: _Time) => _TimeCycleMark;



/**
Mark's sky [Color].


*/
AbyssColor: _Color;

/**
Mark's ambient light [Color].


*/
AmbientLightColor: _Color;

/**
Mark's sky [Color].


*/
HorizonColor: _Color;

/**
Mark's sky [Color].


*/
SkyColor: _Color;

/**
Mark's sky light [Color].


*/
SkyLightColor: _Color;

/**
Mark's [Time].


*/
Time: _Time;


}

export default _TimeCycleMark;