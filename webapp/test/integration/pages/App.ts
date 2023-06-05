import Opa5 from "sap/ui/test/Opa5";
import Press from "sap/ui/test/actions/Press";
import { Common } from "./Common";

const viewName = "ui5.typescript.helloworld.view.App";

export class AppPageActions extends Common {

	iPressTheSayHelloWithDialogButton() {
		return this.waitFor({
			id: "helloButton",
			viewName,
			actions: new Press(),
			errorMessage: "Did not find the 'Say Hello With Dialog' button on the App view"
		});
	}

	iPressTheOkButtonInTheDialog() {
		return this.waitFor({
			controlType: "sap.m.Button",
			searchOpenDialogs: true,
			viewName,
			actions: new Press(),
			errorMessage: "Did not find the 'OK' button in the Dialog"
		});
	}
}


export class AppPageAssertions extends Opa5 {

	iShouldSeeTheHelloDialog() {
		return this.waitFor({
			controlType: "sap.m.Dialog",
			success: function () {
				// we set the view busy, so we need to query the parent of the app
				Opa5.assert.ok(true, "The dialog is open");
			},
			errorMessage: "Did not find the dialog control"
		});
	}

	iShouldNotSeeTheHelloDialog() {
		return this.waitFor({
			controlType: "sap.m.App", // dummy, I just want a check function, where I can search the DOM. Probably there is a better way for a NEGATIVE test (NO dialog).
			check: function() {
				return document.querySelectorAll(".sapMDialog").length === 0;
			},
			success: function() {
				Opa5.assert.ok(true, "No dialog is open");
			}
		});
	}
}

Opa5.createPageObjects({"onTheAppPage": {actions: AppPageActions, assertions: AppPageAssertions, baseClass: Common}});
//OPA_Extension.createPageObjects_NEW_OVERLOAD("onTheAppPage", AppPageActions, AppPageAssertions);
