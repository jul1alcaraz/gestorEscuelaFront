import { useTheme } from "../context/ThemeContext";
import { IconButton, Tooltip } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

const BotonTheme = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <Tooltip title={isDark ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}>
      <IconButton onClick={toggleTheme} color="inherit">
        {isDark ? <Brightness7 sx={{ fontSize: 28 }} /> : <Brightness4 sx={{ fontSize: 28 }} />}
      </IconButton>
    </Tooltip>
  );
};

export default BotonTheme;
