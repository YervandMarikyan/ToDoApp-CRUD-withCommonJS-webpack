/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\r\n\r\nconst UI = __webpack_require__(/*! ./modules/ui */ \"./src/js/modules/ui.js\");\r\nconst POST = __webpack_require__(/*! ./modules/postMethod */ \"./src/js/modules/postMethod.js\");\r\nconst GET = __webpack_require__(/*! ./modules/getMethod */ \"./src/js/modules/getMethod.js\");\r\nconst PATCH = __webpack_require__(/*! ./modules/patchMethod */ \"./src/js/modules/patchMethod.js\");\r\nconst DELETE = __webpack_require__(/*! ./modules/deleteMethod */ \"./src/js/modules/deleteMethod.js\");\r\nconst COMPLETE = __webpack_require__(/*! ./modules/complete */ \"./src/js/modules/complete.js\");\r\nconst FILTER = __webpack_require__(/*! ./modules/filter */ \"./src/js/modules/filter.js\");\r\nconst ShowDeleteds = __webpack_require__(/*! ./modules/showDeleteds */ \"./src/js/modules/showDeleteds.js\");\r\n\r\nconst url = \"http://localhost:8888/todos\";\r\n\r\nconst {form, screenInput, showDeletedsBtn} = UI;\r\nUI.start();\r\nPOST(form, screenInput, url);\r\n\r\nasync function engine () {\r\n\tawait GET(UI, url);\r\n\tPATCH(\r\n\t\tdocument.querySelectorAll(\".editBtn\"),\r\n\t\tdocument.querySelectorAll(\".saveBtn\"),\r\n\t\tdocument.querySelectorAll(\".listsBlockItemContent\"),\r\n\t\turl\r\n\t);\r\n\tDELETE(\r\n\t\tdocument.querySelectorAll(\".removeBtn\"),\r\n\t\turl\r\n\t);\r\n\tCOMPLETE(\r\n\t\t\turl,\r\n\t\t\tdocument.querySelectorAll(\".buttons input\"),\r\n\t\t\tdocument.querySelectorAll(\".listsBlockItemContent\")\r\n\t);\r\n\tFILTER(\r\n\t\tdocument.querySelectorAll(\"[data-filter]\"),\r\n\t\turl,\r\n\t\tUI\r\n\t);\r\n\tShowDeleteds(\r\n\t\tshowDeletedsBtn,\r\n\t\tUI\r\n\t);\r\n}\r\n\r\nengine();\n\n//# sourceURL=webpack://crud/./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/complete.js":
/*!************************************!*\
  !*** ./src/js/modules/complete.js ***!
  \************************************/
/***/ ((module) => {

eval("module.exports = async function (url, checkArr, id) {\r\n\tcheckArr.forEach((check, index) => {\r\n\t\tcheck.addEventListener(\"change\", async() => {\r\n\t\t\tasync function checkState(state) {\r\n\t\t\t\tawait fetch(`${url}/${parseInt(id[index].textContent)}`, {\r\n\t\t\t\t\tmethod: \"PATCH\",\r\n\t\t\t\t\theaders: {\r\n\t\t\t\t\t\t\"content-type\": \"application/json\"\r\n\t\t\t\t\t},\r\n\t\t\t\t\tbody: JSON.stringify({ isComplete: state ? true : false })\r\n\t\t\t\t});\r\n\t\t\t}\r\n\t\t\tif (check.checked) {\r\n\t\t\t\tcheckState(true);\r\n\t\t\t} else {\r\n\t\t\t\tcheckState(false);\r\n\t\t\t}\r\n\t\t});\r\n\t});\r\n};\n\n//# sourceURL=webpack://crud/./src/js/modules/complete.js?");

/***/ }),

/***/ "./src/js/modules/deleteMethod.js":
/*!****************************************!*\
  !*** ./src/js/modules/deleteMethod.js ***!
  \****************************************/
/***/ ((module) => {

eval("module.exports = async function (removeBtn, url) {\r\n\tremoveBtn.forEach(btn => {\r\n\t\t\r\n\t\tbtn.addEventListener(\"click\", async () => {\r\n\t\t\tif (confirm(\"Are you sure to Delete ?\")) {\r\n\t\t\t\tconsole.log(\"eeeeeeeeeeee\");\r\n\t\t\t\r\n\t\t\t\tconst fakeID = btn.parentElement.previousElementSibling.firstElementChild.textContent;\r\n\t\t\t\tconst deletedValue = btn.parentElement.previousElementSibling.lastElementChild.value;\r\n\t\t\t\tconst deletedChecked = btn.previousElementSibling.checked;\r\n\r\n\t\t\t\tbtn.parentElement.parentElement.remove();\r\n\r\n\t\t\t\tawait fetch (\"http://localhost:8888/history\", {\r\n\t\t\t\t\tmethod: \"POST\",\r\n\t\t\t\t\theaders: {\r\n\t\t\t\t\t\t\"content-type\" : \"application/json\"\r\n\t\t\t\t\t},\r\n\t\t\t\t\tbody: JSON.stringify({title: deletedValue, isComplete: deletedChecked ? true : false})\r\n\t\t\t\t});\r\n\r\n\t\t\t\tawait fetch(`${url}/${parseInt(fakeID)}`, {\r\n\t\t\t\t\tmethod: \"DELETE\"\r\n\t\t\t\t});\r\n\t\t\t}\r\n\t\t})\r\n\t\t\r\n\t\t\r\n\t\t// btn.addEventListener(\"click\", async () => {\r\n\t\t// \tconst fakeID = btn.parentElement.previousElementSibling.firstElementChild.textContent;\r\n\t\t// \tbtn.parentElement.parentElement.remove();\r\n\r\n\t\t// \tawait fetch(`${url}/${parseInt(fakeID)}`, {\r\n\t\t// \t\tmethod: \"DELETE\"\r\n\t\t// \t});\r\n\t\t// });\r\n\r\n\r\n\t\t\r\n\t});\r\n};\n\n//# sourceURL=webpack://crud/./src/js/modules/deleteMethod.js?");

/***/ }),

/***/ "./src/js/modules/filter.js":
/*!**********************************!*\
  !*** ./src/js/modules/filter.js ***!
  \**********************************/
/***/ ((module) => {

eval("module.exports = function (btnArray, url, UI) {\r\n\tbtnArray.forEach(btn => {\r\n\t\tbtn.addEventListener(\"click\", async () => {\r\n\t\t\tlet filterUrl;\r\n\t\t\tUI.listsBlock.innerHTML = \"\";\r\n\r\n\t\t\tif (btn.dataset.filter === \"filterComplete\") {\r\n\t\t\t\tfilterUrl = `${url}?isComplete=true`;\r\n\t\t\t} else if (btn.dataset.filter === \"filterUnComplete\") {\r\n\t\t\t\tfilterUrl = `${url}?isComplete=false`;\r\n\t\t\t} else if (btn.dataset.filter === \"filterAll\") {\r\n\t\t\t\tfilterUrl = url;\r\n\t\t\t}\r\n\r\n\t\t\tawait fetch (filterUrl)\r\n\t\t\t.then(data => data.json())\r\n\t\t\t.then(data => data.forEach(obj => UI.toHTML(obj.id, obj.title, obj.isComplete)));\r\n\t\t});\r\n\t});\r\n}\n\n//# sourceURL=webpack://crud/./src/js/modules/filter.js?");

/***/ }),

/***/ "./src/js/modules/getMethod.js":
/*!*************************************!*\
  !*** ./src/js/modules/getMethod.js ***!
  \*************************************/
/***/ ((module) => {

eval("module.exports = async function (ui, url) {\r\n\treturn await fetch(url)\r\n\t.then(data => data.json())\r\n\t.then(data => data.forEach(obj => {\r\n\t\tui.toHTML(obj.id, obj.title, obj.isComplete);\r\n\t}));\r\n};\n\n//# sourceURL=webpack://crud/./src/js/modules/getMethod.js?");

/***/ }),

/***/ "./src/js/modules/patchMethod.js":
/*!***************************************!*\
  !*** ./src/js/modules/patchMethod.js ***!
  \***************************************/
/***/ ((module) => {

eval("module.exports = function (editBtnArray, saveBtnArray, content, url) {\r\n\teditBtnArray.forEach((editBtn, index) => {\r\n\t\teditBtn.addEventListener(\"click\", () => {\r\n\t\t\teditBtn.style.display = \"none\";\r\n\t\t\tsaveBtnArray[index].style.display = \"inline-block\";\r\n\t\t\tconst fakeID = parseInt(content[index].children[0].textContent);\r\n\t\t\tconst input = content[index].children[1];\r\n\t\t\tinput.classList.add(\"edit\");\r\n\t\t\tinput.removeAttribute(\"readonly\");\r\n\r\n\t\t\tsaveBtnArray[index].addEventListener(\"click\", async () => {\r\n\t\t\t\tawait fetch(`${url}/${fakeID}`, {\r\n\t\t\t\t\tmethod: \"PATCH\",\r\n\t\t\t\t\theaders: {\r\n\t\t\t\t\t\t\"content-type\" : \"application/json\"\r\n\t\t\t\t\t},\r\n\t\t\t\t\tbody: JSON.stringify({title: input.value.trim()})\r\n\t\t\t\t})\r\n\t\t\t});\r\n\t\t});\r\n\t});\r\n};\n\n//# sourceURL=webpack://crud/./src/js/modules/patchMethod.js?");

/***/ }),

/***/ "./src/js/modules/postMethod.js":
/*!**************************************!*\
  !*** ./src/js/modules/postMethod.js ***!
  \**************************************/
/***/ ((module) => {

eval("module.exports = async function (form, input, url) {\r\n\tform.addEventListener(\"submit\", async (e) => {\r\n\t\te.preventDefault();\r\n\r\n\t\tif (input.value.trim() !== \"\") {\r\n\t\t\tawait fetch (url, {\r\n\t\t\t\tmethod: \"POST\",\r\n\t\t\t\theaders: {\r\n\t\t\t\t\t\"content-type\" : \"application/json\"\r\n\t\t\t\t},\r\n\t\t\t\tbody: JSON.stringify({title: input.value.trim(), isComplete: false})\r\n\t\t\t});\r\n\t\t}\r\n\r\n\t\te.target.reset();\r\n\t});\r\n};\n\n//# sourceURL=webpack://crud/./src/js/modules/postMethod.js?");

/***/ }),

/***/ "./src/js/modules/showDeleteds.js":
/*!****************************************!*\
  !*** ./src/js/modules/showDeleteds.js ***!
  \****************************************/
/***/ ((module) => {

eval("module.exports = async  function (showBtn, UI) {\r\n    showBtn.addEventListener(\"click\", async () => {\r\n        UI.deletedItemsBlockContent.innerHTML = \"\";\r\n\r\n        await fetch(\"http://localhost:8888/history\")\r\n        .then(data => data.json())\r\n        .then(data => data.forEach(obj => {            \r\n            UI.showDeleteds(obj.id, obj.title);\r\n        }))\r\n    });    \r\n}\n\n//# sourceURL=webpack://crud/./src/js/modules/showDeleteds.js?");

/***/ }),

/***/ "./src/js/modules/ui.js":
/*!******************************!*\
  !*** ./src/js/modules/ui.js ***!
  \******************************/
/***/ ((module) => {

eval("module.exports = {\r\n\ttitle: document.createElement(\"h1\"),\r\n\tsubTitle: document.createElement(\"p\"),\r\n\tform: document.createElement(\"form\"),\r\n\tscreenBlock: document.createElement(\"div\"),\r\n\tscreenInput: document.createElement(\"input\"),\r\n\tscreenAddBtn: document.createElement(\"button\"),\r\n\tlistsBlock: document.createElement(\"div\"),\t\r\n\tfilterWrapper: document.createElement(\"div\"),\r\n\tfilterComplete: document.createElement(\"button\"),\r\n\tfilterUnComplete: document.createElement(\"button\"),\r\n\tfilterAll: document.createElement(\"button\"),\r\n\tdeletedItemsBlock: document.createElement(\"div\"),\r\n\tshowDeletedsBtn: document.createElement(\"button\"),\r\n\tdeletedItemsBlockContent: document.createElement(\"div\"),\r\n\r\n\telementOptions() {\r\n\t\tthis.title.textContent = \"CRUD\";\r\n\t\tthis.subTitle.textContent = \"Async Application\";\r\n\r\n\t\tthis.form.id = \"app-form\";\r\n\t\tthis.screenBlock.id = \"screenBlock\";\r\n\t\tthis.screenInput.type = \"text\";\r\n\t\tthis.screenInput.placeholder = \"Type here...\";\r\n\t\tthis.screenAddBtn.classList.add(\"fa\", \"fa-plus-circle\");\r\n\t\tthis.screenAddBtn.id = \"screenAddBtn\";\r\n\t\tthis.listsBlock.id = \"listBlock\";\r\n\r\n\t\tthis.filterWrapper.id = \"filterWrapper\";\r\n\t\tthis.filterComplete.setAttribute(\"data-filter\", \"filterComplete\");\r\n\t\tthis.filterUnComplete.setAttribute(\"data-filter\", \"filterUnComplete\");\r\n\t\tthis.filterAll.setAttribute(\"data-filter\", \"filterAll\");\r\n\r\n\t\tthis.filterComplete.textContent = \"Completed\";\r\n\t\tthis.filterUnComplete.textContent = \"Uncompleted\";\r\n\t\tthis.filterAll.textContent = \"ALL\";\r\n\r\n\t\tthis.deletedItemsBlock.id = \"deletedBlock\";\r\n\t\tthis.showDeletedsBtn.id = \"showDeletedsBtn\";\r\n\t\tthis.showDeletedsBtn.textContent = \"Show deleteds\";\r\n\t\tthis.deletedItemsBlockContent.id = \"deletedItemsBlockContent\";\r\n\t},\r\n\r\n\tappendElements() {\r\n\t\troot.append(this.title, this.subTitle, this.form, this.listsBlock, this.filterWrapper, this.deletedItemsBlock);\r\n\t\tthis.form.append(this.screenBlock);\r\n\t\tthis.screenBlock.append(this.screenInput, this.screenAddBtn);\r\n\t\tthis.filterWrapper.append(this.filterComplete, this.filterUnComplete, this.filterAll);\r\n\t\tthis.deletedItemsBlock.append(this.showDeletedsBtn, this.deletedItemsBlockContent);\r\n\t},\r\n\r\n\ttoHTML(id, value, state = false) {\r\n\t\tthis.listsBlock.innerHTML += `\r\n\t\t\t<div class=\"listsBlockItem\">\r\n\t\t\t\t<div class=\"listsBlockItemContent\">\r\n\t\t\t\t\t<span>${id}</span>\r\n\t\t\t\t\t<input type=\"text\" value=\"${value}\" readonly>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"buttons\">\r\n\t\t\t\t\t<input type=\"checkbox\" name=\"item${id}\" ${state ? \"checked\" : \"\"}>\r\n\t\t\t\t\t<button class=\"removeBtn fa fa-trash\"></button>\r\n\t\t\t\t\t<button class=\"editBtn fa fa-pencil\"></button>\r\n\t\t\t\t\t<button class=\"saveBtn fa fa-save\"></button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t`;\r\n\t},\r\n\r\n\tshowDeleteds(id, value) {\r\n\t\tthis.deletedItemsBlockContent.innerHTML += `\r\n\t\t\t<div>\r\n\t\t\t\t<span>${id}</span> <span>${value}</span>\r\n\t\t\t</div>\r\n\t\t`;\r\n\t},\r\n\r\n\tstart() {\r\n\t\tthis.elementOptions();\r\n\t\tthis.appendElements();\r\n\t}\r\n};\n\n//# sourceURL=webpack://crud/./src/js/modules/ui.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;