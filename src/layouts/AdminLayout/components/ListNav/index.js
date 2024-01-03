import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Collapse, List } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import { Link } from "react-router-dom";

function ListNav({ icon, title, list, url }) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={title} />
        {list ? open ? <ExpandLess /> : <ExpandMore /> : null}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        {list
          ? list.map((item, index) => (
              <Link to={item.url}>
                <List key={index} component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText primary={item.title} />
                  </ListItemButton>
                </List>
              </Link>
            ))
          : null}
      </Collapse>
    </div>
  );
}

export default ListNav;
