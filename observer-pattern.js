(function(window) { 

    var weatherForcast = {

         /* observer is a list of subscribers.*/
        observers: [],
        
         /*weatherChange function will have updated weather*/
        weatherChange: function (weather) {
            for (var i = 0; i < this.observers.length; i++) {
                this.observers[i].updateUI(weather)
            };
        },

        /* subscribe function will add a subscriber in observer's list.*/
        subscribe: function (Widget) {
            this.observers.push(Widget);
            return unsubscribe;
        },

        /* Unsubscribe function will remove a subscriber from observer's list.*/
        unsubscribe: function(){
            this.observers.splice(this.observers.indexOf(Widget), 1)
        }
    };
    
    /* Constructor function for Widget(Subscribers).*/
    function Widget(name){
        this.name = name;
    }

    /* function to update all the Subscribers when weather change.*/
    Widget.prototype.updateUI = function(weather){
        console.log('Weather in ' + this.name + ' is ' + weather + '\xB0C');
    }

    /* Creating widgets using constructor function*/
    var x1 = new Widget('New Delhi');
    var x2 = new Widget('Gurgaon');
    var x3 = new Widget('Faridabad');

    /* Subscribing for weather updates*/
    weatherForcast.subscribe(x1);
    weatherForcast.subscribe(x2);
    var unscbs = weatherForcast.subscribe(x3);

    /* weather updated */
    weatherForcast.weatherChange(10);

    console.log('========================');
    
     /* unsubscribing one widget */
    unscbs();
     
    /* weather updated */
    weatherForcast.weatherChange(11);

})(window);