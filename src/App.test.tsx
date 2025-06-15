import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { useChartStore } from "./store/chart";

vi.mock("react-apexcharts", () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: (props: any) => (
    <div data-testid="mock-chart" data-series={props.series?.length}>
      ChartType: {props.type} - Series: {props.series?.length}
    </div>
  ),
}));

vi.mock("./hooks/useTheme", () => ({
  useTheme: () => ({ theme: "light" }),
}));

describe("<App />", () => {
  beforeEach(() => {
    useChartStore.setState({
      months: ["Janeiro", "Fevereiro", "Março"],
      data: [
        { name: "Refrigerante", data: [100, 120, 130] },
        { name: "Suco", data: [80, 90, 100] },
      ],
      selectedProducts: ["Refrigerante", "Suco"],
      selectedMonths: ["Janeiro", "Fevereiro", "Março"],
      type: "bar",
    });
  });

  it("render chart with all series", () => {
    render(<App />);
    expect(screen.getByTestId("mock-chart")).toHaveTextContent("Series: 2");
  });

  it("remove a serie when uncheck product", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(
      screen.getByRole("button", { name: "Filtrar por produto" })
    );

    const sucoCheckbox = screen.getByLabelText("Suco");
    await user.click(sucoCheckbox);

    expect(screen.getByTestId("mock-chart")).toHaveTextContent("Series: 1");
  });

  it("remove all data if no month is selected", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: "Filtrar por mês" }));

    await user.click(screen.getByLabelText("Janeiro"));
    await user.click(screen.getByLabelText("Fevereiro"));
    await user.click(screen.getByLabelText("Março"));

    expect(screen.getByTestId("mock-chart")).toHaveTextContent("Series: 2");
  });

  it("changes chart type correctly", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByText("Gráfico de linha"));
    expect(screen.getByTestId("mock-chart")).toHaveTextContent(
      "ChartType: line"
    );

    await user.click(screen.getByText("Gráfico de barra"));
    expect(screen.getByTestId("mock-chart")).toHaveTextContent(
      "ChartType: bar"
    );

    await user.click(screen.getByText("Gráfico de área"));
    expect(screen.getByTestId("mock-chart")).toHaveTextContent(
      "ChartType: area"
    );
  });
});
