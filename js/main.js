!function(e) {
    function t(a) {
        if (n[a])
            return n[a].exports;
        var i = n[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return e[a].call(i.exports, i, i.exports, t), i.l = !0, i.exports
    }
    var n = {};
    t.m = e, t.c = n, t.d = function(e, n, a) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: a
        })
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "/app/themes/changes2018/dist/", t(t.s = 1)
}([function(e, t) {
    e.exports = jQuery
}, function(e, t, n) {
    n(2), e.exports = n(9)
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), function(e) {
        var t = n(0),
            a = (n.n(t), n(3)),
            i = n(5),
            s = n(7),
            o = n(8),
            r = new a.a({
                common: i.a,
                home: s.a,
                aboutUs: o.a
            });
        e(document).ready(function() {
            return r.loadEvents()
        })
    }.call(t, n(0))
}, function(e, t, n) {
    "use strict";
    var a = n(4),
        i = function(e) {
            this.routes = e
        };
    i.prototype.fire = function(e, t, n) {
        void 0 === t && (t = "init"), "" !== e && this.routes[e] && "function" == typeof this.routes[e][t] && this.routes[e][t](n)
    }, i.prototype.loadEvents = function() {
        var e = this;
        this.fire("common"), document.body.className.toLowerCase().replace(/-/g, "_").split(/\s+/).map(a.a).forEach(function(t) {
            e.fire(t), e.fire(t, "finalize")
        }), this.fire("common", "finalize")
    }, t.a = i
}, function(e, t, n) {
    "use strict";
    t.a = function(e) {
        return "" + e.charAt(0).toLowerCase() + e.replace(/[\W_]/g, "|").split("|").map(function(e) {
            return "" + e.charAt(0).toUpperCase() + e.slice(1)
        }).join("").slice(1)
    }
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var a = n(6);
        n.n(a);
        t.a = {
            init: function() {
                function t(t, n, a) {
                    var i = n.length,
                        s = 0;
                    n.each(function() {
                        var n = e(this);
                        if ("all" === t)
                            n.slideDown();
                        else {
                            !!n.hasClass(t) ? n.slideDown(a) : (n.slideUp(a), s++)
                        }
                    }), i == s && n.siblings(".no-results").slideDown()
                }
                function n(e, t, n) {
                    var a = new Date;
                    a.setTime(a.getTime() + 24 * n * 60 * 60 * 1e3);
                    var i = "expires=" + a.toUTCString();
                    document.cookie = e + "=" + t + ";" + i + ";path=/"
                }
                function a() {
                    var t = e("h1.logo a").attr("href");
                    window.history.pushState({
                        path: t
                    }, "", t), document.title = "Changes"
                }
                function i() {
                    e("#artist-wrapper").fadeOut(200)
                }
                function s() {
                    e("#program-content").fadeOut(200, function() {
                        e(this).remove()
                    })
                }
                function o() {
                    e("#ajax-page-content").length && (e("body").addClass("closing-page"), e("body").removeClass("closing-page red-page-open"), e("#nav-main li.current-menu-item").removeClass("current-menu-item"))
                }
                function r() {
                    var t = e("#mc-embedded-subscribe-form");
                    t.length && t.ajaxChimp({
                        callback: function(a) {
                            if ("success" === a.result) {
                                var i = t.find("input"),
                                    s = t.find(".success");
                                s.show(), t.blur(), setTimeout(function() {
                                    s.hide(), i.val("").blur()
                                }, 4e3), n("changes_subscriber", 1, 30)
                            } else {
                                var o = a.msg;
                                e("body").append('<div class="form-error"><a href="#" class="close-form-error curtain"></a><div class="msg">' + o + '<a href="#" class="close-form-error">CLOSE X</a></div></div>'), e(".form-error").click(function() {
                                    e(this).fadeOut(function() {
                                        e(this).remove()
                                    })
                                })
                            }
                        }
                    })
                }
                function l() {
                    var t = e("#audio-preview");
                    if (t.length) {
                        var n = t.data("accesstoken"),
                            a = t.data("trackid");
                        e.ajax({
                            url: "https://api.spotify.com/v1/tracks/" + a,
                            type: "GET",
                            headers: {
                                Authorization: "Bearer " + n
                            },
                            success: function(n) {
                                if (null !== n.preview_url) {
                                    t.html('<audio id="player" src="' + n.preview_url + '"></audio><button id="play" class="play">' + n.name + "</button>");
                                    var a = !1;
                                    e("#play").click(function() {
                                        e(this).toggleClass("playing"), 0 == a ? (document.getElementById("player").play(), a = !0) : (document.getElementById("player").pause(), a = !1)
                                    })
                                }
                            }
                        })
                    }
                }
                function c() {
                    e(".hero-image img").imageLoad(function() {
                        e(this).addClass("loaded")
                    })
                }
                function u() {
                    var e = document.getElementById("links");
                    if (e) {
                        var t,
                            n,
                            a = 0,
                            i = 0,
                            s = 0;
                        e.addEventListener("touchstart", function(e) {
                            a = e.changedTouches[0].screenX, t = (new Date).getTime(), n = 0
                        }, !1), e.addEventListener("touchend", function(o) {
                            i = o.changedTouches[0].screenX, n = i - a, (s = (new Date).getTime() - t) >= 200 && n >= 50 && e.classList.remove("open")
                        }, !1)
                    }
                }
                function d(t) {
                    e("body").hasClass("doingajax") || (e("body").addClass("doingajax"), o(), i(), e.ajax({
                        url: t,
                        datatype: "html",
                        success: function(n) {
                            var a = new DOMParser,
                                i = a.parseFromString(n, "text/html"),
                                s = i.body.getAttribute("class"),
                                o = e(i).find("#program-content");
                            if (o.hide().appendTo("body").fadeIn(), o.find("li.session.active").length) {
                                e("li.session.active").find(".session-details").show();
                                var r = e("li.session.active").position().top - e(".day-header").first().outerHeight();
                                o.scrollTop(r)
                            }
                            var l = e(n).filter("title").text();
                            window.history.pushState({
                                path: t
                            }, "", t), document.title = l, e("body").attr("class", s)
                        },
                        error: function() {
                            window.location = t
                        }
                    }))
                }
                e(document).on("click", ".filter", function() {
                    var n = e(this),
                        a = n.data("filter"),
                        i = n.closest(".day-header"),
                        s = e("#program-content"),
                        o = i.next().find("li");
                    n.parent().addClass("active"), t(a, o, 400), setTimeout(function() {
                        n.parent().siblings().removeClass("active"), n.parent().addClass("active");
                        var e = s.scrollTop() + i.position().top;
                        s.animate({
                            scrollTop: e
                        }, 300)
                    }, 400)
                }), r(), l(), e(document).on("click", ".accordion-header", function() {
                    e(this).next().slideToggle(), e(this).parent().toggleClass("open"), e(this).parent().siblings().removeClass("open").find(".accordion-content").slideUp()
                }), e("#open-tickets").click(function() {
                    o(), i(), s(), e("body").addClass("tickets-open");
                    var t = e(this).attr("href");
                    return window.history.pushState({
                        path: t
                    }, "", t), document.title = "Tickets | CHANGES", !1
                }), e("#close-tickets").click(function() {
                    e("body").removeClass("tickets-open");
                    var t = e(this).attr("href");
                    return window.history.pushState({
                        path: t
                    }, "", t), document.title = "CHANGES", !1
                }), e("#nav-main .menu a").click(function() {
                    if (!e("body").hasClass("doingajax")) {
                        i(), s();
                        var t = e(this).attr("href");
                        e("#nav-main li.current-menu-item").removeClass("current-menu-item"), e(this).parent().addClass("current-menu-item"), e("body").addClass("doingajax opening-page"), e("#ajax-page-wrap").addClass("hide"), e.ajax({
                            url: t,
                            datatype: "html",
                            success: function(n) {
                                var a = new DOMParser,
                                    i = a.parseFromString(n, "text/html"),
                                    s = i.body.getAttribute("class"),
                                    o = e(i).find("#ajax-page-content");
                                e("#ajax-page-wrap").html(o), e("#page-scroll").scrollTop(0), setTimeout(function() {
                                    e("#ajax-page-wrap").removeClass("hide")
                                }, 300), r();
                                var l = e(n).filter("title").text();
                                window.history.pushState({
                                    path: t
                                }, "", t), document.title = l, e("body").attr("class", s)
                            },
                            error: function() {
                                window.location = t
                            }
                        })
                    }
                    return !1
                }), e("#close-page").click(function() {
                    return o(), a(), !1
                }), e.fn.imageLoad = function(t) {
                    this.load(t), this.each(function() {
                        this.complete && 0 !== this.naturalWidth && e(this).trigger("load")
                    })
                }, c(), u(), e(document).on("click", '[href*="/artist/"],[href*="/speaker/"]', function() {
                    if (!e("body").hasClass("doingajax")) {
                        var t = e(this).attr("href"),
                            n = e("#artist-wrapper"),
                            a = t.indexOf("/artist/") > -1 ? "artist" : "speaker";
                        o(), s(), e("body").addClass("doingajax"), n.length ? n.addClass("loading") : e('<article id="artist-wrapper" class="artist-wrapper ' + a + ' loading" style="display: none"></div>').appendTo("body").fadeIn(200), e.ajax({
                            url: t,
                            datatype: "html",
                            success: function(n) {
                                var i = new DOMParser,
                                    s = i.parseFromString(n, "text/html"),
                                    o = s.body.getAttribute("class"),
                                    r = e(s).find("#artist-contents");
                                e("#artist-wrapper").html(r).removeClass("artist speaker").addClass(a).removeClass("loading"), e("#artist-wrapper").is(":hidden") && e("#artist-wrapper").fadeIn(200), l(), c(), u();
                                var d = e(n).filter("title").text();
                                window.history.pushState({
                                    path: t
                                }, "", t), document.title = d, e("body").attr("class", o)
                            },
                            error: function() {
                                window.location = t
                            }
                        })
                    }
                    return !1
                }), e(document).on("click", "#close-artist", function() {
                    return i(), a(), !1
                }), e(document).on("click", "#open-links", function() {
                    return e("#links").addClass("open"), !1
                }), e(document).on("click", "#close-links", function() {
                    return e("#links").removeClass("open"), !1
                }), e(document).keydown(function(t) {
                    return e("#prev-artist").length && 37 == t.keyCode ? (e("#prev-artist").trigger("click"), !1) : e("#next-artist").length && 39 == t.keyCode ? (e("#next-artist").trigger("click"), !1) : e("#close-artist").length && 27 == t.keyCode ? (e("#close-artist").trigger("click"), !1) : void 0
                }), e("li.session.active").length && e(window).load(function() {
                    e("li.session.active").find(".session-details").show();
                    var t = e("li.session.active").position().top - e(".day-header").first().outerHeight();
                    e("#program-content").scrollTop(t)
                }), e(document).on("click", '[href*="/session/"]', function(t) {
                    t.preventDefault();
                    var n = e(this),
                        a = n.attr("href"),
                        i = e("#program-content");
                    if (i.length) {
                        var s = n.text() + " - Changes",
                            o = n.closest("li"),
                            r = e("li.session.session-open").not(o);
                        if (r.length)
                            r.removeClass("session-open"), r.find(".session-details").slideUp(function() {
                                var t = i.scrollTop() + o.position().top - e(".day-header").first().outerHeight();
                                i.animate({
                                    scrollTop: t
                                }, 300)
                            });
                        else {
                            var l = i.scrollTop() + o.position().top - e(".day-header").first().outerHeight();
                            i.animate({
                                scrollTop: l
                            }, 300)
                        }
                        n.closest("li").addClass("session-open").find(".session-details").slideDown(), window.history.pushState({
                            path: a
                        }, "", a), document.title = s
                    } else
                        d(a), t.preventDefault()
                }), e(document).on("click", ".close-session", function() {
                    var t = e(this).attr("href");
                    return e(this).closest("li").removeClass("session-open").find(".session-details").slideUp(), window.history.pushState({
                        path: t
                    }, "", t), document.title = "Changes", !1
                }), e("#open-program").click(function() {
                    return d(e(this).attr("href")), !1
                }), e(document).on("click", ".close-program", function() {
                    return s(), a(), !1
                }), e(window).on("popstate", function() {
                    var t = document.location.href;
                    if (t = t.substr(t.indexOf(":") + 1), e('a[href="' + t + '"]').length)
                        return e('a[href="' + t + '"]').trigger("click"), !1;
                    window.location = t
                }), e("#goto-lineup").click(function() {
                    e("body").addClass("lineup-open")
                });
                var p = document.getElementById("open-lineup"),
                    f = document.getElementById("main");
                p.addEventListener("click", function() {
                    f.classList.add("lineup-open")
                }), document.getElementById("close-lineup").addEventListener("click", function() {
                    f.classList.remove("lineup-open")
                });
                var m = document.getElementById("popup-signup");
                if (function(e) {
                    for (var t = e + "=", n = document.cookie.split(";"), a = 0; a < n.length; a++) {
                        for (var i = n[a]; " " == i.charAt(0);)
                            i = i.substring(1);
                        if (0 == i.indexOf(t))
                            return i.substring(t.length, i.length)
                    }
                    return ""
                }("changes_subscriber")) {
                    var h = setTimeout(function() {
                        m.classList.add("open")
                    }, 15e3);
                    document.getElementById("expand-signup").addEventListener("click", function() {
                        m.classList.add("expanded")
                    });
                    document.getElementById("close-popup-signup").addEventListener("click", function() {
                        m.classList.remove("open")
                    })
                }
                var g = document.getElementById("open-signup");
                g && g.addEventListener("click", function(e) {
                    e.preventDefault(), m.classList.add("open"), clearTimeout(h)
                });
                var v = document.getElementById("searchform"),
                    y = document.getElementById("search-input"),
                    C = document.getElementById("search-results"),
                    w = document.getElementById("open-search"),
                    b = document.getElementById("search"),
                    k = document.getElementById("close-search"),
                    x = v.action;
                w && (w.addEventListener("click", function(e) {
                    e.preventDefault(), b.classList.add("open"), y.focus()
                }), k.addEventListener("click", function(e) {
                    e.preventDefault(), b.classList.remove("open"), y.blur()
                })), v.addEventListener("submit", function(e) {
                    e.preventDefault()
                }), y.addEventListener("keyup", function(e, t) {
                    var n = null;
                    return function() {
                        var a = this,
                            i = arguments;
                        clearTimeout(n), n = setTimeout(function() {
                            e.apply(a, i)
                        }, t)
                    }
                }(function() {
                    var t = this.value;
                    C.innerHTML = '<ul><li class="searching">SEARCHING</li></ul>', e.ajax({
                        url: x + t,
                        datatype: "json",
                        success: function(t) {
                            for (var n = "", a = 0; a < t.length; a++) {
                                var i = t[a];
                                n += '<li><a class="result" href="' + i.link + '">' + i.title + "</li>"
                            }
                            C.innerHTML = "<ul>" + n + "</ul>", e(".result").click(function(t) {
                                var n = e(this).attr("href"),
                                    a = e('a[href="' + n + '"]').not(".result");
                                n.indexOf("/session/") > -1 ? (d(n), t.preventDefault()) : a.length && (a.trigger("click"), t.preventDefault())
                            })
                        },
                        error: function() {
                            C.innerHTML = "<ul>No results for: " + t + "</ul>"
                        }
                    })
                }, 500))
            },
            finalize: function() {}
        }
    }).call(t, n(0))
}, function(e, t, n) {
    (function(e) {
        /*!
Mailchimp Ajax Submit
jQuery Plugin
Author: Siddharth Doshi

Use:
===
$('#form_id').ajaxchimp(options);

- Form should have one <input> element with attribute 'type=email'
- Form should have one label element with attribute 'for=email_input_id' (used to display error/success message)
- All options are optional.

Options:
=======
options = {
    language: 'en',
    callback: callbackFunction,
    url: 'http://blahblah.us1.list-manage.com/subscribe/post?u=5afsdhfuhdsiufdba6f8802&id=4djhfdsh99f'
}

Notes:
=====
To get the mailchimp JSONP url (undocumented), change 'post?' to 'post-json?' and add '&c=?' to the end.
For e.g. 'http://blahblah.us1.list-manage.com/subscribe/post-json?u=5afsdhfuhdsiufdba6f8802&id=4djhfdsh99f&c=?',
*/
        !function(e) {
            "use strict";
            e.ajaxChimp = {
                responses: {
                    "We have sent you a confirmation email": 0,
                    "Please enter a value": 1,
                    "An email address must contain a single @": 2,
                    "The domain portion of the email address is invalid (the portion after the @: )": 3,
                    "The username portion of the email address is invalid (the portion before the @: )": 4,
                    "This email address looks fake or invalid. Please enter a real email address": 5
                },
                translations: {
                    en: null
                },
                init: function(t, n) {
                    e(t).ajaxChimp(n)
                }
            }, e.fn.ajaxChimp = function(t) {
                return e(this).each(function(n, a) {
                    var i = e(a),
                        s = i.find("input[type=email]"),
                        o = i.find("label[for=" + s.attr("id") + "]"),
                        r = e.extend({
                            url: i.attr("action"),
                            language: "en"
                        }, t),
                        l = r.url.replace("/post?", "/post-json?").concat("&c=?");
                    i.attr("novalidate", "true"), s.attr("name", "EMAIL"), i.submit(function() {
                        function t(t) {
                            if ("success" === t.result)
                                n = "We have sent you a confirmation email", o.removeClass("error").addClass("valid"), s.removeClass("error").addClass("valid");
                            else {
                                s.removeClass("valid").addClass("error"), o.removeClass("valid").addClass("error");
                                try {
                                    var a = t.msg.split(" - ", 2);
                                    if (void 0 === a[1])
                                        n = t.msg;
                                    else {
                                        parseInt(a[0], 10).toString() === a[0] ? (a[0], n = a[1]) : (-1, n = t.msg)
                                    }
                                } catch (e) {
                                    -1, n = t.msg
                                }
                            }
                            "en" !== r.language && void 0 !== e.ajaxChimp.responses[n] && e.ajaxChimp.translations && e.ajaxChimp.translations[r.language] && e.ajaxChimp.translations[r.language][e.ajaxChimp.responses[n]] && (n = e.ajaxChimp.translations[r.language][e.ajaxChimp.responses[n]]), o.html(n), o.show(2e3), r.callback && r.callback(t)
                        }
                        var n,
                            a = {},
                            c = i.serializeArray();
                        e.each(c, function(e, t) {
                            a[t.name] = t.value
                        }), e.ajax({
                            url: l,
                            data: a,
                            success: t,
                            dataType: "jsonp",
                            error: function(e, t) {
                                console.log("mailchimp ajax submit error: " + t)
                            }
                        });
                        var u = "Submitting...";
                        return "en" !== r.language && e.ajaxChimp.translations && e.ajaxChimp.translations[r.language] && e.ajaxChimp.translations[r.language].submit && (u = e.ajaxChimp.translations[r.language].submit), o.html(u).show(2e3), !1
                    })
                }), this
            }
        }(e)
    }).call(t, n(0))
}, function(e, t, n) {
    "use strict";
    t.a = {
        init: function() {},
        finalize: function() {}
    }
}, function(e, t, n) {
    "use strict";
    t.a = {
        init: function() {}
    }
}, function(e, t) {}]);
