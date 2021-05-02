import React from "react";
import "../../styles/demo.scss";
import { Home } from "./home";

export const Heredia = heredia => {
	return (
		<div className="container">
			<table className="table table-sm table-dark">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">First</th>
						<th scope="col">Last</th>
						<th scope="col">Handle</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">1</th>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<th scope="row">2</th>
						<td>Jacob</td>
						<td>Thornton</td>
						<td>@fat</td>
					</tr>
					<tr>
						<th scope="row">3</th>
						<td col span="2">
							Larry the Bird
						</td>
						<td>@twitter</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};
