import Opa5 from "sap/ui/test/Opa5";
import { AppPageActions, AppPageAssertions } from "./App";
import { reuseComponentDefinition } from "../lib/ReusableTestObjects";
import { myTestLibDefinition } from "../lib/TestLib";

const Actions = {
	onTheAppPage: new AppPageActions()
	// add further pages here, once they are created!
}
const Assertions = {
	onTheAppPage: new AppPageAssertions()
	// add further pages here, once they are created!
}


export type When = typeof Actions
	& Opa5
	& { // declare the testlib actions
		onReuseComponent: typeof reuseComponentDefinition.actions;
	}
	& {
		onTheAppPage: {
			myTestLib: typeof myTestLibDefinition.actions
		}
	};

export type Then = typeof Assertions
	& Opa5
	& { // declare the testlib assertions;
		onReuseComponent: typeof reuseComponentDefinition.assertions;
	}
	& {
		onTheAppPage: {
			myTestLib: typeof myTestLibDefinition.assertions
		}
	};

Opa5.extendConfig({
	actions: Actions,
	assertions: Assertions,
	viewNamespace: "ui5.typescript.helloworld.view.",
	testLibs: {
		myTestLib: {}
	}
});