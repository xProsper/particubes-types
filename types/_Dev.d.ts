
import { _boolean } from "../Manual";

/**
Dev contains handy functions and attributes for developers.
*/

declare interface _Dev {


/**
Displays [Shape]s' bounding boxes when set to `true`. (`false` by default)


*/
DisplayBoxes: _boolean;

/**
Displays collision boxes when set to `true`. (`false` by default)


*/
DisplayColliders: _boolean;


/**
Takes a screenshot and sets it as a thumbnail for the game.


[Samples]

Client.Action3 = function()

    Dev:SetGameThumbnail()
end

*/

}

export default _Dev;