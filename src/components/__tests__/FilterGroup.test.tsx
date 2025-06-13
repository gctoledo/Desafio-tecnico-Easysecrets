import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FilterGroup from "../FilterGroup";

describe("<FilterGroup />", () => {
  const options = ["Item A", "Item B", "Item C"];

  it("render title and checkboxes", () => {
    render(
      <FilterGroup
        title="Exemple"
        options={options}
        selected={["Item A", "Item C"]}
        onToggle={() => {}}
      />
    );

    expect(screen.getByText("Exemple")).toBeInTheDocument();

    options.forEach((label) => {
      expect(screen.getByLabelText(label)).toBeInTheDocument();
    });

    expect(screen.getByLabelText("Item A")).toBeChecked();
    expect(screen.getByLabelText("Item B")).not.toBeChecked();
    expect(screen.getByLabelText("Item C")).toBeChecked();
  });

  it("calls onToggle when checkbox is clicked", async () => {
    const onToggle = vi.fn();
    const user = userEvent.setup();

    render(
      <FilterGroup
        title="Exemplo"
        options={options}
        selected={[]}
        onToggle={onToggle}
      />
    );

    await user.click(screen.getByLabelText("Item B"));
    expect(onToggle).toHaveBeenCalledWith("Item B");

    await user.click(screen.getByLabelText("Item A"));
    expect(onToggle).toHaveBeenCalledWith("Item A");

    expect(onToggle).toHaveBeenCalledTimes(2);
  });
});
