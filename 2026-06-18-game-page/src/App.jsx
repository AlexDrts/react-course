import Header from "./components/Header";
import GameInfo from "./components/GameInfo";
import Reviews from "./components/Reviews";
import "./App.css";

function App() {
  return (
      <div className="app">

        <Header title="Minecraft" />

        <main>

          <div className="game-card">

            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiIVDr7MViVjH49lu4WMcGSdMx69l41oUkqWcyH7nbgkYlEBVt-0WwWr6p&s=10"
                alt="Minecraft"
            />

            <div className="game-text">
              <h2>Minecraft</h2>

              <p>
                Створюй власний світ, досліджуй його
                та вирушай у незабутні пригоди.
              </p>

              <span className="tag">Sandbox</span>
              <span className="tag">Survival</span>
              <span className="tag">Creative</span>
            </div>

          </div>

          <GameInfo
              developer="Mojang Studios"
              genre="Sandbox / Survival"
              year="2011"
              platforms="PC, PlayStation, Xbox, Nintendo Switch, Mobile"
          />

          <Reviews />

        </main>

        <footer>
          <p>© 2026 Minecraft Fan Page</p>
        </footer>

      </div>
  );
}

export default App;