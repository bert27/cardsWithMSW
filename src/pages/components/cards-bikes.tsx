import { Box, CircularProgress, Grid, Paper, Typography } from "@mui/material";

import { useEffect, useState } from "react";
import { CardBike } from "./card-bike";
import { ResponseInteface } from "../../models/bikes";

interface CardBikesInterface {
  typeSelected: string | null;
}

export const CardBikes = (props: CardBikesInterface) => {
  const { typeSelected } = props;
  const [cardsResponse, setCardsResponse] = useState(
    undefined as ResponseInteface | undefined
  );

  const getFetch = async () => {
    setCardsResponse(undefined)
    const response = await fetch(
      typeSelected
        ? `/bikes?typeSelected=${encodeURIComponent(typeSelected)}`
        : "/bikes"
    );
    const data = await response.json();
    setCardsResponse(data);
  };

  useEffect(() => {
    getFetch();
  }, [typeSelected]);

  return (
    <>
      <Paper elevation={2} sx={{ padding: "1em", background: "#C0C999" }}>
        <Typography variant="h4" gutterBottom>
          Bikes:
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "50vh",
          }}
        >
          {cardsResponse ? (
            <Grid container spacing={3}>
              {Object.values(cardsResponse).flat().map((card) => (
                <Grid key={card.id} item xs={12} sm={6} md={4}>
                  <CardBike card={card} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <CircularProgress color="success" />
          )}
        </Box>
      </Paper>
    </>
  );
};
