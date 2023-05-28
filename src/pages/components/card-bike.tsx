import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";

import { useState } from "react";
import { CardBikeInterface } from "../../models/bikes";
import { ModalGeneric } from "../../components/modal-generic";

const color = "#009688";

interface CardBikeProps {
  card: CardBikeInterface;
}

export const CardBike = (props: CardBikeProps) => {
  const { card } = props;
  const [isOpenModalConfig, setIsOpenModalConfig] = useState(false);

  const onClickedCard = () => {
    setIsOpenModalConfig(isOpenModalConfig);
  };

  return (
    <Card>
      <CardContent>
        <CardActionArea sx={{ padding: "1em" }} onClick={onClickedCard}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                marginBottom: "1em",
              }}
            >
              <Typography
                variant="h6"
                gutterBottom={false}
                sx={{ fontWeight: "bold", color: color }}
              >
                {card.name}
              </Typography>
              <Chip
                label={card.type}
                color="primary"
                sx={{ background: "#0C2446" }}
              />
            </Box>

            <Box
              sx={{ display: "flex", justifyContent: "center", width: "100%" }}
            >
              <img
                src={card.image}
                className="FotoMenuB"
                width={"200px"}
                height={"200px"}
                alt={"bike"}
              />
            </Box>

            <Typography variant="subtitle1" gutterBottom>
              {card.description}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              sx={{
                backgroundColor: "#009688",
                "&:hover": {
                  backgroundColor: "#7faca8",
                },
              }}
              variant="contained"
            >
              {"Elegir"}
            </Button>
          </Box>
          <ModalGeneric
            isOpenModalConfig={isOpenModalConfig}
            setIsOpenModalConfig={setIsOpenModalConfig}
            card={card}
          />
        </CardActionArea>
      </CardContent>
    </Card>
  );
};
