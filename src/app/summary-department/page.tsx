"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { User } from "../types/user/user";
import { useGroupUsersByDepartment } from "../hooks/useGroupUsersByDepartment/useGroupUsersByDepartment";
import CardDepartment from "../components/cardDepartment/CardDepartment";
import LoadingScreen from "../components/loadinScreen/LoadingScreen";

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
    <LoadingScreen />
  ) : (
    <div className="flex flex-wrap justify-center p-4 bg-black min-h-screen">
      {Object.entries(departmentData).map(([departmentName, details]) => (
        <CardDepartment
          key={departmentName}
          departmentName={departmentName}
          details={details}
          handleClose={handleClose}
          handleOpen={handleOpen}
          isOpenModal={isOpenModal}
          selectedUser={selectedUser ?? []}
        />
      ))}
    </div>
  );
}
