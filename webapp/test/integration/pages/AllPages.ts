import Opa5 from "sap/ui/test/Opa5";
import { AppPageActions, AppPageAssertions } from "./App";

const Actions = {
	onTheAppPage: new AppPageActions()
	// add further pages here, once they are created!
}
const Assertions = {
	onTheAppPage: new AppPageAssertions()
	// add further pages here, once they are created!
}

export type When = typeof Actions & Opa5;
export type Then = typeof Assertions & Opa5;

Opa5.extendConfig({
	actions: Actions,
	assertions: Assertions,
	viewNamespace: "ui5.typescript.helloworld.view."
});