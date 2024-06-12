import React, { useEffect, useState } from 'react';
import './TeamData.css'; // Import the CSS file

function TeamData() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8081/getTeamMembersData`)
            .then(response => response.json())
            .then(val => setData(val));
    }, []);

    return (
        <div className="data-container">
            <h2>Team Members Data</h2>
            <ol className="member-list">
                {data.map((member, index) => (
                    <li key={member.id}>
                        {member.id}.<strong>{member.name}</strong>- {member.role}
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default TeamData;
