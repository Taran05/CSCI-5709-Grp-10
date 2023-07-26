import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { TextField, Typography } from "@mui/material";
import axios from "axios";
import { SAVE_QUERY } from "../../../utils/apiUrls";
import "./sendQueryComp.css";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import { useSnackbar } from "notistack";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function SendQueryComp({ mentorId, mentorName }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const { enqueueSnackbar } = useSnackbar();

  const handleNameChange = (event) => {
    setName(event?.target?.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event?.target?.value);
  };

  const handleContentChange = (event) => {
    setContent(event?.target?.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event?.target?.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const apiUrl = SAVE_QUERY;

    const postData = {
      name: name,
      email: email,
      content: content,
      title: title,
      mentorId: mentorId,
    };

    try {
      const response = await axios.post(apiUrl, postData);
      console.log(response.data);
    } catch (error) {
      console.error("Error saving query:", error);
    }

    setName("");
    setEmail("");
    setContent("");
    setTitle("");

    console.log("Query submitted:", name, email, content, title, mentorId);
    enqueueSnackbar("Query Sent", { variant: "success" });

    setOpen(false);
  };

  return (
    <div className="sendQueryStudentDiv">
      <Button variant="outlined" color="primary" onClick={handleOpen}>
        Ask a query
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        // aria-labelledby="modal-modal-title"
        // aria-describedby="modal-modal-description"
        className="sendQueryStudentModal"
      >
        <Box sx={style}>
          <div className="buttonUpperDiv">
            <Button
              variant="text"
              className="closeButton"
              onClick={(e) => handleClose(e)}
            >
              <CloseIcon />
            </Button>
          </div>
          <Typography variant="h6" component="div" textAlign="center">
            Send Doubts to{" "}
            <span style={{ color: "#5C469C", fontWeight: 600 }}>
              {mentorName ? mentorName : "Mentor"}
            </span>
            .
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              required
              margin="normal"
              onChange={handleNameChange}
            />

            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              required
              type="email"
              margin="normal"
              onChange={handleEmailChange}
            />

            <TextField
              label="Title"
              variant="outlined"
              fullWidth
              required
              margin="normal"
              onChange={handleTitleChange}
            />

            <TextField
              label="Content"
              variant="outlined"
              multiline
              rows={5}
              fullWidth
              required
              margin="normal"
              onChange={handleContentChange}
            />

            <div className="buttonUpperDiv">
              <Button type="submit" variant="contained" color="primary">
                <SendIcon />
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}