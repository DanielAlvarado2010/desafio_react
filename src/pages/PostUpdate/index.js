import React, { useState, useEffect } from "react";

// Input
// import Input from "../../components/Input";

// Services
// import { getUser, updateUser } from "../../services/users";

// RR
// El useParams, se utiliza para obtener los parametros que se están enviando desde la URL
// import { useParams } from "react-router-dom";

function PostUpdate() {
	// const [firstName, setFirstName] = useState("");
	// const [lastName, setLastName] = useState("");
	// const [gender, setGender] = useState("");
	// const [occupation, setOccupation] = useState("");
	// const [birthdate, setBirthdate] = useState("");

    // // Aquí instanciamos a una variable el useParams, para tener acceso a los parametros de la URL
	// const params = useParams();

	// useEffect(() => {
	// 	const get = async () => {
    //         // Aquí al momento de invocar el servicio de getUser, enviamos el parametro de userID, que obtuvimos desde la URL con el useParams
	// 		const { firstName, lastName, gender, occupation, birthdate } = await getUser(params.userID);
	// 		// console.log(response);
	// 		setFirstName(firstName);
	// 		setLastName(lastName);
	// 		setGender(gender);
	// 		setOccupation(occupation);
	// 		setBirthdate(birthdate);
	// 	};
	// 	get();
    //     // Aquí es necesario que se este escuchando si el Id del usuario cambia
	// }, [params.userID]);

	// const handleSubmit = async (event) => {
	// 	event.preventDefault();
	// 	const data = {
	// 		firstName,
	// 		lastName,
	// 		gender,
	// 		occupation,
	// 		birthdate,
	// 	};

    //     // Para el metodo de actualización con el PATCH, estamos enviando el ID y los datos a actualizar desde el formulario
    //     // Según lo que nos comenta David, al ser un metodo PATCH, es mejor enviar la data completa desde el Front y el Back es el que se debe encargar de revisar
    //     // que es lo que debe actualizarse
	// 	await updateUser(params.userID, data);
	// 	console.log("holi");
	// };

	return (
		<div className="">
			<h1>Actualizar usuario </h1>
			{/* <form onSubmit={handleSubmit}>
				<Input
					id="firstName"
					label="First Name"
					value={firstName}
					setValue={setFirstName}
				/>
				<Input
					id="lastName"
					label="Last Name"
					value={lastName}
					setValue={setLastName}
				/>
				<Input id="gender" label="Gender" value={gender} setValue={setGender} />
				<Input
					id="occupation"
					label="Occupation"
					value={occupation}
					setValue={setOccupation}
				/>
				<Input
					id="birthdate"
					type="date"
					label="Birthdate"
					value={birthdate}
					setValue={setBirthdate}
				/>
				<button type="submit">Actualizar</button>
			</form> */}
		</div>
	);
}

export default PostUpdate;