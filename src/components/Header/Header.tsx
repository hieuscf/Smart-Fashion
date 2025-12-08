import { useState, type KeyboardEvent } from "react";
import TopBar from "./TopBar";
import LogoSection from "./LogoSection";
import SearchBar from "./SearchBar";
import HeaderActions from "./HeaderActions";
import CategoriesNav from "./CategoriesNav";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [cartCount] = useState(3);
  const [wishlistCount] = useState(5);
  const [notificationCount] = useState(2);
  const [isLoggedIn] = useState(true);

  const categories: string[] = [
    "Điện thoại",
    "Laptop",
    "Thời trang",
    "Mỹ phẩm",
    "Đồ gia dụng",
    "Thể thao",
    "Sách",
    "Đồ chơi",
  ];

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <TopBar />

      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-6">
          <LogoSection isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            handleKeyPress={handleKeyPress}
            handleSearch={handleSearch}
          />

          <HeaderActions
            cartCount={cartCount}
            wishlistCount={wishlistCount}
            notificationCount={notificationCount}
            isLoggedIn={isLoggedIn}
            isUserMenuOpen={isUserMenuOpen}
            setIsUserMenuOpen={setIsUserMenuOpen}
          />
        </div>
      </div>

      <CategoriesNav categories={categories} />
    </header>
  );
}
