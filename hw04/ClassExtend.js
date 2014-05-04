
/**
 * Class - mini OOP framework for encapsulating class creating
 * and inheritance routine.
 */
Class = (function () {

    function Class() {}

    /**
     * Method for extending class. 
     * Chain of inheritance starts with: <code>Class.extend({})</code>,
     * and then subclassed like this: <code>MyClass.extend({})</code>
     * @param  {Object} protoProps  fields and methods of class.
     * Should realize method init, it is constructor of class.
     * @param  {Object} [staticProps] Fields and methods
     * @return {Function} Which can be subclassed
     */
    Class.extend = function (protoProps, staticProps) {
        function Construct() {
            this.init && this.init.apply(this, arguments);
        }
        Construct.extend = Class.extend;
        Construct.mixin = Class.mixin;

        Construct.prototype = Object.create(this.prototype);
        Construct.prototype.constructor = Construct;
        Construct.prototype.super = this.prototype;
        Class.mixin.call(Construct, protoProps || {}, staticProps || {});

        return Construct;
    };

    /**
     * Method for mixin class by some array of objects.
     * @param  {Object} protoProps Props and methods adding to prototype
     * @param  {Object} staticProps Props and methods adding to class object
     */
    Class.mixin = function (protoProps, staticProps) {
        var prop, stProp;
        for (prop in protoProps) {
            this.prototype[prop] = bindMethod(protoProps, prop);
        }
        for (stProp in staticProps) {
            this[stProp] = staticProps[stProp];
        }
    };

    /**
     * Function bind a function scope. Helps change methods in mixin on a fly.
     * @param  {Object} mixin Mixins object
     * @param  {String} prop  Key of mixin object method
     * @return {Function} bindid function
     * @private`
     */
    function bindMethod (mixin, prop) {
        return function () { mixin[prop].apply(this, arguments) }
    }

    return Class;

})();
