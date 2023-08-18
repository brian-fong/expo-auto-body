export interface Contact {
  type: string,
  value: string,
  link: string,
}

export const CONTACT_INFO: Contact[] = [
  {
    type: "Phone",
    value: "(626) 279-1900",
    link: "tel:626-279-1900",
  },
  {
    type: "Email",
    value: "expoautobody212@gmail.com",
    link: "mailto: expoautobody212@gmail.com",
  },
];
