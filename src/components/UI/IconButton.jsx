import { log } from "../../log.js";

export default function IconButton({ children }) {
  log("<IconButton /> rendered", 2);
  return (
    <button className="button">
      Icon <span>{children}</span>
    </button>
  );
}
