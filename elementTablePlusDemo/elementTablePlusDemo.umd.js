(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["elementTablePlusDemo"] = factory();
	else
		root["elementTablePlusDemo"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/package/element-table-plus.vue?vue&type=template&id=55069445
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    attrs: {
      "id": "elementTablePlus"
    }
  }, [_c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "border": true,
      "data": _vm.option.tableData
    }
  }, _vm._l(_vm.option.headerData, function (item) {
    return _c('elTableColumnPlus', {
      key: item.value,
      attrs: {
        "item": item
      }
    });
  }), 1)], 1);
};
var staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/package/el-table-column-plus.vue?vue&type=template&id=78ae6c02
var el_table_column_plusvue_type_template_id_78ae6c02_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('el-table-column', {
    attrs: {
      "prop": _vm.item.prop,
      "label": _vm.item.label,
      "align": _vm.item.align || 'center',
      "show-overflow-tooltip": _vm.item.showOverflowTooltip
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function (scope) {
        return [_vm._v(" " + _vm._s(scope.row[_vm.item.prop]) + " ")];
      }
    }])
  }, [_c('div', {
    attrs: {
      "slot": "header"
    },
    slot: "header"
  }, [_vm._v(" " + _vm._s(_vm.item.label) + " ")]), _vm.item.children && _vm.item.children.length ? _vm._l(_vm.item.children, function (it) {
    return _c('elTableColumnPlus', {
      key: it.value,
      attrs: {
        "item": it
      }
    });
  }) : _vm._e()], 2);
};
var el_table_column_plusvue_type_template_id_78ae6c02_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/package/el-table-column-plus.vue?vue&type=script&lang=js
/* harmony default export */ var el_table_column_plusvue_type_script_lang_js = ({
  name: "elTableColumnPlus",
  props: ["item"],
  components: {}
});
;// CONCATENATED MODULE: ./src/package/el-table-column-plus.vue?vue&type=script&lang=js
 /* harmony default export */ var package_el_table_column_plusvue_type_script_lang_js = (el_table_column_plusvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./src/package/el-table-column-plus.vue





/* normalize component */
;
var component = normalizeComponent(
  package_el_table_column_plusvue_type_script_lang_js,
  el_table_column_plusvue_type_template_id_78ae6c02_render,
  el_table_column_plusvue_type_template_id_78ae6c02_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var el_table_column_plus = (component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/package/element-table-plus.vue?vue&type=script&lang=js

/* harmony default export */ var element_table_plusvue_type_script_lang_js = ({
  props: ["option"],
  name: "elementTablePlus",
  components: {
    elTableColumnPlus: el_table_column_plus
  }
});
;// CONCATENATED MODULE: ./src/package/element-table-plus.vue?vue&type=script&lang=js
 /* harmony default export */ var package_element_table_plusvue_type_script_lang_js = (element_table_plusvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/package/element-table-plus.vue?vue&type=style&index=0&id=55069445&prod&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/package/element-table-plus.vue?vue&type=style&index=0&id=55069445&prod&lang=css

;// CONCATENATED MODULE: ./src/package/element-table-plus.vue



;


/* normalize component */

var element_table_plus_component = normalizeComponent(
  package_element_table_plusvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var element_table_plus = (element_table_plus_component.exports);
;// CONCATENATED MODULE: ./src/package/index.js
// 导入组件

// 组件添加数组
const coms = [element_table_plus];
// 循环批量注册
const install = function (Vue) {
  coms.forEach(com => {
    Vue.component(com.name, com);
  });
};
// 导出
/* harmony default export */ var src_package = (install);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (src_package);


/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=elementTablePlusDemo.umd.js.map