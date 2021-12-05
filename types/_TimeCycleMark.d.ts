
import _Color from "./_Color";
import _Time from "./_Time";
import { _string } from "../Manual";

/**
TimeCycleMark exposes properties for each mark in the [TimeCycle].

*/

declare interface _TimeCycleMark {


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