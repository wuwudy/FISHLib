;(window._iconfont_svg_string_4495398 =
  '<svg><symbol id="icon-xingzhuang-tupian" viewBox="0 0 1024 1024"><path d="M928 896H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h832a32 32 0 0 1 32 32v116.864a32 32 0 1 1-64 0V192H128v640h768V468.544l-206.336 244.736a31.968 31.968 0 0 1-44.896 4l-196.064-162.752-194.656 180.224a31.936 31.936 0 1 1-43.456-46.944l215.232-199.296a32.032 32.032 0 0 1 42.176-1.152l193.216 160.384 242.336-287.456a32.128 32.128 0 0 1 35.424-9.44c12.608 4.608 21.024 16.64 21.024 30.08V864a32 32 0 0 1-32 32z"  ></path><path d="M304 480C242.24 480 192 429.76 192 368S242.24 256 304 256 416 306.24 416 368 365.76 480 304 480z m0-160c-26.464 0-48 21.536-48 48S277.536 416 304 416s48-21.536 48-48-21.536-48-48-48z"  ></path></symbol><symbol id="icon-xiaolian" viewBox="0 0 1024 1024"><path d="M512 64C264.576 64 64 264.576 64 512s200.576 448 448 448 448-200.576 448-448S759.424 64 512 64z m0 832C299.936 896 128 724.064 128 512S299.936 128 512 128s384 171.936 384 384-171.936 384-384 384z"  ></path><path d="M320 384m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"  ></path><path d="M704 384m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"  ></path><path d="M224 512c0 159.072 128.928 288 288 288s288-128.928 288-288H224z"  ></path></symbol></svg>'),
  (function (n) {
    var t = (t = document.getElementsByTagName('script'))[t.length - 1],
      e = t.getAttribute('data-injectcss'),
      t = t.getAttribute('data-disable-injectsvg')
    if (!t) {
      var i,
        o,
        a,
        d,
        c,
        s = function (t, e) {
          e.parentNode.insertBefore(t, e)
        }
      if (e && !n.__iconfont__svg__cssinject__) {
        n.__iconfont__svg__cssinject__ = !0
        try {
          document.write(
            '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>',
          )
        } catch (t) {
          console && console.log(t)
        }
      }
      ;(i = function () {
        var t,
          e = document.createElement('div')
        ;(e.innerHTML = n._iconfont_svg_string_4495398),
          (e = e.getElementsByTagName('svg')[0]) &&
            (e.setAttribute('aria-hidden', 'true'),
            (e.style.position = 'absolute'),
            (e.style.width = 0),
            (e.style.height = 0),
            (e.style.overflow = 'hidden'),
            (e = e),
            (t = document.body).firstChild
              ? s(e, t.firstChild)
              : t.appendChild(e))
      }),
        document.addEventListener
          ? ~['complete', 'loaded', 'interactive'].indexOf(document.readyState)
            ? setTimeout(i, 0)
            : ((o = function () {
                document.removeEventListener('DOMContentLoaded', o, !1), i()
              }),
              document.addEventListener('DOMContentLoaded', o, !1))
          : document.attachEvent &&
            ((a = i),
            (d = n.document),
            (c = !1),
            r(),
            (d.onreadystatechange = function () {
              'complete' == d.readyState && ((d.onreadystatechange = null), l())
            }))
    }
    function l() {
      c || ((c = !0), a())
    }
    function r() {
      try {
        d.documentElement.doScroll('left')
      } catch (t) {
        return void setTimeout(r, 50)
      }
      l()
    }
  })(window)
