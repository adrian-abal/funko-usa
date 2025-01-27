"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Slider = /*#__PURE__*/function () {
  function Slider(containerSelector, slidesContainer, slide, arrows, dots) {
    _classCallCheck(this, Slider);
    _defineProperty(this, "container", void 0);
    _defineProperty(this, "slidesContainer", void 0);
    _defineProperty(this, "slideList", void 0);
    _defineProperty(this, "controlDots", void 0);
    _defineProperty(this, "controlArrows", void 0);
    _defineProperty(this, "step", void 0);
    this.container = document.querySelector(containerSelector);
    this.slidesContainer = this.container.querySelector(slidesContainer);
    this.slideList = this.slidesContainer.querySelectorAll(slide);
    this.controlDots = dots ? this.container.querySelectorAll('.dots__control') : null;
    this.controlArrows = arrows ? this.container.querySelectorAll('.arrows__control') : null;
    this.step = 0;
    this.init();
  }
  return _createClass(Slider, [{
    key: "init",
    value: function init() {
      var _this = this;
      this.container.addEventListener('click', function (e) {
        return _this.handleClick(e);
      });
      // this.update();
    }
  }, {
    key: "handleClick",
    value: function handleClick(e) {
      var target = e.target;

      // Handle arrows
      var arrow = target.closest('.arrows__control');
      if (arrow) {
        var direction = arrow.dataset.direction;
        if (direction) this.moving(direction);
      }

      // Handle dots
      if (target.matches('.dots__control')) {
        var dotSelected = target.dataset.dot;
        if (dotSelected) {
          this.step = parseInt(dotSelected);
          this.update();
        }
      }
    }
  }, {
    key: "moving",
    value: function moving(direction) {
      var totalItems = this.slideList.length;
      if (direction === 'previous') {
        if (this.step > 0) {
          this.step--;
        } else {
          this.step = totalItems - 1;
        }
      }
      if (direction === 'next') {
        if (this.step < totalItems - 1) {
          this.step++;
        } else {
          this.step = 0;
        }
      }
      this.update();
    }
  }, {
    key: "update",
    value: function update() {
      var move = 100 / this.slideList.length * this.step * -1;
      this.slidesContainer.style.transform = "translateX(".concat(move, "%)");
      if (this.controlDots) {
        this.controlDots.forEach(function (dot) {
          return dot.classList.remove('dots__control--active');
        });
        this.controlDots[this.step].classList.add('dots__control--active');
      }
    }
  }]);
}();
var announcementsSlider = new Slider('.announcements', '.announcements__slides', '.announcements__slide', '.announcements__arrows');
var heroSlider = new Slider('.hero', '.hero__slides', '.hero__slide', '.hero__arrows', '.hero__dots');
var popDigitalSlider = new Slider('.popdigital', '.popdigital__slides', '.popdigital__slide', '.popdigital__arrows', '.popdigital__dots');
var bannerBtn = document.querySelector('.banner__button');
var bannerProduct = document.querySelector('.banner__img');
var bannerMore = document.querySelector('.banner__more');
bannerBtn.addEventListener('click', function () {
  if (bannerBtn.getAttribute('aria-expanded') === 'true') {
    bannerBtn.ariaExpanded = 'false';
  } else {
    bannerBtn.ariaExpanded = 'true';
  }
  bannerBtn.classList.toggle('banner__button--expand');
  bannerMore.classList.toggle('banner__more--expand');
  bannerProduct.classList.toggle('banner__img--expand');
});