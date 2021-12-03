
/**
Time represents a ingame time of day.

*/

declare interface Time {

/**
Creates a Time object with given hours and minutes.

*/
constructor: (hours: number, minutes: number) => Time;

/**
Creates a Time object with given hours.

*/
constructor: (hours: number) => Time;

/**
Creates a Time object with given hours, minutes and seconds.

[Samples]

local myTime = Time(12, 30)
*/
constructor: (hours: number, minutes: number, seconds: number) => Time;


/**
Current ingame day time.
Shortcut to [TimeCycle].[CurrentTime](/reference/timecycle#property-currenttime).

*/
Current: Time;

/**
Dawn time.
*/
Dawn: Time;

/**
Dusk time.
*/
Dusk: Time;

/**
Midnight time.
*/
Midnight: Time;

/**
Noon time.
*/
Noon: Time;


/**
Hour represents the hour within [Time], in the range [0,23].


[Samples]

local t = Time.Noon

print(t.Hours) -- prints "12"

*/
Hour: number;

/**
`H` is a shortcut to [Hour](/reference/time#property-hour).


[Samples]

local t = Time.Noon

print(t.H) -- prints "12"

*/
H: number;

/**
Minute represents the minute offset within the hour of [Time], in the range [0,59].


[Samples]

local t = Time(12, 30, 45)

print(t.Minute) -- prints "30"

*/
Minute: number;

/**
`M` is a shortcut to [Minute](/reference/time#property-minute).


[Samples]

local t = Time(12, 30, 45)

print(t.M) -- prints "30"

*/
M: number;

/**
Second represents the second within the minute of [Time], in the range [0,59].


[Samples]

local t = Time(12, 30, 45)

print(t.Second) -- prints "45"

*/
Second: number;

/**
`S` is a shortcut to [Second](/reference/time#property-second).


[Samples]

local t = Time(12, 30, 45)

print(t.S) -- prints "45"

*/
S: number;


}

export default Time;