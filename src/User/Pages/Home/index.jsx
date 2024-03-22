import React, { useEffect, useState } from "react";
import Banner from "../../../Common/Components/Banner";
import MainActions from "../../Components/MainActions";
import { Box, Button, Container, Typography } from "@mui/material";
import CategoryBox from "../../Components/SubComponents/CategoryBox";
// import { useNavigate } from "react-router-dom";
import UserApis from "../../../api/UserApis";

const Home = () => {
  // const [ProCategory, setProCategory] = useState([]);


  const ProCategory = [
    {
      "_id": "6460b0e99ea9bacff3d2f9c0",
      "categoryImage": "Image_1684058343196.jpeg",
      "imgPath": "https://firebasestorage.googleapis.com/v0/b/farmeasy-fa062.appspot.com/o/Category%2FProduct%2FImage_1684058343196.jpeg?alt=media&token=69858602-5a2f-4445-95ba-930e173b397b",
      "categoryName": "tractor",
      "categoryDesc": "tractor is used for pushing or pulling the machinery, thereby making the farming operations more convenient like ploughing, tilling, sowing, and harrowing.",
      "addedBy": {
        "_id": "645784a44243c1bad7952468",
        "name": "chetan",
        "email": "chetan002@gmail.com",
        "isAdmin": true
      },
      "status": true,
      "createdAt": "2023-05-14T09:57:51.829Z",
      "updateLogs": [],
      "__v": 0
    },
    {
      "_id": "6460b2639ea9bacff3d2f9c9",
      "categoryImage": "Image_1684058719683.png",
      "imgPath": "https://firebasestorage.googleapis.com/v0/b/farmeasy-fa062.appspot.com/o/Category%2FProduct%2FImage_1684058719683.png?alt=media&token=aa42ef8f-2323-45cd-afd6-fde8750ea19a",
      "categoryName": "harvester",
      "categoryDesc": "A harvester is a machine which cuts and often collects crops such as wheat, corn, or vegetables. ",
      "addedBy": {
        "_id": "645784a44243c1bad7952468",
        "name": "chetan",
        "email": "chetan002@gmail.com",
        "isAdmin": true
      },
      "status": true,
      "createdAt": "2023-05-14T09:57:51.829Z",
      "updateLogs": [],
      "__v": 0
    },
    {
      "_id": "6460b20f9ea9bacff3d2f9c6",
      "categoryImage": "Image_1684058635351.webp",
      "imgPath": "https://firebasestorage.googleapis.com/v0/b/farmeasy-fa062.appspot.com/o/Category%2FProduct%2FImage_1684058635351.webp?alt=media&token=fad56efe-4006-4f66-bd6b-4127eb0b1fab",
      "categoryName": "cultivator",
      "categoryDesc": "cultivator, farm implement or machine designed to stir the soil around a crop as it matures to promote growth and destroy weeds.",
      "addedBy": {
        "_id": "645784a44243c1bad7952468",
        "name": "chetan",
        "email": "chetan002@gmail.com",
        "isAdmin": true
      },
      "status": true,
      "createdAt": "2023-05-14T09:57:51.829Z",
      "updateLogs": [],
      "__v": 0
    },
    {
      "_id": "6460b2a89ea9bacff3d2f9cd",
      "categoryImage": "Image_1684058790000.webp",
      "imgPath": "https://firebasestorage.googleapis.com/v0/b/farmeasy-fa062.appspot.com/o/Category%2FProduct%2FImage_1684058790000.webp?alt=media&token=ad0d9216-4f7d-498e-b6bd-f43e9c12edba",
      "categoryName": "sprayer",
      "categoryDesc": "Breaking the chemical solution in to fine droplets of effective size. Distributing the droplets uniformly over the plants. Regulating the amount of liquid applied on plants to avoid excessive application",
      "addedBy": {
        "_id": "645784a44243c1bad7952468",
        "name": "chetan",
        "email": "chetan002@gmail.com",
        "isAdmin": true
      },
      "status": true,
      "createdAt": "2023-05-14T09:57:51.829Z",
      "updateLogs": [],
      "__v": 0
    },
    {
      "_id": "6460b35b9ea9bacff3d2f9da",
      "categoryImage": "Image_1684058969270.jpeg",
      "imgPath": "https://firebasestorage.googleapis.com/v0/b/farmeasy-fa062.appspot.com/o/Category%2FProduct%2FImage_1684058969270.jpeg?alt=media&token=fc79217d-9fe8-47ff-93d2-8d32a1f2b08a",
      "categoryName": "tractor trailer",
      "categoryDesc": "Tractor trailers are very helpful agricultural machinery if you use them to transport goods and materials from one location to another.",
      "addedBy": {
        "_id": "645784a44243c1bad7952468",
        "name": "chetan",
        "email": "chetan002@gmail.com",
        "isAdmin": true
      },
      "status": true,
      "createdAt": "2023-05-14T09:57:51.829Z",
      "updateLogs": [],
      "__v": 0
    },
    {
      "_id": "6460b2da9ea9bacff3d2f9d2",
      "categoryImage": "Image_1684058841106.jpeg",
      "imgPath": "https://firebasestorage.googleapis.com/v0/b/farmeasy-fa062.appspot.com/o/Category%2FProduct%2FImage_1684058841106.jpeg?alt=media&token=2adc0e5e-2ee2-408c-bcd1-2d5e4294aec8",
      "categoryName": "seed driller",
      "categoryDesc": "A seed drill is a device used in agriculture that sows seeds for crops by positioning them in the soil and burying them to a specific depth while being dragged by a tractor",
      "addedBy": {
        "_id": "645784a44243c1bad7952468",
        "name": "chetan",
        "email": "chetan002@gmail.com",
        "isAdmin": true
      },
      "status": true,
      "createdAt": "2023-05-14T09:57:51.829Z",
      "updateLogs": [],
      "__v": 0
    },
    {
      "_id": "6460b30d9ea9bacff3d2f9d6",
      "categoryImage": "Image_1684058891417.jpeg",
      "imgPath": "https://firebasestorage.googleapis.com/v0/b/farmeasy-fa062.appspot.com/o/Category%2FProduct%2FImage_1684058891417.jpeg?alt=media&token=a85bfdbb-7a7c-4f9a-b9df-d83940cf1f3a",
      "categoryName": "plough/Plows",
      "categoryDesc": "A plough or plow is a farm tool for loosening or turning the soil before sowing seed or planting.",
      "addedBy": {
        "_id": "645784a44243c1bad7952468",
        "name": "chetan",
        "email": "chetan002@gmail.com",
        "isAdmin": true
      },
      "status": true,
      "createdAt": "2023-05-14T09:57:51.829Z",
      "updateLogs": [
        {
          "ip": "::1",
          "updatedBy": "645784a44243c1bad7952468",
          "updatedAt": "2024-03-16T16:37:58.815Z",
          "_id": "65f5cf43e1af976feb3c386e"
        }
      ],
      "__v": 1
    },
    {
      "_id": "65f5ceede1af976feb3c3863",
      "categoryImage": "Image_1710608106463.jpeg",
      "imgPath": "https://firebasestorage.googleapis.com/v0/b/farmeasy-fa062.appspot.com/o/Category%2FProduct%2FImage_1710608106463.jpeg?alt=media&token=b9bc03a5-896f-4c1d-9740-4bac79dbd7f9",
      "categoryName": "balers",
      "categoryDesc": "Balers (or Hay baler) make collecting materials less arduous for farmers as they collect and compress raked crops like hay, flax straw, silage, or corn stalks.",
      "addedBy": {
        "_id": "645784a44243c1bad7952468",
        "name": "chetan",
        "email": "chetan002@gmail.com",
        "isAdmin": true
      },
      "status": true,
      "createdAt": "2024-03-16T16:37:58.815Z",
      "updateLogs": [],
      "__v": 0
    },
    {
      "_id": "65f5d16ae1af976feb3c3877",
      "categoryImage": "Image_1710608744419.png",
      "imgPath": "https://firebasestorage.googleapis.com/v0/b/farmeasy-fa062.appspot.com/o/Category%2FProduct%2FImage_1710608744419.png?alt=media&token=5a358a90-6e54-4c75-893c-ea57b2b875a9",
      "categoryName": "harrows",
      "categoryDesc": "A harrow, a type of pull-behind mower, is one of many different types of tractor attachments but is often attached behind an ATV or a tractor to blow up and smooth out the soil surface, evenly distribute the crop residue, and postpone the growth of weeds.",
      "addedBy": {
        "_id": "645784a44243c1bad7952468",
        "name": "chetan",
        "email": "chetan002@gmail.com",
        "isAdmin": true
      },
      "status": true,
      "createdAt": "2024-03-16T16:37:58.815Z",
      "updateLogs": [],
      "__v": 0
    }
  ];

  // const [ComCategory, setComCategory] = useState([]);
  const ComCategory = [
    {
      "_id": "6460b4569ea9bacff3d2f9e6",
      "categoryImage": "Image_1684059217728.jpeg",
      "imgPath": "https://firebasestorage.googleapis.com/v0/b/farmeasy-fa062.appspot.com/o/Category%2FCommodity%2FImage_1684059217728.jpeg?alt=media&token=31dd0efd-f126-41c1-8959-7a4376960980",
      "categoryName": "fertilizers",
      "categoryDesc": "used to fertilize soil to increase crops production",
      "addedBy": {
        "_id": "645784a44243c1bad7952468",
        "name": "chetan",
        "email": "chetan002@gmail.com",
        "isAdmin": true
      },
      "status": true,
      "createdAt": "2023-05-14T09:57:51.839Z",
      "updateLogs": [],
      "__v": 0
    },
    {
      "_id": "6460b5149ea9bacff3d2f9e9",
      "categoryImage": "Image_1684059410051.webp",
      "imgPath": "https://firebasestorage.googleapis.com/v0/b/farmeasy-fa062.appspot.com/o/Category%2FCommodity%2FImage_1684059410051.webp?alt=media&token=f4f941fc-bb50-448c-bb0e-0ad8cfa503a0",
      "categoryName": "pesticides",
      "categoryDesc": "Pesticides are chemical compounds that are used to kill pests, including insects, rodents, fungi and unwanted plants (weeds). ",
      "addedBy": {
        "_id": "645784a44243c1bad7952468",
        "name": "chetan",
        "email": "chetan002@gmail.com",
        "isAdmin": true
      },
      "status": true,
      "createdAt": "2023-05-14T09:57:51.839Z",
      "updateLogs": [],
      "__v": 0
    },
    {
      "_id": "6460b5839ea9bacff3d2f9ef",
      "categoryImage": "Image_1684059520430.jpeg",
      "imgPath": "https://firebasestorage.googleapis.com/v0/b/farmeasy-fa062.appspot.com/o/Category%2FCommodity%2FImage_1684059520430.jpeg?alt=media&token=7cae5562-497d-455b-a2d4-4f062f969bc0",
      "categoryName": "seeds",
      "categoryDesc": "seed is anything that can be sown, or any part of the crop from which a new crop can grow.",
      "addedBy": {
        "_id": "645784a44243c1bad7952468",
        "name": "chetan",
        "email": "chetan002@gmail.com",
        "isAdmin": true
      },
      "status": true,
      "createdAt": "2023-05-14T09:57:51.839Z",
      "updateLogs": [],
      "__v": 0
    },
    {
      "_id": "6460b62b9ea9bacff3d2f9f6",
      "categoryImage": "Image_1684059688842.jpg",
      "imgPath": "https://firebasestorage.googleapis.com/v0/b/farmeasy-fa062.appspot.com/o/Category%2FCommodity%2FImage_1684059688842.jpg?alt=media&token=8e74104e-56bf-4bfd-b010-741dbb2cb6eb",
      "categoryName": "fungicide",
      "categoryDesc": "Fungicides are pesticides that kill or prevent the growth of fungi and their spores. They can be used to control fungi that damage plants, including rusts, mildews and blights. They might also be used to control mold and mildew in other settings",
      "addedBy": {
        "_id": "645784a44243c1bad7952468",
        "name": "chetan",
        "email": "chetan002@gmail.com",
        "isAdmin": true
      },
      "status": true,
      "createdAt": "2023-05-14T09:57:51.839Z",
      "updateLogs": [],
      "__v": 0
    },
    {
      "_id": "6460b5fb9ea9bacff3d2f9f3",
      "categoryImage": "Image_1684059641408.jpeg",
      "imgPath": "https://firebasestorage.googleapis.com/v0/b/farmeasy-fa062.appspot.com/o/Category%2FCommodity%2FImage_1684059641408.jpeg?alt=media&token=af81b6fc-da94-47e1-b876-ce401bd5ad24",
      "categoryName": "insecticides",
      "categoryDesc": "Insecticides are chemicals used to control insects by killing them or preventing them from engaging in undesirable or destructive behaviors",
      "addedBy": {
        "_id": "645784a44243c1bad7952468",
        "name": "chetan",
        "email": "chetan002@gmail.com",
        "isAdmin": true
      },
      "status": true,
      "createdAt": "2023-05-14T09:57:51.839Z",
      "updateLogs": [],
      "__v": 0
    },
    {
      "_id": "6460b5599ea9bacff3d2f9ec",
      "categoryImage": "Image_1684059476153.png",
      "imgPath": "https://firebasestorage.googleapis.com/v0/b/farmeasy-fa062.appspot.com/o/Category%2FCommodity%2FImage_1684059476153.png?alt=media&token=15711b7a-307c-4a08-9a04-0f156a0512bb",
      "categoryName": "herbicide",
      "categoryDesc": "Herbicides are chemicals used to manipulate or control undesirable vegetation. Herbicide application occurs most frequently in row-crop farming, where they are applied before or during planting to maximize crop productivity by minimizing other vegetation.",
      "addedBy": {
        "_id": "645784a44243c1bad7952468",
        "name": "chetan",
        "email": "chetan002@gmail.com",
        "isAdmin": true
      },
      "status": true,
      "createdAt": "2023-05-14T09:57:51.839Z",
      "updateLogs": [],
      "__v": 0
    }
  ];

  useEffect(() => {
    UserApis.serverReq().then((val) => {
      console.log(val.data);
    });
  }, []);


  return (
    <>
      <Banner />
      <MainActions />
      <Container sx={{ paddingBottom: 3, paddingTop: 3 }}>

        <Typography
          fontSize={25}
          fontWeight={"bold"}
          paddingLeft={8}
          color={"secondary"}
          marginY={5}
          style={{ textDecoration: "underline" }}
        >
          All Products Category
        </Typography>


        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            gap: 3,
            flexWrap: "wrap",

          }}
        >
          {ProCategory?.map((value, index) => {
            const { imgPath, categoryName } = value;
            return (
              <CategoryBox
                key={index}
                img={imgPath}
                name={categoryName}
                isPro={true}
              />
            );
          })}
        </Box>
      </Container>

      <Container sx={{ paddingBottom: 5, paddingTop: 3 }}>
        <Typography
          fontSize={25}
          fontWeight={"bold"}
          paddingLeft={8}
          color={"secondary"}
          marginY={5}
          style={{ textDecoration: "underline" }}
        >
          All Commodity Category
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            gap: 3,
            flexWrap: "wrap",
          }}
        >
          {ComCategory?.map((value, index) => {
            const { imgPath, categoryName } = value;
            return (
              <CategoryBox
                key={index}
                img={imgPath}
                name={categoryName}
                isPro={false}
              />
            );
          })}
        </Box>
      </Container>
    </>
  );
};

export default Home;
