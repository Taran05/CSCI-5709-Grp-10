import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, TextField, Container, Typography, Box } from "@mui/material";
import { GET_ISSUE } from "../../utils/apiUrls";

const IssueDetails = () => {
    const { id } = useParams();
    const [issue, setIssue] = useState(null);

    const fetchIssue = async () => {
        try {
            const api_uri = GET_ISSUE + `/${id}`;
            const response = await fetch(api_uri);
            const data = await response.json();
            setIssue(data)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchIssue();
    }, [id])

    if (!issue) {
        return <Container>Loading....</Container>
    }

    return (
        <Container style={ {paddingTop: '10%', minHeight: '82vh', textAlign: 'centre'} }>
        <form>
            <Typography variant="h5" align="left">Issue Title</Typography>
            <TextField value={issue.title} required style={ {width: '100%', marginBottom: '5%'} }/>
            <Typography variant="h5" align="left">Issue Description</Typography>
            <TextField value={issue.description} required multiline rows={3} style={ {width: '100%', marginBottom: '5%'} } />
            <Box display="flex" justifyContent="space-between">
                <Button variant="contained" color="primary">Update</Button>
                <Button variant="contained" color="secondary">Delete</Button>
            </Box>
        </form>
    </Container>
    )
}

export default IssueDetails