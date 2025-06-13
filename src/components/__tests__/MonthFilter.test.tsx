import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MonthFilter from "../MonthFilter";
import { useChartStore } from "../../store/chart";

const MONTHS = ["Janeiro", "Fevereiro", "Março"];

describe("<MonthFilter />", () => {
  beforeEach(() => {
    useChartStore.setState({
      months: MONTHS,
      selectedMonths: [...MONTHS],
    });
  });

  it("render all months and checked", () => {
    render(<MonthFilter />);

    MONTHS.forEach((month) => {
      const checkbox = screen.getByLabelText(month);
      expect(checkbox).toBeInTheDocument();
      expect(checkbox).toBeChecked();
    });
  });

  it("remove month when unchecked", async () => {
    const user = userEvent.setup();
    render(<MonthFilter />);

    const checkbox = screen.getByLabelText("Fevereiro");
    expect(checkbox).toBeChecked();

    await user.click(checkbox);
    expect(checkbox).not.toBeChecked();

    const state = useChartStore.getState();
    expect(state.selectedMonths).not.toContain("Fevereiro");
  });

  it("add month when checked", async () => {
    const user = userEvent.setup();
    render(<MonthFilter />);

    const checkbox = screen.getByLabelText("Março");

    await user.click(checkbox);
    expect(checkbox).not.toBeChecked();

    await user.click(checkbox);
    expect(checkbox).toBeChecked();

    const state = useChartStore.getState();
    expect(state.selectedMonths).toContain("Março");
  });
});
