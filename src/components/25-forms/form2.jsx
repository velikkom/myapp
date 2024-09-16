import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

export const Form2 = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");

	const handleSubmit = (e) => {
		//1-formun defoult submit davranışı devre dışı bırakılır.
        e.preventDefault();
        //2-Form validation işlemi yapılır
        if(!firstName || !lastName || !phoneNumber || !email || !address){
            alert("Please fillall fields")
            return;
        }
        
            //3- API agonderilecek payyload oluşturulur
            const payload = {
                firstName,
                lastName,
                phoneNumber,
                email,
                address
            }
            //4- API gönderilir
           alert("firstName : "+(payload.firstName))

	};

	return (
		<Container className="mt-3">
			<Form  onSubmit={handleSubmit}>
				<Form.Group className="mb-3" controlId="firstName">
					<Form.Label>First Name</Form.Label>
					<Form.Control
						type="text"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="lastName">
					<Form.Label>Last Name</Form.Label>
					<Form.Control
						type="text"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="phoneNumber">
					<Form.Label>Phone Number</Form.Label>
					<Form.Control
						type="text"
						value={phoneNumber}
						onChange={(e) => setPhoneNumber(e.target.value)}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="email">
					<Form.Label>Email</Form.Label>
					<Form.Control
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="address">
					<Form.Label>Address</Form.Label>
					<Form.Control
						type="text"
						as="textarea"
						rows={3}
						value={address}
						onChange={(e) => setAddress(e.target.value)}
					/>
				</Form.Group>

				<Button variant="primary" type="submit">
					Send
				</Button>
			</Form>
		</Container>
	);
};