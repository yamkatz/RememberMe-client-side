import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/ROUTES";
import { useSelector } from "react-redux";

const LeftDrawerComponent = ({ isOpen, onCloseDrawer }) => {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const linksToUserRole = () => {
    if (!userData) {
      return [
        { to: ROUTES.HOME, children: "Home" },
        { to: ROUTES.ABOUT, children: "About" },
        { to: ROUTES.REGISTER, children: "Register" },
        { to: ROUTES.LOGIN, children: "Login" },
        { to: ROUTES.CONTACTUS, children: "Contact us" },
      ];
    } else if (userData.isAdmin) {
      return [
        { to: ROUTES.HOME, children: "Home" },
        { to: ROUTES.ABOUT, children: "About" },
        { to: ROUTES.REMEMBERED, children: "Remembered" },
        { to: ROUTES.CREATECARD, children: "Create card" },
        { to: ROUTES.SANDBOX, children: "Sandbox" },
      ];
    } else {
      return [
        { to: ROUTES.HOME, children: "Home" },
        { to: ROUTES.ABOUT, children: "About" },
        { to: ROUTES.REMEMBERED, children: "Remembered" },
        { to: ROUTES.CONTACTUS, children: "Contact us" },
      ];
    }
  };

  const linksToShow = linksToUserRole();

  const handleItemClick = (route) => {
    navigate(route);
    onCloseDrawer();
  };

  return (
    <Drawer anchor="left" open={isOpen} onClose={onCloseDrawer}>
      <Box
        sx={{ width: { auto: 250 } }}
        role="presentation"
        onClick={onCloseDrawer}
        onKeyDown={onCloseDrawer}
      >
        <List>
          {linksToShow.map((item) => (
            <ListItem key={item.to} disablePadding>
              <ListItemButton onClick={() => handleItemClick(item.to)}>
                <ListItemText primary={item.children} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default LeftDrawerComponent;
