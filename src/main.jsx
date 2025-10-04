import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NoteContextProvider } from "./contexts/NoteContext/provider.jsx";
import { App } from "./App.jsx";
import "./styles/index.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<NoteContextProvider>
			<App />
		</NoteContextProvider>
	</StrictMode>
);
