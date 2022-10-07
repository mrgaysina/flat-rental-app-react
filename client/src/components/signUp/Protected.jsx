import axios from "axios";
import React, { useEffect, useState } from "react";

const Protected = ({ user }) => {
  // Could have something here to check for the time when the accesstoken expires
  // and then call the refresh_token endpoint to get a new accesstoken automatically
  const [content, setContent] = useState("You need to login");

  useEffect(() => {
    async function fetchProtected() {
      const result = await axios.post(
        "http://localhost:3001/auth/protected",
        {},
        {
          withCredentials: true,
        }
      );
      if (result.data) 
      console.log(result.data);
      // setContent(result.data);
    }
    fetchProtected();
  }, [user]);

  return <div>{content}</div>;
};

export default Protected;
