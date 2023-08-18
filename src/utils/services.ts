export interface Service {
  name: string,
  description: string,
  image: string,
}


export const SERVICES: Service[] = [
  {
    name: "Mechanical",
    description: "We can take care of a variety of mechanical issues, such as general tune-ups, diagnosing check-engine light indicators, AC freon, and overheating due to radiator, water-pump, or thermostat issues",
    image: "https://bentonroadautorepair.com/wp-content/uploads/2021/01/signs-your-cars-engine-cannot-be-repaired-and-must-be-replaced.jpg",
  },
  {
    name: "Body Repair",
    description: "We provide general body restoration, including paintless dent removal. If your car's frame has been compromised, we provide frame-pulling using modern machinery.",
    image: "https://cdn.discordapp.com/attachments/1141415389583122492/1141668734029803611/red-car-2.jpg",
  },
  {
    name: "Glass Repair",
    description: "Broken windshield or side window? We can replace it!",
    image: "https://img.freepik.com/premium-photo/mechanics-man-changing-broken-windshield-automobile-windshield-windscreen-replacement-white-car-auto-repair-shop_29285-2340.jpg?w=2000",
  },
  {
    name: "Detailing",
    description: "Our detailing service includes steam cleaning for engine and interior, in addition to washing, polishing, waxing, and applying nano wax for exterior.",
    image: "shop/silver-car-1.jpg",
  },
];
