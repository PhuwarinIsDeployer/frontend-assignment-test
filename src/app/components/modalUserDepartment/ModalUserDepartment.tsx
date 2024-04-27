import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CardDetails from "../cardDetails/CardDetails";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { ModalUserDepartmentType } from "./type";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  height: "90%",
  bgcolor: "background.paper",
  boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.005)",
  p: 4,
  overflowY: "auto",
  borderRadius: "8px",
};

const ModalUserDepartment: React.FC<ModalUserDepartmentType> = ({
  users,
  isOpen,
  handleClose,
}) => {
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      BackdropProps={{
        style: {
          backgroundColor: "rgba(0, 0, 0, 0.04)",
        },
      }}
    >
      <Box
        sx={{
          ...style,
        }}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "black",
          }}
        >
          <CloseIcon />
        </IconButton>
        <Typography
          className="flex justify-center text-black"
          sx={{ fontWeight: "bold" }}
          id="modal-modal-title"
          variant="h4"
        >
          {users[0]?.company.department.toUpperCase()}
        </Typography>
        <div className="flex flex-wrap justify-center">
          {users.map((user) => (
            <CardDetails key={user.macAddress} user={user} />
          ))}
        </div>
      </Box>
    </Modal>
  );
};

export default ModalUserDepartment;
