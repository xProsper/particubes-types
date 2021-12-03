
/**
[KeyValueStore]s can be used to store and retrieve user data.

*/

declare interface KeyValueStore {

/**
Creates a [KeyValueStore] with given store name.

Several stores can be used in one single [World], it's useful to scope your data.


[Samples]

local store = KeyValueStore("settings")

store:Get("currentChallenge", "jumpStrength", function(success, results)
    if success then
      -- do something with results.currentChallenge
      -- and results.jumpStrength
    end
end)

*/
constructor: (storeName: string) => KeyValueStore;



/**
[KeyValueStore]'s name.


*/
Name: string;


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
Set(key1: string, value: string, callback: function): void;
Set(key1: string, value: number, callback: function): void;
Set(key1: string, value: boolean, callback: function): void;

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
Get(key1: string, key2: string, callback: function): void;

}

export default KeyValueStore;