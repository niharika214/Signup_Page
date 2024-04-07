import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<SignUp />} />
			<Route path="/login" exact element={<LogIn />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
	);
}

export default App;