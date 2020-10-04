import React from "react";
import {
  Container,
  RightContainer,
  RightMiniContainer,
  HomeIcon,
  RightMiniContainer2,
  MapIcon,
  LeftContainer,
} from "./styles";
import Link from "next/link";

const Header = () => {
  return (
    <Container height="10vh" width="100%">
      <LeftContainer></LeftContainer>
      <RightContainer>
        <Link href="/">
          <RightMiniContainer>
            <HomeIcon
              id="Layer_1"
              enable-background="new 0 0 511.995 511.995"
              height="36"
              viewBox="0 0 511.995 511.995"
              width="36"
              xmlns="http://www.w3.org/2000/svg"
              fill="#A1A1FF"
            >
              <g>
                <path d="m507.308 236.641-198.98-198.99c-28.86-28.85-75.8-28.85-104.66 0l-198.98 198.99c-6.25 6.25-6.25 16.38 0 22.63 6.24 6.25 16.38 6.25 22.62 0l12.69-12.69v203.4c0 25.405 20.595 46 46 46h80c5.523 0 10-4.477 10-10v-148c0-27.614 22.386-50 50-50h60c27.614 0 50 22.386 50 50v148c0 5.523 4.477 10 10 10h80c25.405 0 46-20.595 46-46v-203.4l12.69 12.69c3.12 3.12 7.22 4.69 11.31 4.69s8.19-1.57 11.31-4.69c6.25-6.25 6.25-16.38 0-22.63z" />
              </g>
            </HomeIcon>
          </RightMiniContainer>
        </Link>
        <Link href="/seattlemap">
          <RightMiniContainer2>
            <MapIcon
              id="Layer_1"
              enable-background="new 0 0 512 512"
              height="34"
              viewBox="0 0 512 512"
              width="34"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path d="m407.579 87.677c-31.073-53.624-86.265-86.385-147.64-87.637-2.62-.054-5.257-.054-7.878 0-61.374 1.252-116.566 34.013-147.64 87.637-31.762 54.812-32.631 120.652-2.325 176.123l126.963 232.387c.057.103.114.206.173.308 5.586 9.709 15.593 15.505 26.77 15.505 11.176 0 21.183-5.797 26.768-15.505.059-.102.116-.205.173-.308l126.963-232.387c30.304-55.471 29.435-121.311-2.327-176.123zm-151.579 144.323c-39.701 0-72-32.299-72-72s32.299-72 72-72 72 32.299 72 72-32.298 72-72 72z" />
              </g>
            </MapIcon>
          </RightMiniContainer2>
        </Link>
      </RightContainer>
    </Container>
  );
};

export default Header;
