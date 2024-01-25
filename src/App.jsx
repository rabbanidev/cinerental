import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MovieList from "./components/movie/MovieList";
import CartContextProvider from "./contexts/CartContext";
import { useTheme } from "./contexts/ThemeContext";

const App = () => {
  const { darkMode } = useTheme();

  return (
    <CartContextProvider>
      <div className={`w-full h-full ${darkMode ? "dark" : ""}`}>
        <Header />
        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <Sidebar />
            <MovieList />
          </div>
        </main>
        <Footer />
      </div>
    </CartContextProvider>
  );
};

export default App;
