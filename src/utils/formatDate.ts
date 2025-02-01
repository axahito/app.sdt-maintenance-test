export function formatDate(date: Date): string {
  console.log("Date:", date);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
