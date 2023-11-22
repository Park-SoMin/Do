import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import {Nav, Button} from 'react-bootstrap'
// 부트 스트랩 사용
import Home from "./pages/HomePage/Home"; // 시작 페이지
import Artist from "./pages/ArtistPage/Artist"; // 소개글 페이지
import Artwork from "./pages/ArtWorkPage/ArtWork"; // 사진 페이지
import Mypage from "./pages/MyPage/MyPage"; // 관리자 페이지
import Test from "./pages/Test"; // 관리자 페이지
import About from "./pages/HomePage/About";
import Post from "./pages/HomePage/Post";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post" element={<Post />} />
        <Route path="/home" element={<Home />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/artist" element={<Artist />} />
        <Route path="/artwork" element={<Artwork />} />
        <Route path="/test" element={<Test />} />
        <Route path="/@username">
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
/* 
- 링크 이동
<a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
- 브라우저 별 확인
import { BrowserView, MobileView } from "react-device-detect"; //데스크탑 & 모바일 확인

<div className="App">
      <BrowserView>데스크톱브라우져!</BrowserView>
      <MobileView>모바일 브라우져!</MobileView>
    </div>
*/

/*
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";
import media from "./media";

const Wrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.subtitle};

  ${({ theme }) => theme.tablet`
    flex-direction: column;
    font-size: ${({ theme }) => theme.fontSizes.paragraph};
  `};

  width: 100vw;
  height: 100vh;
  background: wheat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Item = styled.div`
  width: 100px;
  height: 100px;
  background: white;
  margin: 5px;
`;

const ThemeProviderPrac = () => {
  return (
    <ThemeProvider theme={{ ...theme, ...media }}>
      <Wrapper>
        <Item>리액트</Item>
        <Item>미디어쿼리 적용 예제</Item>
      </Wrapper>
    </ThemeProvider>
  );
};

export default ThemeProviderPrac;
*/
