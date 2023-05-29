/* eslint-disable @typescript-eslint/no-floating-promises */
import opaTest from "sap/ui/test/opaQunit";
import Opa5 from "sap/ui/test/Opa5";
import "./pages/App";
import { AppPageActions, AppPageAssertions } from "./pages/App";

const appActions = new AppPageActions();
const appAssertions = new AppPageAssertions();

QUnit.module("Hello");

opaTest("Should open the Hello dialog", function (opa: Opa5) {

	// Arrangements
	opa.iStartMyUIComponent({
		componentConfig: {
			name: "ui5.typescript.helloworld"
		}
	});

	//Actions
	appActions.iPressTheSayHelloWithDialogButton();

	// Assertions
	appAssertions.iShouldSeeTheHelloDialog();

	//Actions
	appActions.iPressTheOkButtonInTheDialog();

	// Assertions
	appAssertions.iShouldNotSeeTheHelloDialog();

	// Cleanup
	opa.iTeardownMyApp();
});

opaTest("Should close the Hello dialog", function (opa: Opa5) {

	// Arrangements
	opa.iStartMyUIComponent({
		componentConfig: {
			name: "ui5.typescript.helloworld"
		}
	});

	//Actions
	appActions.iPressTheSayHelloWithDialogButton()
		.and.iPressTheOkButtonInTheDialog();

	// Assertions
	appAssertions.iShouldNotSeeTheHelloDialog();

	// Cleanup
	opa.iTeardownMyApp();
});
