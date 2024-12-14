import styles from "../Instructorform/FormInst.module.css";
import UserImage from "../../assets/user.png";
import Dropdown from "../ExistingInstructor/Dropdown";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
("use client");

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import axios from "axios";
import { GetTokenCookie, GetUserCookie } from "../../utils/auth/cookies";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
export default function Form({ open, setOpen }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");
  const [image, setImage] = useState(UserImage);
  const [registration, setRegistration] = useState("");

  const uploadImage = (e) => {
    e.preventDefault();
    console.log("Uploading");

    const user = GetUserCookie();
    const accountType = user.account_type;
    const accountId = user.id;
    const accessToken = GetTokenCookie();

    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    const baseUrl = import.meta.env.VITE_API_URL;
    axios
      .post(`${baseUrl}/image/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "x-api-key": import.meta.env.VITE_API_KEY,
          "x-account-type": accountType,
          "x-access-token": accessToken,
          "x-account-id": accountId,
        },
      })
      .then((response) => {
        const url = response.data.data.url;
        console.log(response.data);

        setImage(url);
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
      });
  };

  const addInstructorHandler = (e) => {
    e.preventDefault();

    setOpen(false);
  };

  console.log(image);

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 px-4 py-3"
          >
            <div className={styles.container}>
              <form className={styles.form}>
                <label className={styles.label}>Enter Instructor Name</label>
                <Box sx={{ width: 500, maxWidth: "100%" }}>
                  <TextField
                    fullWidth
                    label="Instructor Name"
                    id="fullWidth"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Box>
                <div className={styles.second}>
                  <div className={styles.phone}>
                    <Box sx={{ width: 180, maxWidth: "100%" }}>
                      <TextField
                        fullWidth
                        label="Qualification"
                        id="fullWidth"
                        placeholder="Enter Qualifications"
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                      />
                    </Box>
                  </div>
                  <div className={styles.email}>
                    <Box sx={{ width: 285, maxWidth: "100%" }}>
                      <TextField
                        fullWidth
                        label="Registration ID"
                        id="fullWidth"
                        placeholder="Enter Registration ID"
                        value={registration}
                        onChange={(e) => setRegistration(e.target.value)}
                      />
                    </Box>
                  </div>
                </div>
                <label>Upload Image</label>
                <div className={styles.upload}>
                  <div
                    className={styles.image}
                    style={{
                      background:
                        "url(" + image + ") no-repeat center center/cover",
                    }}
                  />

                  <div>
                    <Button
                      component="label"
                      role={undefined}
                      variant="contained"
                      tabIndex={-1}
                      startIcon={<CloudUploadIcon />}
                    >
                      Upload Image
                      <VisuallyHiddenInput
                        type="file"
                        onChange={uploadImage}
                        multiple
                      />
                    </Button>
                  </div>
                </div>
                <div className={styles.second}>
                  <div className={styles.phone}>
                    <Box sx={{ width: 180, maxWidth: "100%" }}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        id="fullWidth"
                        placeholder="+91**********"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </Box>
                  </div>
                  <div className={styles.email}>
                    <Box sx={{ width: 285, maxWidth: "100%" }}>
                      <TextField
                        fullWidth
                        label="Email"
                        id="fullWidth"
                        placeholder="********@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Box>
                  </div>
                </div>
              </form>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={addInstructorHandler}
                className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 sm:ml-3 sm:w-auto"
              >
                Save
              </button>
              <button
                type="button"
                data-autofocus
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
