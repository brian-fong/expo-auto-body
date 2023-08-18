export const PHONE = "(626) 279-1900";
export const GMAIL = "expoautobody212@gmail.com";
export const ADDRESS = "4535 Baldwin Ave El Monte, CA 91731";
export const GOOGLE_MAPS = "https://www.google.com/maps/place/Expo+Auto+Body/@34.0901641,-118.0519663,17z/data=!3m1!4b1!4m6!3m5!1s0x80c2da6ec8303217:0x5d84f3d19c7edd9!8m2!3d34.0901597!4d-118.0493914!16s%2Fg%2F1tfwds5g?entry=ttu";

export interface Contact {
  type: string,
  value: string,
  link: string,
}

export const CONTACT_DICT: {
  [key: string]: Contact,
} = {
    phone: {
      type: "Phone",
      value: PHONE,
      link: "tel:626-279-1900",
    },
    email: {
      type: "Email",
      value: GMAIL,
      link: "mailto: expoautobody212@gmail.com",
    },
    address: {
      type: "Address",
      value: ADDRESS,
      link: GOOGLE_MAPS,
    },
  };
