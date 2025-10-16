const KEY = "book_notes_vault_data";

export function loadData() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || [];
  } catch {
    return [];
  }
}