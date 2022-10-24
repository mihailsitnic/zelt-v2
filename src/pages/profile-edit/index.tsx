import { lazy, Suspense } from "react";
import Loader from "components/reusable/loader";

const Header = lazy(() => import("components/header/body"));
const Body = lazy(() => import("components/profile-edit/body"));

function ProfileEdit() {
	const MainComponent = () => (
		<Suspense fallback={<Loader />}>
			<Header />
			<Body />
		</Suspense>
	);

	return MainComponent();
}

export default ProfileEdit;
