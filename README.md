# GMISSION 다국어 웹사이트

이 프로젝트는 GMISSION 기업 웹사이트를 Next.js와 TailwindCSS를 사용하여 구축한 다국어 지원 웹사이트입니다.

## 🌐 지원 언어

- 한국어 (ko)
- 일본어 (ja)
- 영어 (en)

## 🚀 주요 기능

- **반응형 디자인**: 모든 디바이스에서 최적화된 사용자 경험
- **다국어 지원**: next-intl을 사용한 완전한 국제화
- **모던 UI**: TailwindCSS를 활용한 현대적인 디자인
- **AI 솔루션 소개**: GMISSION의 주요 AI 기반 솔루션들 소개
- **고객사 포트폴리오**: 300+ 고객사 정보
- **문의 시스템**: 통합 문의 양식

## 🛠 기술 스택

- **프레임워크**: Next.js 14+ (App Router)
- **스타일링**: TailwindCSS
- **국제화**: next-intl
- **아이콘**: Heroicons
- **타입스크립트**: TypeScript
- **빌드 도구**: Next.js built-in bundler

## 📁 프로젝트 구조

```
src/
├── app/
│   ├── [locale]/          # 다국어 라우팅
│   │   ├── layout.tsx     # 로케일별 레이아웃
│   │   └── page.tsx       # 메인 페이지
│   ├── globals.css        # 글로벌 스타일
│   └── layout.tsx         # 루트 레이아웃
├── components/            # 재사용 가능한 컴포넌트
│   ├── Navigation.tsx     # 네비게이션 바
│   ├── Hero.tsx          # 히어로 섹션
│   ├── Solutions.tsx     # 솔루션 섹션
│   ├── Clients.tsx       # 고객사 섹션
│   ├── Contact.tsx       # 문의 섹션
│   └── Footer.tsx        # 푸터
├── i18n.ts               # 국제화 설정
└── middleware.ts         # 라우팅 미들웨어
messages/                 # 다국어 메시지
├── ko.json              # 한국어
├── ja.json              # 일본어
└── en.json              # 영어
```

## 🏃‍♂️ 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 빌드

```bash
npm run build
```

### 프로덕션 실행

```bash
npm start
```

## 🌍 라우팅

- `/ko` - 한국어 버전
- `/ja` - 일본어 버전
- `/en` - 영어 버전

기본 언어는 한국어로 설정되어 있으며, 브라우저 언어 설정에 따라 자동으로 리다이렉트됩니다.

## 📱 주요 섹션

### 1. Navigation

- 다국어 메뉴
- 반응형 모바일 메뉴
- 언어 선택기

### 2. Hero Section

- 임팩트 있는 메인 메시지
- CTA 버튼
- 그라디언트 배경

### 3. Solutions

- AI FAX, AI OCR, AI CC, DEXMA 솔루션 소개
- Agentic AI 솔루션
- 카드 형태의 레이아웃

### 4. Clients

- 공공기관, 금융업, 일반기업별 분류
- 300+ 고객사 정보
- 통계 섹션

### 5. Contact

- 문의 양식
- 연락처 정보
- 운영 시간

### 6. Footer

- 회사 정보
- 빠른 링크
- 사업자 정보

## 🎨 디자인 시스템

- **주 색상**: Blue (#2563EB)
- **보조 색상**: Gray, Green, Purple, Orange
- **타이포그래피**: Inter 폰트
- **간격**: TailwindCSS 스페이싱 시스템
- **브레이크포인트**: sm(640px), md(768px), lg(1024px), xl(1280px)

## 🔧 커스터마이징

### 언어 추가

1. `src/i18n.ts`에서 locales 배열에 새 언어 코드 추가
2. `messages/` 폴더에 새 언어 JSON 파일 생성
3. `src/middleware.ts`에서 경로 설정 업데이트

### 새 섹션 추가

1. `src/components/` 폴더에 새 컴포넌트 생성
2. 메인 페이지에 컴포넌트 추가
3. 필요한 다국어 메시지 추가

## 📄 라이선스

이 프로젝트는 GMISSION의 요청에 따라 제작된 웹사이트입니다.

## 📞 문의

- **전화**: 1544-5381
- **이메일**: info@gmission.com
- **주소**: 서울특별시 성동구 뚝섬로 1길 25 서울숲 한라에코밸리 1203호, 1301호
