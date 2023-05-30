/* eslint-disable */
// TODO: this code/API needs to be moved into OPA.

import Opa5, { PageObjectDefinition } from "sap/ui/test/Opa5";

export default class OPA_Extension {
	static createPageObjects_NEW_OVERLOAD(pageObjects: Record<string, PageObjectDefinition>) {
		for (const key in pageObjects) {
			const pageObject = pageObjects[key];
			pageObject.actions = convert(pageObject.actions);
			pageObject.assertions = convert(pageObject.assertions);
		}
		Opa5.createPageObjects(pageObjects);
	}
}

function convert(Methods: Function): Record<string, () => {}> {
	const dictionary: Record<string, () => {}> = {}
	Object.getOwnPropertyNames(Methods.prototype)
		.filter(name => name !== 'constructor' && typeof Methods.prototype[name] === 'function')
		.map(name => {
			dictionary[name] = Methods.prototype[name]
		})
	return dictionary
}
