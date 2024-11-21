import React, { useEffect } from "react";
import { Grid, Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux/usersSlice";
import UserCard from "../components/UserCard";
import LoadingSpinner from "../components/LoadingSpinner";

const Home = () => {
  const dispatch = useDispatch();
  const { data: users, status } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (status === "loading") return <LoadingSpinner />;
  if (status === "failed") return <p>Error loading users.</p>;
  console.log("users are : ",users)

  return (
    <Box className="app-container" sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2}>
        {users.map((user) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={user.id}>
            <UserCard user={user} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
