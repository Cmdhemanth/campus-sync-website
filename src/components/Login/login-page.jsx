import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import styles from "./login-page.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  GetRefreshTokenCookie,
  GetTokenCookie,
  GetUserCookie,
} from "../../utils/auth/cookies";
import { PostRequest } from "../../utils/axios-requests/post-request";
import { RefreshUser, SaveUserData } from "../../utils/auth/user-utils";
import Logo from "../../assets/CampusSync-Logo.png";

export default function Signin() {
  const router = useNavigate();

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [accountTypeError, setAccountTypeError] = useState("");

  const handlePhoneChange = (event) => {
    const value = event.target.value;

    if (value.length > 10) return;

    if (Number(value) || value === "") {
      setPhoneError("");
      setPhone(value);
    }
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;

    setPasswordError("");
    setPassword(value);
  };

  const handleAccountTypeChange = (event) => {
    const value = event.target.value;

    setAccountTypeError("");
    setAccountType(value);
  };

  const handleSignIn = async () => {
    if (phone.length !== 10) {
      setPhoneError("Invalid phone number");
      return;
    }

    if (!password.length) {
      setPasswordError("Password is required");
      return;
    }

    if (!accountType) {
      setAccountTypeError("Account type is required");
      return;
    }

    const reqBody = {
      phone,
      password,
    };

    const endpoint = `${import.meta.env.VITE_API_URL}/auth/login`;
    console.log("Endpoint - ", endpoint);

    const headers = {
      "x-api-key": import.meta.env.VITE_API_KEY,
      "x-account-type": accountType,
    };

    try {
      const response = await PostRequest(endpoint, reqBody, headers);

      const data = response.data;
      if (response.success) {
        SaveUserData(data.user, data.access_token, data.refresh_token);

        if (accountType === "admin") router("/admin");
        else if (accountType === "institution_spoc")
          router("/institution-spoc");
        else if (accountType === "department_spoc") router("/department-spoc");
        else if (accountType === "instructor") router("/instructor");
        else if (accountType === "student") router("/student");
      }
    } catch (error) {
      console.log("Error - ", error.message);
    }
  };

  useEffect(() => {
    if (GetUserCookie() && GetTokenCookie()) {
      router("/vendor");
    } else if (GetRefreshTokenCookie()) {
      RefreshUser().then((isRefreshed) => {
        console.log(isRefreshed);
        if (isRefreshed) {
          router("/vendor");
        }
      });
    }
  });

  return (
    <>
      <div className={styles.main}>
        <img src={Logo} className={styles.logo} />
        <h1>Welcome to CampusSync</h1>
        <section className={styles.signin_container}>
          <h2>Sign In</h2>
          <TextField
            required
            error={phoneError.length > 0}
            id="phone-input"
            label="Phone Number"
            value={phone}
            onChange={handlePhoneChange}
            helperText={phoneError}
          />
          <TextField
            required
            error={passwordError.length > 0}
            id="password-input"
            label="Password"
            value={password}
            onChange={handlePasswordChange}
            type="password"
            helperText={passwordError}
          />

          <FormControl
            sx={{ minWidth: 120 }}
            error={accountTypeError.length > 0}
          >
            <InputLabel id="demo-simple-select-error-label">
              Account Type
            </InputLabel>
            <Select
              labelId="demo-simple-select-error-label"
              id="demo-simple-select-error"
              value={accountType}
              label="Account Type"
              onChange={handleAccountTypeChange}
            >
              <MenuItem value={"admin"}>Admin</MenuItem>
              <MenuItem value={"institution_spoc"}>Institution SPOC</MenuItem>
              <MenuItem value={"department_spoc"}>Department SPOC</MenuItem>
              <MenuItem value={"instructor"}>Instructor</MenuItem>
              <MenuItem value={"student"}>Student</MenuItem>
            </Select>
            <FormHelperText>{accountTypeError}</FormHelperText>
          </FormControl>

          <Button variant="contained" size="large" onClick={handleSignIn}>
            Signin
          </Button>
        </section>
      </div>
    </>
  );
}
