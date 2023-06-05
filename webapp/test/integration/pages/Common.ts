import Opa5 from "sap/ui/test/Opa5";

export class Common extends Opa5 {

	iStartTheApp() {
		this.iStartMyUIComponent({
			componentConfig: {
				name: "ui5.typescript.helloworld"
			}
		})
	}
}
