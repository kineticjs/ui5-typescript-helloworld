import Opa5, { PageObjectDefinition } from "sap/ui/test/Opa5";
import Press from "sap/ui/test/actions/Press";
import OPA_Extension from "../OPA_Extension"; // TODO: will be replaced by standard Opa5 once the implementation has moved there

const viewName = "App",
	namespace = "ui5.typescript.helloworld.view.";

export class AppPageActions extends Opa5 {
	and: AppPageActions // TODO: would be nice if this would not need to be defined

	iPressTheSayHelloWithDialogButton() {
		return <Opa5> this.waitFor({
			id: "helloButton",
			actions: new Press(),
			errorMessage: "Did not find the 'Say Hello With Dialog' button on the App view"
		}) as AppPageActions & jQuery.Promise; // TODO: would be nice if this cast would not be needed
	}

	iPressTheOkButtonInTheDialog() {
		return this.waitFor({
			controlType: "sap.m.Button",
			searchOpenDialogs: true,
			actions: new Press(),
			errorMessage: "Did not find the 'OK' button in the Dialog"
		}) as AppPageActions & jQuery.Promise;
	}
}


export class AppPageAssertions extends Opa5 {
	and: AppPageAssertions

	iShouldSeeTheHelloDialog() {
		return this.waitFor({
			controlType: "sap.m.Dialog",
			searchOpenDialogs: true,
			success: function () {
				// we set the view busy, so we need to query the parent of the app
				Opa5.assert.ok(true, "The dialog is open");
			},
			errorMessage: "Did not find the dialog control"
		}) as AppPageAssertions & jQuery.Promise;
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
		}) as AppPageAssertions & jQuery.Promise;
	}
}

const appPageDefinition: PageObjectDefinition = {
	viewName,
	namespace,
	actions: AppPageActions,
	assertions: AppPageAssertions
};

// TODO: new API in OPA, this will be a regular Opa5 call
OPA_Extension.createPageObjects_NEW_OVERLOAD({"onTheAppPage": appPageDefinition});
