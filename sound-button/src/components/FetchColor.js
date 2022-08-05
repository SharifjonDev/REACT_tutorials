import React from "react";
import axios from "axios";
import ChangeColor from "./ChangeColor";

const FetchColor = () => {
  const [color, setColor] = React.useState("");

  React.useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const res = await axios.get("https://54.uz/rang.php/status", {
        headers: {
          Accept: "application/json",
        },
      });
      setColor(res.data.status);
    } catch (error) {
      console.log(error);
    }
  }

  return <ChangeColor color={color} />;
};

export default FetchColor;
