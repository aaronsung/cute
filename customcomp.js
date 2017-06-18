var HANDJS = HANDJS || {};
(function() {
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function(e) {
            var t = Object(this);
            var n = t.length>>>0;
            if (n === 0) {
                return - 1
            }
            var r = 0;
            if (arguments.length > 0) {
                r = Number(arguments[1]);
                if (r != r) {
                    r = 0
                } else if (r != 0 && r != Infinity && r!=-Infinity) {
                    r = (r > 0||-1) * Math.floor(Math.abs(r))
                }
            }
            if (r >= n) {
                return - 1
            }
            var i = r >= 0 ? r: Math.max(n - Math.abs(r), 0);
            for (; i < n; i++) {
                if (i in t && t[i] === e) {
                    return i
                }
            }
            return - 1
        }
    }
    var e = ["pointerdown", "pointerup", "pointermove", "pointerover", "pointerout", "pointercancel", "pointerenter", "pointerleave"];
    var t = "touch";
    var n = "pen";
    var r = "mouse";
    var i = {};
    var s = function(e) {
        while (e && e.handjs_forcePreventDefault !== true) {
            e = e.parentElement
        }
        return e != null
    };
    var o = function(e, i) {
        var o;
        if (document.createEvent) {
            o = document.createEvent("MouseEvents");
            o.initMouseEvent(i, true, true, window, 1, e.screenX, e.screenY, e.clientX, e.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, e.button, null)
        } else {
            o = document.createEventObject();
            o.screenX = e.screenX;
            o.screenY = e.screenY;
            o.clientX = e.clientX;
            o.clientY = e.clientY;
            o.ctrlKey = e.ctrlKey;
            o.altKey = e.altKey;
            o.shiftKey = e.shiftKey;
            o.metaKey = e.metaKey;
            o.button = e.button
        }
        if (o.offsetX === undefined) {
            if (e.offsetX !== undefined) {
                if (Object && Object.defineProperty !== undefined) {
                    Object.defineProperty(o, "offsetX", {
                        writable: true
                    });
                    Object.defineProperty(o, "offsetY", {
                        writable: true
                    })
                }
                o.offsetX = e.offsetX;
                o.offsetY = e.offsetY
            } else if (e.layerX !== undefined) {
                o.offsetX = e.layerX - e.currentTarget.offsetLeft;
                o.offsetY = e.layerY - e.currentTarget.offsetTop
            }
        }
        if (e.isPrimary !== undefined)
            o.isPrimary = e.isPrimary;
        else 
            o.isPrimary = true;
        if (e.pressure)
            o.pressure = e.pressure;
        else {
            var u = 0;
            if (e.which !== undefined)
                u = e.which;
            else if (e.button !== undefined) {
                u = e.button
            }
            o.pressure = u == 0 ? 0 : .5
        }
        if (e.rotation)
            o.rotation = e.rotation;
        else 
            o.rotation = 0;
        if (e.hwTimestamp)
            o.hwTimestamp = e.hwTimestamp;
        else 
            o.hwTimestamp = 0;
        if (e.tiltX)
            o.tiltX = e.tiltX;
        else 
            o.tiltX = 0;
        if (e.tiltY)
            o.tiltY = e.tiltY;
        else 
            o.tiltY = 0;
        if (e.height)
            o.height = e.height;
        else 
            o.height = 0;
        if (e.width)
            o.width = e.width;
        else 
            o.width = 0;
        o.preventDefault = function() {
            if (e.preventDefault !== undefined)
                e.preventDefault()
        };
        if (o.stopPropagation !== undefined) {
            var a = o.stopPropagation;
            o.stopPropagation = function() {
                if (e.stopPropagation !== undefined)
                    e.stopPropagation();
                a.call(this)
            }
        }
        o.POINTER_TYPE_TOUCH = t;
        o.POINTER_TYPE_PEN = n;
        o.POINTER_TYPE_MOUSE = r;
        o.pointerId = e.pointerId;
        o.pointerType = e.pointerType;
        switch (o.pointerType) {
        case 2:
            o.pointerType = o.POINTER_TYPE_TOUCH;
            break;
        case 3:
            o.pointerType = o.POINTER_TYPE_PEN;
            break;
        case 4:
            o.pointerType = o.POINTER_TYPE_MOUSE;
            break
        }
        if (e.currentTarget && s(e.currentTarget) === true) {
            o.preventDefault()
        }
        if (e.target) {
            e.target.dispatchEvent(o)
        } else {
            e.srcElement.fireEvent("on" + h(i), o)
        }
    };
    var u = function(e, t) {
        e.pointerId = 1;
        e.pointerType = r;
        o(e, t)
    };
    var a = function(e, n, r, i) {
        var s = n.identifier + 2;
        n.pointerId = s;
        n.pointerType = t;
        n.currentTarget = r;
        n.target = r;
        if (i.preventDefault !== undefined) {
            n.preventDefault = function() {
                i.preventDefault()
            }
        }
        o(n, e)
    };
    var f = function(e, t) {
        while (e&&!(e.__handjsGlobalRegisteredEvents && e.__handjsGlobalRegisteredEvents[t])) {
            e = e.parentElement
        }
        return e != null
    };
    var l = function(e, t, n, r) {
        if (f(n, e)) {
            a(e, t, n, r)
        }
    };
    var c = function(e, t, n, r) {
        if (e.preventManipulation)
            e.preventManipulation();
        for (var s = 0; s < e.changedTouches.length; ++s) {
            var o = e.changedTouches[s];
            if (n) {
                i[o.identifier] = o.target
            }
            if (r) {
                l(t, o, i[o.identifier], e)
            } else {
                a(t, o, i[o.identifier], e)
            }
        }
    };
    var h = function(e) {
        return e.toLowerCase().replace("pointer", "mouse")
    };
    var p = function(e, t, n) {
        var r = t + n;
        if (r === t + "PointerEnter" && e["on" + t.toLowerCase() + "pointerenter"] === undefined) {
            r = t + "PointerOver"
        }
        if (r === t + "PointerLeave" && e["on" + t.toLowerCase() + "pointerleave"] === undefined) {
            r = t + "PointerOut"
        }
        return r
    };
    var d = function(e, t, n, r) {
        if (e.__handjsRegisteredEvents === undefined) {
            e.__handjsRegisteredEvents = []
        }
        if (r) {
            if (e.__handjsRegisteredEvents[t] !== undefined) {
                e.__handjsRegisteredEvents[t]++;
                return 
            }
            e.__handjsRegisteredEvents[t] = 1;
            e.addEventListener(t, n, false)
        } else {
            if (e.__handjsRegisteredEvents.indexOf(t)!==-1) {
                e.__handjsRegisteredEvents[t]--;
                if (e.__handjsRegisteredEvents[t] != 0) {
                    return 
                }
            }
            e.removeEventListener(t, n);
            e.__handjsRegisteredEvents[t] = 0
        }
    };
    var v = function(e, t, n) {
        if (e.onpointerdown !== undefined) {
            return 
        }
        if (e.onmspointerdown !== undefined) {
            var r = p(e, "MS", t);
            d(e, r, function(e) {
                o(e, t)
            }, n);
            return 
        }
        if (e.ontouchstart !== undefined) {
            switch (t) {
            case"pointermove":
                d(e, "touchmove", function(e) {
                    c(e, t)
                }, n);
                break;
            case"pointercancel":
                d(e, "touchcancel", function(e) {
                    c(e, t)
                }, n);
                break;
            case"pointerdown":
            case"pointerup":
            case"pointerout":
            case"pointerover":
            case"pointerleave":
            case"pointerenter":
                if (!e.__handjsGlobalRegisteredEvents) {
                    e.__handjsGlobalRegisteredEvents = []
                }
                if (n) {
                    if (e.__handjsGlobalRegisteredEvents[t] !== undefined) {
                        e.__handjsGlobalRegisteredEvents[t]++;
                        return 
                    }
                    e.__handjsGlobalRegisteredEvents[t] = 1
                } else {
                    if (e.__handjsGlobalRegisteredEvents[t] !== undefined) {
                        e.__handjsGlobalRegisteredEvents[t]--;
                        if (e.__handjsGlobalRegisteredEvents[t] < 0) {
                            e.__handjsGlobalRegisteredEvents[t] = 0
                        }
                    }
                }
                break
            }
        }
        switch (t) {
        case"pointerdown":
            d(e, "mousedown", function(e) {
                u(e, t)
            }, n);
            break;
        case"pointermove":
            d(e, "mousemove", function(e) {
                u(e, t)
            }, n);
            break;
        case"pointerup":
            d(e, "mouseup", function(e) {
                u(e, t)
            }, n);
            break;
        case"pointerover":
            d(e, "mouseover", function(e) {
                u(e, t)
            }, n);
            break;
        case"pointerout":
            d(e, "mouseout", function(e) {
                u(e, t)
            }, n);
            break;
        case"pointerenter":
            if (e.onmouseenter === undefined) {
                d(e, "mouseover", function(e) {
                    u(e, t)
                }, n)
            } else {
                d(e, "mouseenter", function(e) {
                    u(e, t)
                }, n)
            }
            break;
        case"pointerleave":
            if (e.onmouseleave === undefined) {
                d(e, "mouseout", function(e) {
                    u(e, t)
                }, n)
            } else {
                d(e, "mouseleave", function(e) {
                    u(e, t)
                }, n)
            }
            break
        }
    };
    var m = function(t) {
        var n = t.prototype ? t.prototype.addEventListener: t.addEventListener;
        var r = function(t, r, i) {
            if (e.indexOf(t)!=-1) {
                v(this, t, true)
            }
            if (n === undefined) {
                this.attachEvent("on" + h(t), r)
            } else {
                n.call(this, t, r, i)
            }
        };
        if (t.prototype) {
            t.prototype.addEventListener = r
        } else {
            t.addEventListener = r
        }
    };
    var g = function(t) {
        var n = t.prototype ? t.prototype.removeEventListener: t.removeEventListener;
        var r = function(t, r, i) {
            if (e.indexOf(t)!=-1) {
                v(this, t, false)
            }
            if (n === undefined) {
                this.detachEvent(h(t), r)
            } else {
                n.call(this, t, r, i)
            }
        };
        if (t.prototype) {
            t.prototype.removeEventListener = r
        } else {
            t.removeEventListener = r
        }
    };
    m(HTMLElement);
    m(document);
    m(HTMLBodyElement);
    m(HTMLDivElement);
    m(HTMLImageElement);
    m(HTMLUListElement);
    m(HTMLAnchorElement);
    m(HTMLLIElement);
    m(HTMLTableElement);
    if (window.HTMLSpanElement) {
        m(HTMLSpanElement)
    }
    if (window.HTMLCanvasElement) {
        m(HTMLCanvasElement)
    }
    if (window.SVGElement) {
        m(SVGElement)
    }
    g(HTMLElement);
    g(document);
    g(HTMLBodyElement);
    g(HTMLDivElement);
    g(HTMLImageElement);
    g(HTMLUListElement);
    g(HTMLAnchorElement);
    g(HTMLLIElement);
    g(HTMLTableElement);
    if (window.HTMLSpanElement) {
        g(HTMLSpanElement)
    }
    if (window.HTMLCanvasElement) {
        g(HTMLCanvasElement)
    }
    if (window.SVGElement) {
        g(SVGElement)
    }
    if (window.ontouchstart !== undefined) {
        window.addEventListener("touchstart", function(e) {
            for (var t = 0; t < e.changedTouches.length; ++t) {
                var n = e.changedTouches[t];
                i[n.identifier] = n.target;
                l("pointerenter", n, n.target, e);
                l("pointerover", n, n.target, e);
                l("pointerdown", n, n.target, e)
            }
        });
        window.addEventListener("touchend", function(e) {
            for (var t = 0; t < e.changedTouches.length; ++t) {
                var n = e.changedTouches[t];
                var r = i[n.identifier];
                l("pointerup", n, r, e);
                l("pointerout", n, r, e);
                l("pointerleave", n, r, e)
            }
        });
        window.addEventListener("touchmove", function(e) {
            for (var t = 0; t < e.changedTouches.length; ++t) {
                var n = e.changedTouches[t];
                var r = document.elementFromPoint(n.clientX, n.clientY);
                var s = i[n.identifier];
                if (s === r) {
                    continue
                }
                if (s) {
                    l("pointerout", n, s, e);
                    if (!s.contains(r)) {
                        l("pointerleave", n, s, e)
                    }
                }
                if (r) {
                    l("pointerover", n, r, e);
                    if (!r.contains(s)) {
                        l("pointerenter", n, r, e)
                    }
                }
                i[n.identifier] = r
            }
        })
    }
    if (navigator.pointerEnabled === undefined) {
        navigator.pointerEnabled = true;
        if (navigator.msPointerEnabled) {
            navigator.maxTouchPoints = navigator.msMaxTouchPoints
        }
    }
    if (document.styleSheets && document.addEventListener) {
        document.addEventListener("DOMContentLoaded", function() {
            if (HANDJS.doNotProcessCSS) {
                return 
            }
            var e = function(e) {
                return e.replace(/^\s+|\s+$/, "")
            };
            var t = function(t) {
                var n = new RegExp(".+?{.*?}", "m");
                var r = new RegExp(".+?{", "m");
                while (t != "") {
                    var i = n.exec(t);
                    if (!i) {
                        break
                    }
                    var s = i[0];
                    t = e(t.replace(s, ""));
                    var o = e(r.exec(s)[0].replace("{", ""));
                    if (s.replace(/\s/g, "").indexOf("touch-action:none")!=-1) {
                        var u = document.querySelectorAll(o);
                        for (var a = 0; a < u.length; a++) {
                            var f = u[a];
                            if (f.style.msTouchAction !== undefined) {
                                f.style.msTouchAction = "none"
                            } else {
                                f.handjs_forcePreventDefault = true
                            }
                        }
                    }
                }
            };
            try {
                for (var n = 0; n < document.styleSheets.length; n++) {
                    var r = document.styleSheets[n];
                    if (r.href == undefined) {
                        continue
                    }
                    var i = new XMLHttpRequest;
                    i.open("get", r.href, false);
                    i.send();
                    var s = i.responseText.replace(/(\n|\r)/g, "");
                    t(s)
                }
            } catch (o) {}
            var u = document.getElementsByTagName("style");
            for (var n = 0; n < u.length; n++) {
                var a = u[n];
                var f = e(a.innerHTML.replace(/(\n|\r)/g, ""));
                t(f)
            }
        }, false)
    }
})()
