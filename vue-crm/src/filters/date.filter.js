export default function dateFilter(value, format = "date") {
  return new Intl.DateTimeFormat("ru-RU").format(new Date(value));
}
