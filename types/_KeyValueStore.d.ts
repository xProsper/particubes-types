
import { _boolean } from "../Manual";
import { _function } from "../Manual";
import { _number } from "../Manual";
import { _string } from "../Manual";

/**
[KeyValueStore]s can be used to store and retrieve user data.

*/

declare interface _KeyValueStore {


/**
[KeyValueStore]'s name.


*/
Name: _string;


/**
Sets values for given keys.

Currently, values can be [string]s, [number]s or [boolean]s. More types are going to be supported soon.

Though the operation is supposed to be real quick, it can't be instantaneous. That's why you need to supply a callback function to get the response.

The callback function only takes one argument:
- a [boolean], indicating if the operation was successful (it could fail because of network issues).


[Samples]

local store = KeyValueStore("settings")

store:Set("currentChallenge", "halloween", "jumpStrength", 10, function(success)
    if success then
      -- operation was successful
    end
end)

*/
Set(key1: _string, value: _string, callback: _function): void;
Set(key1: _string, value: _number, callback: _function): void;
Set(key1: _string, value: _boolean, callback: _function): void;

/**
Gets values for given keys.

Though the operation is supposed to be real quick, it can't be instantaneous. That's why you need to supply a callback function to get the response.

The callback function only takes 2 arguments: 
- A [boolean], indicating if the operation was successful (it could fail because of network issues).
- A [table] containing values for requested keys.


[Samples]

local store = KeyValueStore("settings")

store:Get("currentChallenge", "jumpStrength", function(success, results)
    if success then
      -- do something with results.currentChallenge
      -- and results.jumpStrength
    end
end)

*/
Get(key1: _string, key2: _string, callback: _function): void;

}

export default _KeyValueStore;