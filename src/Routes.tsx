import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Chat } from "./pages/Chat";

export const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Chat}></Route>
			</Switch>
		</BrowserRouter>
	);
};
