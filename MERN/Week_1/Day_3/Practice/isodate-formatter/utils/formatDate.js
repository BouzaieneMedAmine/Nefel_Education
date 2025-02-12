import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js"; // Add .js at the end
import utc from "dayjs/plugin/utc.js"; // Add .js at the end

dayjs.extend(relativeTime);
dayjs.extend(utc);

export function formatToReadableDate(isoDate) {
    return dayjs.utc(isoDate).format("MMMM D, YYYY, h:mm:ss A [UTC]");
}

export function formatToRelative(isoDate) {
    return dayjs.utc(isoDate).fromNow();
}

export function formatToLongDate(isoDate) {
    return dayjs.utc(isoDate).format("dddd, MMMM D, YYYY");
}

export function formatToShortDate(isoDate) {
    return dayjs.utc(isoDate).format("MM/DD/YYYY");
}
