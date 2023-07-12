import Opa5 from "sap/ui/test/Opa5";
import { AppPageActions, AppPageAssertions } from "./App";
import { reuseComponentDefinition } from "../lib/ReusableTestObjects";
import { myTestLibDefinition } from "../lib/TestLib";

// TODO: want to get rid of this

export class When extends Opa5 {
	onTheAppPage: AppPageActions & {
		myTestLib: typeof myTestLibDefinition.actions }
	// add further pages here, once they are created!
	onReuseComponent: typeof reuseComponentDefinition.actions
}
export class Then extends Opa5 {
	onTheAppPage: AppPageAssertions & {
		myTestLib: typeof myTestLibDefinition.assertions }
	// add further pages here, once they are created!
	onReuseComponent: typeof reuseComponentDefinition.assertions

}
