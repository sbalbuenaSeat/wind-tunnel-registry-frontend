import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Provider } from "@/components/ui/provider";
import App from "./App";

test("render app", () => {
  render(
    <Provider>
      <App />
    </Provider>,
  );
  const title = screen.getByText(/Wind Tunnel Registry/i);
  expect(title).toBeInTheDocument();
});
