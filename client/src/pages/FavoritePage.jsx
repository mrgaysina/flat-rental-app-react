import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import { Carousel } from "react-responsive-carousel";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import axios from "axios";

export default function FavoritePage() {
  const navigate = useNavigate();
  const user = useSelector((store) => store.toolkit.user);
  const userId = user.id;
  const [favorites, setFavorite] = useState([])

  useEffect(() => {
    axios
      .post(`http://localhost:3001/favorite/${userId}`, { userId }, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        setFavorite(res.data.favorites)
      });
  }, []);
  
  console.log("user from favorite", user);
  if (!user.accesstoken) return <Navigate to="/" />;

  return (
    <div>
      {favorites.map((favorite) => {
  return <div>{favorite['Flats.Favorite.flatId']}</div>
      })}
    </div>
    
  );
}
