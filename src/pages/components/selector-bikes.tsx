import { Box, Button } from "@mui/material";


interface SelectorBikesProps {
  typeSelected: string | null;
  selectType: (bikeSelected: string) => void;
  types: string[]
}

export const SelectorBikes = (props: SelectorBikesProps) => {
const {typeSelected,selectType,types}=props
  return (
    <Box
      sx={{
        marginTop: "10px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {types.map((type) => (
        <Box sx={{ padding: "1em" }}>
          <Button
            sx={{
              backgroundColor: type === typeSelected ? "#005a51" : "#009688",
              "&:hover": {
                backgroundColor: "#7faca8",
              },
            }}
            variant="contained"
            onClick={() => {
              selectType(type);
            }}
          >
            {type}
          </Button>
        </Box>
      ))}
    </Box>
  );
};
