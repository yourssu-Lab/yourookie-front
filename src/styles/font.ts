import { css } from 'styled-components';

import PretendardExtraBold from '../assets/fonts/Pretendard-ExtraBold.woff2';
import PretendardMedium from '../assets/fonts/Pretendard-Medium.woff2';
import PretendardBold from '../assets/fonts/Pretendard-Bold.woff2';
import PretendardSemiBold from '../assets/fonts/Pretendard-SemiBold.woff2';
import PretendardExtraLight from '../assets/fonts/Pretendard-ExtraLight.woff2';
import PretendardLight from '../assets/fonts/Pretendard-Light.woff2';
import PretendardRegular from '../assets/fonts/Pretendard-Regular.woff2';
import PretendardThin from '../assets/fonts/Pretendard-Thin.woff2';
import PretendardBlack from '../assets/fonts/Pretendard-Black.woff2';
import PretendardVariable from '../assets/fonts/PretendardVariable.woff2';
import MungyeongGamhongApple from '../assets/fonts/Mungyeong-Gamhong-Apple.ttf';

export const fonts = css`
    @font-face {
        font-family: 'Pretendard';
        font-weight: 900;
        font-display: swap;
        src: local('Pretendard Black'), url(${PretendardBlack}) format('woff2');
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 800;
        font-display: swap;
        src: local('Pretendard ExtraBold'), url(${PretendardExtraBold}) format('woff2');
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 700;
        font-display: swap;
        src: local('Pretendard Bold'), url(${PretendardBold}) format('woff2');
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 600;
        font-display: swap;
        src: local('Pretendard SemiBold'), url(${PretendardSemiBold}) format('woff2');
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 500;
        font-display: swap;
        src: local('Pretendard Medium'), url(${PretendardMedium}) format('woff2');
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 400;
        font-display: swap;
        src: local('Pretendard Regular'), url(${PretendardRegular}) format('woff2');
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 300;
        font-display: swap;
        src: local('Pretendard Light'), url(${PretendardLight}) format('woff2');
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 200;
        font-display: swap;
        src: local('Pretendard ExtraLight'), url(${PretendardExtraLight}) format('woff2');
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 100;
        font-display: swap;
        src: local('Pretendard Thin'), url(${PretendardThin}) format('woff2');
    }

    @font-face {
        font-family: 'Pretendard Variable';
        font-weight: 45 920;
        font-style: normal;
        font-display: swap;
        src: url(${PretendardVariable}) format('woff2-variations');
    }
    
    @font-face {
        font-family: 'Mungyeong Gamhong Apple';
        font-weight: 400;
        font-style: normal;;
        src: url(${MungyeongGamhongApple});
    }
`;
