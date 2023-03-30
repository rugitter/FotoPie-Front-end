import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import { AppProps } from "next/app"
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../src/utils/theme";
import createEmotionCache from "../src/utils/createEmotionCache";
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));
describe("Home", () => {
  it("renders the header and photowall", () => {
    render(
      <Provider store={store}>
        <CacheProvider value={emotionCache}></CacheProvider>
          <Home />
        </CacheProvider>
      </Provider>
    );
    useRouter.mockImplementation(() => ({
      route: "/",
      pathname: "/",
      query: "",
      asPath: "",
    }));

    const headerElement = screen.getByText("Trending Photos");
    expect(headerElement).toBeInTheDocument();

    const photowallElement = screen.getByRole("list");
    expect(photowallElement).toBeInTheDocument();
  });
});
