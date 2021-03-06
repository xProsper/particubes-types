
import _Time from "./_Time";
import { _array } from "../Manual";
import { _boolean } from "../Manual";
import { _number } from "../Manual";

/**
TimeCycle gives control over game time cycle properties.

*/

declare interface _TimeCycle {


/**
Current time of day for all players.


[Samples]

-- 

print(TimeCycle.CurrentTime)
-- also accessible through:
print(Time.Current)

*/
CurrentTime: _Time;

/**
Time cycle duration in seconds.


[Samples]

TimeCycle.Duration = 10 -- from noon to noon in 10 seconds


*/
Duration: _number;

/**
Returns an [array] of [TimeCycleMark]s.


[Samples]

TimeCycle.On = false

Time.Current = Time.Noon
TimeCycle.Marks.Noon.SkyColor = Color(255, 0, 0)
TimeCycle.Marks.Noon.HorizonColor = Color(255, 0, 0)
-- we can also use indices
TimeCycle.Marks[3].AbyssColor = Color(255, 0, 0)

*/
Marks: _array;

/**
Turns on/off time cycle. Stops at current time when turned off.


[Samples]

TimeCycle.On = false


*/
On: _boolean;


}

export default _TimeCycle;