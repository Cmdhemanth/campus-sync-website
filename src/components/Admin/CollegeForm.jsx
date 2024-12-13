import { Box, InputBase, LinearProgress } from "@mui/material";
import styles from "./CollegeForm.module.css";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { styled, alpha } from "@mui/material/styles";
import CollegeCard from "./CollegeCard";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Error } from "@mui/icons-material";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

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

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    fontSize: 20,
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "#F3F6F9",
    border: "1px solid",
    borderColor: "#E0E3E7",
    fontSize: 16,
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
      borderColor: "#2D3843",
    }),
  },
}));

export default function CollegeForm() {
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const imgRef = useRef(null);

  const orgNameRef = useRef(null);
  const orgCityRef = useRef(null);
  const orgStateRef = useRef(null);
  const orgAddressRef = useRef(null);
  const handlerNameRef = useRef(null);
  const handlerEmailRef = useRef(null);
  const handlerPhoneRef = useRef(null);
  const handlerQualificationRef = useRef(null);

  const accountType = "admin";
  const accessToken = "aaa";
  const accountId = "671bbe405efd9c614beb992a";

  const uploadImage = (e) => {
    e.preventDefault();
  };

  const addInstitutionHandler = (e) => {
    e.preventDefault();

    const data = {
      name: orgNameRef.current.value,
      city: orgCityRef.current.value,
      state: orgStateRef.current.value,
      address: orgAddressRef.current.value,

      handler: {
        name: handlerNameRef.current.value,
        email: handlerEmailRef.current.value,
        phone: handlerPhoneRef.current.value,
        qualification: handlerQualificationRef.current.value,
      },
    };
  };

  useEffect(() => {
    setIsMounted(true);

    if (!isMounted) return;

    setIsLoading(true);

    const baseUrl = import.meta.env.VITE_API_URL;
    axios
      .get(`${baseUrl}/institution/list`, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": import.meta.env.VITE_API_KEY,
          "x-account-type": accountType,
          "x-access-token": accessToken,
          "x-account-id": accountId,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [isMounted]);

  console.log(isLoading);

  return (
    <>
      <div className={styles.parent}>
        <div className={styles.cards_container}>
          {isLoading ? (
            <Box sx={{ width: "100%" }}>
              <LinearProgress />
            </Box>
          ) : (
            <>
              <CollegeCard />
              <CollegeCard />
              <CollegeCard />
            </>
          )}
        </div>
        <div className={styles.container}>
          <div className={styles.section}>
            <h3>Organization Details</h3>
            <div className={styles.grid}>
              {/* <label htmlFor="collegeName">College Name</label> */}
              <FormControl variant="standard">
                <InputLabel
                  sx={{ fontSize: "18px" }}
                  shrink
                  htmlFor="bootstrap-input"
                >
                  Organization Name
                </InputLabel>
                <BootstrapInput
                  className={styles.input}
                  placeholder="Enter Organization Name"
                  id="bootstrap-input"
                  ref={orgNameRef}
                />
              </FormControl>
              <FormControl variant="standard" sx={{ width: "100%" }}>
                <InputLabel
                  className={styles.inputLabel}
                  shrink
                  htmlFor="bootstrap-input"
                  sx={{ fontSize: "18px" }}
                >
                  Organization Address
                </InputLabel>
                <BootstrapInput
                  placeholder="EnterStreet Name, Area"
                  id="bootstrap-input"
                  ref={orgAddressRef}
                />
              </FormControl>

              <FormControl variant="standard">
                <InputLabel
                  className={styles.inputLabel}
                  shrink
                  htmlFor="bootstrap-input"
                  sx={{ fontSize: "18px" }}
                >
                  City
                </InputLabel>
                <BootstrapInput
                  placeholder="Enter City"
                  id="bootstrap-input"
                  ref={orgCityRef}
                />
              </FormControl>

              <FormControl variant="standard">
                <InputLabel
                  className={styles.inputLabel}
                  shrink
                  htmlFor="bootstrap-input"
                  sx={{ fontSize: "18px" }}
                >
                  State
                </InputLabel>
                <BootstrapInput
                  placeholder="Enter State"
                  id="bootstrap-input"
                  ref={orgStateRef}
                />
              </FormControl>
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
                  Upload files
                  <VisuallyHiddenInput
                    type="file"
                    onChange={(event) => console.log(event.target.files)}
                    multiple
                  />
                </Button>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h3>Institution SPOC Details</h3>
            <div className={styles.grid}>
              <FormControl variant="standard" sx={{ width: "100%" }}>
                <InputLabel
                  className={styles.inputLabel}
                  shrink
                  htmlFor="bootstrap-input"
                  sx={{ fontSize: "18px" }}
                >
                  SPOC Name
                </InputLabel>
                <BootstrapInput
                  placeholder="Enter SPOC Name"
                  id="bootstrap-input"
                  ref={handlerNameRef}
                />
              </FormControl>
              <FormControl variant="standard" sx={{ width: "100%" }}>
                <InputLabel
                  className={styles.inputLabel}
                  shrink
                  htmlFor="bootstrap-input"
                  sx={{ fontSize: "18px" }}
                >
                  Qualifications
                </InputLabel>
                <BootstrapInput
                  placeholder="Enter Qualifications"
                  id="bootstrap-input"
                  ref={handlerQualificationRef}
                />
              </FormControl>
              <FormControl variant="standard" sx={{ width: "100%" }}>
                <InputLabel
                  className={styles.inputLabel}
                  shrink
                  htmlFor="bootstrap-input"
                  sx={{ fontSize: "18px" }}
                >
                  SPOC Phone Number
                </InputLabel>
                <BootstrapInput
                  placeholder="+91**********"
                  id="bootstrap-input"
                  ref={handlerPhoneRef}
                />
              </FormControl>
              <FormControl variant="standard" sx={{ width: "100%" }}>
                <InputLabel
                  className={styles.inputLabel}
                  shrink
                  htmlFor="bootstrap-input"
                  sx={{ fontSize: "18px" }}
                >
                  SPOC Email Address
                </InputLabel>
                <BootstrapInput
                  placeholder="********@gmail.com"
                  id="bootstrap-input"
                  ref={handlerEmailRef}
                />
              </FormControl>
            </div>
          </div>
          <Button variant="contained" color="success">
            Save
          </Button>
        </div>
      </div>
    </>
  );
}
