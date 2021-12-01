
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

}