/* eslint-disable */
// TODO: this code/API needs to be moved into OPA.

import Opa5, { PageObjectDefinition } from "sap/ui/test/Opa5";
import { AppPageActions, AppPageAssertions } from "./pages/App";

export default class OPA_Extension {

	static getPageActions() {
		return {
			onTheAppPage: AppPageActions
			// add further pages here, once they are created!
		};
	}
	static getPageAssertions() {
		return {
			onTheAppPage: AppPageAssertions
			// add further pages here, once they are created!
		}
	}

	/* static getActionsType() {
		return (typeof this.getActions() & Opa5);
	} */
}

