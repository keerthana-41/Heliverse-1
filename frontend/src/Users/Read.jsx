import React, { useState,useEffect } from "react";

const Read = () => {
    const [FetchData, setFetchData] = useState("");
    console.log("FetchData:",FetchData);


    useEffect(() => {
        handleSubmit();
    }, []);




    const handleSubmit = async () => {

        const response = await fetch('http://localhost:8000/Api/User');
        let LocalReturnData = await response.json();
        setFetchData(LocalReturnData)
        console.log("LocalReturnData::", LocalReturnData);
        // Do something with the form data
    };
    <>

    </>
}

export default Read