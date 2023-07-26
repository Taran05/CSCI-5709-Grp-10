import React, { useState } from "react";
import { Button, TextField, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom"
import { CREATE_ISSUE } from "../../utils/apiUrls";

const IssueForm = ({ onNewIssue }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const issueData = { title, description };

        const response = await fetch(CREATE_ISSUE, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(issueData)
        });

        const data = await response.json()

        if(response.ok) {
            console.log(data);
            navigate("/issues");
        }
        
    };

    return (
        <Container style={ {paddingTop: '10%', minHeight: '100vh', textAlign: 'centre'} }>
            <form onSubmit={handleSubmit}>
                <Typography variant="h5" align="left">Issue Title</Typography>
                <TextField value={title} onChange={ (e) => setTitle(e.target.value)} required style={ {width: '100%', marginBottom: '5%'} }/>
                <Typography variant="h5" align="left">Issue Description</Typography>
                <TextField value={description} onChange={ (e) => setDescription(e.target.value)} required multiline rows={3} style={ {width: '100%', marginBottom: '5%'} } />
                <Button type="submit" variant="contained" color="primary">Submit</Button>
            </form>
        </Container>
    )
}

export default IssueForm;