export interface Service {
  name: string,
  description: string,
  image: string,
  color?: string,
}


export const SERVICES: Service[] = [
  {
    name: "Mechanical",
    description: "We can take care of a variety of mechanical issues, such as general tune-ups, engine checks, AC freon, and overheating due to radiator, water-pump, or thermostat issues.",
    image: "https://bentonroadautorepair.com/wp-content/uploads/2021/01/signs-your-cars-engine-cannot-be-repaired-and-must-be-replaced.jpg",
    color: "green.600",
  },
  {
    name: "Body Repair",
    description: "We provide general body restoration, including paintless dent removal. If your car's frame has been compromised, we provide frame-pulling using modern machinery.",
    image: "/shop/red-car-2.jpg",
    color: "green.600",
  },
  {
    name: "Glass Repair",
    description: "Broken windshield or side window? We can replace it!",
    image: "https://img.freepik.com/premium-photo/mechanics-man-changing-broken-windshield-automobile-windshield-windscreen-replacement-white-car-auto-repair-shop_29285-2340.jpg?w=2000",
    color: "green.600",
  },
  {
    name: "Detailing",
    description: "Our detailing service includes steam cleaning for engine and interior, in addition to washing, polishing, waxing, and applying nano wax for exterior.",
    image: "/shop/silver-car-1.png",
    color: "blue.600",
  },
  {
    name: "Rental & Shuttle Services",
    description: "After dropping off your vehicle here, we can help schedule a rental or shuttle to take you to your next destination so long as it is within a 10-mile radius from our shop.",
    image: "/rental-service.jpg",
    color: "purple.600",
  },
  {
    name: "Authorized Vendor for Tesla OEM Parts",
    description: "Unlike other body shops, our shop is officially authorized to order OEM parts from Tesla.",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
    color: "purple.600",
  },
];
