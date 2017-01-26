var Singleton = (function () {
    var instance;

    function createInstance() {
        var object = new Object("I am the Instance..!")
        return object;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance
        }
    };
})();
function execute() {
    var instance1 = Singleton.getInstance();
    var instance2 = Singleton.getInstance();

    console.log("Same instance? " + (instance1 === instance2));
}
execute();