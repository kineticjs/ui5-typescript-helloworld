import Opa5 from "sap/ui/test/Opa5";
import Press from "sap/ui/test/actions/Press";
import OPA_Extension from "../OPA_Extension"; // TODO: will will no longer be needed once a standard Opa5 call is there

const viewName = "App";//"ui5.typescript.helloworld.view.App";

export class AppPage extends Opa5 {
	//and: AppPage // TODO: will no longer be needed in the future (probably with the 1.115 types)

	iPressTheSayHelloWithDialogButton() {
		return this.waitFor({
			id: "helloButton",
			viewName,
			actions: new Press(),
			errorMessage: "Did not find the 'Say Hello With Dialog' button on the App view"
		}) /* as AppPage & jQuery.Promise */; // TODO: will no longer be needed in the future (probably with the 1.115 types)
	}

	iPressTheOkButtonInTheDialog() {
		return this.waitFor({
			controlType: "sap.m.Button",
			searchOpenDialogs: true,
			viewName,
			actions: new Press(),
			errorMessage: "Did not find the 'OK' button in the Dialog"
		}) /* as AppPage & jQuery.Promise */; // TODO: will no longer be needed in the future (probably with the 1.115 types)
	}

	iShouldSeeTheHelloDialog() {
		return this.waitFor({
			controlType: "sap.m.Dialog",
			success: function () {
				// we set the view busy, so we need to query the parent of the app
				Opa5.assert.ok(true, "The dialog is open");
			},
			errorMessage: "Did not find the dialog control"
		}) /* as AppPage & jQuery.Promise */; // TODO: will no longer be needed in the future (probably with the 1.115 types)
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
		}) /* as AppPage & jQuery.Promise */; // TODO: will no longer be needed in the future (probably with the 1.115 types)
	}
}

Opa5.createPageObjects({"onTheAppPage": {actions: AppPage, assertions: AppPage, viewName: viewName}});

// TODO: new API in OPA, this will be a regular Opa5 call
//OPA_Extension.createPageObjects_NEW_OVERLOAD("onTheAppPage", AppPage, AppPage); // TODO
