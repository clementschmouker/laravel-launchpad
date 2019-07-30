(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CS_grid = function () {
    function CS_grid(params) {
        _classCallCheck(this, CS_grid);

        console.log('init grid');

        this.gPressed = false;
        this.ctrlPressed = false;
        this.wPressed = false;

        this.$els = {
            body: document.querySelector('body')
        };

        this.baseValues = {
            colNumber: 9
        };

        // base col number is 9
        this.colNumber = params.colNumber > 0 ? params.colNumber : this.baseValues.colNumber;

        this.createElements();
        this.bindEvents();
    }

    _createClass(CS_grid, [{
        key: 'createElements',
        value: function createElements() {
            this.gridCtn = document.createElement('div');
            this.gridCtn.classList.add('grid-container');
            // grid CTN style


            this.gridCols = [];
            for (var i = 0; i < this.colNumber; i += 1) {
                var col = document.createElement('span');
                col.classList.add('grid-column');
                // grid COL style
                this.gridCtn.appendChild(col);
            }
            // Appends grid to DOM
            this.$els.body.appendChild(this.gridCtn);
        }
    }, {
        key: 'bindEvents',
        value: function bindEvents() {
            var _this = this;

            window.addEventListener('keydown', function (e) {
                if (e.key == 'g') {
                    _this.gPressed = true;
                }
                if (e.key == 'w') {
                    _this.wPressed = true;
                }
                if (e.keyCode == 18) {
                    _this.ctrlPressed = true;
                }

                if (_this.gPressed && _this.ctrlPressed) {
                    _this.openGrid();
                }

                if (_this.wPressed && _this.ctrlPressed && _this.gridCtn.classList.contains('is-open')) {
                    _this.gridCtn.classList.toggle('white');
                }
            });

            window.addEventListener('keyup', function (e) {
                if (e.key == 'g') {
                    _this.gPressed = false;
                }
                if (e.key == 'w') {
                    _this.wPressed = false;
                }
                if (e.keyCode == 18) {
                    _this.ctrlPressed = false;
                }
            });
        }
    }, {
        key: 'openGrid',
        value: function openGrid() {
            this.gridCtn.classList.toggle('is-open');
        }
    }]);

    return CS_grid;
}();

exports.default = CS_grid;

},{}],2:[function(require,module,exports){
'use strict';

var _CS_grid = require('./imports/CS_grid');

var _CS_grid2 = _interopRequireDefault(_CS_grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Grid = new _CS_grid2.default({
    colNumber: 9
});

},{"./imports/CS_grid":1}]},{},[2]);

//# sourceMappingURL=main-bundle.js.map

//# sourceMappingURL=main.js.map
