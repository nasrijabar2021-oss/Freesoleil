
import { Post, Author, Category } from '../types';

const author: Author = {
  name: 'Alex Soleil',
  avatarUrl: 'https://picsum.photos/id/661/100/100'
};

export const categories: Category[] = [
    { name: 'Southeast Asia', imageUrl: 'https://picsum.photos/seed/seasia/600/400' },
    { name: 'South America', imageUrl: 'https://picsum.photos/seed/samerica/600/400' },
    { name: 'Europe', imageUrl: 'https://picsum.photos/seed/europe/600/400' },
    { name: 'North America', imageUrl: 'https://picsum.photos/seed/namerica/600/400' },
    { name: 'Africa', imageUrl: 'https://picsum.photos/seed/africa/600/400' },
    { name: 'Australia', imageUrl: 'https://picsum.photos/seed/australia/600/400' },
];

export const posts: Post[] = [
  {
    id: 1,
    slug: '10-must-see-places-in-the-philippines',
    title: '10 Must-See Places in the Philippines',
    excerpt: 'An archipelago of over 7,000 islands, the Philippines offers some of the most breathtaking natural beauty in the world. Here are the top 10 spots you can\'t miss.',
    content: `
      <p class="mb-4">The Philippines is a gem in Southeast Asia, a country blessed with an abundance of natural wonders. From the pristine beaches of Palawan to the rolling Chocolate Hills of Bohol, there's an adventure waiting for every type of traveler.</p>
      <h3 class="text-2xl font-heading-alt font-bold my-4">1. El Nido, Palawan</h3>
      <img src="https://picsum.photos/seed/elnido/800/500" alt="El Nido, Palawan" class="rounded-lg my-4"/>
      <p class="mb-4">El Nido is famous for its stunning lagoons, white-sand beaches, and crystal-clear waters. Island hopping is the main activity here, allowing you to discover hidden beaches and snorkeling spots teeming with marine life.</p>
      <h3 class="text-2xl font-heading-alt font-bold my-4">2. Coron, Palawan</h3>
      <p class="mb-4">Just a ferry ride away from El Nido, Coron is renowned for its world-class wreck diving sites. The Japanese shipwrecks from World War II are now home to vibrant coral reefs and diverse aquatic species.</p>
    `,
    imageUrl: 'https://picsum.photos/seed/philippines/800/600',
    author: author,
    date: 'October 26, 2023',
    category: 'Southeast Asia',
    tags: ['Beaches', 'Adventure', 'Diving']
  },
  {
    id: 2,
    slug: 'a-backpackers-guide-to-patagonia',
    title: 'A Backpacker\'s Guide to Patagonia',
    excerpt: 'Patagonia is a dream destination for hikers and nature lovers. This guide will help you plan your budget-friendly adventure through its dramatic landscapes.',
    content: `
      <p class="mb-4">Spanning across Argentina and Chile, Patagonia is a vast region of untamed wilderness. It's a land of towering granite peaks, massive glaciers, and turquoise lakes. Backpacking here is an unforgettable experience, but it requires careful planning.</p>
      <h3 class="text-2xl font-heading-alt font-bold my-4">Key Hiking Trails</h3>
      <img src="https://picsum.photos/seed/patagonia-hike/800/500" alt="Hiking in Patagonia" class="rounded-lg my-4"/>
      <ul class="list-disc list-inside mb-4">
        <li>Torres del Paine "W" Trek, Chile</li>
        <li>Fitz Roy Trek, Argentina</li>
        <li>Perito Moreno Glacier, Argentina</li>
      </ul>
      <p>Remember to pack layers, as the weather is notoriously unpredictable. Hostels and campsites are the best options for budget accommodation.</p>
    `,
    imageUrl: 'https://picsum.photos/seed/patagonia/800/600',
    author: author,
    date: 'September 15, 2023',
    category: 'South America',
    tags: ['Hiking', 'Nature', 'Backpacking']
  },
  {
    id: 3,
    slug: 'the-ultimate-food-tour-of-vietnam',
    title: 'The Ultimate Food Tour of Vietnam',
    excerpt: 'Vietnamese cuisine is a symphony of flavors. From pho in the north to banh xeo in the south, embark on a culinary journey you\'ll never forget.',
    content: `
      <p class="mb-4">Vietnamese food is more than just a meal; it's a cultural experience. Each region has its own specialties, shaped by its climate and history. The key is to eat like a local—pull up a plastic stool and dive in.</p>
      <h3 class="text-2xl font-heading-alt font-bold my-4">Must-Try Dishes</h3>
      <img src="https://picsum.photos/seed/vietnam-food/800/500" alt="Vietnamese Food" class="rounded-lg my-4"/>
       <ul class="list-disc list-inside mb-4">
        <li><strong>Pho:</strong> The iconic noodle soup, best enjoyed for breakfast in Hanoi.</li>
        <li><strong>Banh Mi:</strong> A French-inspired baguette sandwich with a Vietnamese twist.</li>
        <li><strong>Cao Lau:</strong> A unique noodle dish found only in Hoi An.</li>
        <li><strong>Bun Cha:</strong> Grilled pork patties served with noodles, herbs, and a dipping sauce.</li>
      </ul>
    `,
    imageUrl: 'https://picsum.photos/seed/vietnam/800/600',
    author: author,
    date: 'August 2, 2023',
    category: 'Southeast Asia',
    tags: ['Food', 'Culture', 'Asia']
  },
  {
    id: 4,
    slug: 'how-to-travel-solo-and-love-it',
    title: 'How to Travel Solo and Love It',
    excerpt: 'Traveling alone can be one of the most rewarding experiences of your life. Here are some tips to help you conquer your fears and embrace the freedom of solo travel.',
    content: `
      <p class="mb-4">The thought of traveling solo can be daunting, but the rewards are immeasurable. It's a chance to challenge yourself, meet new people, and discover what you're truly capable of.</p>
      <h3 class="text-2xl font-heading-alt font-bold my-4">Tips for a Great Solo Trip</h3>
      <ul class="list-disc list-inside mb-4">
        <li><strong>Stay in Hostels:</strong> They are great for meeting other travelers.</li>
        <li><strong>Be Flexible:</strong> Your plans can change, and that's part of the adventure.</li>
        <li><strong>Trust Your Gut:</strong> If a situation feels off, remove yourself from it.</li>
        <li><strong>Learn a Few Local Phrases:</strong> A little effort goes a long way.</li>
      </ul>
    `,
    imageUrl: 'https://picsum.photos/seed/solo/800/600',
    author: author,
    date: 'July 21, 2023',
    category: 'Travel Tips',
    tags: ['Solo Travel', 'Inspiration', 'Safety']
  },
  {
    id: 5,
    slug: 'my-top-5-travel-photography-tips',
    title: 'My Top 5 Travel Photography Tips',
    excerpt: 'Capture your travel memories like a pro. These five simple tips will help you elevate your photography skills and take stunning photos on your next trip.',
    content: `
      <p class="mb-4">You don't need a fancy camera to take great travel photos. It's about light, composition, and telling a story. Here are my go-to tips.</p>
      <h3 class="text-2xl font-heading-alt font-bold my-4">The 5 Tips</h3>
      <img src="https://picsum.photos/seed/phototip/800/500" alt="Travel Photography" class="rounded-lg my-4"/>
      <ol class="list-decimal list-inside mb-4">
        <li><strong>Wake Up for Golden Hour:</strong> The soft, warm light of early morning and late afternoon is magical.</li>
        <li><strong>Follow the Rule of Thirds:</strong> Place your subject off-center for a more balanced and interesting photo.</li>
        <li><strong>Look for Leading Lines:</strong> Use roads, rivers, or fences to draw the viewer's eye into the scene.</li>
        <li><strong>Capture the Details:</strong> Don't just focus on the grand landscapes. Photograph the food, the markets, the textures.</li>
        <li><strong>Include a Human Element:</strong> Adding a person to your landscape shot can give a sense of scale and emotion.</li>
      </ol>
    `,
    imageUrl: 'https://picsum.photos/seed/photography/800/600',
    author: author,
    date: 'June 10, 2023',
    category: 'Travel Tips',
    tags: ['Photography', 'Tips', 'Creative']
  },
   {
    id: 6,
    slug: 'exploring-the-ancient-ruins-of-rome',
    title: 'Exploring the Ancient Ruins of Rome',
    excerpt: 'Step back in time as we wander through the Colosseum, the Roman Forum, and the Pantheon. A journey through the heart of the Roman Empire.',
    content: `
      <p class="mb-4">Rome, the Eternal City, is a living museum. Every corner tells a story of emperors, gladiators, and geniuses. Walking through its ancient ruins is an awe-inspiring experience.</p>
       <h3 class="text-2xl font-heading-alt font-bold my-4">Must-Visit Sites</h3>
      <img src="https://picsum.photos/seed/rome/800/500" alt="Roman Colosseum" class="rounded-lg my-4"/>
      <ul class="list-disc list-inside mb-4">
        <li><strong>The Colosseum:</strong> Imagine the roar of the crowds as gladiators battled in this iconic amphitheater.</li>
        <li><strong>The Roman Forum:</strong> The center of Roman public life, where commerce, politics, and justice converged.</li>
        <li><strong>The Pantheon:</strong> A marvel of ancient Roman engineering, with its magnificent unsupported dome.</li>
      </ul>
    `,
    imageUrl: 'https://picsum.photos/seed/rome-main/800/600',
    author: author,
    date: 'May 5, 2023',
    category: 'Europe',
    tags: ['History', 'Culture', 'Italy']
  }
];
