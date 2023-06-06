/* eslint-disable */
// TODO: this code/API needs to be moved into OPA.

import Opa5 from "sap/ui/test/Opa5";

export default class OPA_Extension {
	static extendConfig(config: {actions: any, assertions: any}) {
		const pageDefinition: Record<string, any> = {};

		Opa5.extendConfig(config);

		["actions", "assertions"].forEach(operationType => {
			const instance = new config[operationType](),
				baseClassInstance = new Opa5;
			Object.getOwnPropertyNames(instance)
			.filter(name => Object.getOwnPropertyNames(baseClassInstance).indexOf(name) < 0)
			.map(name => {
				pageDefinition[name] || (pageDefinition[name] = {});
				pageDefinition[name][operationType] = instance[name];
			});
		});

		Opa5.createPageObjects(pageDefinition);
	}
}

