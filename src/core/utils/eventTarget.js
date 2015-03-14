var EventData = require('./EventData');
var EventEmitter = require('eventemitter3').EventEmitter;
var tempEventObject = new EventData(null, null, {});

/**
 * @private
 */
function emit(eventName, data)
{
    var listener, listeners, length, i;

    // fast return when there are no listeners
    if (!this._events || !this._events[eventName])
    {
        return false;
    }

    //ensure we are using a real pixi event
    //instead of creating a new object lets use an the temp one ( save new creation for each event )
    if ( !data || !data.__isEventObject )
    {
        tempEventObject.target = this;
        tempEventObject.type   = eventName;
        tempEventObject.data   = data;

        data = tempEventObject;
    }

    listener = listeners = this._events[eventName];

    // 1 listener
    if (listener.fn)
    {
        if (listener.once)
        {
            this.removeListener(eventName, listener.fn, true);
        }
        listener.fn.call(listener.context, data);

    // > 1 listeners
    } else {
        length = listeners.length;

        for (i = 0; i < length; i++)
        {
            listener = listeners[i];
            if (listener.once)
            {
                this.removeListener(eventName, listener.fn, true);
            }
            listener.fn.call(listener.context, data);

            //if "stopImmediatePropagation" is called, stop calling sibling events
            if (data.stoppedImmediate)
            {
                return true;
            }
        }
    }

    return true;
}

/**
 * Mixins event emitter functionality to an object.
 *
 * @mixin
 * @memberof PIXI.utils
 * @example
 *      function MyEmitter() {}
 *
 *      eventTarget.mixin(MyEmitter.prototype);
 *
 *      var em = new MyEmitter();
 *      em.emit('eventName', 'some data', 'some more data', {}, null, ...);
 */
function eventTarget(obj)
{
    // for completeness
    obj._events = EventEmitter.prototype._events;

    /**
     * Return a list of assigned event listeners.
     *
     * @memberof eventTarget
     * @param eventName {string} The events that should be listed.
     * @return {Array} An array of listener functions
     */
    obj.listeners = EventEmitter.prototype.listeners;

    /**
     * Register a new EventListener for the given event.
     *
     * @memberof eventTarget
     * @alias addEventListener
     * @param eventName {string} Name of the event.
     * @param callback {Functon} fn Callback function.
     */
    obj.on = obj.addEventListener = EventEmitter.prototype.on;

    /**
     * Add an EventListener that's only called once.
     *
     * @memberof eventTarget
     * @param eventName {string} Name of the event.
     * @param callback {Function} Callback function.
     */
    obj.once = EventEmitter.prototype.once;

    /**
     * Remove event listeners.
     *
     * @memberof eventTarget
     * @alias removeEventListener
     * @param eventName {string} The event we want to remove.
     * @param callback {Function} The listener that we need to find.
     */
    obj.off = obj.removeEventListener = EventEmitter.prototype.removeListener;

    /**
     * Remove all listeners or only the listeners for the specified event.
     *
     * @memberof eventTarget
     * @param eventName {string} The event you want to remove all listeners for.
     */
    obj.removeAllListeners = EventEmitter.prototype.removeAllListeners;

    /**
     * Emit an event to all registered event listeners.
     *
     * @memberof eventTarget
     * @alias dispatchEvent
     * @param eventName {string} The name of the event.
     * @return {boolean} Indication if we've emitted an event.
     */
    obj.emit = obj.dispatchEvent = emit;
}

module.exports = {
    /**
     * Mixes in the properties of the eventTarget into another object
     *
     * @param object {object} The obj to mix into
     */
    mixin: function mixin(obj)
    {
        eventTarget(obj);
    }
};
