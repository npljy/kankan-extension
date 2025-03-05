function isPhone() {
  var sUserAgent = navigator.userAgent.toLowerCase();
  var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
  var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
  var bIsMidp = sUserAgent.match(/midp/i) == "midp";
  var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
  var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
  var bIsAndroid = sUserAgent.match(/android/i) == "android";
  var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
  var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
  if (
    bIsIpad ||
    bIsIphoneOs ||
    bIsMidp ||
    bIsUc7 ||
    bIsUc ||
    bIsAndroid ||
    bIsCE ||
    bIsWM
  )
    return true;
  return false;
}
function _$(selector) {
  var dom =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : document;
  return dom.querySelector(selector);
}
function _$$(selector) {
  var dom =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : document;
  return dom.querySelectorAll(selector);
}
function hideSelector(selector) {
  _$$(selector).forEach(function (e) {
    e.remove();
  });
}
function getDate() {
  var date = new Date();
  return date.toLocaleString();
}
function clearTimer(timer) {
  clearInterval(timer);
  clearTimeout(timer);
  timer = null;
}
function setItem(key, value) {
  var _window;
  (_window = window) === null ||
    _window === void 0 ||
    (_window = _window.localStorage) === null ||
    _window === void 0 ||
    _window.setItem(key, value);
}
function getItem(key) {
  var _window2;
  return (_window2 = window) === null ||
    _window2 === void 0 ||
    (_window2 = _window2.localStorage) === null ||
    _window2 === void 0
    ? void 0
    : _window2.getItem(key);
}
function removeElements() {
  var elements =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  elements = [].concat(elements);
  elements.forEach(function (e) {
    var tarEles = _$$(e) || [];
    tarEles.forEach(function (ele) {
      ele === null || ele === void 0 || ele.remove();
    });
  });
}
function addClass(ele, cls) {
  var tarEles = _$$(ele) || [];
  tarEles.forEach(function (ele) {
    var _ele$classList;
    ele === null ||
      ele === void 0 ||
      (_ele$classList = ele.classList) === null ||
      _ele$classList === void 0 ||
      _ele$classList.add(cls);
  });
}