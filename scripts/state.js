import { loadData, saveData } from "./storage.js";

export let records = loadData();

export function addRecord(title, author, pages, tag) {
  const rec = {
    id: `rec_${Date.now()}`,
    title,
    author,
    pages: parseInt(pages),
    tag,
    dateAdded: new Date().toISOString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  records.push(rec);
  saveData(records);
  return rec;
}
