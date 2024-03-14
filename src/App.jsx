import Header from "./components/Header";
import Counter from "./components/Counter/Counter";

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="configure-counter">
          <h2>Set Counter</h2>
          <input type="number" />
          <button>Set</button>
        </section>
        <Counter />
      </main>
    </>
  );
}

export default App;
