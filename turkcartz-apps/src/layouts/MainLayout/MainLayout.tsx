import React from "react";
import Footer from "src/components/Footer";
import { MainNavbar } from "src/components/Navbar";
import  Categories  from "src/components/Categories/Categories";
type MainLayoutProps = {
  children: React.ReactNode;
};
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <MainNavbar></MainNavbar>
      <div className="h-screen bg-gray-100">
        <div
          className="flex justify-between w-full max-w-screen-xl py-6 mx-auto space-x-4"></div>
          <Categories className="w-1/5"/>
      </div>
      {children}
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
