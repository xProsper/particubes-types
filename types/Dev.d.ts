
/**
Dev contains handy functions and attributes for developers.
*/

declare namespace Dev {



/**
Displays [Shape]s' bounding boxes when set to `true`. (`false` by default)


*/
const DisplayBoxes: boolean;

/**
Displays collision boxes when set to `true`. (`false` by default)


*/
const DisplayColliders: boolean;


/**
Takes a screenshot and sets it as a thumbnail for the game.


[Samples]

Client.Action3 = function()

    Dev:SetGameThumbnail()
end

*/

}