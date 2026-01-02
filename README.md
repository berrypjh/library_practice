# library practice

> **Note**
> 이 프로젝트는 **라이브러리 배포 프로세스와 모노레포 아키텍처를 학습하기 위해 제작된 연습용 프로젝트**입니다.

**Nx**를 사용하여 구축된 React 및 React Native용 크로스 플랫폼 라이브러리 모노레포입니다.
하나의 공통 코어 로직(`chart-core`)을 공유하여 웹과 모바일 환경에서 일관된 차트 경험을 제공합니다.

## 기술 스택 (Tech Stack)

| 분류 | 기술 |
| --- | --- |
| **Monorepo & Build** | ![Nx](https://img.shields.io/badge/Nx-143055?style=flat-square&logo=nx&logoColor=white) ![pnpm](https://img.shields.io/badge/pnpm-F69220?style=flat-square&logo=pnpm&logoColor=white) |
| **Core** | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) |
| **Demo Web** | ![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white) |
| **Demo Mobile** | ![React Native](https://img.shields.io/badge/React_Native-61DAFB?style=flat-square&logo=react&logoColor=black) ![Expo](https://img.shields.io/badge/Expo-000020?style=flat-square&logo=expo&logoColor=white) |
| **Testing & CI/CD** | ![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=flat-square&logo=vitest&logoColor=white) ![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=flat-square&logo=storybook&logoColor=white) ![Chromatic](https://img.shields.io/badge/Chromatic-FC521F?style=flat-square&logo=chromatic&logoColor=white) ![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat-square&logo=github-actions&logoColor=white) |

## 프로젝트 구조 및 목적

- **Core Logic**: 프레임워크에 구애받지 않는 순수 로직을 관리합니다.
- **Web Library**: React 기반의 컴포넌트 라이브러리입니다.
- **Mobile Library**: React Native (SVG) 기반의 컴포넌트 라이브러리입니다.
- **Demo Apps**: 라이브러리를 사용하는 웹 및 모바일 데모 애플리케이션이 포함되어 있습니다.

## 디렉토리 구조 (Directory Structure)

```text
libs/
├── chart-core/          # 공통 차트 계산 로직 (Pure TS)
├── chart-react/         # React용 차트 컴포넌트 (Web)
└── chart-react-native/  # React Native용 차트 컴포넌트 (Mobile)

apps/
├── demo-web/            # 라이브러리 테스트용 웹 데모 앱 (React + Vite)
└── demo-mobile/         # 라이브러리 테스트용 모바일 데모 앱 (Expo)
