import { useState } from "react";

export type DayId =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export type TimeRange = { from: string; to: string };

export type DayHours = {
  enabled: boolean;
  ranges: TimeRange[];
};

export const DAYS: { id: DayId; label: string }[] = [
  { id: "monday", label: "Monday" },
  { id: "tuesday", label: "Tuesday" },
  { id: "wednesday", label: "Wednesday" },
  { id: "thursday", label: "Thursday" },
  { id: "friday", label: "Friday" },
  { id: "saturday", label: "Saturday" },
  { id: "sunday", label: "Sunday" },
];

const emptyRange = (): TimeRange => ({ from: "", to: "" });

const defaultState = (): Record<DayId, DayHours> =>
  DAYS.reduce(
    (acc, { id }) => {
      acc[id] = { enabled: false, ranges: [emptyRange()] };
      return acc;
    },
    {} as Record<DayId, DayHours>,
  );

export function useOpeningHoursEditorHandler() {
  const [hours, setHours] = useState<Record<DayId, DayHours>>(defaultState);

  const toggleDay = (id: DayId) =>
    setHours((current) => ({
      ...current,
      [id]: { ...current[id], enabled: !current[id].enabled },
    }));

  const updateRange = (
    id: DayId,
    index: number,
    field: keyof TimeRange,
    value: string,
  ) =>
    setHours((current) => {
      const next = { ...current };
      const ranges = [...next[id].ranges];
      ranges[index] = { ...ranges[index], [field]: value };
      next[id] = { ...next[id], ranges };
      return next;
    });

  const addRange = (id: DayId) =>
    setHours((current) => ({
      ...current,
      [id]: { ...current[id], ranges: [...current[id].ranges, emptyRange()] },
    }));

  return { days: DAYS, hours, toggleDay, updateRange, addRange };
}
