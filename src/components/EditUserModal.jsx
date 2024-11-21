import React from "react";
import { useDispatch } from "react-redux";
import { editUser } from "../redux/usersSlice";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Stack,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const EditUserModal = ({ user, isVisible, onClose }) => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string().required("Please enter the name"),
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Email is required"),
    phone: Yup.string().required("Please enter the phone"),
    website: Yup.string().required("Please enter the website"),
  });

  const formik = useFormik({
    initialValues: {
      name: user.name || "",
      email: user.email || "",
      phone: user.phone || "",
      website: user.website || "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form submitted:", values); // Debug log
      dispatch(editUser({ id: user.id, updatedUser: values }));
      onClose();
    },
  });

  return (
    <Dialog open={isVisible} onClose={onClose} fullWidth>
      <DialogTitle>Edit User</DialogTitle>
      <form onSubmit={formik.handleSubmit}>
        <DialogContent>
          <Stack spacing={2}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              fullWidth
              label="Phone"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
            <TextField
              fullWidth
              label="Website"
              name="website"
              value={formik.values.website}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.website && Boolean(formik.errors.website)}
              helperText={formik.touched.website && formik.errors.website}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="secondary">
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default EditUserModal;
