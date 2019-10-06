import React from "react";
import { toast } from "react-toastify";
import { GlobalStyle } from "./GlobalStyle";
import { Routes } from "./Routes";

toast.configure();

const App = () => (
	<>
		<GlobalStyle />
		<Routes />
	</>
);

export default App;
