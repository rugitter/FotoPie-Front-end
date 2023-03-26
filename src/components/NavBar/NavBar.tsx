import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Link from "../../utils/Link";
import { useState, useEffect  } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { getMe } from "../../axiosRequest/api/editUser";
import { getNewNotificationCount } from "../../axiosRequest/api/notification";
import { markNotificationRead } from "../../axiosRequest/api/notification";
import HamburgerMenu from "./HamburgerMenu";
import AvatarMenu from "./AvatarMenu";
import { logout } from "../../../store/auth/authAciton";
import { useCheckToken } from "../../hooks/useCheckToken";
import { useRouter } from "next/router"
import UserIcons from "./UserIcons";

interface NavbarProps {
  isFixed: boolean;
  color?: string;
  bgColor?: string;
}

export default function Navbar({
  isFixed,
  color = "#FFFFFF",
  bgColor,
}: NavbarProps) {
  useCheckToken();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const [avatarPath, setAvatarPath] = useState("");
  const [id, setId] = useState("");
  const [newNotificationCount, setNewNotificationCount] = useState(0);

  useEffect(() => {
    if (isAuthenticated) {
      // Get user info
      getMe().then((res) => {
        setAvatarPath(res.data["avatarPath"]);
        setId(res.data.id);
      });

      // Get new notification count
      getNewNotificationCount().then((res) => {
        setNewNotificationCount(res.data.count);
      });
    }
  }, [isAuthenticated]);


  //Mark all new notifications as read when click notification icon
  const router = useRouter()
  const handleNotificationClick = async () => {
    try {
      setNewNotificationCount(0);
      
      await router.push("/notification");
  
      router.events.on("routeChangeComplete", async () => {
        await markNotificationRead();
      });
    } catch (error) {
      console.error(error);
    }
  };

  // set fixed navbar when scroll down
  const [fix, setFix] = useState(false);

  const setFixed = () => {
    if (window.scrollY >= 410) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  useEffect(() => {
    if (isFixed && typeof window !== "undefined") {
      window.addEventListener("scroll", setFixed);
    }
    return () => {
      if (isFixed && typeof window !== "undefined") {
        window.removeEventListener("scroll", setFixed);
      }
    };
  }, [isFixed]);

  //////////////////////////////////////////////////////////////////////////////

  // mobile menu state
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    useState<null | HTMLElement>(null);

  // desktop menu state
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // mobile menu open/close
  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMenuCloseInMobileMenu = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  // Mobile logout
  const handleMobileLogout = () => {
    dispatch(logout());
    handleMenuCloseInMobileMenu();
  };

  //////////////////////////////////////////////////////////////////////////////

  // desktop menu open/close
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // desktop logout
  const handleLogout = () => {
    dispatch(logout());
    handleMenuClose();
  };
  const isMenuOpen = Boolean(anchorEl);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <>
        <AppBar
          color="transparent"
          elevation={0}
          sx={{
            position: fix ? "fixed" : "relative",
            bgcolor: bgColor || (fix ? "#f8f8ff" : "transparent"),
          }}
        >
          <Toolbar
            sx={{
              marginTop: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Logo  */}
            <Link
              href="/"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                "&:hover": {
                  opacity: 0.8,
                },
              }}
            >
              <img
                src="/logo.png"
                style={{ borderRadius: 10 }}
                alt="Fotopie_Logo"
                width={45}
                height={45}
              />
            </Link>

            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, ml: 2 }}
            >
              <Link
                variant="h6"
                underline="none"
                href="/"
                sx={{
                  fontSize: 24,
                  fontFamily: "inherit",
                  color: fix ? "#000000" : color,
                }}
              >
                {"FotoPie"}
              </Link>
            </Typography>

            <Box sx={{ flexGrow: 1 }}></Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                flexGrow: 0.12,
                justifyContent: "space-between",
              }}
            >
              {isAuthenticated ? (
                <UserIcons
                handleProfileMenuOpen={handleProfileMenuOpen}
                newNotificationCount={newNotificationCount}
                avatarPath={avatarPath}
                handleNotificationClick={handleNotificationClick}
                color={color}
                fix={fix}
              />
              ) : (
                <Button
                  variant="contained"
                  color="success"
                  sx={{
                    bgcolor: fix ? "#F4DADA" : "#FBF1F1",
                  }}
                >
                  <Link href="/login" underline="none">
                    Log In
                  </Link>
                </Button>
              )}
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MenuIcon sx={{ color: fix ? "black" : color }} />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>

        {
          <HamburgerMenu
            isMobileMenuOpen={isMobileMenuOpen}
            mobileMoreAnchorEl={mobileMoreAnchorEl}
            handleMobileMenuClose={handleMobileMenuClose}
            isAuthenticated={isAuthenticated}
            setNewNotificationCount={setNewNotificationCount}
            newNotificationCount={newNotificationCount}
            avatarPath={avatarPath}
            handleMobileLogout={handleMobileLogout}
            handleNotificationClick={handleNotificationClick}
          />
        }

        {
          <AvatarMenu
            isMenuOpen={isMenuOpen}
            anchorEl={anchorEl}
            handleMenuClose={handleMenuClose}
            handleLogout={handleLogout}
          />
        }
      </>
    </Box>
  );
}
