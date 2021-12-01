
/**
[KeyValueStore]s can be used to store and retrieve user data.

*/

declare namespace KeyValueStore {

/**
Creates a [KeyValueStore] with given store name.

Several stores can be used in one single [World], it's useful to scope your data.

*/
const constructor = (storeName: string) => KeyValueStore;


}