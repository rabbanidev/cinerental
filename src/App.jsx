import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MovieList from "./components/movie/MovieList";
import CartContextProvider from "./contexts/CartContext";

const App = () => {
  return (
    <CartContextProvider>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MovieList />
        </div>
      </main>
      <Footer />
    </CartContextProvider>
  );
};

export default App;
