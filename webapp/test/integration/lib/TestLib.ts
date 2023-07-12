import Opa5 from "sap/ui/test/Opa5";
import Press from "sap/ui/test/actions/Press";

export const myTestLibDefinition = {
	actions: {
		iPressOnButton: function() {
			return this.waitFor({
				controlType: "sap.m.Button",
				actions: new Press(),
				errorMessage: "Did not find the 'Say Hello With Dialog' button on the App view"
			});
		}
	},
	assertions: {
		iShouldSeeADialog: function() {
			return this.waitFor({
				controlType: "sap.m.Dialog",
				success: function () {
					// we set the view busy, so we need to query the parent of the app
					Opa5.assert.ok(true, "The dialog is open");
				},
				errorMessage: "Did not find the dialog control"
			});
		}
	}
};

Opa5.extendConfig({
	testLibBase: {
		myTestLib: myTestLibDefinition
	},
	testLibs: {
		myTestLib: {}
	}
});