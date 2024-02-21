import ROUTES from "../routes/ROUTES";

const myLinks = [
  { to: ROUTES.HOME, children: "Home" },
  { to: ROUTES.ABOUT, children: "About" },
  { to: ROUTES.REGISTER, children: "Register" },
  { to: ROUTES.LOGIN, children: "Login" },
  { to: ROUTES.REMEMBERED, children: "Remembered" },
  { to: ROUTES.EDITCARD, children: "Edit card" },
  { to: ROUTES.CREATECARD, children: "Create card" },
  { to: ROUTES.CONTACTUS, children: "Contact us" },
  { to: ROUTES.SANDBOX, children: "Sandbox" },
];

const loggedInLinksGuest = [
  { to: ROUTES.HOME, children: "Home" },
  { to: ROUTES.ABOUT, children: "About" },
  { to: ROUTES.REMEMBERED, children: "Remembered" },
  { to: ROUTES.CONTACTUS, children: "Contact us" },
];

const loggedInLinksAdmin = [
  { to: ROUTES.HOME, children: "Home" },
  { to: ROUTES.ABOUT, children: "About" },
  { to: ROUTES.REMEMBERED, children: "Remembered" },
  { to: ROUTES.CREATECARD, children: "Create card" },
  { to: ROUTES.SANDBOX, children: "Sandbox" },
];

const loggedOutLinks = [
  { to: ROUTES.HOME, children: "Home" },
  { to: ROUTES.ABOUT, children: "About" },
  { to: ROUTES.REGISTER, children: "Register" },
  { to: ROUTES.LOGIN, children: "Login" },
  { to: ROUTES.CONTACTUS, children: "Contact us" },
];

export default myLinks;
export { loggedInLinksGuest, loggedOutLinks, loggedInLinksAdmin };
