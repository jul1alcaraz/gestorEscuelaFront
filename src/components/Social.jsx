import * as React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import GitHubIcon from "@mui/icons-material/GitHub";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import { Tooltip, Link } from "@mui/material";

const Social = () => {
  return (
    <div>
      <Tooltip title="Portafolio">
        <Link
          href="https://jul1alcaraz.netlify.app/"
          target="_blank"
          sx={{ my: 2, marginRight: 3, color: "var(--radiology-yellow)" }}
        >
          <WorkIcon></WorkIcon>
        </Link>
      </Tooltip>

      <Tooltip title="GitHub">
        <Link
          href="https://github.com/jul1alcaraz"
          target="_blank"
          sx={{ my: 2, marginRight: 3, color: "var(--radiology-yellow)" }}
        >
          <GitHubIcon></GitHubIcon>
        </Link>
      </Tooltip>

      <Tooltip title="LinkedIn">
        <Link
          href="https://www.linkedin.com/in/jul1alcaraz/"
          target="_blank"
          sx={{ my: 2, marginRight: 3, color: "var(--radiology-yellow)" }}
        >
          <LinkedInIcon></LinkedInIcon>
        </Link>
      </Tooltip>

      <Tooltip title="UNLAR">
        <Link
          href="https://www.unlar.edu.ar/"
          target="_blank"
          sx={{ my: 2, marginRight: 3, color: "var(--radiology-yellow)" }}
        >
          <SchoolIcon></SchoolIcon>
        </Link>
      </Tooltip>
    </div>
  );
};

export default Social;