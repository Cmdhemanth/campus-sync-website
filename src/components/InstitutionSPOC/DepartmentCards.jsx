import { useEffect, useState } from "react";
import DepartmentCard from "./DepartmentCard";
import gridStyles from "../ClassCards/Grids.module.css";
import axios from "axios";
import { GetTokenCookie, GetUserCookie } from "../../utils/auth/cookies";

export default function DepartmentCards() {
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (!isMounted) return;

    setIsLoading(true);

    const user = GetUserCookie();
    const accountType = user.account_type;
    const accountId = user.id;
    const accessToken = GetTokenCookie();

    axios
      .get(`${import.meta.env.VITE_API_URL}/department/list`, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": import.meta.env.VITE_API_KEY,
          "x-account-type": accountType,
          "x-access-token": accessToken,
          "x-account-id": accountId,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [isMounted]);

  return (
    <>
      <div className={gridStyles.parent}>
        <DepartmentCard />

        <DepartmentCard />
        <DepartmentCard />
      </div>
    </>
  );
}
