import Opa5, { MultiControlSelector, SingleControlSelector } from "sap/ui/test/Opa5";

export class Base extends Opa5 {

	defautlOptions: object;

	constructor(defaultOptions: object) {
		super();
		this.defautlOptions = defaultOptions;
	}

	waitFor(options: SingleControlSelector | MultiControlSelector): this {
		options = Object.assign({}, this.defautlOptions, options);
		return Opa5.prototype.waitFor.call(this, options) as this;
	}
}