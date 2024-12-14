import styles from "../Instructorform/FormInst.module.css";
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
                <label className={styles.label}>Enter Student Name</label>
                <Box sx={{ width: 500, maxWidth: "100%" }}>
                  <TextField fullWidth label="Student Name" id="fullWidth" />
                </Box>
                <div className={styles.second}>
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
                  <img src="src\assets\user.png" className={styles.image} />
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
                        onChange={(event) => console.log(event.target.files)}
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
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={() => setOpen(false)}
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
