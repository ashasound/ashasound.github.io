webpackJsonp([17], {
    1: function(e, t, n) {
        "use strict";
        function i(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            o = function() {
                function e() {
                    i(this, e), this.static_images = "/Static/Images/", this["breakpoint-1"] = 768, this["breakpoint-2"] = 1600, this["breakpoint-3"] = 1900, this["anim-time"] = .42, this["anim-time-2"] = .294, this["anim-time-3"] = .42 * .37, this["anim-easeIn"] = "easeInExpo", this["anim-easeOut"] = "easeOutExpo", this["anim-easeInOut"] = "easeInOutExpo"
                }
                return r(e, [{
                    key: "online",
                    value: function() {
                        return "boolean" != typeof navigator.onLine || navigator.onLine
                    }
                }, {
                    key: "setStateLoading",
                    value: function(e) {
                        e ? document.body.classList.add("loading") : document.body.classList.remove("loading")
                    }
                }, {
                    key: "getXYFromMouseTouchEvent",
                    value: function(e) {
                        if (e.originalEvent && (e.originalEvent.touches || e.originalEvent.changedTouches)) {
                            var t = e.originalEvent.touches[0] ? e.originalEvent.touches : e.originalEvent.changedTouches;
                            return {
                                x: t[0].pageX,
                                y: t[0].pageY,
                                touches: t
                            }
                        }
                        return {
                            x: e.pageX,
                            y: e.pageY,
                            touches: null
                        }
                    }
                }, {
                    key: "lerp",
                    value: function(e, t, n) {
                        return (n - t) * e + t
                    }
                }, {
                    key: "get",
                    value: function(e) {
                        return this[e]
                    }
                }, {
                    key: "getSideGutter",
                    value: function() {
                        var e = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
                        return e > this.get("breakpoint-1") ? .049375 * e : .04 * e
                    }
                }, {
                    key: "getColumn",
                    value: function(e) {
                        var t = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
                        return t > this.get("breakpoint-1") ? .01917553191 * t * e : .04 * t * e
                    }
                }, {
                    key: "isBelowBreakpoint768",
                    value: function() {
                        return Math.max(document.documentElement.clientWidth, window.innerWidth || 0) <= this["breakpoint-1"]
                    }
                }, {
                    key: "isAboveBreakpoint1600",
                    value: function() {
                        return Math.max(document.documentElement.clientWidth, window.innerWidth || 0) >= this["breakpoint-2"]
                    }
                }, {
                    key: "isAboveBreakpoint1900",
                    value: function() {
                        return Math.max(document.documentElement.clientWidth, window.innerWidth || 0) >= this["breakpoint-3"]
                    }
                }, {
                    key: "canusePassiveMode",
                    value: function() {
                        var e = this;
                        if (null != this.passiveSupported)
                            return this.passiveSupported;
                        this.passiveSupported = !1;
                        try {
                            var t = Object.defineProperty({}, "passive", {
                                get: function() {
                                    e.passiveSupported = !0
                                }
                            });
                            window.addEventListener("test", null, t)
                        } catch (e) {}
                        return this.passiveSupported
                    }
                }]), e
            }();
        t.default = new o
    },
    25: function(e, t, n) {
        "use strict";
        function i() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                t = arguments[1];
            switch (t.type) {
            case "HERO_SHOW":
                return e.type = t.type, e.hero_visible = !0, e;
            case "HERO_HIDE":
                return e.type = t.type, e.hero_visible = !1, e;
            default:
                return e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(5),
            o = (0, r.createStore)(i, {
                hero_visible: !0
            });
        t.default = o
    },
    26: function(e, t, n) {
        "use strict";
        function i(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            o = function() {
                function e() {
                    i(this, e), this.onLinkTagClick = this.onLinkTagClick.bind(this)
                }
                return r(e, [{
                    key: "init",
                    value: function() {
                        this.findGALinks()
                    }
                }, {
                    key: "findGALinks",
                    value: function() {
                        this.elements = [].slice.call(document.querySelectorAll("*[ga-category]"));
                        for (var e = 0; e < this.elements.length; e++) {
                            this.elements[e].addEventListener("click", this.onLinkTagClick, !0)
                        }
                    }
                }, {
                    key: "onLinkTagClick",
                    value: function(e) {
                        var t = e.currentTarget,
                            n = t.getAttribute("ga-category") || "",
                            i = t.getAttribute("ga-action") || "click",
                            r = void 0 === t.getAttribute("href") ? "" : t.getAttribute("href"),
                            o = t.getAttribute("ga-label") || r,
                            a = parseInt(t.getAttribute("ga-value"), 10);
                        return isNaN(a) ? this.event(n, i, o || "", "") : this.event(n, i, o || "", a), !0
                    }
                }, {
                    key: "event",
                    value: function(e, t, n, i) {
                        "function" == typeof __gaTracker && ("" != i ? __gaTracker("send", "event", e, t, n, i) : __gaTracker("send", "event", e, t, n))
                    }
                }]), e
            }();
        t.default = new o
    },
    28: function(e, t, n) {
        "use strict";
        function i() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                t = arguments[1];
            switch (t.type) {
            case "SHOW":
            case "HIDE":
                return e.type = t.type, e.properties = t.properties, e;
            default:
                return e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(5),
            o = (0, r.createStore)(i, {});
        t.default = o
    },
    32: function(e, t, n) {
        "use strict";
        function i() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                t = arguments[1];
            switch (t.type) {
            case "SHOW_CURRENT":
                return e.type = t.type, e.filter = "current", e;
            case "SHOW_HIGHLIGHTS":
                return e.type = t.type, e.filter = "highlights", e;
            case "SHOW_ARCHIVE":
                return e.type = t.type, e.filter = "archive", e;
            case "SHOW_PAST":
                return e.type = t.type, e.filter = "past", e;
            case "LOADED":
                e.type = t.type;
            default:
                return e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(5),
            o = (0, r.createStore)(i, {
                filter: "current"
            });
        t.default = o
    },
    33: function(e, t, n) {
        "use strict";
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function o(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function a(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = n(39),
            l = i(s),
            u = (n(4), n(54), n(55), n(56), n(1)),
            c = (i(u), n(57)),
            d = i(c),
            h = n(58),
            f = (i(h), n(26)),
            p = i(f),
            m = n(59),
            y = i(m),
            g = n(60),
            v = i(g),
            b = n(88),
            w = i(b),
            S = n(89),
            H = i(S),
            E = function(e) {
                function t() {
                    r(this, t);
                    var e = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this)),
                        i = new l.default.ContainerBuilder;
                    return i.register(H.default).as("SpaceHeader"), i.register(w.default).as("PageBgPanels"), i.register(y.default).as("Trending"), i.register(v.default).as("Hero"), i.registerAsync(function() {
                        return Promise.all([n.e(0), n.e(11)]).then(n.bind(null, 91))
                    }).as("SpaceStates"), i.registerAsync(function() {
                        return Promise.all([n.e(0), n.e(7)]).then(n.bind(null, 92))
                    }).as("Feed"), i.registerAsync(function() {
                        return Promise.all([n.e(0), n.e(8)]).then(n.bind(null, 93))
                    }).as("Gallery"), i.registerAsync(function() {
                        return n.e(0).then(n.bind(null, 90))
                    }).as("hosted-by-habitat"), i.registerAsync(function() {
                        return Promise.all([n.e(0), n.e(5)]).then(n.bind(null, 94))
                    }).as("ShareUi"), i.registerAsync(function() {
                        return Promise.all([n.e(0), n.e(6)]).then(n.bind(null, 95))
                    }).as("Reads"), i.registerAsync(function() {
                        return n.e(14).then(n.bind(null, 96))
                    }).as("MediaEmbed"), i.registerAsync(function() {
                        return Promise.all([n.e(0), n.e(15)]).then(n.bind(null, 97))
                    }).as("LabsArchive"), i.registerAsync(function() {
                        return Promise.all([n.e(0), n.e(12)]).then(n.bind(null, 98))
                    }).as("ProgramsArchive"), i.registerAsync(function() {
                        return Promise.all([n.e(0), n.e(10)]).then(n.bind(null, 99))
                    }).as("Program-info-sticky"), i.registerAsync(function() {
                        return Promise.all([n.e(0), n.e(4)]).then(n.bind(null, 100))
                    }).as("Agenda"), i.registerAsync(function() {
                        return Promise.all([n.e(0), n.e(2)]).then(n.bind(null, 101))
                    }).as("OverlayBasicView"), i.registerAsync(function() {
                        return n.e(13).then(n.bind(null, 102))
                    }).as("NewsletterSignup"), i.registerAsync(function() {
                        return n.e(1).then(n.bind(null, 103))
                    }).as("GoogleMaps"), i.registerAsync(function() {
                        return Promise.all([n.e(0), n.e(9)]).then(n.bind(null, 104))
                    }).as("Collaborators"), i.registerAsync(function() {
                        return Promise.all([n.e(0), n.e(3)]).then(n.bind(null, 105))
                    }).as("Process"), i.registerAsync(function() {
                        return n.e(16).then(n.bind(null, 106))
                    }).as("Content"), e.setContainer(i.build()), document.body.setAttribute("app", "ready-for-space"), /iPad|iPhone|iPod/.test(navigator.userAgent || navigator.vendor || window.opera) && !window.MSStream && document.body.classList.add("ios"), "ontouchstart" in document.documentElement ? document.body.classList.add("touch") : document.body.classList.add("no-touch"), !1 === navigator.onLine && document.body.classList.add("offline"), "serviceWorker" in navigator && navigator.serviceWorker.register("/service-worker.js"), p.default.init(), d.default.animateIn(), d.default.hookUpPageChangeAnimation(), e
                }
                return a(t, e), t
            }(l.default.Bootstrapper);
        t.default = new E
    },
    38: function(e, t, n) {
        "use strict";
        function i() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                t = arguments[1];
            switch (t.type) {
            case "SHOW_UPCOMING":
                return e.type = t.type, e.filter = "upcoming", e;
            case "SHOW_HIGHLIGHTS":
                return e.type = t.type, e.filter = "highlights", e;
            case "SHOW_PAST":
                return e.type = t.type, e.filter = "past", e;
            case "LOADED":
                e.type = t.type;
            default:
                return e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(5),
            o = (0, r.createStore)(i, {
                filter: "current"
            });
        t.default = o
    },
    41: function(e, t) {},
    57: function(e, t, n) {
        "use strict";
        function i(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            o = n(1),
            a = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(o),
            s = function() {
                function e() {
                    i(this, e)
                }
                return r(e, [{
                    key: "animateIn",
                    value: function() {
                        if (this.shouldPageAnimateIn())
                            var e = setInterval(function() {
                                if ("complete" === document.readyState) {
                                    clearInterval(e);
                                    var t = window.innerHeight + window.scrollY,
                                        n = document.querySelector("page-inner");
                                    TweenLite.set(n, {
                                        y: t,
                                        force3D: !0
                                    }), TweenLite.to(n, .42, {
                                        ease: "easeOutExpo",
                                        delay: 0,
                                        y: "0",
                                        force3D: !0,
                                        onStart: function() {
                                            document.body.setAttribute("animating", "")
                                        },
                                        onComplete: function() {
                                            document.body.setAttribute("animated-in", ""), document.body.removeAttribute("animating", ""), "" != window.location.hash && document.querySelector(window.location.hash) && TweenLite.to(window, .5, {
                                                scrollTo: {
                                                    y: document.querySelector(window.location.hash).getBoundingClientRect().top - 100
                                                }
                                            })
                                        }
                                    })
                                }
                            }, 50)
                    }
                }, {
                    key: "hookUpPageChangeAnimation",
                    value: function() {
                        if (!a.default.isBelowBreakpoint768())
                            for (var e = [].slice.call(document.querySelectorAll('a[href*="' + window.domain + '"]')), t = 0; t < e.length; t++) {
                                var n = e[t];
                                n.addEventListener("click", this.onInternalLinkClicked, !0)
                            }
                    }
                }, {
                    key: "onInternalLinkClicked",
                    value: function(e) {
                        if (!(e.ctrlKey || e.shiftKey || e.metaKey || e.button && 1 == e.button))
                            return e.target.getAttribute("href") && window.location.href != e.target.getAttribute("href") && -1 == e.target.getAttribute("href").indexOf("?") && (document.querySelector(".pageCover").setAttribute("animate-in", ""), a.default.setStateLoading(!0)), !0
                    }
                }, {
                    key: "pageChangeDetection",
                    value: function() {
                        var e = this;
                        setInterval(function() {
                            e.url != window.location.href && (e.url = window.location.href)
                        }, 50)
                    }
                }, {
                    key: "shouldPageAnimateIn",
                    value: function() {
                        return !(window.innerWidth < 1024)
                    }
                }]), e
            }();
        t.default = new s
    },
    58: function(e, t, n) {
        "use strict";
        function i(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            o = n(1),
            a = (function(e) {
                e && e.__esModule
            }(o), function() {
                function e() {
                    i(this, e), this.init()
                }
                return r(e, [{
                    key: "init",
                    value: function() {
                        if (null === document.querySelector(".module__approach")) {
                            var e,
                                t = document.body;
                            window.addEventListener("scroll", function() {
                                if (null !== document.body.getAttribute("hero-visible"))
                                    return clearTimeout(e), void t.classList.remove("disable-hover");
                                clearTimeout(e), t.classList.contains("disable-hover") || t.classList.add("disable-hover"), e = setTimeout(function() {
                                    t.classList.remove("disable-hover")
                                }, 500)
                            }, !1)
                        }
                    }
                }]), e
            }());
        t.default = new a
    },
    59: function(e, t, n) {
        "use strict";
        function i(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            s = n(0),
            l = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(s),
            u = function(e) {
                function t(e) {
                    return i(this, t), r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
                }
                return o(t, e), a(t, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        this.props.proxy.setAttribute("show", !0), setTimeout(function() {
                            e.props.proxy.setAttribute("animate-in", !0)
                        }, 100)
                    }
                }, {
                    key: "render",
                    value: function() {
                        return l.default.createElement("span", null)
                    }
                }]), t
            }(l.default.Component);
        u.defaultProps = {}, t.default = u
    },
    60: function(e, t, n) {
        "use strict";
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function o(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function a(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            l = n(0),
            u = i(l),
            c = n(61),
            d = (i(c), n(1)),
            h = i(d),
            f = n(25),
            p = i(f),
            m = n(37),
            y = i(m),
            g = function(e) {
                function t(e) {
                    r(this, t);
                    var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return n.state = {
                        show: !0
                    }, n.imgWidth = 0, n.imgHeight = 0, n.lastScrollTop = 0, n.onResize = n.onResize.bind(n), n.onTouchStart = n.onTouchStart.bind(n), n.onTouchMove = n.onTouchMove.bind(n), n.onMouseWheel = n.onMouseWheel.bind(n), n.animateCurtain = n.animateCurtain.bind(n), n.img = document.querySelector(".module__hero img"), n.hero = document.querySelector(".module__hero"), n.curtainHidden = !0, document.body.setAttribute("hero-visible", ""), n.curtainHidden = !1, document.addEventListener("resize", n.onResize), document.addEventListener("wheel", n.onMouseWheel), document.addEventListener("mousewheel", n.onMouseWheel), "onmousewheel" in document.body ? document.body.onmousewheel = function(e) {
                        e = e || window.event, n.onMouseWheel(e)
                    } : document.body.addEventListener("DOMMouseScroll", n.onMouseWheel, !!h.default.canusePassiveMode() && {
                        passive: !1
                    }), document.addEventListener("scroll", n.onTouchMove, !!h.default.canusePassiveMode() && {
                        passive: !1
                    }), n.onSwipe = n.onSwipe.bind(n), n
                }
                return a(t, e), s(t, [{
                    key: "onSwipe",
                    value: function(e) {
                        switch (e.preventDefault(), e.direction) {
                        case 8:
                            this.curtainHidden || (this.animateCurtain("hide"), p.default.dispatch({
                                type: "HERO_HIDE"
                            }));
                            break;
                        case 4:
                            this.curtainHidden && (this.animateCurtain("show"), p.default.dispatch({
                                type: "HERO_SHOW"
                            }))
                        }
                    }
                }, {
                    key: "componentDidMount",
                    value: function() {
                        window.Hammer = y.default.default;
                        var e = new y.default.Manager(this.hero),
                            t = new y.default.Swipe({
                                threshold: 4
                            });
                        e.add(t), e.on("swipe", this.onSwipe), document.body.classList.contains("ios") && (document.querySelector(".module__hero").style.height = window.innerHeight + "px", document.querySelector(".module__hero inner").style.height = window.innerHeight + "px"), window.addEventListener("resize", this.onResize, !1), this.img.addEventListener("load", this.onResize, !1), this.onImageLoaded = this.onImageLoaded.bind(this), this.images = this.props.proxy.querySelectorAll("media"), this.showImageNum = this.getRandomInt(0, this.images.length), this.images[this.showImageNum].style.display = "block", this.images[this.showImageNum].querySelector("img").addEventListener("load", this.onImageLoaded, !!h.default.canusePassiveMode() && {
                            passive: !1
                        }), this.images[this.showImageNum].querySelector("img").naturalWidth > 0 && this.onImageLoaded(null), this.checkHideOnClick()
                    }
                }, {
                    key: "checkHideOnClick",
                    value: function() {
                        var e = this;
                        "1" === this.props.hideOnClick && document.querySelector(".module.module__hero a").addEventListener("click", function(t) {
                            t.preventDefault(), e.animateCurtain("hide"), p.default.dispatch({
                                type: "HERO_HIDE"
                            })
                        })
                    }
                }, {
                    key: "onImageLoaded",
                    value: function(e) {
                        this.mediaNaturalWidth = this.images[this.showImageNum].querySelector("img").naturalWidth, this.mediaNaturalHeight = this.images[this.showImageNum].querySelector("img").naturalHeight, this.onResize(null), TweenLite.to(this.images[this.showImageNum].querySelector("img"), h.default.get("anim-time"), {
                            ease: h.default.get("anim-easeOut"),
                            opacity: 1
                        })
                    }
                }, {
                    key: "getRandomInt",
                    value: function(e, t) {
                        return e = Math.ceil(e), t = Math.floor(t), Math.floor(Math.random() * (t - e)) + e
                    }
                }, {
                    key: "onHeroBroadcast",
                    value: function(e) {
                        "HERO_SHOW" != e.type || this.curtainAnimating ? "HERO_HIDE" != e.type || this.curtainAnimating || this.checkScroll(!1) : this.checkScroll(!0)
                    }
                }, {
                    key: "onTouchStart",
                    value: function(e) {
                        this.touchStartY = e.changedTouches[0].screenY
                    }
                }, {
                    key: "onTouchMove",
                    value: function(e) {
                        this.curtainHidden || e.preventDefault(), !0 !== this.curtainAnimating && 0 == window.pageYOffset && (this.animateCurtain("show"), p.default.dispatch({
                            type: "HERO_SHOW"
                        }))
                    }
                }, {
                    key: "onMouseWheel",
                    value: function(e) {
                        if (this.curtainHidden || e.preventDefault(), !0 !== this.curtainAnimating) {
                            var t,
                                n = e,
                                i = n.detail,
                                r = n.wheelDelta;
                            i = i ? r && (t = r / i) ? i / t : -i / 1.35 : r / 120, i = i < 1 ? i < -1 ? (-Math.pow(i, 2) - 224) / 225 : i : (Math.pow(i, 2) + 224) / 225, e.delta = Math.min(Math.max(i / 2, -1), 1), this.direction = e.delta > 0 ? -1 : e.delta < 0 ? 1 : 0, 0 == this.direction && e.deltaY && (this.direction = e.deltaY > 0 ? 1 : -1), 1 != this.direction || this.curtainHidden ? -1 == this.direction && 0 == window.pageYOffset && (this.animateCurtain("show"), p.default.dispatch({
                                type: "HERO_SHOW"
                            })) : (this.animateCurtain("hide"), p.default.dispatch({
                                type: "HERO_HIDE"
                            })), this.hasScrolled = !0
                        }
                    }
                }, {
                    key: "animateCurtain",
                    value: function(e) {
                        var t = this;
                        switch (e) {
                        case "hide":
                            var n = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) + 100;
                            this.curtainAnimating = !0, document.body.style["-webkit-overflow-scrolling"] = "auto", window.scrollTo(0, 2), setTimeout(function() {
                                window.scrollTo(0, 2), document.body.style["-webkit-overflow-scrolling"] = "touch"
                            }.bind(this), .4), TweenLite.to(this.hero, .5, {
                                force3D: !0,
                                ease: "easeInOutExpo",
                                y: -1 * n,
                                onStart: function() {
                                    window.scrollTo(0, 2)
                                },
                                onComplete: function() {
                                    t.nativeScrollBlockTimer = setTimeout(function() {
                                        document.body.removeAttribute("hero-visible", ""), t.curtainAnimating = !1, t.curtainHidden = !0, window.scrollTo(0, 2)
                                    }, 200)
                                }
                            });
                            break;
                        case "show":
                            document.body.setAttribute("hero-visible", ""), this.curtainAnimating = !0, TweenLite.to(this.hero, .5, {
                                force3D: !0,
                                ease: "easeInOutExpo",
                                y: 0,
                                delay: .2,
                                onStart: function() {
                                    TweenLite.to(window, 2, {
                                        scrollTo: {
                                            y: 2
                                        }
                                    })
                                },
                                onComplete: function() {
                                    t.curtainAnimating = !1, t.curtainHidden = !1
                                }
                            })
                        }
                    }
                }, {
                    key: "onResize",
                    value: function(e) {
                        if (null == e || !document.body.classList.contains("ios")) {
                            var t = this.props.proxy.querySelectorAll(".module__hero media")[this.showImageNum],
                                n = t.querySelector("img");
                            n.style.height = (document.body.classList.contains("ios") ? 100 : 0) + window.innerHeight + "px";
                            var i = t.offsetWidth + 4,
                                r = t.offsetHeight;
                            n.style.width = i + "px";
                            var o = i / this.mediaNaturalWidth * this.mediaNaturalHeight;
                            n.style.height = o + "px", o < r && (n.style.height = r + "px", n.style.width = r / this.mediaNaturalHeight * this.mediaNaturalWidth + "px")
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        return u.default.createElement("span", null)
                    }
                }]), t
            }(u.default.Component);
        g.defaultProps = {}, t.default = g
    },
    88: function(e, t, n) {
        "use strict";
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function o(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function a(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            l = n(0),
            u = i(l),
            c = n(1),
            d = i(c),
            h = n(32),
            f = i(h),
            p = n(38),
            m = i(p),
            y = function(e) {
                function t(e) {
                    r(this, t);
                    var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    switch (n.props.type) {
                    case "labs-archive":
                    case "programs-archive":
                        n.isPageTypeFloat = !0;
                        break;
                    default:
                        n.isPageTypeFloat = !1
                    }
                    return n.articleHidden = !1, n.repositionPanels = n.repositionPanels.bind(n), n.setSubPanel1 = n.setSubPanel1.bind(n), n.setSubPanel2 = n.setSubPanel2.bind(n), n.onPanelClick = n.onPanelClick.bind(n), n.toggleArticleContent = n.toggleArticleContent.bind(n), n.updateLabelsAndContent = n.updateLabelsAndContent.bind(n), f.default.subscribe(function() {
                        return n.onBroadcast(f.default.getState())
                    }), m.default.subscribe(function() {
                        return n.onBroadcast(m.default.getState())
                    }), n
                }
                return a(t, e), s(t, [{
                    key: "onBroadcast",
                    value: function(e) {
                        "LOADED" == e.type && (this.toggleArticleContent(), this.repositionPanels())
                    }
                }, {
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        this.innerWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0), this.props.proxy.querySelector(".panel.panel-button.first").addEventListener("click", this.onPanelClick, !0), this.props.proxy.querySelector(".panel.panel-button.second").addEventListener("click", this.onPanelClick, !0);
                        for (var t = document.querySelectorAll("page-bg-panels .panel"), n = 0; n < t.length; n++) {
                            var i = t[n];
                            TweenLite.set(i, {
                                width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
                            })
                        }
                        this.currentLabel = t[0].getAttribute("label");
                        var r = setInterval(function() {
                            "complete" === document.readyState && (e.repositionPanels(!0), clearInterval(r))
                        }, 50)
                    }
                }, {
                    key: "repositionPanels",
                    value: function() {
                        var e = this;
                        arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        setTimeout(function() {
                            var t = e.innerWidth,
                                n = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
                            Math.abs(t - n) > 100 && (t = n);
                            var i = (Math.max(document.documentElement.clientHeight, window.innerHeight || 0), t <= 768),
                                r = document.querySelector("div.panel.front"),
                                o = document.querySelector("article.page"),
                                a = window.getComputedStyle(o),
                                s = (d.default.getSideGutter(), parseInt(a.getPropertyValue("width"), 10) / t),
                                l = e.isPageTypeFloat ? d.default.getColumn(1) : d.default.getSideGutter(),
                                u = s * t,
                                c = parseInt(a.getPropertyValue("margin-left"), 10);
                            u += 2 * l, c -= l;
                            var h = e.isPageTypeFloat ? Math.max(60, parseInt(a.getPropertyValue("padding-top"), 10)) : 0,
                                f = u / t * 100;
                            f > 99 && (f = 100);
                            var p = c / t,
                                m = 100 * p + "vw",
                                y = h + "px";
                            e["front-panel-x"] = m, e["front-panel-y"] = "0px", r.classList.remove("hide-front"), TweenLite.to(r, d.default.get("anim-time-2"), {
                                ease: d.default.get("anim-easeOut"),
                                width: f + "vw",
                                left: m,
                                top: y,
                                force3D: !0,
                                transform: "translateZ(0)",
                                onComplete: function() {}
                            });
                            var g = p + d.default.getColumn(i ? 2 : 3) / t,
                                v = h + 134;
                            e.setSubPanel1({
                                width: f,
                                x: (e.isPageTypeFloat ? 100 * g : 0) + "vw",
                                y: (e.isPageTypeFloat ? v : 0) + "px"
                            });
                            var b = p + d.default.getColumn(i ? 4 : 5) / t,
                                w = h + 78;
                            e.setSubPanel2({
                                width: f,
                                x: (e.isPageTypeFloat ? 100 * b : 0) + "vw",
                                y: (e.isPageTypeFloat ? w : 0) + "px"
                            })
                        }, 0)
                    }
                }, {
                    key: "setSubPanel1",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = document.querySelector("a.panel.first");
                        TweenLite.to(n, .31, {
                            ease: "easeOutExpo",
                            delay: .15,
                            width: e.width + "vw",
                            left: e.x,
                            top: e.y,
                            force3D: !0,
                            transform: "translateZ(0)",
                            onComplete: function() {
                                n.classList.remove("to-hide")
                            }
                        }), t || (this["sub-1-panel-x"] = e.x, this["sub-1-panel-y"] = e.y)
                    }
                }, {
                    key: "setSubPanel2",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = document.querySelector("a.panel.second");
                        TweenLite.to(n, .31, {
                            ease: "easeOutExpo",
                            delay: .07,
                            width: e.width + "vw",
                            left: e.x,
                            top: e.y,
                            force3D: !0,
                            transform: "translateZ(0)",
                            onComplete: function() {
                                n.classList.remove("to-hide")
                            }
                        }), t || (this["sub-2-panel-x"] = e.x, this["sub-2-panel-y"] = e.y)
                    }
                }, {
                    key: "onPanelClick",
                    value: function(e, t) {
                        var n = this;
                        e.preventDefault(), this.currentLabel = e.currentTarget.querySelector("label").innerHTML;
                        var i = e.currentTarget.classList.contains("first");
                        e.currentTarget.classList.add("to-hide");
                        var r = i ? this["sub-1-panel-x"] : this["sub-2-panel-x"],
                            o = i ? this["sub-1-panel-y"] : this["sub-2-panel-y"];
                        o = innerHeight + window.scrollY + "px", TweenLite.to(e.currentTarget, d.default.get("anim-time"), {
                            ease: d.default.get("anim-easeInOut"),
                            left: r,
                            top: o,
                            force3D: !0,
                            transform: "translateZ(0)",
                            onComplete: function() {
                                n.toggleArticleContent()
                            }
                        })
                    }
                }, {
                    key: "toggleArticleContent",
                    value: function() {
                        var e = this,
                            t = this.articleHidden ? this["front-panel-y"] : innerHeight + window.scrollY + "px",
                            n = document.querySelector("article");
                        TweenLite.to(n, d.default.get("anim-time"), {
                            ease: d.default.get("anim-easeInOut"),
                            left: 0,
                            top: t,
                            force3D: !0,
                            transform: "translateZ(0)",
                            onComplete: function() {
                                e.articleHidden = !e.articleHidden, e.articleHidden && e.updateLabelsAndContent()
                            }
                        });
                        var i = document.querySelector("div.panel.front");
                        TweenLite.to(i, d.default.get("anim-time"), {
                            ease: d.default.get("anim-easeInOut"),
                            top: t,
                            force3D: !0,
                            transform: "translateZ(0)",
                            onComplete: function() {}
                        })
                    }
                }, {
                    key: "updateLabelsAndContent",
                    value: function(e) {
                        var t = this.props.proxy.querySelector(".panel.front"),
                            n = this.props.proxy.querySelector(".panel.first"),
                            i = this.props.proxy.querySelector(".panel.second");
                        if ("1" !== this.props.labs)
                            switch (this.props.type) {
                            case "programs-archive":
                                switch (this.currentLabel) {
                                case "Highlights":
                                    n.querySelector("label").innerHTML = t.getAttribute("label"), i.querySelector("label").innerHTML = i.getAttribute("label"), m.default.dispatch({
                                        type: "SHOW_HIGHLIGHTS"
                                    }), this.setUrl(this.currentLabel);
                                    break;
                                case "Upcoming":
                                    n.querySelector("label").innerHTML = n.getAttribute("label"), i.querySelector("label").innerHTML = i.getAttribute("label"), m.default.dispatch({
                                        type: "SHOW_UPCOMING"
                                    }), this.setUrl(this.currentLabel);
                                    break;
                                case "Past":
                                    n.querySelector("label").innerHTML = t.getAttribute("label"), i.querySelector("label").innerHTML = n.getAttribute("label"), m.default.dispatch({
                                        type: "SHOW_PAST"
                                    }), this.setUrl(this.currentLabel)
                                }
                            }
                        else
                            switch (this.currentLabel) {
                            case "Highlights":
                                n.querySelector("label").innerHTML = t.getAttribute("label"), i.querySelector("label").innerHTML = i.getAttribute("label"), f.default.dispatch({
                                    type: "SHOW_HIGHLIGHTS"
                                }), this.setUrl(this.currentLabel);
                                break;
                            case "Cases":
                                n.querySelector("label").innerHTML = n.getAttribute("label"), i.querySelector("label").innerHTML = i.getAttribute("label"), f.default.dispatch({
                                    type: "SHOW_CURRENT"
                                }), this.setUrl(this.currentLabel);
                                break;
                            case "Archive":
                                n.querySelector("label").innerHTML = t.getAttribute("label"), i.querySelector("label").innerHTML = n.getAttribute("label"), f.default.dispatch({
                                    type: "SHOW_ARCHIVE"
                                }), this.setUrl(this.currentLabel)
                            }
                    }
                }, {
                    key: "setUrl",
                    value: function(e) {
                        var t = "/" + window.location.pathname.split("/")[1] + "/" + (["upcoming", "current"].indexOf(e.toLowerCase()) > -1 ? "" : e.toLowerCase() + "/");
                        history.replaceState({}, e, t)
                    }
                }, {
                    key: "render",
                    value: function() {
                        return u.default.createElement("span", null)
                    }
                }]), t
            }(u.default.Component);
        y.defaultProps = {}, t.default = y
    },
    89: function(e, t, n) {
        "use strict";
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function o(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function a(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            l = n(0),
            u = i(l),
            c = n(1),
            d = i(c),
            h = n(25),
            f = i(h),
            p = n(28),
            m = i(p),
            y = function(e) {
                function t(e) {
                    r(this, t);
                    var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return n.hamburgerEventHandler = function(e) {
                        switch ("touchend" == e.type && e.preventDefault(), n.animateHamburgerIcon(e.type), e.type) {
                        case "click":
                        case "touchend":
                            n.toggleNav()
                        }
                    }, n.state = {
                        open: !1,
                        scrolled: !1,
                        visible: !0
                    }, n.logoEventHandler = n.logoEventHandler.bind(n), n.hamburgerEventHandler = n.hamburgerEventHandler.bind(n), n.searchEventHandler = n.searchEventHandler.bind(n), n.openNavScrollPosY = 0, n.lastScrollTop = 0, n.scrollEventHandler = n.scrollEventHandler.bind(n), n.hideNavOffset = 20, n
                }
                return a(t, e), s(t, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        this.hero = document.querySelector(".module.module__hero"), this.hero && (this.hideNavOffset = 150), this.spaceHeader = document.getElementsByClassName("space-header")[0], this.logo = this.props.proxy.getElementsByClassName("logo")[0], this.logo.addEventListener("mouseenter", this.logoEventHandler, !0), this.logo.addEventListener("mouseleave", this.logoEventHandler, !0), this.hamburger = this.props.proxy.getElementsByClassName("hamburger")[0], this.hamburger.addEventListener("click", this.hamburgerEventHandler, !0), this.hamburger.addEventListener("mouseenter", this.hamburgerEventHandler, !0), this.hamburger.addEventListener("mouseleave", this.hamburgerEventHandler, !0), this.hamburger.addEventListener("touchend", this.hamburgerEventHandler, !0), this.search = this.props.proxy.querySelector(".search"), this.search.addEventListener("click", this.searchEventHandler, !0), this.search.addEventListener("mouseenter", this.searchEventHandler, !0), this.search.addEventListener("mouseleave", this.searchEventHandler, !0), this.search.addEventListener("touchend", this.searchEventHandler, !0), document.addEventListener("scroll", this.scrollEventHandler), this.setupSideNavToggles(), f.default.subscribe(function() {
                            return e.onHeroBroadcast(f.default.getState())
                        }), this.upcomingEventsLink()
                    }
                }, {
                    key: "upcomingEventsLink",
                    value: function() {
                        if ("0" == this.props.upcomingEvents) {
                            for (var e = document.querySelectorAll("header a[href='" + window.location.protocol + "//" + window.location.host + "/program/']"), t = 0; t < e.length; t++)
                                e[t].href += "highlights/";
                            document.querySelectorAll("footer a[href='" + window.location.protocol + "//" + window.location.host + "/program/']")[0].href += "highlights/"
                        }
                    }
                }, {
                    key: "setupSideNavToggles",
                    value: function() {
                        var e = [].slice.call(document.querySelectorAll("menu.sideNav *[href^='/signup']")),
                            t = [].slice.call(document.querySelectorAll("menu.sideNav *[href^='/login']"));
                        this.elements = e.concat(t);
                        for (var n = 0; n < this.elements.length; n++) {
                            this.elements[n].addEventListener("click", this.hamburgerEventHandler, !0)
                        }
                    }
                }, {
                    key: "onHeroBroadcast",
                    value: function(e) {
                        "HERO_HIDE" == e.type ? (this.spaceHeader.removeAttribute("inverted"), this.logoEventHandler({})) : "HERO_SHOW" == e.type && (this.spaceHeader.setAttribute("inverted", ""), this.logoEventHandler({}))
                    }
                }, {
                    key: "scrollEventHandler",
                    value: function(e) {
                        var t = window.pageYOffset || document.documentElement.scrollTop,
                            n = "";
                        n = t > this.lastScrollTop ? "DOWN" : "UP", this.lastScrollTop = t, Math.abs(this.openNavScrollPosY - t) < 50 ? this.spaceHeader.removeAttribute("show-background") : 1 == this.state.open && Math.abs(this.openNavScrollPosY - t) > 50 ? this.toggleNav() : !this.state.open && this.state.visible && "DOWN" === n && t > this.hideNavOffset ? (this.spaceHeader.setAttribute("visible", "hidden"), this.setState({
                            visible: !1
                        }), this.spaceHeader.removeAttribute("show-background")) : this.state.open || this.state.visible || "UP" !== n || (this.spaceHeader.setAttribute("visible", "visible"), this.spaceHeader.setAttribute("show-background", ""), this.setState({
                            visible: !0
                        }))
                    }
                }, {
                    key: "logoEventHandler",
                    value: function(e) {
                        this.logo.classList.contains("over") || (this.logo.classList.add("over"), setTimeout(function() {
                            this.logo.classList.remove("over")
                        }.bind(this), 1e3))
                    }
                }, {
                    key: "animateHamburgerIcon",
                    value: function(e) {
                        var t = this.hamburger.getElementsByClassName("menu-box-1")[0].getElementsByTagName("g")[0],
                            n = this.hamburger.getElementsByClassName("menu-box-2")[0].getElementsByTagName("g")[0];
                        TweenLite.to(t, d.default.get("anim-time-2"), {
                            ease: d.default.get("anim-easeOut"),
                            force3D: !0,
                            scale: this.state.open ? "mouseenter" == e ? 1 : 0 : "mouseenter" == e ? 0 : 1,
                            x: this.state.open ? "mouseenter" == e ? 0 : 18 : "mouseenter" == e ? 18 : 0,
                            y: this.state.open ? "mouseenter" == e ? 0 : 18 : "mouseenter" == e ? 18 : 0
                        });
                        var i = this.state.open ? "mouseenter" == e ? 1 : 2.8 : "mouseenter" == e ? 2.8 : 1,
                            r = this.state.open ? "mouseenter" == e ? 0 : -34 : "mouseenter" == e ? -34 : 0,
                            o = this.state.open ? "mouseenter" == e ? 0 : -34 : "mouseenter" == e ? -34 : 0;
                        TweenLite.to(n, d.default.get("anim-time-2"), {
                            ease: d.default.get("anim-easeOut"),
                            css: {
                                transform: "translateX(" + r + "px) translateY(" + o + "px) scale(" + i + ", " + i + ")"
                            }
                        })
                    }
                }, {
                    key: "toggleNav",
                    value: function(e) {
                        this.setState({
                            open: !this.state.open
                        });
                        var t = document.body.classList.contains("header-open");
                        document.body.classList.toggle("header-open", this.state.open ? "open" : "");
                        var n = document.body.classList.contains("header-open");
                        m.default.dispatch({
                            type: "HIDE"
                        }), TweenLite.killTweensOf(this.spaceHeader), TweenLite.to(this.spaceHeader, d.default.get("anim-time-2"), {
                            delay: t ? d.default.get("anim-time-2") : 0,
                            onStart: function() {
                                t || document.body.classList.add("header-opening-state")
                            },
                            onComplete: function() {
                                n || document.body.classList.remove("header-opening-state")
                            }
                        }), this.spaceHeader.setAttribute("open", this.state.open ? "open" : ""), this.state.open && (this.openNavScrollPosY = window.pageYOffset || document.documentElement.scrollTop), this.animateHamburgerIcon("mouseleave")
                    }
                }, {
                    key: "searchEventHandler",
                    value: function(e) {
                        e.preventDefault();
                        var t = this.search.getElementsByClassName("circle-box-3")[0].getElementsByTagName("circle")[1];
                        switch (TweenLite.to(t, d.default.get("anim-time-2"), {
                            ease: d.default.get("anim-easeOut"),
                            "stroke-width": "mouseenter" == e.type ? 23 : 0
                        }), e.type) {
                        case "click":
                        case "touch":
                        case "touchend":
                            var n = 100;
                            this.state.open && (this.toggleNav(), n = 500), setTimeout(function() {
                                m.default.dispatch({
                                    type: "SHOW",
                                    properties: {
                                        component: "SearchForm"
                                    }
                                })
                            }, n)
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        return u.default.createElement("span", null)
                    }
                }]), t
            }(u.default.Component);
        y.defaultProps = {}, t.default = y
    }
}, [33]);
