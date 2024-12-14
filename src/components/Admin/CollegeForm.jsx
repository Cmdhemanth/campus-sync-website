import { Box, InputBase, LinearProgress } from "@mui/material";
import styles from "./CollegeForm.module.css";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { styled, alpha } from "@mui/material/styles";
import CollegeCard from "./CollegeCard";
import { useEffect, useState } from "react";
import axios from "axios";
import UserImage from "../../assets/user.png";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
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
  const [imgUrl, setImgUrl] = useState(UserImage);

  const [orgnName, setOrgName] = useState("");
  const [orgCity, setOrgCity] = useState("");
  const [orgState, setOrgState] = useState("");
  const [orgAddress, setOrgAddress] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userQualification, setUserQualification] = useState("");

  const [institutions, setInstitutions] = useState([]);

  const user = GetUserCookie();
  const token = GetTokenCookie();

  const accountType = user.account_type;
  const accessToken = token;
  const accountId = user.id;

  const uploadImage = (e) => {
    e.preventDefault();

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

        setImgUrl(url);
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
      });
  };

  const addInstitutionHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const data = {
      name: orgnName,
      city: orgCity,
      state: orgState,
      address: orgAddress,
      image: imgUrl,

      handler: {
        name: userName,
        email: userEmail,
        phone: Number(userPhone),
        qualification: userQualification,
      },
    };

    const baseUrl = import.meta.env.VITE_API_URL;
    axios
      .post(`${baseUrl}/institution/add`, data, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": import.meta.env.VITE_API_KEY,
          "x-account-type": accountType,
          "x-access-token": accessToken,
          "x-account-id": accountId,
        },
      })
      .then((res) => {
        if (res.data.success) {
          setInstitutions((prevValues) => [
            ...prevValues,
            {
              name: orgnName,
              city: orgCity,
              state: orgState,
              address: orgAddress,
              image: imgUrl,

              handler: {
                name: userName,
                email: userEmail,
                phone: Number(userPhone),
                qualification: userQualification,
              },
            },
          ]);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
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
        const data = res.data.data;
        if (!data) return;

        setInstitutions(data.institutions);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [isMounted]);

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
              {institutions.map((institution) => (
                <CollegeCard key={institution.id} institution={institution} />
              ))}
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
                  value={orgnName}
                  onChange={(e) => setOrgName(e.target.value)}
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
                  value={orgAddress}
                  onChange={(e) => setOrgAddress(e.target.value)}
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
                  value={orgCity}
                  onChange={(e) => setOrgCity(e.target.value)}
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
                  value={orgState}
                  onChange={(e) => setOrgState(e.target.value)}
                />
              </FormControl>
            </div>
            <label>Upload Image</label>
            <div className={styles.upload}>
              <div
                className={styles.image}
                style={{
                  background:
                    "url(" + imgUrl + ") no-repeat center center/cover",
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
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
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
                  value={userQualification}
                  onChange={(e) => setUserQualification(e.target.value)}
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
                  value={userPhone}
                  onChange={(e) => setUserPhone(e.target.value)}
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
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
              </FormControl>
            </div>
          </div>
          <Button
            variant="contained"
            color="success"
            onClick={addInstitutionHandler}
          >
            Save
          </Button>
        </div>
      </div>
    </>
  );
}
