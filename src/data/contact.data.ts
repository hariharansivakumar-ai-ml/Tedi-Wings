export interface ContactChannel {
  id: string;
  label: string;
  placeholder: string;
  description: string;
}

export const contactChannels: ContactChannel[] = [
  {
    id: "channel-email",
    label: "Email",
    placeholder: "[email address]",
    description: "Send us a message and we'll reply within 1–2 business days.",
  },
  {
    id: "channel-phone",
    label: "Phone",
    placeholder: "[phone number]",
    description: "Available Mon - Fri for discovery and consultation calls.",
  },
  {
    id: "channel-office",
    label: "Studio Location",
    placeholder: "[City, State, Country]",
    description: "HQ & technology development studio.",
  },
];
