export const headerLinks = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Store",
    route: "/store",
  },
  {
    label: "Wishlist",
    route: "/wishlist",
    mobile: true, 
  },
  {
    label: "About Us",
    route: "/about",
  },
  {
    label: "Contact Us",
    route: "/contact",
  }
];

export const headerButtons = [
  {
    label: "search",
    icon: "/assets/icons/search.svg",
    route: "/search",
    mobile: false,
  },
  {
    label: "wishlist",
    icon: "/assets/icons/heart.svg",
    route: "/wishlist",
    mobile: false,
  },
  {
    label: "profile",
    icon: "/assets/icons/user.svg",
    route: "/profile",
    mobile: true,
  },
  {
    label: "shopping-bag",
    icon: "/assets/icons/shopping-bag.svg",
    route: "/shopping-bag",
    mobile: true,
  }
];

export const sortOptions = [
  {
    label: "Trending Now",
    value: "trending_now",
  },
  {
    label: "New Arrivals",
    value: "new_arrivals",
  },
  {
    label: "Best Selling",
    value: "best_selling",
  },
  {
    label: "Highest Price",
    value: "highest_price",
  },
  {
    label: "Lowest Price",
    value: "lowest_price",
  }
]