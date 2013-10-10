var app = angular.module("myApp", []);
app.controller("PlayerController", ["$scope", function($scope){
        $scope.playing = false;
        $scope.audio = document.createElement("audio");
        $scope.audio.src = "media/video-2012-06-11-20-00-27.mp4";
        $scope.play = function(){
            $scope.audio.play();
            $scope.playing = true;
        };
        $scope.stop = function(){
            $scope.audio.pause();
            $scope.playing = false;
        };
        $scope.audio.addEventListener("ended", function(){
            $scope.$apply(function(){
                $scope.stop();
            });
        });
}]);
app.controller("RelatedController", ["$scope", function($scope){
        
}]);

