import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { orange } from "@mui/material/colors";
import MenuDrawer from "./MenuDrawer";
import BotonTheme from "./BotonTheme";
import { useSearch } from "../context/SearchContext";
import { useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(orange[900], 0.15),
  "&:hover": { backgroundColor: alpha(orange[50], 0.25) },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "20px",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": { width: "20ch" },
    },
  },
}));

function Header() {
  const { setSearchTerm } = useSearch();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = React.useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setSearchTerm(inputValue.trim());
      navigate("/TodosLosAlumnos");
    }
  };

  return (
    <AppBar position="fixed"
      sx={{ backgroundColor: "var(--color-verde-oscuro)", zIndex: 1200 }}>
      <Toolbar>
        <MenuDrawer />
        <Box sx={{ ml: "auto" }}>
          <BotonTheme />
        </Box>

        <Box sx={{ marginLeft: "auto" }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Buscar alumno…"
              inputProps={{ "aria-label": "search" }}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </Search>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
