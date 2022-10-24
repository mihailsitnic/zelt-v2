import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "pages/profile";
import ProfileEdit from "pages/profile-edit";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Profile} />
				<Route path="/edit" component={ProfileEdit} />
			</Switch>
		</Router>
	);
}

export default App;
