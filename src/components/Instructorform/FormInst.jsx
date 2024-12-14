import styles from "./FormInst.module.css";
import Dropdown from "../ExistingInstructor/Dropdown";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { GetTokenCookie, GetUserCookie } from "../../utils/auth/cookies";
import { useState } from "react";
import UserImage from "../../assets/user.png";
import axios from "axios";

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
export default function Form() {
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

  // const addInstructorHandler = (e) => {
  //   e.preventDefault();

  //   const data = {
  //     name: name,
  //     email: email,
  //     phone: phone,
  //     position: position,
  //     image: image,
  //     registration_id: registration,
  //   }

  //   axios
  //     .post(`${import.meta.env.VITE_API_URL}/instructor`, {}
  // };

  // console.log(image);

  return (
    // <div className={styles.container}>
    //   <form>
    //     <div className="space-y-12">
    //       <div className="border-b border-gray-900/10 pb-12">
    //         <Dropdown />
    //         <p classname={styles.text}>OR</p>
    //         <hr />

    //         <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
    //           <div className="sm:col-span-4">
    //             <label
    //               htmlFor="instructor name"
    //               className="block text-sm/6 font-medium text-gray-900 text-align:center"
    //             >
    //               Instructor Name
    //             </label>
    //             <div className="mt-2">
    //               <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
    //                 <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">
    //                   <input
    //                     id="username"
    //                     name="username"
    //                     type="text"
    //                     className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
    //                   />
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="col-span-full">
    //           <label
    //             htmlFor="photo"
    //             className="block text-sm/6 font-medium text-gray-900"
    //           >
    //             Photo
    //           </label>
    //           <div className="mt-2 flex items-center gap-x-3">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               strokeWidth={1.5}
    //               stroke="currentColor"
    //               className="size-6"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    //               />
    //             </svg>

    //             <button
    //               type="button"
    //               className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
    //             >
    //               Change
    //             </button>
    //           </div>
    //         </div>

    //         <div className="col-span-full">
    //           <label
    //             htmlFor="cover-photo"
    //             className="block text-sm/6 font-medium text-gray-900"
    //           >
    //             Cover photo
    //           </label>
    //           <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
    //             <div className="text-center">
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 viewBox="0 0 24 24"
    //                 fill="currentColor"
    //                 className="size-6"
    //               >
    //                 <path
    //                   fillRule="evenodd"
    //                   d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
    //                   clipRule="evenodd"
    //                 />
    //               </svg>
    //               <div className="mt-4 flex text-sm/6 text-gray-600">
    //                 <label
    //                   htmlFor="file-upload"
    //                   className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
    //                 >
    //                   <span>Upload a file</span>
    //                   <input
    //                     id="file-upload"
    //                     name="file-upload"
    //                     type="file"
    //                     className="sr-only"
    //                   />
    //                 </label>
    //                 {/* <p className="pl-1">or drag and drop</p> */}
    //               </div>
    //               <p className="text-xs/5 text-gray-600">
    //                 PNG, JPG, GIF up to 10MB
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="border-b border-gray-900/10 pb-12">
    //       <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
    //         <div className="sm:col-span-4">
    //           <label
    //             htmlFor="email"
    //             className="block text-sm/6 font-medium text-gray-900"
    //           >
    //             Email address
    //           </label>
    //           <div className="mt-2">
    //             <input
    //               id="email"
    //               name="email"
    //               type="email"
    //               autoComplete="email"
    //               className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
    //             />
    //           </div>
    //         </div>

    //         <div className="sm:col-span-2 sm:col-start-1">
    //           <label
    //             htmlFor="phone"
    //             className="block text-sm/6 font-medium text-gray-900"
    //           >
    //             Phone Number
    //           </label>
    //           <div className="mt-2">
    //             <input
    //               id="phone"
    //               name="phone"
    //               type="phone number"
    //               placeholder="+911234567890"
    //               className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </form>
    // </div>
    <div className={styles.container}>
      <div className={styles.first}>
        <label className={styles.label}>
          Assign from an Existing Instructor
        </label>
        <div className="flex justify-center">
          <Dropdown />
        </div>
      </div>
      <p className={styles.text}>OR</p>
      <hr />
      <form className={styles.form}>
        <label className={styles.label}>Create a new Instructor</label>
        <Box sx={{ width: 500, maxWidth: "100%" }}>
          <TextField fullWidth label="Instructor Name" id="fullWidth" />
        </Box>
        <div className={styles.second}>
          <div className={styles.phone}>
            <Box sx={{ width: 180, maxWidth: "100%" }}>
              <TextField
                fullWidth
                label="Qualification"
                id="fullWidth"
                placeholder="Enter Qualifications"
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
              />
            </Box>
          </div>
        </div>
        <label>Upload Image</label>
        <div className={styles.upload}>
          <div
            className={styles.image}
            style={{
              background: "url(" + image + ") no-repeat center center/cover",
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
              Upload files
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
              />
            </Box>
          </div>
        </div>
      </form>
    </div>
  );
}
