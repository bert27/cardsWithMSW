// src/mocks/handlers.js
import { rest } from "msw";
import { CardBikeInterface, ResponseInteface } from "../models/bikes";
import bikePicture from "../images/bike.jpg";
import bikePictureOld from "../images/bike_old.jpg";
import bikePictureElectric from "../images/bike_electric.jpg";

const electrics = [
  {
    id: 1,
    name: "Bike 1",
    type: "electrica",
    image: bikePictureElectric,
    description: "description",
  },
  {
    id: 2,
    name: "Bike 2",
    type: "electrica",
    image: bikePictureElectric,
    description: "description",
  },
  {
    id: 3,
    name: "Bike 4",
    type: "electrica",
    image: bikePictureElectric,
    description: "description",
  } as CardBikeInterface,
];
const olds = [
  {
    id: 1,
    name: "Bike 1",
    type: "antigua",
    image: bikePictureOld,
    description: "description",
  },
];
const bikes = [
  {
    id: 1,
    name: "Bike 1",
    type: "normal",
    image: bikePicture,
    description: "description",
  },
];
const bikesData = {
  electrics,
  olds,
  bikes,
} as ResponseInteface;

export const handlers = [
  rest.get("/bikes", async (req, res, ctx) => {
    const typeSelect = req.url.searchParams.get("typeSelected");
    const getBikesData = () => {
      switch (typeSelect) {
        case "Bicicletas eléctricas":
          return [electrics];
        case "Bicicletas normales":
          return [bikes];
        case "Bicicletas antiguas":
          return [olds];

        default:
          return bikesData;
      }
    };

    return res(ctx.status(200), ctx.delay(2000), ctx.json(getBikesData()));
  }),
];
