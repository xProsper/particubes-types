
import { _number } from "../Manual";

/**
Time represents a ingame time of day.

*/

declare interface _Time {

/**
Current ingame day time.
Shortcut to [TimeCycle].[CurrentTime](/reference/timecycle#property-currenttime).

*/
Current: _Time;

/**
Dawn time.
*/
Dawn: _Time;

/**
Dusk time.
*/
Dusk: _Time;

/**
Midnight time.
*/
Midnight: _Time;

/**
Noon time.
*/
Noon: _Time;


/**
Hour represents the hour within [Time], in the range [0,23].


[Samples]

local t = Time.Noon

print(t.Hours) -- prints "12"

*/
Hour: _number;

/**
`H` is a shortcut to [Hour](/reference/time#property-hour).


[Samples]

local t = Time.Noon

print(t.H) -- prints "12"

*/
H: _number;

/**
Minute represents the minute offset within the hour of [Time], in the range [0,59].


[Samples]

local t = Time(12, 30, 45)

print(t.Minute) -- prints "30"

*/
Minute: _number;

/**
`M` is a shortcut to [Minute](/reference/time#property-minute).


[Samples]

local t = Time(12, 30, 45)

print(t.M) -- prints "30"

*/
M: _number;

/**
Second represents the second within the minute of [Time], in the range [0,59].


[Samples]

local t = Time(12, 30, 45)

print(t.Second) -- prints "45"

*/
Second: _number;

/**
`S` is a shortcut to [Second](/reference/time#property-second).


[Samples]

local t = Time(12, 30, 45)

print(t.S) -- prints "45"

*/
S: _number;


}

export default _Time;