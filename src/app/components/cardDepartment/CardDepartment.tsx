import { Card, CardContent, Typography, Button } from "@mui/material";
import React from "react";
import { CardDepartmentType } from "./type";
import ModalUserDepartment from "../modalUserDepartment/ModalUserDepartment";

const CardDepartment: React.FC<CardDepartmentType> = ({
  departmentName,
  details,
  handleOpen,
  isOpenModal,
  selectedUser,
  handleClose,
}) => {
  return (
    <Card
      className="my-3 mx-2"
      sx={{
        background: "#FDAE38",
        maxWidth: 300,
        border: "1px solid rgba(0, 0, 0, 0.2)",
        borderRadius: "16px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <CardContent className="flex flex-col justify-between h-full text-black">
        <div className="flex bg-custom-brown h-32 rounded-lg text-white justify-center items-center">
          <Typography sx={{ fontWeight: "bold" }} variant="h5">
            {departmentName}
          </Typography>
        </div>
        <div className="block mb-auto mt-4">
          <Typography>Total Employees: {details.users.length}</Typography>
          <Typography>
            Males: {details.male}, Females: {details.female}
          </Typography>
          <Typography>Age Range: {details.ageRange}</Typography>
          <Typography sx={{ mb: 2 }}>
            Hair Colors:{" "}
            {Object.entries(details.hair)
              .map(([color, count]) => `${color}: ${count}`)
              .join(", ")}
          </Typography>
          <Typography>
            Addresses:{" "}
            {Object.entries(details.addressUser)
              .map(([name, postal]) => `${name}: ${postal}`)
              .join(", ")}
          </Typography>
        </div>
        <div className="mt-3 flex justify-center">
          <Button
            sx={{
              backgroundColor: "black",
              color: "white",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "white",
                color: "#FDAE38",
              },
            }}
            onClick={() => handleOpen(details.users)}
            variant="contained"
          >
            Details
          </Button>
          {isOpenModal && selectedUser && (
            <ModalUserDepartment
              users={selectedUser}
              isOpen={isOpenModal}
              handleClose={handleClose}
            />
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CardDepartment;
