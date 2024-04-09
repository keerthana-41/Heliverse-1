import React, { useState, useEffect } from "react";

const Read = () => {
    const [FetchData, setFetchData] = useState([]);

    useEffect(() => {
        const handleSubmit = async () => {
            try {
                const response = await fetch('http://localhost:8000/Api/User');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const LocalReturnData = await response.json();
                setFetchData(LocalReturnData);
                console.log("LocalReturnData::", LocalReturnData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        handleSubmit();
    }, []);

    return (
        <div>
            <table style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid black' }}>firstName</th>
                        <th style={{ border: '1px solid black' }}>lastName</th>
                        <th style={{ border: '1px solid black' }}>email</th>
                        <th style={{ border: '1px solid black' }}>password</th>
                        <th style={{ border: '1px solid black' }}>gender</th>
                    </tr>
                </thead>
                <tbody>
                    {FetchData.map((item) => (
                        <tr key={item._id}>
                            <td style={{ border: '1px solid black' }}>{item.firstName}</td>
                            <td style={{ border: '1px solid black' }}>{item.lastName}</td>
                            <td style={{ border: '1px solid black' }}>{item.email}</td>
                            <td style={{ border: '1px solid black' }}>{item.password}</td>
                            <td style={{ border: '1px solid black' }}>{item.gender}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Read;
