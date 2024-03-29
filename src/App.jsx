import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./page/Main";
import Home from "./page/Home";
import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";
import Search from "./page/Search";
import Rank from "./page/Rank";
import Service from "./page/Service";
import KakaoMap from "./page/KakaoMap";
import Joinmembership from "./page/Joinmembership";
import Login from "./page/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main 페이지에는 Header와 NavigationBar를 제외한 컴포넌트를 렌더링 */}
        <Route path="/" element={<MainHN />} />
        {/* 나머지 페이지에는 Header와 NavigationBar를 포함하여 렌더링 */}
        <Route path="/home" element={<HomeHN />} />
        <Route path="/search" element={<SearchHN />} />
        <Route path="/login" element={<LoginHN />} />
        <Route path="/rank" element={<RankHN />} />
        <Route path="/service" element={<ServiceHN />} />
        <Route path="/Joinmembership" element={<JoinmembershipHN />} />
      </Routes>
    </BrowserRouter>
  );
}

// Main 페이지에서는 Header와 NavigationBar를 제외한 컴포넌트를 렌더링
const MainHN = () => (
  <div>
    <Main />
  </div>
);

// 나머지 페이지에서는 Header와 NavigationBar를 포함하여 컴포넌트를 렌더링
const HomeHN = () => (
  <div>
    <Header />
    <NavigationBar />
    <Home />
    <KakaoMap />
  </div>
);

const SearchHN = () => (
  <div>
    <Header />
    <NavigationBar />
    <Search />
    <KakaoMap />
  </div>
);

const LoginHN = () => (
  <div>
    <Header />
    <NavigationBar />
    <Login />
    <KakaoMap />
  </div>
);

const RankHN = () => (
  <div>
    <Header />
    <NavigationBar />
    <Rank />
    <KakaoMap />
  </div>
);

const ServiceHN = () => (
  <div>
    <Header />
    <NavigationBar />
    <Service />
    <KakaoMap />
  </div>
);

const JoinmembershipHN = () => (
  <div>
    <Header />
    <NavigationBar />
    <Joinmembership />
    <KakaoMap />
  </div>
);

export default App;
