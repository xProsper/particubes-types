
/**
TimeCycleMark exposes properties for each mark in the [TimeCycle].

*/

declare namespace TimeCycleMark {

/**
Creates a new TimeCycleMark at given [Time] and adds it in the [TimeCycle].Marks array.


[Samples]

local mark = TimeCycleMark(Time(9, 0, 0)) -- 9am's mark

mark.SkyColor = Color(255, 0, 0)

*/
const constructor = (time: Time) => TimeCycleMark;



/**
Mark's name.


*/
const Name: string;

/**
Mark's sky [Color].


*/
const AbyssColor: Color;

/**
Mark's ambient light [Color].


*/
const AmbientLightColor: Color;

/**
Mark's sky [Color].


*/
const HorizonColor: Color;

/**
Mark's sky [Color].


*/
const SkyColor: Color;

/**
Mark's sky light [Color].


*/
const SkyLightColor: Color;

/**
Mark's [Time].


*/
const Time: Time;


}