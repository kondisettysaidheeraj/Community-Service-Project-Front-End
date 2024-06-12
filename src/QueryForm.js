import React, { useState,useEffect} from 'react';
import './QueryForm.css';
function QueryForm() {
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const[data,setData]=useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();

        const dataToSend = {
            email,
            title,
            description
        };

        fetch('http://localhost:8081/addQuery', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
        })
        .then(response => {
            if (response.status === 200) {
                alert("Query submitted successfully");
            } else {
                alert("Failed to submit query");
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });

        // Reset form fields
        setEmail('');
        setTitle('');
        setDescription('');
    };

    return (
        <div>
            <h2>Query Form</h2>
            <form onSubmit={handleSubmit} id="queryform">
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            <div>
                    <h2>Previous querys</h2>
                 <table>
                    <tr>
                    <th>Id</th>
                    <th>Email</th>
                    <th>Tittle</th>
                    <th>Description</th>
                    </tr>
                    {   data.map((info)=>(
                      
                      <tr key={info.id}> <td>{info.id}</td> <td>{info.email}</td> <td>{info.title}</td> <td>{info.description}</td> </tr>
                      
                      )) }

                    </table>


            
            </div>
            
               
            
        </div>
    );
}

export default QueryForm;
