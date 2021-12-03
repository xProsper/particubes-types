
/**
TimeCycleMark exposes properties for each mark in the [TimeCycle].

*/

declare interface TimeCycleMark {

/**
Creates a new TimeCycleMark at given [Time] and adds it in the [TimeCycle].Marks array.


[Samples]

local mark = TimeCycleMark(Time(9, 0, 0)) -- 9am's mark

mark.SkyColor = Color(255, 0, 0)

*/
constructor: (time: Time) => TimeCycleMark;



/**
Mark's sky [Color].


*/
AbyssColor: Color;

/**
Mark's ambient light [Color].


*/
AmbientLightColor: Color;

/**
Mark's sky [Color].


*/
HorizonColor: Color;

/**
Mark's sky [Color].


*/
SkyColor: Color;

/**
Mark's sky light [Color].


*/
SkyLightColor: Color;

/**
Mark's [Time].


*/
Time: Time;


}

export default TimeCycleMark;