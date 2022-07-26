import { all } from "redux-saga/effects";
import getProductList from "./get-products";

export default function* rootSaga() {
	yield all(
		[
            getProductList()
		]
	)
}
