popol.directive("heightReport", function(){
    "use strict";
    return{
        restrict: "A",
        link: function(scope,element){
            var descHeight = document.getElementById("desc").offsetHeight;
            // console.log(height);
            console.log(descHeight);
            document.getElementById("poli-photo").style.height = descHeight + "px";


        }
    };
});
