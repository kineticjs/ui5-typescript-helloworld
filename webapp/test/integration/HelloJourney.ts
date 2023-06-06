/* eslint-disable @typescript-eslint/no-floating-promises */
import opaTest from "sap/ui/test/opaQunit";
import Opa5 from "sap/ui/test/Opa5";
import "./pages/App";
import { AppPage } from "./pages/App";

QUnit.module("Hello");

const onTheAppPage = new AppPage();

Opa5.extendConfig({
	viewNamespace: "ui5.typescript.helloworld.view.",
	autoWait: true
});

opaTest("Should open the Hello dialog", function (opa: Opa5) {

	// Arrangements
	opa.iStartMyUIComponent({
		componentConfig: {
			name: "ui5.typescript.helloworld"
		}
	});

	//Actions
	onTheAppPage.iPressTheSayHelloWithDialogButton();

	// Assertions
	onTheAppPage.iShouldSeeTheHelloDialog();

	//Actions
	onTheAppPage.iPressTheOkButtonInTheDialog();

	// Assertions
	onTheAppPage.iShouldNotSeeTheHelloDialog();

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
	onTheAppPage.iPressTheSayHelloWithDialogButton()
		.and.iPressTheOkButtonInTheDialog();

	// Assertions
	onTheAppPage.iShouldNotSeeTheHelloDialog();

	// Cleanup
	opa.iTeardownMyApp();
});
