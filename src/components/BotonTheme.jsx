/*import { useTheme } from "../context/ThemeContext";
import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

const BotonTheme = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <IconButton
      onClick={toggleTheme}
      color="inherit"
      aria-label={isDark ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
      title={isDark ? "Tema claro" : "Tema oscuro"}
    >
      {isDark ? <Brightness7 sx={{ fontSize: 28 }} /> : <Brightness4 sx={{ fontSize: 28 }} />}
    </IconButton>
  );
};

export default BotonTheme;*/