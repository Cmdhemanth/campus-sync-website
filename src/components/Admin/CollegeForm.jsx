import { InputBase } from "@mui/material";
import styles from "./CollegeForm.module.css";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { styled, alpha } from "@mui/material/styles";
import CollegeCard from "./CollegeCard";
import Button from "@mui/material/Button";

// const CssTextField = styled(TextField)({
//   "& label.Mui-focused": {
//     color: "#A0AAB4",
//   },
//   "& .MuiInput-underline:after": {
//     borderBottomColor: "#B2BAC2",
//   },
//   "& .MuiOutlinedInput-root": {
//     "& fieldset": {
//       borderColor: "#E0E3E7",
//     },
//     "&:hover fieldset": {
//       borderColor: "#B2BAC2",
//     },
//     "&.Mui-focused fieldset": {
//       borderColor: "#6F7E8C",
//     },
//   },
// });

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
  return (
    <>
      <div className={styles.parent}>
        <div className={styles.cards_container}>
          <CollegeCard />
          <CollegeCard />
          <CollegeCard />
          <CollegeCard />
          <CollegeCard />
          <CollegeCard />
          <CollegeCard />
          <CollegeCard />
          <CollegeCard />
        </div>
        <div className={styles.container}>
          <div className={styles.section}>
            <h3>Orgainzation Details</h3>
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
                <BootstrapInput placeholder="Enter City" id="bootstrap-input" />
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
                />
              </FormControl>
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
