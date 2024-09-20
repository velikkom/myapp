import React from "react";
import { useParams } from "react-router-dom";

export const CustomerDetails = () => {
	const params = useParams();

	console.log(params);

	return <div>Customer Details of {params.customerId}</div>;
};