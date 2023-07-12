/* eslint-disable @typescript-eslint/no-floating-promises */
import opaTest from "sap/ui/test/opaQunit";
import Opa5 from "sap/ui/test/Opa5";
import "./lib/ReusableTestObjects";
import "./lib/TestLib";
import { When, Then } from "./pages/AllPages";
import "./pages/AllPages";
import "./pages/App";

QUnit.module("Hello");

opaTest("Should open the Hello dialog", function (Given: Opa5, When: When, Then: Then) {

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

opaTest("Should open the Hello dialog using reusable test objects", function (Given: Opa5, When: When, Then: Then) {

	// Arrangements
	Given.iStartMyUIComponent({
		componentConfig: {
			name: "ui5.typescript.helloworld"
		}
	});

	//Actions
	When.onReuseComponent.iPressOnButton();

	// Assertions
	Then.onReuseComponent.iShouldSeeADialog();

	//Actions
	When.onTheAppPage.iPressTheOkButtonInTheDialog();

	// Cleanup
	Then.iTeardownMyApp();
});

opaTest("Should close the Hello dialog", function (Given: Opa5, When: When, Then: Then) {

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
