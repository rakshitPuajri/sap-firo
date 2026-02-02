sap.ui.define([
	"sap/ui/core/ComponentContainer"
], (ComponentContainer) => {
	"use strict";

	new ComponentContainer({
		name: "ui5app",
		settings : {
			id : "ui5app"
		},
		async: true
	}).placeAt("content");
});