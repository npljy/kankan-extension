function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// cms资源站播放助手
(function () {
  var ACT_LIKE = 'like'; // 行为：收藏
  var ACT_VISIT = "visit"; // 行为：观看
  var ACT_LIKE_PAGE = "open"; // 行为：打开收藏页面
  var loc = window.location.href;
  var locHash = window.location.hash;
  var origin = window.location.origin;
  if (locHash.includes('kankan')) {
    likeFn();
  }
  var api = 'https://m3u8.xuehuayu.cn?url=';
  if (loc.includes('dbzy') || loc.includes('doubanz')) {
    if (loc.includes('/voddetail/')) {
      var _$2;
      var vodList = _$$('.vodplayinfo li') || [];
      // const api = 'https://jsjiexi.com/play/?url='
      vodList.forEach(function (li) {
        var _adoc$innerText;
        var adoc = _$$('a', li)[0];
        var xm = adoc.href;
        if (!xm.includes('http')) xm = origin + '/' + xm;
        var nums = adoc.innerText;
        var num = nums ? nums.split('$')[0] : '';
        var text = "\u64AD\u653E:".concat(num);
        var href = xm;
        if (xm.includes('.m3u8') && !xm.includes(api)) href = api + xm;
        var _a = createLink(href, text);
        !(adoc !== null && adoc !== void 0 && (_adoc$innerText = adoc.innerText) !== null && _adoc$innerText !== void 0 && _adoc$innerText.includes('全选')) && adoc.after(_a);
      });
      insertJump('.vodplayinfo h3', '.ibox');
      var img = (_$2 = _$('.vodImg img')) === null || _$2 === void 0 ? void 0 : _$2.src;
      insertLikeBtn(img);
      removeElements('header');
    } else {
      addClass('.xing_top', 'kk-sticky');
    }
    addClass('.search-text', 'kk-search-ipt');
    addClass('.search-btn', 'kk-search-btn');
    removeElements('.gg_top');
  } else if (loc.includes('mozhua')) {
    if (loc.includes('/vod/detail/')) {
      var _$3;
      var _vodList = _$$('.listitems');
      _vodList.forEach(function (li) {
        var num = li.innerText.split('$')[0];
        var playBtn = _$('.btn a', li);
        playBtn.innerText = playBtn.innerText + ':' + num;
        playBtn.classList.add('kk-btn');
      });
      var _img = (_$3 = _$('article img')) === null || _$3 === void 0 ? void 0 : _$3.src;
      insertLikeBtn(_img);
      bindPlayBtn();
    } else {
      addClass('header', 'kk-sticky');
    }
    addClass('.search-input', 'kk-search-ipt');
    addClass('.search_btn', 'kk-search-btn');
  } else if (loc.includes('jisuz')) {
    if (loc.includes('/vod/detail/')) {
      var _$4;
      // const api = 'https://jsjiexi.com/play/?url='
      var _vodList2 = _$$('.vod-list .list-item') || [];
      _vodList2.forEach(function (li) {
        var _adoc$innerText2;
        var adoc = _$$('a', li)[0];
        var xm = adoc.href;
        if (!xm.includes('http')) xm = origin + '/' + xm;
        var nums = adoc.innerText;
        var num = nums ? nums.split('$')[0] : '';
        var text = "\u64AD\u653E:".concat(num);
        var href = xm;
        if (xm.includes('.m3u8') && !xm.includes(api)) href = api + xm;
        var _a = createLink(href, text);
        !(adoc !== null && adoc !== void 0 && (_adoc$innerText2 = adoc.innerText) !== null && _adoc$innerText2 !== void 0 && _adoc$innerText2.includes('全选')) && adoc.after(_a);
      });
      var _img2 = (_$4 = _$('.vod-img img')) === null || _$4 === void 0 ? void 0 : _$4.src;
      insertLikeBtn(_img2);
      insertJump('.vod-list h3', '.vod-detail');
      removeElements('.topbg');
    } else {
      addClass('.top-center', 'kk-sticky');
    }
    addClass('.search-text', 'kk-search-ipt');
    addClass('.top-search button', 'kk-search-btn');
    removeElements('.topbg>a');
  } else if (loc.includes('moduzy')) {
    if (loc.includes('/vod/')) {
      var _$5;
      var _vodList3 = _$$('.content__playlist li') || [];
      // const api = 'https://jiexi.modujx01.com/?url='
      _vodList3.forEach(function (li) {
        var _li$innerText;
        var adoc = _$$('a', li)[0];
        var xm = adoc.href;
        if (!xm.includes('http')) xm = origin + '/' + xm;
        var nums = adoc.innerText;
        var num = nums ? nums.split('$')[0] : '';
        var text = "\u64AD\u653E:".concat(num);
        var href = xm;
        if (xm.includes('.m3u8') && !xm.includes(api)) href = api + xm;
        var _a = createLink(href, text);
        !(li !== null && li !== void 0 && (_li$innerText = li.innerText) !== null && _li$innerText !== void 0 && _li$innerText.includes('全选')) && li.append(_a);
      });
      var _img3 = (_$5 = _$('.content__thumb thumb img')) === null || _$5 === void 0 ? void 0 : _$5.src;
      insertLikeBtn(_img3);
      removeElements('.index-header');
    } else {
      addClass('.header', 'kk-sticky');
    }
    addClass('.mac_wd.form-control', 'kk-search-ipt');
  } else if (loc.includes('haohuazy') || loc.includes('haohuazyziyuan')) {
    if (loc.includes('detail')) {
      var _$6;
      var _vodList4 = _$$('.vod-list .list-item') || [];
      // const api = 'https://hhjiexi.com/play/?url='
      _vodList4.forEach(function (li) {
        var _li$innerText2;
        var xm = _$$('a', li)[0].href;
        if (!xm.includes('http')) xm = origin + '/' + xm;
        var nums = _$('.list-title', li).innerText;
        var num = nums ? nums.split('$')[0] : '';
        var text = "\u64AD\u653E:".concat(num);
        var href = xm;
        if (xm.includes('.m3u8') && !xm.includes(api)) href = api + xm;
        var _a = createLink(href, text);
        !(li !== null && li !== void 0 && (_li$innerText2 = li.innerText) !== null && _li$innerText2 !== void 0 && _li$innerText2.includes('全选')) && li.append(_a);
      });
      var _img4 = (_$6 = _$('.vod-img img')) === null || _$6 === void 0 ? void 0 : _$6.src;
      insertLikeBtn(_img4);
      insertJump('.vod-list h3', '.vod-info');
    } else {
      addClass('.top', 'kk-sticky');
    }
    addClass('.search-text', 'kk-search-ipt');
    addClass('.top-search button', 'kk-search-btn');
    removeElements(['.card', 'body>a']);
  } else if (loc.includes('guangsuzy') || loc.includes('guangsuziyuan')) {
    if (loc.includes('detail')) {
      var _$7;
      var _vodList5 = _$$('.dy-collect-list li') || [];
      // const api = 'https://www.gszyv.com/m3u8/?url='
      _vodList5.forEach(function (li) {
        var _li$innerText3;
        var xm = _$$('a', li)[0].href;
        if (!xm.includes('http')) xm = origin + '/' + xm;
        var nums = _$('.c-name', li).innerText;
        var num = nums ? nums : '';
        var text = "\u64AD\u653E:".concat(num);
        var href = xm;
        if (xm.includes('.m3u8') && !xm.includes(api)) href = api + xm;
        var _a = createLink(href, text);
        !(li !== null && li !== void 0 && (_li$innerText3 = li.innerText) !== null && _li$innerText3 !== void 0 && _li$innerText3.includes('全选')) && li.append(_a);
      });
      var _img5 = (_$7 = _$('.dy-photo img')) === null || _$7 === void 0 ? void 0 : _$7.src;
      insertLikeBtn(_img5);
      insertJump('.dy-collect-video', '.detailed');
    }
  } else if (loc.includes('hongniuzy') || loc.includes('hongniuziyuan')) {
    if (loc.includes('detail')) {
      var _$8;
      var _vodList6 = _$$('.vodplayinfo li') || [];
      // const api = 'https://www.hnjiexi.com/m3u8/?url='
      _vodList6.forEach(function (li) {
        var _li$innerText4;
        var xm = _$$('a', li)[0].href;
        if (!xm.includes('http')) xm = origin + '/' + xm;
        li.classList.add('vod-li');
        var num = _$$('a', li)[0].title;
        var text = "\u64AD\u653E:".concat(num);
        var href = xm;
        if (xm.includes('.m3u8') && !xm.includes(api)) href = api + xm;
        var _a = createLink(href, text);
        !(li !== null && li !== void 0 && (_li$innerText4 = li.innerText) !== null && _li$innerText4 !== void 0 && _li$innerText4.includes('全选')) && li.append(_a);
      });
      var _img6 = (_$8 = _$('.vodImg img')) === null || _$8 === void 0 ? void 0 : _$8.src;
      insertLikeBtn(_img6);
      insertJump('.vodplayinfo h3', '.ibox');
      removeElements('.index-header');
    } else {
      addClass('.xing_top', 'kk-sticky');
    }
    addClass('#wd', 'kk-search-ipt');
    addClass('.search-btn', 'kk-search-btn');
    removeElements('.index-header a');
  } else if (loc.includes('1080zyk')) {
    if (loc.includes('detail')) {
      var _$9;
      var _vodList7 = _$$('.playlist li') || [];
      _vodList7.forEach(function (li) {
        var _$$$;
        var xm = li.innerText;
        var nums = xm.split('$');
        var num = nums[0];
        var text = "\u64AD\u653E:".concat(num);
        var link = ((_$$$ = _$$('a', li)[0]) === null || _$$$ === void 0 ? void 0 : _$$$.href) || nums[1];
        var _a = createLink(link, text);
        !(xm !== null && xm !== void 0 && xm.includes('全选')) && li.append(_a);
      });
      var _img7 = (_$9 = _$('.vodImg img')) === null || _$9 === void 0 ? void 0 : _$9.src;
      insertLikeBtn(_img7);
      removeElements(['#topBar', 'body>table']);
    }
    addClass('.search-text', 'kk-search-ipt');
    addClass('.search-btn', 'kk-search-btn');
  } else if (loc.includes('ffzy')) {
    if (loc.includes('detail')) {
      var _$0;
      var _vodList8 = _$$('.playlist li') || [];
      var jxUrl = 'https://svip.ffzyplay.com/?url=';
      _vodList8.forEach(function (li) {
        var _xm;
        var xm = _$$('font', li)[0].innerText;
        if (!xm.includes('http')) xm = origin + '/' + xm;
        var links = xm.split('$');
        var num = links[0];
        var link = links[1];
        var text = "\u64AD\u653E:".concat(num);
        var href = link;
        if (xm.includes('.m3u8') && !xm.includes(jxUrl)) href = jxUrl + link;
        var _a = createLink(href, text);
        !((_xm = xm) !== null && _xm !== void 0 && _xm.includes('全选')) && li.append(_a);
      });
      var _img8 = (_$0 = _$('.people .left img')) === null || _$0 === void 0 ? void 0 : _$0.src;
      insertLikeBtn(_img8);
      insertJump('#content h4', '.people');
      removeElements('.index-header');
    } else {
      addClass('.head_box', 'kk-sticky');
    }
    addClass('.search-input', 'kk-search-ipt');
    addClass('#searchbutton', 'kk-search-btn');
  } else if (loc.includes('xinlangz')) {
    if (loc.includes('detail')) {
      var _$1;
      var _vodList9 = _$$('.collect-item-href .left') || [];
      var jxApi = 'https://www.xinlangjiexi.com/m3u8/?url=';
      _vodList9.forEach(function (li) {
        var num = _$('span', li).innerText;
        var text = "\u64AD\u653E:".concat(num);
        var aEle = _$('a', li);
        var _link = aEle.href;
        if (_link.includes('.m3u8') && !_link.includes(jxApi)) _link = jxApi + _link;
        var _a = createLink(_link, text);
        li.append(_a);
      });
      var _img9 = (_$1 = _$('.dy-pic img')) === null || _$1 === void 0 ? void 0 : _$1.src;
      insertLikeBtn(_img9);
      insertJump('.collect-item-title', '.dy-details');
    }
    removeElements(['body>a']);
  } else if (loc.includes('ikunzy')) {
    if (loc.includes('voddetail')) {
      var _$10;
      var _vodList0 = _$$('.listitems');
      _vodList0.forEach(function (li) {
        var num = li.innerText.split('$')[0];
        var playBtn = _$('.btn a', li);
        playBtn.innerText = playBtn.innerText + ':' + num;
        playBtn.classList.add('kk-btn');
      });
      var _img0 = (_$10 = _$('.countimg img')) === null || _$10 === void 0 ? void 0 : _$10.src;
      insertLikeBtn(_img0);
      removeElements('.indextop');
    } else {
      addClass('.tabletitle', 'kk-sticky');
    }
    $('.index-top-long').css({
      "display": "none",
      "width": 0,
      "height": 0,
      "visibility": "hidden",
      "transform": "scale(0)"
    });
    bindPlayBtn();
    $('.indextop').mouseover(function () {
      $('.notice').stop();
      $('.notice').slideDown();
    }).mouseout(function () {
      $('.notice').stop();
      $('.notice').slideUp();
    });
    _$('.search_input').style.width = '300px';
    addClass('#layui-layer1', 'kk-blocked');
    addClass('.search_input', 'kk-search-ipt');
    addClass('.search_btn', 'kk-search-btn');
  } else if (loc.includes('suonizy') || loc.includes('snzy')) {
    if (loc.includes('voddetail')) {
      var _$11;
      var _vodList1 = _$$('.dy-collect-list li');
      _vodList1.forEach(function (li) {
        var _$$$2;
        var xm = li.innerText;
        var nums = xm.split('$');
        var num = nums[0];
        var text = "\u64AD\u653E:".concat(num);
        var link = ((_$$$2 = _$$('a', li)[0]) === null || _$$$2 === void 0 ? void 0 : _$$$2.href) || nums[1];
        var _a = createLink(link, text);
        !(xm !== null && xm !== void 0 && xm.includes('全选')) && li.append(_a);
      });
      var _img1 = (_$11 = _$('img.res-img')) === null || _$11 === void 0 ? void 0 : _$11.src;
      insertLikeBtn(_img1);
      removeElements(['.link-box']);
    }
    addClass('#wd', 'kk-search-ipt');
    addClass('.nav-input form button', 'kk-search-btn');
    removeElements(['header .content >a']);
  } else if (loc.includes('bfzy.tv') || loc.match(/bfzy\d+\.tv/)) {
    if (loc.includes('vod/detail')) {
      var _$12;
      var _vodList10 = _$$('.playlist li') || [];
      _vodList10.forEach(function (li) {
        var _$$$3;
        var xm = li.innerText;
        var nums = xm.split('$');
        var num = nums[0];
        var text = "\u64AD\u653E:".concat(num);
        var link = ((_$$$3 = _$$('a', li)[0]) === null || _$$$3 === void 0 ? void 0 : _$$$3.href) || nums[1];
        var _a = createLink(link, text);
        !(xm !== null && xm !== void 0 && xm.includes('全选')) && li.append(_a);
      });
      var _img10 = (_$12 = _$('.people img')) === null || _$12 === void 0 ? void 0 : _$12.src;
      insertLikeBtn(_img10);
      insertJump('#content h4', '.people');
      removeElements('.index-header');
    } else {
      addClass('.head_box', 'kk-sticky');
    }
    addClass('.search-input', 'kk-search-ipt');
    addClass('#searchbutton', 'kk-search-btn');
    removeElements('.index-card a[href*="ads"]');
  } else if (loc.includes('huyazy') || loc.includes('huyaziyuan')) {
    if (loc.includes('vod/detail')) {
      var _$13;
      var _jxUrl = 'https://huyajx.com/play?url=';
      var _vodList11 = _$$('.vodplayinfo li') || [];
      _vodList11.forEach(function (li) {
        var _$$$4;
        var xm = li.innerText;
        var nums = xm.split('$');
        var num = nums[0];
        var text = "\u64AD\u653E:".concat(num);
        var link = ((_$$$4 = _$$('a', li)[0]) === null || _$$$4 === void 0 ? void 0 : _$$$4.href) || nums[1];
        var href = link;
        if (xm.includes('.m3u8') && !xm.includes(_jxUrl)) href = _jxUrl + link;
        var _a = createLink(href, text);
        !(xm !== null && xm !== void 0 && xm.includes('全选')) && li.append(_a);
      });
      var _img11 = (_$13 = _$('.vodImg img')) === null || _$13 === void 0 ? void 0 : _$13.src;
      insertLikeBtn(_img11);
      insertJump('.vodplayinfo h3', '.ibox');
      removeElements(['.imagetopbg', '.index-header', '.noticetop', 'body>a']);
    }
    removeElements(['.imagetopbg', 'body>a']);
  }
  bindPlayBtn();
  function bindPlayBtn() {
    $('.kk-btn').each(function () {
      $(this).click(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var len, step;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return getLen();
            case 1:
              len = _context.v;
              step = $(this).text().split(':')[1];
              sendMsg({
                act: ACT_VISIT,
                route: 'toBg',
                key: loc,
                step: step,
                update: getCount(),
                len: len,
                time: getDate()
              });
            case 2:
              return _context.a(2);
          }
        }, _callee, this);
      })));
    });
  }
  function getCount() {
    var htmls = _$('body').innerText;
    var m3u8List = htmls.match(/https?:\/\/.*?\.m3u8/g) || [];
    var yunList = htmls.match(/https?:\/\/.*?/g) || [];
    return yunList.list - m3u8List.length;
  }
  function getLen() {
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: loc,
        success: function () {
          var _success = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(resp) {
            var m3u8Arr, len;
            return _regenerator().w(function (_context2) {
              while (1) switch (_context2.n) {
                case 0:
                  m3u8Arr = resp.match(/\.m3u8/g);
                  len = m3u8Arr ? m3u8Arr.length : 0;
                  resolve(len);
                case 1:
                  return _context2.a(2);
              }
            }, _callee2);
          }));
          function success(_x) {
            return _success.apply(this, arguments);
          }
          return success;
        }(),
        error: function error(xhr, status, _error) {
          resolve(0);
        }
      });
    });
  }
  function likeFn(_x2, _x3) {
    return _likeFn.apply(this, arguments);
  }
  function _likeFn() {
    _likeFn = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(likeBtn, img) {
      var len, key;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            _context3.n = 1;
            return getLen();
          case 1:
            len = _context3.v;
            key = loc.split('#')[0];
            sendMsg({
              act: ACT_LIKE,
              route: 'toBg',
              key: key,
              title: document.title,
              img: img,
              update: getCount(),
              len: len,
              time: getDate()
            });
            if (likeBtn) {
              likeBtn.classList.add('zoom');
              likeBtn.innerHTML = '👌';
            }
          case 2:
            return _context3.a(2);
        }
      }, _callee3);
    }));
    return _likeFn.apply(this, arguments);
  }
  function createLink(href, text) {
    var _a = document.createElement('a');
    _a.href = href;
    _a.target = '_blank';
    _a.className = 'kk-btn kk-btn-sure';
    _a.innerText = text;
    return _a;
  }
  function insertJump(wrap, tar) {
    var wraps = _$$(wrap);
    wraps.forEach(function (e) {
      var _text = e.innerText;
      if (_text.includes('yun') || _text.includes('云')) {
        e.id = 'kk-play-yun';
      } else {
        e.id = 'kk-play-m3u8';
      }
    });
    var title = _$(tar);
    var divHtml = document.createElement('div');
    divHtml.innerHTML = '<div style="text-align:center;font-size:30px;font-weight:bold"><a class="kk-btn kk-btn-jump d-i-b" target="_self" href="#kk-play-yun">跳到yun</a><a class="kk-btn kk-btn-jump d-i-b" target="_self" href="#kk-play-m3u8">跳到m3u8</a></div>';
    title.after(divHtml);
  }
  function insertLikeBtn() {
    var img = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var likeWrap = document.createElement('div');
    likeWrap.className = 'like-wrap';
    var likeTips = document.createElement('p');
    likeTips.className = 'like-tips';
    likeTips.innerHTML = '<span>左键点击收藏</span><br><span>右键打开收藏</span>';
    var likeBtn = document.createElement('button');
    likeBtn.className = 'like-btn act';
    likeBtn.innerText = "收藏";
    likeBtn.title = "点击收藏";
    likeWrap.append(likeTips);
    likeWrap.append(likeBtn);
    document.body.append(likeWrap);
    if (img && !img.startsWith('http')) img = origin + img;
    likeBtn.onmouseover = function () {
      likeBtn.classList.remove('act');
    };
    likeBtn.onmouseout = function () {
      likeBtn.classList.add('act');
      likeBtn.classList.remove('zoom');
      likeBtn.innerHTML = '收藏';
    };
    likeBtn.onclick = function () {
      likeFn(likeBtn, img);
    };
    likeBtn.oncontextmenu = function () {
      sendMsg({
        act: ACT_LIKE_PAGE,
        route: 'toBg'
      });
      return false;
    };
    if (!isPhone()) insertApp();
  }
  function sendMsg(data) {
    !!data && chrome.runtime.sendMessage(data);
  }
  function insertApp() {
    var isClosed = sessionStorage.getItem('isClosed') !== 'false';
    var ifm = document.createElement('div');
    var open = document.createElement('button');
    var close = document.createElement('button');
    var reload = document.createElement('button');
    var initBtm = isClosed ? '-465px' : '0px';
    var closeRotate = isClosed ? '135' : '0';
    var closeTitle = isClosed ? '展开' : '收起';
    ifm.style.cssText = 'position:fixed;bottom:' + initBtm + ';right:80px;z-index:99999;box-sizing:border-box;border:1px solid;border-radius:4px;width:300px;height:500px;background:#ffffff55;transition:bottom 1s;box-shadow: 0px 0px 20px 2px #000000cc';
    ifm.innerHTML = '<button disabled style="position:absolute;left:40px;top:6px;border:1px solid #dddddd;border-radius:4px;font-weight:bold;font-size:20px;letter-spacing:2px;color:#3cc51f;">免费看剧</button><iframe id="kk-ifm" src="https://laonongmin.online" width="100%" height="100%" style="border:none;border-radius:4px;"/>';
    open.innerText = '⏏️';
    open.title = '全屏打开';
    open.style.cssText = 'position:absolute;right:20px;top:0;z-index:99999;width:32px;height:32px;cursor:pointer;font-size:20px;outline:none;border:none;border-radius:4px;background:transparent;';
    open.onclick = function () {
      window.open('https://laonongmin.online');
    };
    close.innerText = '❌';
    close.title = closeTitle;
    close.style.cssText = 'position:absolute;left:5px;top:5px;display:flex;justify-content:center;align-items:center;width:30px;height:30px;line-height:30px;transition: all 1.5s;transform:rotate(' + closeRotate + 'deg);cursor:pointer;font-size:18px;background:transparent;outline:none;border:1px solid #f00;border-radius:50%;';
    close.onclick = function () {
      if (isClosed) {
        ifm.style.bottom = '0';
        close.style.transform = 'rotate(0deg)';
        close.title = '收起';
      } else {
        ifm.style.bottom = '-465px';
        close.style.transform = 'rotate(135deg)';
        close.title = '展开';
      }
      isClosed = !isClosed;
      localStorage.setItem('isClosed', isClosed);
    };
    reload.innerText = '🔁';
    reload.title = '刷新';
    reload.style.cssText = 'position:absolute;right:55px;top:0;width:32px;height:32px;cursor:pointer;font-size:20px;outline:none;border:none;border-radius:4px;background:transparent;';
    reload.onclick = function () {
      document.getElementById('kk-ifm').contentWindow.location.href = 'https://laonongmin.online';
    };
    ifm.appendChild(close);
    ifm.appendChild(open);
    ifm.appendChild(reload);
    $('body').append(ifm);
    var metaBase = document.createElement('base');
    metaBase.target = '_blank';
    document.getElementById('kk-ifm').contentWindow.document.head.appendChild(metaBase);
  }
})();