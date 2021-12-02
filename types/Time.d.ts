
/**
Time represents a ingame time of day.

*/

declare namespace Time {

/**
Creates a Time object with given hours and minutes.

*/
const constructor = (hours: number, minutes: number) => Time;

/**
Creates a Time object with given hours.

*/
const constructor = (hours: number) => Time;

/**
Creates a Time object with given hours, minutes and seconds.

[Samples]

local myTime = Time(12, 30)
*/
const constructor = (hours: number, minutes: number, seconds: number) => Time;


/**
Current ingame day time.
Shortcut to [TimeCycle].[CurrentTime](/reference/timecycle#property-currenttime).

*/
const Current: Time;

/**
Dawn time.
*/
const Dawn: Time;

/**
Dusk time.
*/
const Dusk: Time;

/**
Midnight time.
*/
const Midnight: Time;

/**
Noon time.
*/
const Noon: Time;


/**
Hour represents the hour within [Time], in the range [0,23].


[Samples]

local t = Time.Noon

print(t.Hours) -- prints "12"

*/
const Hour: number;

/**
`H` is a shortcut to [Hour](/reference/time#property-hour).


[Samples]

local t = Time.Noon

print(t.H) -- prints "12"

*/
const H: number;

/**
Minute represents the minute offset within the hour of [Time], in the range [0,59].


[Samples]

local t = Time(12, 30, 45)

print(t.Minute) -- prints "30"

*/
const Minute: number;

/**
`M` is a shortcut to [Minute](/reference/time#property-minute).


[Samples]

local t = Time(12, 30, 45)

print(t.M) -- prints "30"

*/
const M: number;

/**
Second represents the second within the minute of [Time], in the range [0,59].


[Samples]

local t = Time(12, 30, 45)

print(t.Second) -- prints "45"

*/
const Second: number;

/**
`S` is a shortcut to [Second](/reference/time#property-second).


[Samples]

local t = Time(12, 30, 45)

print(t.S) -- prints "45"

*/
const S: number;


}