export interface PricingPackage {
  id: string;
  name: string;
  duration: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export const pricingPackages: PricingPackage[] = [
  {
    id: '1',
    name: 'Half-Day Package',
    duration: '5 hours',
    price: '$35',
    features: [
      'Comfortable AC car',
      'Fuel included',
      'English speaking driver',
      'Flexible itinerary'
    ]
  },
  {
    id: '2',
    name: 'Full-Day Package',
    duration: '10 hours',
    price: '$55',
    features: [
      'Comfortable AC car',
      'Fuel included',
      'English speaking driver',
      'Flexible itinerary',
      'Tour guide service'
    ],
    popular: true
  },
  {
    id: '3',
    name: 'Airport Transfer',
    duration: 'One way',
    price: '$20',
    features: [
      'Meet & greet',
      'Help with luggage',
      'Direct to hotel',
      'Flight tracking'
    ]
  },
  {
    id: '4',
    name: 'Long-Trip Package',
    duration: 'Per day',
    price: '$65',
    features: [
      'Multi-day trips',
      'All inclusive',
      'Accommodation assistance',
      'Complete tour planning'
    ]
  },
  {
    id: '5',
    name: 'Custom Tour',
    duration: 'Flexible',
    price: 'Contact',
    features: [
      'Build your own itinerary',
      'Special requests welcome',
      'Group discounts',
      'Personalized service'
    ]
  }
];
