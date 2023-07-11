import Opa5 from "sap/ui/test/Opa5";

export class Base extends Opa5 {

	defaultOptions: object;

	constructor(defaultOptions: object) {
		super(); //TODO: maybe allow pass the 'defaultOptions' parameter to OPA contructor
		// => set once as instance-level config
		// => remove the need to override the waitFor method here
		this.defaultOptions = defaultOptions;
	}

	baseAction() {
	}

	// TODO: this method may be moved to a base class provided by the framework for test-code to extend
	waitFor(options) {
		options = Object.assign({}, this.defaultOptions, options);
		return Opa5.prototype.waitFor.call(this, options);
	}
}