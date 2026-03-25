export function initializeTimes() {
  const today = new Date();

  if (window.fetchAPI && typeof window.fetchAPI === "function") {
    return window.fetchAPI(today);
  }

  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
}

export function updateTimes(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      if (window.fetchAPI && typeof window.fetchAPI === "function") {
        return window.fetchAPI(new Date(action.date));
      }

      return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

    default:
      return state;
  }
}

export function submitForm(formData) {
  if (!window.submitAPI) {
    return true;
  }

  if (typeof window.submitAPI === "function") {
    return window.submitAPI(formData);
  }

  return false;
}
