import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ThemeButton from "../ThemeButton";
import { vi } from "vitest";

const mockUseTheme = vi.fn();

vi.mock("../../hooks/useTheme", () => ({
  useTheme: () => mockUseTheme(),
}));

describe("<ThemeButton />", () => {
  it("changes from 'light' to 'dark'", async () => {
    const setTheme = vi.fn();
    mockUseTheme.mockReturnValue({ theme: "light", setTheme });

    const user = userEvent.setup();
    render(<ThemeButton />);
    await user.click(screen.getByRole("button"));

    expect(setTheme).toHaveBeenCalledWith("dark");
  });

  it("changes from 'dark' to 'light'", async () => {
    const setTheme = vi.fn();
    mockUseTheme.mockReturnValue({ theme: "dark", setTheme });

    const user = userEvent.setup();
    render(<ThemeButton />);
    await user.click(screen.getByRole("button"));

    expect(setTheme).toHaveBeenCalledWith("light");
  });

  it("render icon ☀️ when theme is dark", () => {
    mockUseTheme.mockReturnValue({ theme: "dark", setTheme: vi.fn() });
    render(<ThemeButton />);
    expect(screen.getByRole("button")).toHaveTextContent("☀️");
  });

  it("render icon 🌙 when theme is light", () => {
    mockUseTheme.mockReturnValue({ theme: "light", setTheme: vi.fn() });
    render(<ThemeButton />);
    expect(screen.getByRole("button")).toHaveTextContent("🌙");
  });
});
