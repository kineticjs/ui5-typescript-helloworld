/* eslint-disable */
// TODO: this code/API needs to be moved into OPA.

import Opa5 from "sap/ui/test/Opa5";

export default class OPA_Extension {
	static createPageObjects_NEW_OVERLOAD(onName: string, Actions: Function, Assertions: Function) {
		const configObject: {[name: string]: {actions: Record<string, () => {}>, assertions: Record<string, () => {}>}} = {};
		configObject[onName] = {
			actions: convert(Actions),
			assertions: convert(Assertions)
		}
		Opa5.createPageObjects(configObject);
	}

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

		Object.keys(pageDefinition).map(onName => {
			this.createPageObjects_NEW_OVERLOAD(onName, pageDefinition[onName].actions, pageDefinition[onName].assertions);
		})
	}
}

function convert(Methods: Function): Record<string, () => {}> {
	const dictionary: Record<string, () => {}> = {}
	Object.getOwnPropertyNames(Methods.constructor.prototype)
		.filter(name => name !== 'constructor' && typeof Methods.constructor.prototype[name] === 'function')
		.map(name => {
			dictionary[name] = Methods.constructor.prototype[name]
		})
	return dictionary
}
