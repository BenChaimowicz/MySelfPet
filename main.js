"use strict";
var Status;
(function (Status) {
    Status[Status["idle"] = 0] = "idle";
    Status[Status["sleeping"] = 1] = "sleeping";
    Status[Status["eating"] = 2] = "eating";
    Status[Status["playing"] = 3] = "playing";
    Status[Status["dying"] = 4] = "dying";
    Status[Status["jumping"] = 5] = "jumping";
})(Status || (Status = {}));
