import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import { Button, TextField, Container, Typography, Box } from "@mui/material";
import { DELETE_ISSUE, GET_ISSUE, UPDATE_ISSUE } from "../../utils/apiUrls";

const IssueDetails = () => {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    
    useEffect(() => {
        const fetchIssue = async () => {
            try {
                // const api_uri = GET_ISSUE + `/${id}`;
                const response = await fetch(GET_ISSUE + `/${id}`);
                const data = await response.json();
                setTitle(data.title);
                setDescription(data.description);
            } catch (error) {
                console.error(error);
            }
        };
        fetchIssue();
    }, [id]);

    const updateIssue = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(UPDATE_ISSUE + `/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title, description })
            });

            const data = await response.json();
            console.log(data.message);
            navigate('/issues');
        } catch (error) {
            console.error(error);
        }
    }

    const deleteIssue = async () => {
        try {
            const response = await fetch(DELETE_ISSUE + `/${id}`, {
                method: 'DELETE'
            });

            const data = await response.json();
            console.log(response)
            console.log(data)
            if(response.ok) {
                navigate('/issues');
            } else {
                console.error(data.error)
            }
        } catch (error) {
            console.error(error);
        }
    }

    const UpdateIssueButton = styled(Button)(({ theme }) => ({
        height: "100%",
        padding: "10px 30px",
        fontWeight: 600,
        color: theme.palette.getContrastText(grey[900]),
        backgroundColor: "#1D267D",
        "&:hover": {
          backgroundColor: "#0C134F",
        },
      }));

      const DeleteIssueButton = styled(Button)(({ theme }) => ({
        height: "100%",
        padding: "10px 30px",
        fontWeight: 600,
        color: theme.palette.getContrastText(grey[900]),
        backgroundColor: "##f44336",
        "&:hover": {
          backgroundColor: "#ba000d",
        },
      }));

    return (
        <Container style={ {paddingTop: '10%', minHeight: '100vh', textAlign: 'centre'} }>
        
            <Typography variant="h3" align="left" style={{ marginBottom: '5%' }}>Details of the Issue</Typography>
            <Typography variant="h5" align="left">Title</Typography>
            <TextField value={title} onChange={ (e) => setTitle(e.target.value)} required style={ {width: '100%', marginBottom: '2%'} }/>
            <Typography variant="h5" align="left">Description</Typography>
            <TextField value={description} onChange={ (e) => setDescription(e.target.value)} required multiline rows={3} style={ {width: '100%', marginBottom: '2%'} } />
            <Box display="flex" justifyContent="space-between">
                <UpdateIssueButton type="submit" onClick={updateIssue} variant="contained" color="primary">Update</UpdateIssueButton>
                <DeleteIssueButton type="button" onClick={deleteIssue} variant="contained" color="secondary">Delete</DeleteIssueButton>
            </Box>
        
    </Container>
    )
}

export default IssueDetails