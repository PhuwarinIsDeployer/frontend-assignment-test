"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { User } from "../types/user/user";
import { useGroupUsersByDepartment } from "../hooks/summary-department/summary-department";
import CircularProgress from "@mui/material/CircularProgress";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import UserDepartmentModal from "../components/user-department-modal/UserDepartmentModal";

export default function SummaryDepartment() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User[] | null>(null);

  const departmentData = useGroupUsersByDepartment(users);

  const handleOpen = (user: User[]) => {
    setSelectedUser(user);
    setIsOpenModal(true);
  };

  const handleClose = () => {
    setSelectedUser(null);
    setIsOpenModal(false);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchUsers();
  }, []);

  useEffect(() => {
    console.log("Hello : ", departmentData);
  }, [departmentData]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/users?limit=100");
      setUsers(response.data.users);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  return isLoading ? (
    <div className="flex justify-center items-center bg-white h-full min-h-screen">
      <CircularProgress size={80} />
    </div>
  ) : (
    <div className="flex flex-wrap justify-center p-4 bg-white min-h-screen">
      {Object.entries(departmentData).map(([departmentName, details]) => (
        <Card
          sx={{ maxWidth: 345, m: 2, backgroundColor: "#4FA3A5" }}
          key={departmentName}
        >
          <CardContent className="flex flex-col justify-between h-full text-black">
            <div>
              <Typography sx={{ fontWeight: "bold" }} variant="h5">
                {departmentName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Total Employees: {details.users.length}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Males: {details.male}, Females: {details.female}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Age Range: {details.ageRange}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Hair Colors:{" "}
                {Object.entries(details.hair)
                  .map(([color, count]) => `${color}: ${count}`)
                  .join(", ")}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Addresses:{" "}
                {Object.entries(details.addressUser)
                  .map(([name, postal]) => `${name}: ${postal}`)
                  .join(", ")}
              </Typography>
            </div>
            <div className="mt-3 flex justify-center">
              <Button
                sx={{
                  backgroundColor: "#FDAE38",
                  color: "black",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#FFFFFF",
                    color: "#FDAE38",
                  },
                }}
                onClick={() => handleOpen(details.users)}
                variant="contained"
              >
                Details
              </Button>
              {isOpenModal && selectedUser && (
                <UserDepartmentModal
                  users={selectedUser}
                  isOpen={isOpenModal}
                  handleClose={handleClose}
                />
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
