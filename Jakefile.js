(function () {
    "use strict";
    console.log("\n\nBUILD OK");
    desc("Default Build");
    task("default",function(){
        console.log("I am in the default task");
    });
    desc("blahblah function");
    task("blahblah",function(){
        console.log("I am in blahblah");
    });
}());
