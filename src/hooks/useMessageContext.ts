import { MessageContext } from "../context/MessageContextProvider";
import { useContext } from "react";
import { IMessageContext } from "../context/IMessageContext";

export function useMessageContext() {
	return useContext<IMessageContext>(MessageContext);
}
