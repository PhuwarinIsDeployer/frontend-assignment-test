import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardDetailsType } from "./type";
import placeholderImage from "../../../../public/assets/images/placeholder.png";

const CardDetails: React.FC<CardDetailsType> = ({ user }) => {
  return (
    <Card
      className="my-3 mx-2  bg-gray-600"
      sx={{
        maxWidth: 300,
        border: "1px solid rgba(0, 0, 0, 0.2)",
        borderRadius: "16px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <CardMedia
        component="img"
        height="40"
        image={user.image ?? placeholderImage.src}
        alt="green iguana"
        sx={{ padding: "32px 32px 0px 32px" }}
      />
      <CardContent className="bg-slate-200 h-full">
        <Typography gutterBottom variant="h5">
          {user.firstName + " " + user.lastName}
        </Typography>
        <Typography>Gender : {user.gender}</Typography>
        <Typography>Age : {user.age}</Typography>
        <Typography>
          Hair : {user.hair.type} {user.hair.color}
        </Typography>
        <Typography>Company : {user.company.name}</Typography>

        <Typography>Email : {user.email}</Typography>
        <Typography>Phone : {user.phone}</Typography>
        <Typography>University : {user.university}</Typography>
        <Typography>
          Address :{" "}
          {`${user.address.address}, ${user.address.city}, ${user.address.state}, ${user.address.postalCode}`}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardDetails;
