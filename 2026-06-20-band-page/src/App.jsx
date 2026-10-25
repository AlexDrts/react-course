import Header from "./components/Header";
import Members from "./components/Members";
import Albums from "./components/Albums";
import "./App.css";

function App() {
  const members = [
    {
      name: "Dan Reynolds",
      role: "Вокал"
    },
    {
      name: "Wayne Sermon",
      role: "Гітара"
    },
    {
      name: "Ben McKee",
      role: "Бас-гітара"
    }
  ];

  const albums = [
    {
      title: "Night Visions",
      year: "2012",
      description:
          "Дебютний студійний альбом Imagine Dragons. До нього увійшли відомі пісні Radioactive, Demons та It's Time.",
      image:
          "https://i.scdn.co/image/ab67616d0000b273b2b2747c89d2157b0b29fb6a"
    },
    {
      title: "Evolve",
      year: "2017",
      description:
          "Один із найвідоміших альбомів гурту. Серед популярних пісень — Believer, Thunder та Whatever It Takes.",
      image:
          "https://quals.ua/image/cache/catalog/Covers/imagine-dragons-evolve-vinyl-2000x2000.jpeg"
    },
    {
      title: "Mercury – Act 1",
      year: "2021",
      description:
          "Альбом із більш емоційним звучанням. До нього увійшли пісні Follow You, Wrecked та Monday.",
      image:
          "https://i.scdn.co/image/ab67616d0000b2738b0da998550d749d2e0b61d9"
    }
  ];

  return (
      <div className="app">

        <Header
            name="Imagine Dragons"
            description="Американський рок-гурт з Лас-Вегаса"
        />

        <main>

          <section className="about">
            <h2>🎤 Про гурт</h2>

            <p>
              Imagine Dragons — американський рок-гурт,
              створений у 2008 році в Лас-Вегасі.
            </p>

            <p>
              Гурт отримав світову популярність завдяки
              пісням "Radioactive", "Demons", "Believer"
              та "Thunder".
            </p>

            <p>
              Музика гурту поєднує елементи року, поп-музики
              та альтернативної музики.
            </p>
          </section>

          <Members members={members} />

          <Albums albums={albums} />

        </main>

        <footer>
          <p>🎵 Imagine Dragons Fan Page</p>
        </footer>

      </div>
  );
}

export default App;