import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Chat } from "./pages/Chat";
import { MessageContextProvider } from "./context/MessageContextProvider";

export const Routes = () => {
	return (
		<BrowserRouter>
			<MessageContextProvider>
				<Switch>
					<Route path="/" exact component={Chat}></Route>
				</Switch>
			</MessageContextProvider>
		</BrowserRouter>
	);
};
