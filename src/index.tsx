import React from "react";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { store, persistor } from "redux/store";
import { PersistGate } from "redux-persist/integration/react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<App />
		</PersistGate>
		<ToastContainer />
	</Provider>
);


reportWebVitals();
