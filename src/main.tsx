import "./styles.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Box } from "@mui/material";
import { SideNavBar } from "./components/sidenavbar";
import { IndexPage } from "./pages/index-page";

export const RoutingWeb = () => {
  return (
    <>
      <Router>
        <Box style={{display: "flex"}}>
        <SideNavBar/>
        <Routes>
          <Route path="/" element={<IndexPage/>} />
          <Route path="/:tabRouter" element={<></>} />
          <Route path="*" element={<></>} />
        </Routes>
        </Box>
      </Router>
  
    </>
  );
};
