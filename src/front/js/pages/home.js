import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1 />
			<p>
				<img src={rigoImageUrl} />
			</p>
			<div className="alert alert-info">{store.message || ""}</div>
			<p />
			Busc@ Pymes ;
			<div>
				<h1>I am the home</h1>
				<ul>
					<li>
						<Link to="/cartago">Go to product 2 (normal link)</Link>
					</li>
					<li>
						<button onClick={() => this.props.history.push("/alajuela")}>
							Go to product 3 (history.push)
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
};
