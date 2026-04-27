import { useState } from "react";
import {
  Accessibility,
  Armchair,
  Baby,
  Bath,
  Bed,
  Bus,
  Car,
  Coffee,
  Dumbbell,
  ParkingSquare,
  PawPrint,
  Trees,
  Utensils,
  Wifi,
  Wine,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type FacilityId =
  | "wifi"
  | "seating"
  | "accessible"
  | "restroom"
  | "child-friendly"
  | "pet-friendly"
  | "parking"
  | "public-transport"
  | "taxi"
  | "lodging"
  | "coffee"
  | "bar"
  | "restaurant"
  | "gym"
  | "outdoor-terrace";

export type Facility = {
  id: FacilityId;
  label: string;
  icon: LucideIcon;
};

export const FACILITIES: Facility[] = [
  { id: "wifi", label: "Wi-Fi", icon: Wifi },
  { id: "seating", label: "Seating", icon: Armchair },
  { id: "accessible", label: "Accessible", icon: Accessibility },
  { id: "restroom", label: "Restroom", icon: Bath },
  { id: "child-friendly", label: "Child-friendly", icon: Baby },
  { id: "pet-friendly", label: "Pet-friendly", icon: PawPrint },
  { id: "parking", label: "Parking", icon: ParkingSquare },
  { id: "public-transport", label: "Public transport", icon: Bus },
  { id: "taxi", label: "Taxi", icon: Car },
  { id: "lodging", label: "Lodging", icon: Bed },
  { id: "coffee", label: "Coffee", icon: Coffee },
  { id: "bar", label: "Bar", icon: Wine },
  { id: "restaurant", label: "Restaurant", icon: Utensils },
  { id: "gym", label: "Gym", icon: Dumbbell },
  { id: "outdoor-terrace", label: "Outdoor terrace", icon: Trees },
];

export function useFacilitiesGridHandler() {
  const [selected, setSelected] = useState<Set<FacilityId>>(
    () => new Set<FacilityId>(),
  );

  const toggle = (id: FacilityId) =>
    setSelected((current) => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });

  const isSelected = (id: FacilityId) => selected.has(id);

  return { facilities: FACILITIES, isSelected, toggle };
}
