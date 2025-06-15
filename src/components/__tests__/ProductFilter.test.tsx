import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductFilter from "../ProductFilter";
import { useChartStore } from "../../store/chart";

const INITIAL_PRODUCTS = ["Refrigerante", "Suco", "Salgadinho"];

describe("<ProductFilter />", () => {
  beforeEach(() => {
    useChartStore.setState({
      selectedProducts: [...INITIAL_PRODUCTS],
      data: INITIAL_PRODUCTS.map((name) => ({
        name,
        data: [0, 0, 0],
      })),
    });
  });

  it("render all products and checked", async () => {
    const user = userEvent.setup();
    render(<ProductFilter />);

    await user.click(
      screen.getByRole("button", { name: "Filtrar por produto" })
    );

    INITIAL_PRODUCTS.forEach((product) => {
      const checkbox = screen.getByLabelText(product);
      expect(checkbox).toBeInTheDocument();
      expect(checkbox).toBeChecked();
    });
  });

  it("remove product when unchecked", async () => {
    const user = userEvent.setup();
    render(<ProductFilter />);

    await user.click(
      screen.getByRole("button", { name: "Filtrar por produto" })
    );

    const checkbox = screen.getByLabelText("Suco");
    expect(checkbox).toBeChecked();

    await user.click(checkbox);
    expect(checkbox).not.toBeChecked();

    const state = useChartStore.getState();
    expect(state.selectedProducts).not.toContain("Suco");
  });

  it("add product when checked", async () => {
    const user = userEvent.setup();
    render(<ProductFilter />);

    await user.click(
      screen.getByRole("button", { name: "Filtrar por produto" })
    );

    const checkbox = screen.getByLabelText("Salgadinho");

    await user.click(checkbox);
    await user.click(checkbox);

    expect(checkbox).toBeChecked();

    const state = useChartStore.getState();
    expect(state.selectedProducts).toContain("Salgadinho");
  });
});
