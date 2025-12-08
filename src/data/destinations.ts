export interface Destination {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  price: string;
  location: string;
  rating: number;
  highlights: string[];
}

export const destinations: Destination[] = [
  {
    id: '1',
    title: 'Best of Ubud Tour',
    description: 'Rice terraces, temples, monkey forest, art villages, and the famous jungle swing.',
    image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1200',
    duration: '8–10 Hours',
    price: '$50',
    location: 'Ubud, Bali',
    rating: 4.9,
    highlights: [
      'Tegalalang Rice Terrace',
      'Sacred Monkey Forest',
      'Tirta Empul Temple',
      'Ubud Art Village',
      'Jungle Swing Experience'
    ]
  },
  {
    id: '2',
    title: 'Nusa Penida Adventure',
    description: 'The most famous island tour with stunning cliffs and turquoise beaches.',
    image: 'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1200',
    duration: 'Full Day',
    price: '$75',
    location: 'Nusa Penida Island',
    rating: 4.8,
    highlights: [
      'Kelingking Beach',
      'Angel’s Billabong',
      'Broken Beach',
      'Crystal Bay'
    ]
  },
  {
    id: '3',
    title: 'Kintamani Volcano Tour',
    description: 'Beautiful highland scenery with Mount Batur and Lake Batur views.',
    image: 'https://images.pexels.com/photos/2166927/pexels-photo-2166927.jpeg?auto=compress&cs=tinysrgb&w=1200',
    duration: 'Full Day',
    price: '$55',
    location: 'Kintamani, Bali',
    rating: 4.7,
    highlights: [
      'Mount Batur Viewpoint',
      'Coffee Plantation',
      'Tirta Empul Temple',
      'Tegalalang Rice Terrace'
    ]
  },
  {
    id: '4',
    title: 'Tanah Lot Sunset',
    description: 'One of Bali’s most iconic temples with a dramatic sunset.',
    image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1200',
    duration: 'Half Day',
    price: '$40',
    location: 'Tabanan, Bali',
    rating: 4.9,
    highlights: [
      'Tanah Lot Temple',
      'Sunset Viewpoint',
      'Local Market'
    ]
  },

  // ------------------------------
  // ADDITIONAL DESTINATIONS (5–16)
  // ------------------------------

  {
    id: '5',
    title: 'Uluwatu Cliff & Kecak Fire Dance',
    description: 'A dramatic temple on the cliff paired with the famous Kecak sunset show.',
    image: 'https://images.pexels.com/photos/258385/pexels-photo-258385.jpeg?auto=compress&cs=tinysrgb&w=1200',
    duration: 'Half Day',
    price: '$45',
    location: 'Uluwatu, Bali',
    rating: 4.8,
    highlights: [
      'Uluwatu Temple',
      'Kecak Fire Dance',
      'Cliff View Sunset'
    ]
  },
  {
    id: '6',
    title: 'Bedugul & Ulun Danu Lake Tour',
    description: 'Cool mountain air with Bali’s iconic lakeside temple.',
    image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1200',
    duration: 'Full Day',
    price: '$55',
    location: 'Bedugul, Bali',
    rating: 4.8,
    highlights: [
      'Ulun Danu Beratan Temple',
      'Handara Gate',
      'Wanagiri Hidden Hill'
    ]
  },
  {
    id: '7',
    title: 'Lempuyang Gate of Heaven',
    description: 'Famous for its mirrored “Heaven Gate” photo spot with Mount Agung backdrop.',
    image: 'https://images.pexels.com/photos/386148/pexels-photo-386148.jpeg?auto=compress&cs=tinysrgb&w=1200',
    duration: 'Full Day',
    price: '$60',
    location: 'Karangasem, Bali',
    rating: 4.7,
    highlights: [
      'Lempuyang Temple',
      'Tirta Gangga Water Palace',
      'Virgin Beach'
    ]
  },
  {
    id: '8',
    title: 'North Bali Waterfall Journey',
    description: 'Explore Bali’s stunning waterfalls and lush mountain forests.',
    image: 'https://images.pexels.com/photos/2403220/pexels-photo-2403220.jpeg?auto=compress&cs=tinysrgb&w=1200',
    duration: '10 Hours',
    price: '$65',
    location: 'Singaraja, Bali',
    rating: 4.9,
    highlights: [
      'Sekumpul Waterfall',
      'Fiji Waterfall',
      'Hidden Hills'
    ]
  },
  {
    id: '9',
    title: 'Sanur Sunrise & Dolphin Tour',
    description: 'Early morning dolphin watching with calm beach sunrise.',
    image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1200',
    duration: '5 Hours',
    price: '$50',
    location: 'Sanur, Bali',
    rating: 4.6,
    highlights: [
      'Dolphin Watching',
      'Sunrise Spot',
      'Glass-Bottom Boat'
    ]
  },
  {
    id: '10',
    title: 'East Bali Cultural Tour',
    description: 'Discover Bali’s ancient villages and royal water gardens.',
    image: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1200',
    duration: 'Full Day',
    price: '$55',
    location: 'Karangasem, Bali',
    rating: 4.7,
    highlights: [
      'Tenganan Village',
      'Tirta Gangga',
      'Candidasa'
    ]
  },
  {
    id: '11',
    title: 'Bali Safari & Marine Park',
    description: 'Interactive wildlife adventure with animal shows and safari tram.',
    image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1200',
    duration: '6 Hours',
    price: '$70',
    location: 'Gianyar, Bali',
    rating: 4.8,
    highlights: [
      'Safari Journey',
      'Elephant Show',
      'Freshwater Aquarium'
    ]
  },
  {
    id: '12',
    title: 'Lovina Dolphin Sunrise Trip',
    description: 'See dolphins in their natural habitat with beautiful north coast sunrise.',
    image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1200',
    duration: '8 Hours',
    price: '$65',
    location: 'Lovina, Bali',
    rating: 4.8,
    highlights: [
      'Dolphin Tour',
      'Black Sand Beach',
      'North Bali Coast'
    ]
  },
  {
    id: '13',
    title: 'Canggu Chill & Beach Day',
    description: 'Relaxing day of cafés, surfing, and sunset views.',
    image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1200',
    duration: '6–8 Hours',
    price: '$40',
    location: 'Canggu, Bali',
    rating: 4.6,
    highlights: [
      'Echo Beach',
      'Café Hopping',
      'Surf Spot'
    ]
  },
  {
    id: '14',
    title: 'Seminyak Luxury Day',
    description: 'Trendy beach clubs, boutique shopping, and sunset dining.',
    image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1200',
    duration: '6 Hours',
    price: '$55',
    location: 'Seminyak, Bali',
    rating: 4.8,
    highlights: [
      'Beach Club',
      'Seminyak Square',
      'Sunset Dinner'
    ]
  },
  {
    id: '15',
    title: 'Jimbaran Sunset Dinner',
    description: 'Romantic grilled seafood dinner on the beach at sunset.',
    image: 'https://images.pexels.com/photos/760984/pexels-photo-760984.jpeg?auto=compress&cs=tinysrgb&w=1200',
    duration: '4–5 Hours',
    price: '$45',
    location: 'Jimbaran, Bali',
    rating: 4.7,
    highlights: [
      'Seafood Dinner',
      'Beach Sunset',
      'Romantic Vibes'
    ]
  },
  {
    id: '16',
    title: 'West Bali National Park Exploration',
    description: 'Nature reserve with mangroves, trekking, snorkeling, and birdwatching.',
    image: 'https://images.pexels.com/photos/3648269/pexels-photo-3648269.jpeg?auto=compress&cs=tinysrgb&w=1200',
    duration: 'Full Day',
    price: '$80',
    location: 'Buleleng, Bali',
    rating: 4.9,
    highlights: [
      'Menjangan Island',
      'Snorkeling',
      'Forest Trek'
    ]
  }
];
