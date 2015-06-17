
angular.module("courseInfo", [])
    .controller("workingCtrl", ["$scope","$interval","$location", function ($scope,$interval,$location) {

        function courseInfo(name,title, description, breaktime) {
            this.name = name;
            this.title = title;
            this.descrition = description;
            this.breaktime = breaktime;
            this.excrcises = [];
        };

        var courseInformation;
        var breakTimeInformation;
        function startWork() {
          courseInformation = coureInfo();
            breakTimeInformation = {
                details:{
                    name :" break",
                    description: "this is break time work",
                    image : "img/rest.png"
                },
                duration : 10
            };
            StartExcrcise(courseInformation.excrcises.shift());
        }
        function StartExcrcise(acourse){
            $scope.currentCourse = acourse;
            $scope.currentCourseTime = 0;
            $interval(function(){
                $scope.currentCourseTime =  $scope.currentCourseTime + 1;

            },1000,acourse.duration).then(
                function(){
                    GetNextCourse(acourse);
                }
            );

        };

        function GetNextCourse(acourse){
            var nextcourse = null;
            if(acourse== breakTimeInformation){
                nextcourse = courseInformation.excrcises.shift();
            }else{
                if(courseInformation.length!=0){
                    nextcourse = breakTimeInformation;
                }

            }
            StartExcrcise(nextcourse);

        };
        function coureInfo(){
            var acourse = new courseInfo("first_course","fCourse","this is our course information",10);
            acourse.excrcises.push({
                details: {
                    name: "jumpingJacks",
                    title: "Jumping Jacks",
                    description: "Jumping Jacks.",
                    image: "img/JumpingJacks.png"
                },
                duration: 30
            });
            acourse.excrcises.push({
                details: {
                    name: "wallSit",
                    title: "Wall Sit",
                    description: "Wall Sit.",
                    image: "img/wallsit.png"
                },
                duration: 30
            });
            acourse.excrcises.push({
                details: {
                    name: "pushUp",
                    title: "Push Up",
                    description: "Discription about pushup.",
                    image: "img/pushup.png"

                },
                duration: 30
            });
            acourse.excrcises.push({
                details: {
                    name: "crunches",
                    title: "Abdominal Crunches",
                    description: "Abdominal Crunches.",
                    image: "img/crunches.png"

                },
                duration: 30
            });
            acourse.excrcises.push({
                details: {
                    name: "stepUpOntoChair",
                    title: "Step Up Onto Chair",
                    description: "Step Up Onto Chair.",
                    image: "img/stepUpOntoChair.jpeg"

                },
                duration: 30
            });
            acourse.excrcises.push({
                details: {
                    name: "squat",
                    title: "Squat",
                    description: "Squat.",
                    image: "img/squat.png"
                },
                duration: 30
            });
            acourse.excrcises.push({
                details: {
                    name: "tricepdips",
                    title: "Tricep Dips On Chair",
                    description: "Tricep Dips On Chair.",
                    image: "img/tricepdips.jpg"

                },
                duration: 30
            });
            acourse.excrcises.push({
                details: {
                    name: "plank",
                    title: "Plank",
                    description: "Plank.",
                    image: "img/plank.png"
                },
                duration: 30
            });
            acourse.excrcises.push({
                details: {
                    name: "highKnees",
                    title: "High Knees",
                    description: "High Knees.",
                    image: "img/highknees.png"
                },
                duration: 30
            });
            acourse.excrcises.push({
                details: {
                    name: "lunges",
                    title: "Lunges",
                    description: "Lunges.",
                    image: "img/lunges.png"
                },
                duration: 30
            });
            acourse.excrcises.push({
                details: {
                    name: "pushupNRotate",
                    title: "Pushup And Rotate",
                    description: "Pushup And Rotate.",
                    image: "img/pushupNRotate.jpg"
                },
                duration: 30
            });
            acourse.excrcises.push({
                details: {
                    name: "sidePlank",
                    title: "Side Plank",
                    description: "Side Plank.",
                    image: "img/sideplank.png"
                },
                duration: 30
            });
            return acourse;
        }

        startWork();

    }]);

