/* eslint-disable @typescript-eslint/no-floating-promises */
import opaTest from "sap/ui/test/opaQunit";
import Opa5 from "sap/ui/test/Opa5";
//import { When, Then } from "./pages/AllPages";
import "./pages/App";
import OPA_Extension from "./OPA_Extension";

QUnit.module("Hello");

const Actions = OPA_Extension.getPageActions();
const Assertions = OPA_Extension.getPageAssertions();
opaTest("Should open the Hello dialog", function (Given: Opa5, When: typeof Actions, Then: typeof Assertions & Opa5) {

	// Arrangements
	Given.iStartMyUIComponent({
		componentConfig: {
			name: "ui5.typescript.helloworld"
		}
	});

	//Actions
	When.onTheAppPage.iPressTheSayHelloWithDialogButton();

	// Assertions
	Then.onTheAppPage.iShouldNotSeeTheHelloDialog();

	//Actions
	When.onTheAppPage.iPressTheOkButtonInTheDialog();

	// Assertions
	Then.onTheAppPage.iShouldNotSeeTheHelloDialog();

	// Cleanup
	Then.iTeardownMyApp();
});

opaTest("Should close the Hello dialog", function (Given: Opa5, When: typeof Actions, Then: typeof Assertions & Opa5) {

	// Arrangements
	Given.iStartMyUIComponent({
		componentConfig: {
			name: "ui5.typescript.helloworld"
		}
	});

	//Actions
	When.onTheAppPage.iPressTheSayHelloWithDialogButton()
		/* .and.iPressTheOkButtonInTheDialog(); */
	When.onTheAppPage.iPressTheOkButtonInTheDialog();

	// Assertions
	Then.onTheAppPage.iShouldNotSeeTheHelloDialog();

	// Cleanup
	Then.iTeardownMyApp();
});
