export const validateTitle = (title) => {
  const regex = /^\S(?:.*\S)?$/;
  return regex.test(title);
};

export const validateAuthor = (author) => {
  if (!author) return true;
  const regex = /^[A-Za-z\s'.-]+$/;
  return regex.test(author);
};

export const validatePages = (pages) => {
  const regex = /^(0|[1-9]\d*)(\.\d{1,2})?$/;
  return regex.test(pages) && pages > 0;
};

export const validateTag = (tag) => {
  if (!tag) return true;
  const regex = /^[A-Za-z]+(?:[ -][A-Za-z]+)*$/;
  return regex.test(tag);
};

export const validateNoDuplicateWords = (title) => {
  const regex = /\b(\w+)\s+\1\b/i;
  return !regex.test(title);
};