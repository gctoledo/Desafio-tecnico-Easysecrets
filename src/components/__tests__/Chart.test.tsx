import { render, screen } from "@testing-library/react";
import ImplChart from "../Chart";
import { useChartStore } from "../../store/chart";

vi.mock("react-apexcharts", () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: (props: any) => (
    <div data-testid="mock-chart" data-type={props.type}>
      MockChart - {props.series?.length} series
    </div>
  ),
}));

vi.mock("../../hooks/useTheme", () => ({
  useTheme: () => ({ theme: "light" }),
}));

describe("<ImplChart />", () => {
  beforeEach(() => {
    useChartStore.setState({
      months: ["Jan", "Fev", "Mar"],
      data: [
        { name: "Produto A", data: [10, 20, 30] },
        { name: "Produto B", data: [5, 15, 25] },
      ],
      type: "bar",
      selectedProducts: ["Produto A"],
      selectedMonths: ["Jan", "Mar"],
    });
  });

  it("render chart with filtered data", () => {
    render(<ImplChart />);

    const chart = screen.getByTestId("mock-chart");

    expect(chart).toBeInTheDocument();
    expect(chart).toHaveAttribute("data-type", "bar");
    expect(chart.textContent).toContain("1 series");
  });

  it("update chart when type changes", () => {
    useChartStore.setState({ type: "line" });
    render(<ImplChart />);

    const chart = screen.getByTestId("mock-chart");

    expect(chart).toHaveAttribute("data-type", "line");
  });

  it("not render series if no product is selected", () => {
    useChartStore.setState({ selectedProducts: [] });
    render(<ImplChart />);

    const chart = screen.getByTestId("mock-chart");

    expect(chart.textContent).toContain("0 series");
  });
});
