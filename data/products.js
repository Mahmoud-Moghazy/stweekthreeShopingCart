const images = {
  iPhone14Pro: '../images/products/iPhone_14_Pro.jpg',
  samsungGalaxyS23Ultra: '../images/products/Samsung_Galaxy_S23_Ultra.jpg',
  googlePixel8: '../images/products/Google_Pixel_8.jpg',
  onePlus11Pro: '../images/products/OnePlus_11_Pro.jpg',
  macBookPro16: '../images/products/MacBook_Pro_16.jpg',
  dellXPS13: '../images/products/Dell_XPS_13.jpg',
  hpSpectreX360: '../images/products/HP_Spectre_x360.jpg',
  asusROG: '../images/products/Asus_ROG_Zephyrus_G14.jpg',
};

export const products = [
  // Phones
  {
    id: 1,
    name: 'iPhone 14 Pro',
    image: images.iPhone14Pro,
    description: 'The iPhone 14 Pro features a 6.1-inch Super Retina XDR display, A16 Bionic chip, and a Pro camera system.',
    price: 999
  },
  {
    id: 2,
    name: 'Samsung Galaxy S23 Ultra',
    image: images.samsungGalaxyS23Ultra,
    description: 'The Samsung Galaxy S23 Ultra boasts a 6.8-inch Dynamic AMOLED display, Snapdragon 8 Gen 2 processor, and a 108MP quad camera.',
    price: 1199
  },
  {
    id: 3,
    name: 'Google Pixel 8',
    image: images.googlePixel8,
    description: 'The Google Pixel 8 offers a 6.3-inch OLED display, Google Tensor G3 chip, and outstanding AI-powered camera features.',
    price: 899
  },
  {
    id: 4,
    name: 'OnePlus 11 Pro',
    image: images.onePlus11Pro,
    description: 'OnePlus 11 Pro comes with a 6.7-inch Fluid AMOLED display, Snapdragon 8 Gen 2 chip, and a versatile 50MP triple camera setup.',
    price: 799
  },

  // Laptops
  {
    id: 5,
    name: 'MacBook Pro 16"',
    image: images.macBookPro16,
    description: 'Apple MacBook Pro 16" with M1 Pro chip delivers extraordinary performance and a stunning 16-inch Retina display.',
    price: 2499
  },
  {
    id: 6,
    name: 'Dell XPS 13',
    image: images.dellXPS13,
    description: 'The Dell XPS 13 features a 13.4-inch InfinityEdge display, Intel i7 processor, and premium build quality.',
    price: 1499
  },
  {
    id: 7,
    name: 'HP Spectre x360',
    image: images.hpSpectreX360,
    description: 'HP Spectre x360 2-in-1 laptop with a 13.3-inch OLED touchscreen, Intel i7 processor, and a sleek, ultra-portable design.',
    price: 1399
  },
  {
    id: 8,
    name: 'Asus ROG Zephyrus G14',
    image: images.asusROG,
    description: 'The Asus ROG Zephyrus G14 gaming laptop is equipped with a 14-inch QHD display, AMD Ryzen 9 processor, and NVIDIA RTX 3060 GPU.',
    price: 1699
  }
];
