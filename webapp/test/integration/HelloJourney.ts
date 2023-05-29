/* eslint-disable @typescript-eslint/no-floating-promises */
import opaTest from "sap/ui/test/opaQunit";
import Opa5 from "sap/ui/test/Opa5";
import "./pages/App";
import { PageFunctions } from "./OPA_Extension";

QUnit.module("Hello");

opaTest("Should open the Hello dialog", function (Given: Opa5, When: PageFunctions, Then: PageFunctions) {

	// Arrangements
	Given.iStartMyUIComponent({
		componentConfig: {
			name: "ui5.typescript.helloworld"
		}
	});

	//Actions
	When.onTheAppPage.iPressTheSayHelloWithDialogButton();

	// Assertions
	Then.onTheAppPage.iShouldSeeTheHelloDialog();

	//Actions
	When.onTheAppPage.iPressTheOkButtonInTheDialog();

	// Assertions
	Then.onTheAppPage.iShouldNotSeeTheHelloDialog();

	// Cleanup
	Then.iTeardownMyApp();
});

opaTest("Should close the Hello dialog", function (Given: Opa5, When: PageFunctions, Then: PageFunctions) {

	// Arrangements
	Given.iStartMyUIComponent({
		componentConfig: {
			name: "ui5.typescript.helloworld"
		}
	});

	//Actions
	When.onTheAppPage.iPressTheSayHelloWithDialogButton()
		.and.iPressTheOkButtonInTheDialog();

	// Assertions
	Then.onTheAppPage.iShouldNotSeeTheHelloDialog();

	// Cleanup
	Then.iTeardownMyApp();
});
