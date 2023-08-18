export interface Hours {
  day: string,
  availability: string,
}

export const HOURS: Hours[] = [
  {
    day: "Mon-Fri",
    availability: "8:00 AM - 5:00 PM",
  },
  {
    day: "Sat",
    availability: "9:00 AM - 2:00 PM",
  },
  {
    day: "Sun",
    availability: "Closed",
  },
]
