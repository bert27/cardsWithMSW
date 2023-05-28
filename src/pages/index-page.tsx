import { Button, Typography, Box } from "@mui/material";
import { CardBikes } from "./components/cards-bikes";
import { SelectorBikes } from "./components/selector-bikes";
import { useState } from "react";

export const IndexPage = (props: any) => {
  const types = [
    "Bicicletas eléctricas",
    "Bicicletas normales",
    "Bicicletas antiguas",
  ];

  const [typeSelected, setTypeSelected] = useState(null as null | string);

  const selectType = (bikeSelected: string) => {
    setTypeSelected(bikeSelected);
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#0B2447",
          minHeight: "100vh",
          padding: "2em",
          color: "white",
          width: "100%",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Encuentra tu bicicleta:
        </Typography>
        <SelectorBikes typeSelected={typeSelected} selectType={selectType} types={types}/>
        <CardBikes typeSelected={typeSelected}/>
      </Box>
    </>
  );
};
