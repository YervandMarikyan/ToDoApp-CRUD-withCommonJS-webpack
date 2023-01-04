"use strict";

const UI = require("./modules/ui");
const POST = require("./modules/postMethod");
const GET = require("./modules/getMethod");
const PATCH = require("./modules/patchMethod");
const DELETE = require("./modules/deleteMethod");
const COMPLETE = require("./modules/complete");
const FILTER = require("./modules/filter");
const ShowDeleteds = require("./modules/showDeleteds");
const STATE = require("./modules/state");

async function engine () {
	const url = "http://localhost:8888/todos";

	const {form, screenInput, showDeletedsBtn} = UI;
	UI.start();

	await POST(form, screenInput, url);
	await GET(UI, url);
	await STATE(PATCH, DELETE, COMPLETE, url);
	await FILTER(
		document.querySelectorAll("[data-filter]"),
		url,
		UI,
		PATCH,
		DELETE,
		COMPLETE
	);
	await ShowDeleteds(
		showDeletedsBtn,
		UI
	);
}

engine();