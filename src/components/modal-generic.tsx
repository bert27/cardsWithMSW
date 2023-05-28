import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { CardBikeInterface } from "../models/bikes";

interface ModalConfigProps {
  isOpenModalConfig: boolean;
  setIsOpenModalConfig: React.Dispatch<React.SetStateAction<boolean>>;
  card: CardBikeInterface;

}

export const ModalGeneric = (props: ModalConfigProps) => {
  const {
    isOpenModalConfig,
    setIsOpenModalConfig,
    card
  } = props;

  const [dataForm, setdataForm] = useState({
    name: "",
    phoneNumber: 0,
    days: 1,
    email: "",

  });


  const onChangeName = (e: any) => {
    setdataForm({ ...dataForm, name: e.target.value });
  };
  const onConfirm = (e: any) => {
    localStorage.setItem("card", JSON.stringify(card));

  };

  const styleModal = {
    width: "80%",
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    webkitTransform: "translate(-50%, -50%)",
    bgcolor: "white",
    boxShadow: 24,
    p: 4,
    overflowY: "auto",
    maxHeight: "80vh",
  };
  return (
    <>
      <Modal
        open={isOpenModalConfig}
        onClose={() => setIsOpenModalConfig(false)}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={styleModal}>
          <Typography variant="h6" gutterBottom>
            Solicita la bici:
          </Typography>
          <div className="optionsPlanta">
            <div className="cardPlanta_option">
              <TextField
                disabled={false}
                fullWidth={true}
                label={"Nombre"}
                helperText={"introduce un nombre"}
                value={dataForm.name}
                //type={"number"}
                variant={"outlined"}
                placeholder={"0"}
                onChange={onChangeName}
              />
              <TextField
                disabled={false}
                fullWidth={true}
                label={"Telefono"}
                helperText={"introduce un telefono"}
                value={dataForm.phoneNumber}
                //type={"number"}
                variant={"outlined"}
                placeholder={"0"}
                onChange={onChangeName}
              />
              <TextField
                disabled={false}
                fullWidth={true}
                label={"Dias"}
                value={dataForm.days}
                //type={"number"}
                variant={"outlined"}
                placeholder={"0"}
                onChange={onChangeName}
              />
              <TextField
                disabled={false}
                fullWidth={true}
                label={"Email"}
                helperText={"introduce un email"}
                value={dataForm.email}
                //type={"number"}
                variant={"outlined"}
                placeholder={"0"}
                onChange={onChangeName}
              />

              <Button
                sx={{ backgroundColor: "#009688" }}
                variant="contained"
                onClick={onConfirm}
              >
                {"Confirm"}
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};
