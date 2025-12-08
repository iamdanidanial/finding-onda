export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const features: Feature[] = [
  {
    id: '1',
    title: 'Professional Private Driver',
    description: 'Experienced and licensed drivers with excellent driving records.',
    icon: 'UserCheck'
  },
  {
    id: '2',
    title: 'Flexible Schedule',
    description: 'Travel at your own pace with fully customizable itineraries.',
    icon: 'Clock'
  },
  {
    id: '3',
    title: 'Transparent Pricing',
    description: 'No hidden fees. What you see is what you pay.',
    icon: 'DollarSign'
  },
  {
    id: '4',
    title: 'Comfortable Car',
    description: 'Clean, air-conditioned vehicles for a pleasant journey.',
    icon: 'Car'
  },
  {
    id: '5',
    title: 'Safe & Trusted',
    description: 'Your safety is our priority. Insured and reliable service.',
    icon: 'ShieldCheck'
  },
  {
    id: '6',
    title: 'Custom Tour Packages',
    description: 'Tailored experiences designed around your interests.',
    icon: 'Map'
  }
];
