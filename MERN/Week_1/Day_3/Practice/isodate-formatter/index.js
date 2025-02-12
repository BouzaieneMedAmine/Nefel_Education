import { formatToReadableDate, formatToRelative, formatToLongDate, formatToShortDate } from "./utils/formatDate.js";
import chalk from "chalk";

const dates = [
    "2024-02-12T15:30:00Z",
    "2023-06-10T08:45:00Z",
    "2022-01-01T00:00:00Z",
    "2019-07-04T14:20:00Z",
    "2015-12-25T23:59:59Z"
];

console.log(chalk.blue("Readable Date Formats:"));
dates.forEach(date => console.log(chalk.green(formatToReadableDate(date))));

console.log(chalk.yellow("\nRelative Time Formats:"));
dates.forEach(date => console.log(chalk.red(formatToRelative(date))));

console.log(chalk.cyan("\nLong Date Formats:"));
dates.forEach(date => console.log(chalk.magenta(formatToLongDate(date))));

console.log(chalk.blue("\nShort Date Formats:"));
dates.forEach(date => console.log(chalk.green(formatToShortDate(date))));
