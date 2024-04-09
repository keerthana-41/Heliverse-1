import React, { useState } from "react";

let Insert = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState(""); // Default value set to Male

    let LocalObj = { firstName, lastName, email, password, gender };

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(LocalObj);
        console.log("LocalObj::", LocalObj);

        const response = await fetch('http://localhost:8000/Api/User', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(LocalObj),
        });
        let LocalReturnData = await response.json();
        console.log("LocalReturnData::", LocalReturnData);
        // Do something with the form data
    };

    return (

        <div className="container">
            <form className="row g-3 needs-validation" onSubmit={handleSubmit}>
                <h3>Users</h3>

                <div className="col-md-6">
                    <label htmlFor="validationCustom01" className="form-label">First name</label>
                    <input type="text" className="form-control" name="FirstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                    <div className="valid-feedback">Looks good!</div>
                </div>

                <div className="col-md-6">
                    <label htmlFor="validationCustom02" className="form-label">Last name</label>
                    <input type="text" className="form-control" name="lastName" onChange={(e) => setLastName(e.target.value)} required />
                    <div className="valid-feedback">Looks good!</div>
                </div>

                <div className="col-md-6">
                    <label htmlFor="validationCustom03" className="form-label">E-mail</label>
                    <input type="text" className="form-control" name="email" onChange={(e) => setEmail(e.target.value)} />
                    <div className="invalid-feedback">Please provide a valid email.</div>
                </div>

                <div className="col-md-6">
                    <label htmlFor="validationCustom04" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" onChange={(e) => setPassword(e.target.value)} />
                    <div className="invalid-feedback">Please provide a valid password.</div>
                </div>

                <div className="col-md-6">
                    <label htmlFor="validationCustom05" className="form-label">Gender</label>
                    <select className="form-select" name="gender" onChange={(e) => setGender(e.target.value)} aria-label="Default select example">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>

                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Insert;