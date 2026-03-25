import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { initializeTimes, updateTimes } from "../utils/booking";

beforeEach(() => {
  window.fetchAPI = jest.fn(() => [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
});

test("renders the BookingForm static text", () => {
  render(
    <BookingForm
      availableTimes={["17:00", "18:00"]}
      dispatch={() => {}}
      submitForm={() => true}
    />,
  );

  expect(screen.getByText("Choose date")).toBeInTheDocument();
});

test("initializeTimes returns the expected times from fetchAPI", () => {
  const result = initializeTimes();

  expect(window.fetchAPI).toHaveBeenCalled();
  expect(result).toEqual([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
});

test("updateTimes returns the expected times based on the selected date", () => {
  const state = ["17:00"];
  const action = {
    type: "UPDATE_TIMES",
    date: "2026-03-24",
  };

  const result = updateTimes(state, action);

  expect(window.fetchAPI).toHaveBeenCalledWith(new Date("2026-03-24"));
  expect(result).toEqual([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
});
