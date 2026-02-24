// import Book_Banner from '@/assets/banners/book_banner.jpg';
// import Book_Banner_2 from '@/assets/banners/book_banner_2.jpg';
// import Book_Banner_3 from '@/assets/banners/book_banner_3.jpg';
// import Games_Banner from '@/assets/banners/games_banner.jpg';
// import Ps5_banner from '@/assets/banners/ps5_banner.jpg';
// import Smart_Phone_Banner from '@/assets/banners/smart_phone_banner.jpg';
// import Smart_Phone_Banner_2 from '@/assets/banners/smart_phone_banner_2.jpg';

// export const bannerImg = {
//   Book_Banner,
//   Book_Banner_2,
//   Book_Banner_3,
//   Games_Banner,
//   Ps5_banner,
//   Smart_Phone_Banner,
//   Smart_Phone_Banner_2,
// };

import { ImageSourcePropType } from 'react-native';

export const bannerImg: Record<string, ImageSourcePropType> = {
  Book_Banner: require('@/assets/banners/book_banner.jpg'),
  Book_Banner_2: require('@/assets/banners/book_banner_2.jpg'),
  Book_Banner_3: require('@/assets/banners/book_banner_3.jpg'),
  Games_Banner: require('@/assets/banners/games_banner.jpg'),
  Ps5_banner: require('@/assets/banners/ps5_banner.jpg'),
  Smart_Phone_Banner: require('@/assets/banners/smart_phone_banner.jpg'),
  Smart_Phone_Banner_2: require('@/assets/banners/smart_phone_banner_2.jpg'),
};

export interface Banner {
  id: string;
  title: string;
  subtitle: string;
  category: "gaming" | "tech" | "books";
  image_url: string |  ImageSourcePropType;
  cta_text: string;
  cta_link: string;
  background_color: string;
  text_color: string;
  is_active: boolean;
  priority: number;
  start_date: string;
  end_date: string;
}

export const Banners: Banner[] = [
  // Existing banners
  {
    id: "banner_001",
    title: "Level Up Your Game!",
    subtitle: "Up to 40% Off on Gaming Accessories",
    category: "gaming",
    image_url: bannerImg.Smart_Phone_Banner_2,
    cta_text: "Shop Now",
    cta_link: "/category/gaming",
    background_color: "#1B1F3B",
    text_color: "#FFFFFF",
    is_active: true,
    priority: 2,
    start_date: "2026-02-01",
    end_date: "2026-03-01",
  },
  {
    id: "banner_002",
    title: "Mega 50% OFF Sale!",
    subtitle: "Flat 50% Discount on Selected Items",
    category: "tech",
    image_url: bannerImg.Smart_Phone_Banner,
    cta_text: "Grab Now",
    cta_link: "/deals/mega-sale",
    background_color: "#B31217",
    text_color: "#FFFFFF",
    is_active: true,
    priority: 0,
    start_date: "2026-02-24",
    end_date: "2026-03-10",
  },
  {
    id: "banner_003",
    title: "Festive Sale Live 🎉",
    subtitle: "Celebrate with Amazing Discounts on Books or Game",
    category: "gaming",
    image_url: bannerImg.Book_Banner,
    cta_text: "Shop Festive Deals",
    cta_link: "/deals/festive-sale",
    background_color: "#FF6F00",
    text_color: "#FFFFFF",
    is_active: true,
    priority: 1,
    start_date: "2026-02-25",
    end_date: "2026-03-20",
  },
  {
    id: "banner_004",
    title: "New Tech Arrivals",
    subtitle: "Latest Laptops & Smart Gadgets",
    category: "tech",
    image_url: bannerImg.Smart_Phone_Banner,
    cta_text: "Explore Now",
    cta_link: "/category/tech",
    background_color: "#0F2027",
    text_color: "#FFFFFF",
    is_active: true,
    priority: 3,
    start_date: "2026-02-10",
    end_date: "2026-04-01",
  },
  {
    id: "banner_005",
    title: "Bestselling Books",
    subtitle: "Top Picks for Tech & Gaming Lovers",
    category: "books",
    image_url: bannerImg.Ps5_banner,
    cta_text: "Browse Books",
    cta_link: "/category/books",
    background_color: "#F4EDE4",
    text_color: "#333333",
    is_active: true,
    priority: 4,
    start_date: "2026-01-15",
    end_date: "2026-03-30",
  },
  {
    id: "banner_006",
    title: "Gaming Console Deals",
    subtitle: "Special Offers on PS5 & Xbox",
    category: "gaming",
    image_url: bannerImg.Ps5_banner,
    cta_text: "View Deals",
    cta_link: "/deals/consoles",
    background_color: "#111111",
    text_color: "#00FFAA",
    is_active: true,
    priority: 5,
    start_date: "2026-02-20",
    end_date: "2026-03-15",
  },
  {
    id: "banner_007",
    title: "Programming Essentials",
    subtitle: "Save Big on Coding Books",
    category: "books",
    image_url: bannerImg.Book_Banner_3,
    cta_text: "Start Learning",
    cta_link: "/category/books/programming",
    background_color: "#222831",
    text_color: "#EEEEEE",
    is_active: true,
    priority: 6,
    start_date: "2026-02-01",
    end_date: "2026-05-01",
  },
];