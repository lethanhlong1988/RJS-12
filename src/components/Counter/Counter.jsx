import { log } from "../../log.js";
export default function Counter() {
  log("Calculating if is prime number", 2, "other");
  return (
    <section className="counter">
      <p className="counter-info">
        The initial counter value was .... It is abc prime number.
      </p>
      <p>
        <button>Decrement</button>
        Value
        <button>Increment</button>
      </p>
    </section>
  );
}
