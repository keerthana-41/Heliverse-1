import React from "react";
import { useState } from "react";

const Insert = () => {


        const [color, setColor] = useState("");
        console.log("color",color);
    

    return (
        <div className="container">
            <form className="row g-3 needs-validation " novalidate>
                <h3>Users </h3>

                <div className="col-md-6">
                    <label for="validationCustom01" className="form-label">First name</label>
                    <input type="text" className="form-control" id="validationCustom01" required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>

                <div className="col-md-6">
                    <label for="validationCustom02" className="form-label">Last name</label>
                    <input type="text" className="form-control" id="validationCustom02" required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>


                <div className="col-md-6">
                    <label for="validationCustom03" className="form-label">E-mail</label>
                    <input type="text" className="form-control" id="validationCustom03" />
                    <div className="invalid-feedback">
                        Please provide a valid city.
                    </div>
                </div>

                <div className="col-md-6">
                    <label for="validationCustom03" className="form-label">Password</label>
                    <input type="text" className="form-control" id="validationCustom03" />
                    <div className="invalid-feedback">
                        Please provide a valid city.
                    </div>
                </div>

                <select className="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>

                <div className="col-12">
                    <button className="btn btn-primary" onClick={() => setColor("blue")} type="button">Submit</button>
                </div>
            </form>

        </div>
    )
}

export default Insert