import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../redux/usersSlice";
import EditUserModal from "./EditUserModal";

import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Box,
  Link,
} from "@mui/material";
import {
  FavoriteBorder as HeartOutlined,
  Favorite as HeartFilled,
  Edit as EditOutlined,
  Delete as DeleteOutlined,
  Mail as MailOutlined,
  Phone as PhoneOutlined,
  Public as GlobalOutlined,
} from "@mui/icons-material";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  const [isModalVisible, setModalVisible] = useState(false);
  const [isLiked, setLiked] = useState(false);

  const handleDelete = () => {
    dispatch(deleteUser(user.id));
  };

  const toggleLike = () => {
    setLiked((prevLiked) => !prevLiked);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345, margin: "16px auto" }}>
        <CardMedia
          component="img"
          height="140"
          cover="fit"
          alt="avatar"
          src={`https://api.dicebear.com/8.x/avataaars/svg?seed=${user.username}`}
          sx={{
            objectFit: "contain",
            backgroundColor: "#f5f5f5",
          }}
        />

        <CardContent>
          <Typography variant="h6" component="div">
            {user.name}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 1 }}>
            <Typography variant="body2" color="text.secondary">
              <MailOutlined fontSize="small" sx={{ mr: 1 }} />
              {user.email}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <PhoneOutlined fontSize="small" sx={{ mr: 1 }} />
              {user.phone}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <GlobalOutlined fontSize="small" sx={{ mr: 1 }} />
              <Link
                href={`https://${user.website}`}
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
              >
                {`https://${user.website}`}
              </Link>
            </Typography>
          </Box>
        </CardContent>

        <CardActions
          disableSpacing
          sx={{
            justifyContent: "space-between",
            padding: "0 16px",
          }}
        >
          <IconButton onClick={toggleLike} aria-label="like">
            {isLiked ? (
              <HeartFilled sx={{ color: "red" }} />
            ) : (
              <HeartOutlined sx={{ color: "gray" }} />
            )}
          </IconButton>
          <IconButton onClick={() => setModalVisible(true)} aria-label="edit">
            <EditOutlined />
          </IconButton>
          <IconButton
            onClick={handleDelete}
            aria-label="delete"
            sx={{ color: "red" }}
          >
            <DeleteOutlined />
          </IconButton>
        </CardActions>
      </Card>

      <EditUserModal
        user={user}
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
      />
    </>
  );
};

export default UserCard;
