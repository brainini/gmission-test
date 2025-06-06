"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export type Language = "ko" | "ja" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// 간단한 번역 데이터
const translations = {
  ko: {
    // Navigation
    "nav.gmission": "GMISSION",
    "nav.solution": "솔루션",
    "nav.service": "서비스",
    "nav.agenticAi": "Agentic AI",
    "nav.reference": "레퍼런스",
    "nav.news": "뉴스",
    "nav.contact": "연락처",

    // Submenu
    "submenu.greeting": "인사말",
    "submenu.history": "연혁",
    "submenu.patents": "특허",
    "submenu.aiFax": "AI Fax",
    "submenu.aiOcr": "AI OCR",
    "submenu.aiCc": "AI CC",
    "submenu.dexma": "DEXMA",
    "submenu.fillOne": "Fill One",
    "submenu.visibleArs": "Visible ARS",
    "submenu.ivr": "IVR",
    "submenu.dxhund": "DXHund",
    "submenu.retriever": "Retriever",
    "submenu.caseStudies": "사례 연구",
    "submenu.clients": "고객사",
    "submenu.partners": "파트너",
    "submenu.notice": "공지사항",
    "submenu.media": "미디어",
    "submenu.gallery": "갤러리",

    // Hero section
    "hero.title": "AI 기반 디지털 혁신 솔루션",
    "hero.subtitle":
      "GMISSION은 최첨단 AI 기술로 비즈니스의 디지털 트랜스포메이션을 이끕니다",
    "hero.cta": "자세히 알아보기",

    // Language
    "language.korean": "한국어",
    "language.japanese": "日本語",
    "language.english": "English",

    // Solutions
    "solutions.title": "AI 솔루션",
    "solutions.subtitle":
      "AI 기반의 혁신적인 솔루션으로 비즈니스 효율성을 극대화하세요",
    "solutions.aiFax.title": "AI FAX",
    "solutions.aiFax.description": "지능형 팩스 자동화 솔루션",
    "solutions.aiOcr.title": "AI OCR",
    "solutions.aiOcr.description": "문서 자동 인식 및 데이터 추출",
    "solutions.aiCc.title": "AI CC",
    "solutions.aiCc.description": "지능형 상담 센터 솔루션",
    "solutions.dexma.title": "DEXMA",
    "solutions.dexma.description": "딥러닝 기반 영상 인식 솔루션",
    "solutions.agenticTitle": "Agentic AI 솔루션",
    "solutions.dxhund": "DXHUND (닥스훈드)",
    "solutions.dxhundDesc": "지능형 데이터 분석 및 처리 에이전트",
    "solutions.retriever": "RETRIEVER (리트리버)",
    "solutions.retrieverDesc": "고급 정보 검색 및 추천 시스템",
    "solutions.detailBtn": "자세히 보기",
    "solutions.features.webFax": "웹 팩스",
    "solutions.features.appFax": "앱 팩스",
    "solutions.features.cloudFax": "클라우드 팩스",
    "solutions.features.voiceFax": "음성 팩스",
    "solutions.features.autoFax": "무인 팩스",
    "solutions.features.docRecognition": "문서 인식",
    "solutions.features.textExtraction": "텍스트 추출",
    "solutions.features.dataConversion": "데이터 변환",
    "solutions.features.autoClassification": "자동 분류",
    "solutions.features.chatBot": "상담봇",
    "solutions.features.chatAI": "챗봇",
    "solutions.features.stt": "STT",
    "solutions.features.tts": "TTS",
    "solutions.features.faceRecognition": "안면 인식",
    "solutions.features.plateRecognition": "차량 번호 인식",
    "solutions.features.dexmaAqua": "DEXMA AQUA",

    // Clients
    "clients.title": "주요 고객사",
    "clients.subtitle":
      "다양한 분야의 선도 기업들이 지미션의 솔루션을 신뢰하고 있습니다",
    "clients.publicOrganizations": "공공기관",
    "clients.financialSector": "금융권",
    "clients.generalCompanies": "일반기업",
    "clients.moreBtn": "더 많은 고객사 보기",
    "clients.statsTitle": "지미션과 함께하는 기업들",
    "clients.totalClients": "총 고객사",
    "clients.publicOrgs": "공공기관",
    "clients.financialOrgs": "금융기관",
    "clients.generalOrgs": "일반기업",

    // Contact
    "contact.title": "문의하기",
    "contact.subtitle":
      "AI 솔루션에 대해 궁금한 점이 있으시면 언제든 문의해 주세요",
    "contact.formTitle": "문의 양식",
    "contact.company": "회사명",
    "contact.name": "담당자명",
    "contact.position": "직책",
    "contact.phone": "연락처",
    "contact.email": "이메일",
    "contact.source": "알게 된 경로",
    "contact.content": "문의 내용",
    "contact.placeholder": "문의하실 내용을 자세히 적어주세요",
    "contact.submit": "문의 보내기",
    "contact.infoTitle": "연락처 정보",
    "contact.phoneLabel": "전화번호",
    "contact.emailLabel": "이메일",
    "contact.addressLabel": "주소",
    "contact.hoursTitle": "운영 시간",
    "contact.weekdays": "평일",
    "contact.saturday": "토요일",
    "contact.sunday": "일요일",
    "contact.holidays": "공휴일",
    "contact.closed": "휴무",
    "contact.quickTitle": "빠른 문의",
    "contact.kakaoBtn": "카카오톡 상담",
    "contact.callBtn": "전화 상담 예약",
    "contact.selectPlaceholder": "선택해 주세요",
    "contact.sourceSearch": "검색엔진",
    "contact.sourceReferral": "지인 추천",
    "contact.sourceWebsite": "웹사이트",
    "contact.sourceSocial": "소셜미디어",
    "contact.sourceOther": "기타",

    // Footer
    "footer.description":
      "AI 기반의 혁신적인 솔루션으로 기업의 디지털 혁신을 이끄는 글로벌 IT 기업입니다.",
    "footer.solutionsTitle": "주요 솔루션",
    "footer.companyTitle": "회사 정보",
    "footer.about": "회사 소개",
    "footer.history": "연혁",
    "footer.patents": "특허 및 인증",
    "footer.cases": "도입 사례",
    "footer.notice": "공지사항",
    "footer.tel": "전화",
    "footer.fax": "팩스",
    "footer.mail": "이메일",
    "footer.address": "주소",
    "footer.bizLic": "사업자등록번호",
    "footer.representative": "대표자",
    "footer.copyright": "© 2024 GMISSION. All rights reserved.",
    "footer.topBtn": "TOP",

    // Pages
    "pages.about.greeting.title": "인사말",
    "pages.about.greeting.subtitle":
      "AI 기반 디지털 혁신을 선도하는 GMISSION입니다",
    "pages.about.history.title": "연혁",
    "pages.about.history.subtitle":
      "GMISSION의 성장 과정과 주요 성과를 소개합니다",
    "pages.about.patents.title": "특허 및 인증",
    "pages.about.patents.subtitle":
      "GMISSION의 기술력을 입증하는 특허와 인증서를 확인하세요",

    "pages.solutions.aiFax.title": "AI FAX",
    "pages.solutions.aiFax.subtitle":
      "지능형 팩스 자동화 솔루션으로 업무 효율성을 극대화하세요",
    "pages.solutions.aiOcr.title": "AI OCR",
    "pages.solutions.aiOcr.subtitle":
      "문서 자동 인식 및 데이터 추출로 디지털 변환을 가속화하세요",
    "pages.solutions.aiCc.title": "AI CC",
    "pages.solutions.aiCc.subtitle":
      "지능형 상담 센터 솔루션으로 고객 서비스를 혁신하세요",
    "pages.solutions.dexma.title": "DEXMA",
    "pages.solutions.dexma.subtitle":
      "딥러닝 기반 영상 인식 솔루션으로 보안과 분석을 강화하세요",

    "pages.services.fillOne.title": "FillOne",
    "pages.services.fillOne.subtitle":
      "스마트 레터링 서비스로 고객 응답률을 높이세요",
    "pages.services.visibleArs.title": "보이는 ARS",
    "pages.services.visibleArs.subtitle":
      "시각적 ARS 시스템으로 고객 경험을 개선하세요",
    "pages.services.ivr.title": "IVR",
    "pages.services.ivr.subtitle":
      "지능형 음성 응답 시스템으로 고객 서비스를 자동화하세요",

    "pages.agenticAi.dxhund.title": "DXHUND",
    "pages.agenticAi.dxhund.subtitle": "지능형 데이터 분석 및 처리 에이전트",
    "pages.agenticAi.retriever.title": "RETRIEVER",
    "pages.agenticAi.retriever.subtitle": "고급 정보 검색 및 추천 시스템",

    "pages.reference.caseStudies.title": "도입 사례",
    "pages.reference.caseStudies.subtitle":
      "GMISSION 솔루션의 성공적인 도입 사례를 확인하세요",
    "pages.reference.clients.title": "고객사",
    "pages.reference.clients.subtitle":
      "GMISSION을 신뢰하는 다양한 분야의 고객사를 소개합니다",
    "pages.reference.partners.title": "파트너",
    "pages.reference.partners.subtitle":
      "GMISSION과 함께하는 비즈니스 파트너를 소개합니다",

    "pages.news.notice.title": "공지사항",
    "pages.news.notice.subtitle":
      "GMISSION의 최신 소식과 중요한 공지사항을 확인하세요",
    "pages.news.media.title": "언론보도",
    "pages.news.media.subtitle":
      "GMISSION의 언론 보도 자료와 미디어 소식을 확인하세요",
    "pages.news.gallery.title": "갤러리",
    "pages.news.gallery.subtitle":
      "GMISSION의 다양한 활동과 이벤트 사진을 확인하세요",

    // Detail Pages Content
    // About - Greeting
    "greeting.ceoName": "한준섭",
    "greeting.ceoTitle": "대표이사",
    "greeting.ceoMessage":
      "지미션은 AI 기술을 통해 모든 사람이 더 나은 삶을 살 수 있도록 돕는 것을 목표로 합니다. 우리의 혁신적인 솔루션으로 고객의 업무 효율성을 극대화하고, 디지털 전환의 여정에서 든든한 파트너가 되겠습니다.",
    "greeting.ceoQuote": "- 지미션 대표이사 한준섭",
    "greeting.vision.innovation": "혁신",
    "greeting.vision.innovationDesc":
      "최첨단 AI 기술을 바탕으로 끊임없이 혁신하여 고객에게 최고의 솔루션을 제공합니다.",
    "greeting.vision.trust": "신뢰",
    "greeting.vision.trustDesc":
      "고객과의 약속을 지키고, 투명하고 정직한 비즈니스로 신뢰받는 기업이 되겠습니다.",
    "greeting.vision.growth": "성장",
    "greeting.vision.growthDesc":
      "고객과 함께 성장하며, 지속 가능한 비즈니스 모델로 상생의 가치를 창출합니다.",
    "greeting.mission.title": "Our Mission",
    "greeting.mission.description":
      "AI 기술의 민주화를 통해 모든 기업이 디지털 전환의 혜택을 누릴 수 있도록 하고, 혁신적인 솔루션으로 고객의 성공을 지원하여 더 나은 미래를 만들어갑니다.",
    "greeting.stats.clients": "고객사",
    "greeting.stats.patents": "특허 및 인증",
    "greeting.stats.experience": "사업 경험",

    // About - History
    "history.title": "GMISSION 연혁",
    "history.2024.title": "2024년",
    "history.2024.item1": "SW 고성장클럽 선정 (과학기술정보통신부)",
    "history.2024.item2": "FillOne 솔루션 조달청 디지털서비스몰 등록",
    "history.2024.item3": "G-PASS 인증 획득",
    "history.2020-2023.title": "2020-2023년",
    "history.2020-2023.item1": "AI CC 솔루션 고도화",
    "history.2020-2023.item2": "DEXMA 영상 인식 솔루션 개발",
    "history.2020-2023.item3": "AI OCR 솔루션 출시",
    "history.2020-2023.item4": "Agentic AI 솔루션 개발",
    "history.2015-2019.title": "2015-2019년",
    "history.2015-2019.item1": "AI 기술 연구개발 본격 시작",
    "history.2015-2019.item2": "딥러닝 전문 개발팀 구성",
    "history.2015-2019.item3": "AI 상담센터 솔루션 개발",
    "history.2000-2014.title": "2000-2014년",
    "history.2000-2014.item1": "주식회사 지미션 설립 (2000년)",
    "history.2000-2014.item2": "기업용 팩스 솔루션 출시",
    "history.2000-2014.item3": "웹 기반 팩스 솔루션 개발",
    "history.2000-2014.item4": "B2B 사업 본격화",
    "history.achievements.title": "주요 성과",
    "history.achievements.clients": "고객사",
    "history.achievements.solutions": "솔루션",
    "history.achievements.patents": "특허",
    "history.achievements.experience": "경험",

    // Solutions - AI Fax
    "aiFax.subtitle": "AI 기반 팩스 자동화 솔루션",
    "aiFax.description":
      "인공지능 기술을 활용하여 팩스 업무를 완전히 자동화하고, 업무 효율성을 극대화하는 차세대 팩스 솔루션입니다.",
    "aiFax.features.webFax.title": "웹 팩스",
    "aiFax.features.webFax.desc":
      "브라우저에서 바로 사용할 수 있는 웹 기반 팩스 솔루션",
    "aiFax.features.appFax.title": "앱 팩스",
    "aiFax.features.appFax.desc": "모바일 앱을 통한 언제 어디서나 팩스 송수신",
    "aiFax.features.cloudFax.title": "클라우드 팩스",
    "aiFax.features.cloudFax.desc": "클라우드 기반 확장 가능한 팩스 서비스",
    "aiFax.features.voiceFax.title": "음성 팩스",
    "aiFax.features.voiceFax.desc": "음성 인식을 통한 팩스 내용 자동 변환",
    "aiFax.features.autoFax.title": "무인 팩스",
    "aiFax.features.autoFax.desc": "24시간 자동 운영되는 무인 팩스 시스템",
    "aiFax.features.aiRecognition.title": "AI 인식",
    "aiFax.features.aiRecognition.desc":
      "인공지능을 통한 문서 자동 분류 및 처리",
    "aiFax.benefits.title": "도입 효과",
    "aiFax.benefits.efficiency.title": "업무 효율성 향상",
    "aiFax.benefits.efficiency.item1":
      "팩스 송수신 자동화로 업무 시간 80% 단축",
    "aiFax.benefits.efficiency.item2": "문서 자동 분류 및 라우팅",
    "aiFax.benefits.efficiency.item3": "실시간 송수신 현황 모니터링",
    "aiFax.benefits.cost.title": "비용 절감",
    "aiFax.benefits.cost.item1": "종이 및 토너 비용 절약",
    "aiFax.benefits.cost.item2": "전화 회선 비용 최적화",
    "aiFax.benefits.cost.item3": "인력 운영비 절감",
    "aiFax.cta.title": "AI FAX 솔루션을 경험해보세요",
    "aiFax.cta.description":
      "무료 체험을 통해 AI 팩스의 강력한 기능을 직접 확인해보세요",
    "aiFax.cta.button": "무료 체험 신청",

    // Services - FillOne
    "fillOne.subtitle": "FillOne 스마트 레터링 서비스",
    "fillOne.description":
      "수신자의 스마트폰에 발신자의 정보를 노출시켜 고객 전화 응답율을 높이는 혁신적인 서비스입니다.",
    "fillOne.howItWorks.title": "서비스 작동 원리",
    "fillOne.howItWorks.step1.title": "전화 발신",
    "fillOne.howItWorks.step1.desc":
      "고객에게 전화를 걸면 시스템이 자동으로 활성화됩니다",
    "fillOne.howItWorks.step2.title": "정보 표시",
    "fillOne.howItWorks.step2.desc":
      "수신자 화면에 기업 정보(로고, 상호명)가 표시됩니다",
    "fillOne.howItWorks.step3.title": "자동 팝업",
    "fillOne.howItWorks.step3.desc":
      "통화 종료 후 설정된 웹페이지가 자동으로 팝업됩니다",
    "fillOne.features.title": "주요 기능",
    "fillOne.features.companyInfo.title": "기업 정보 표시",
    "fillOne.features.companyInfo.desc":
      "수신자의 스마트폰 화면에 기업 로고, 상호명, CI가 포함된 이미지가 표시되어 전화의 신뢰성을 높입니다.",
    "fillOne.features.autoPopup.title": "자동 웹페이지 팝업",
    "fillOne.features.autoPopup.desc":
      "통화 종료 후 홈페이지, 예약페이지, 설문조사 등 사전에 설정한 웹페이지가 자동으로 팝업됩니다.",
    "fillOne.features.flexibleSettings.title": "유연한 설정",
    "fillOne.features.flexibleSettings.desc":
      "고객별, 기간별, 시간별, 서비스별로 다른 이미지와 팝업 페이지를 설정할 수 있습니다.",
    "fillOne.features.analytics.title": "통계 분석",
    "fillOne.features.analytics.desc":
      "드롭 콜 감소율, 통화 완료율, 웹페이지 접속률 등 다양한 통계 데이터를 제공합니다.",
    "fillOne.benefits.title": "도입 효과",
    "fillOne.benefits.response.title": "응답률 향상",
    "fillOne.benefits.response.desc":
      "스팸 전화 오인 방지로 전화 응답률 대폭 증가",
    "fillOne.benefits.trust.title": "신뢰도 증대",
    "fillOne.benefits.trust.desc": "정확한 발신자 정보로 고객 신뢰도 향상",
    "fillOne.benefits.sales.title": "매출 증대",
    "fillOne.benefits.sales.desc":
      "자동 웹페이지 연결로 즉시 예약 및 구매 유도",
    "fillOne.cta.title": "FillOne으로 고객 응답률을 높이세요",
    "fillOne.cta.description":
      "스마트 레터링 서비스로 더 많은 고객과 연결되고 매출을 증대시키세요",
    "fillOne.cta.button": "무료 체험 시작",

    // Common Terms
    "common.freeTrial": "무료 체험",
    "common.learnMore": "자세히 보기",
    "common.getStarted": "시작하기",
    "common.keyFeatures": "주요 기능",
    "common.benefits": "도입 효과",
    "common.howItWorks": "작동 원리",

    // About - Patents
    "patents.title": "특허",
    "patents.certifications": "인증서",
    "patents.techCompetitiveness": "기술 경쟁력 현황",
    "patents.techCompetitivenessDesc":
      "GMISSION의 기술적 우수성을 보여주는 수치",
    "patents.registeredPatents": "등록 특허",
    "patents.certifications.count": "보유 인증",
    "patents.techFields": "기술 분야",
    "patents.rdExperience": "연구개발 경험",
    "patents.items.aiFax": "AI 기반 팩스 자동화 시스템",
    "patents.items.aiOcr": "딥러닝 기반 문서 인식 시스템",
    "patents.items.videoRecognition": "실시간 영상 분석 객체 인식 시스템",
    "patents.items.aiChatbot": "AI 상담봇 자연어 처리 시스템",
    "patents.certs.swClub": "SW 고성장클럽",
    "patents.certs.gpass": "G-PASS 인증",
    "patents.certs.iso": "ISO 27001",

    // Solutions - AI OCR
    "aiOcr.subtitle": "AI OCR 문서 인식 솔루션",
    "aiOcr.description":
      "인공지능 기술을 활용한 고정밀 문서 인식 및 데이터 추출로 디지털 변환을 가속화하는 솔루션입니다.",
    "aiOcr.features.docRecognition": "문서 인식",
    "aiOcr.features.docRecognition.desc":
      "다양한 형태의 문서를 정확하게 인식하고 텍스트를 추출합니다",
    "aiOcr.features.textExtraction": "텍스트 추출",
    "aiOcr.features.textExtraction.desc":
      "이미지에서 텍스트를 자동으로 추출하여 편집 가능한 형태로 변환",
    "aiOcr.features.dataConversion": "데이터 변환",
    "aiOcr.features.dataConversion.desc":
      "추출된 데이터를 다양한 형식으로 변환하고 구조화",
    "aiOcr.features.autoClassification": "자동 분류",
    "aiOcr.features.autoClassification.desc":
      "문서 유형을 자동으로 분류하고 적절한 처리 워크플로우 적용",
    "aiOcr.features.qualityVerification": "품질 검증",
    "aiOcr.features.qualityVerification.desc":
      "인식 결과의 정확성을 검증하고 오류를 자동으로 보정",
    "aiOcr.features.apiIntegration": "API 연동",
    "aiOcr.features.apiIntegration.desc":
      "기존 시스템과 쉽게 연동할 수 있는 RESTful API 제공",
    "aiOcr.benefits.automation": "업무 자동화",
    "aiOcr.benefits.accuracy": "정확성 향상",
    "aiOcr.benefits.automation.item1": "수작업 데이터 입력 업무 90% 감소",
    "aiOcr.benefits.automation.item2": "문서 처리 속도 10배 향상",
    "aiOcr.benefits.automation.item3": "24시간 무인 처리 가능",
    "aiOcr.benefits.accuracy.item1": "99.5% 이상 인식 정확도",
    "aiOcr.benefits.accuracy.item2": "휴먼 에러 제거",
    "aiOcr.benefits.accuracy.item3": "일관된 품질 보장",
    "aiOcr.useCases.title": "적용 분야",
    "aiOcr.useCases.financial": "금융 서류",
    "aiOcr.useCases.financial.desc":
      "신분증, 통장, 급여명세서 등 금융 관련 서류 처리",
    "aiOcr.useCases.contracts": "계약서",
    "aiOcr.useCases.contracts.desc": "각종 계약서 및 법률 문서의 디지털화",
    "aiOcr.useCases.receipts": "영수증/청구서",
    "aiOcr.useCases.receipts.desc": "영수증, 세금계산서, 청구서 자동 처리",
    "aiOcr.useCases.medical": "의료 기록",
    "aiOcr.useCases.medical.desc": "처방전, 진료 기록, 검사 결과지 디지털화",
    "aiOcr.useCases.education": "교육 문서",
    "aiOcr.useCases.education.desc":
      "성적표, 졸업증명서, 시험지 등 교육 관련 문서",
    "aiOcr.useCases.public": "공문서",
    "aiOcr.useCases.public.desc": "주민등록등본, 사업자등록증 등 공공 문서",
    "aiOcr.stats.accuracy": "인식 정확도",
    "aiOcr.stats.processingTime": "평균 처리 시간",
    "aiOcr.stats.languages": "지원 언어",
    "aiOcr.stats.formats": "문서 형식",
    "aiOcr.cta.title": "AI OCR로 문서 업무를 혁신하세요",
    "aiOcr.cta.description":
      "정확하고 빠른 문서 인식으로 디지털 트랜스포메이션을 시작하세요",
    "aiOcr.cta.button": "데모 체험하기",

    // Solutions - AI CC
    "aiCc.subtitle": "AI CC 상담센터 솔루션",
    "aiCc.description":
      "인공지능 기반 상담센터 솔루션으로 고객 서비스를 혁신하고 상담 품질을 향상시킵니다.",
    "aiCc.features.consultationBot": "상담봇",
    "aiCc.features.consultationBot.desc":
      "AI 기반 자동 상담 시스템으로 24시간 고객 응대",
    "aiCc.features.chatBot": "챗봇",
    "aiCc.features.chatBot.desc": "실시간 채팅 기반 고객 상담 및 문의 처리",
    "aiCc.features.stt": "STT",
    "aiCc.features.stt.desc": "음성을 텍스트로 변환하여 상담 내용 자동 기록",
    "aiCc.features.tts": "TTS",
    "aiCc.features.tts.desc": "텍스트를 자연스러운 음성으로 변환하여 응답",
    "aiCc.benefits.serviceQuality": "서비스 품질 향상",
    "aiCc.benefits.operational": "운영 효율성",
    "aiCc.benefits.serviceQuality.item1": "일관된 상담 품질 보장",
    "aiCc.benefits.serviceQuality.item2": "24시간 무중단 서비스",
    "aiCc.benefits.serviceQuality.item3": "다국어 지원",
    "aiCc.benefits.operational.item1": "상담사 업무 부담 경감",
    "aiCc.benefits.operational.item2": "반복 문의 자동 처리",
    "aiCc.benefits.operational.item3": "상담 데이터 자동 분석",
    "aiCc.stats.autoResponse": "자동 응답률",
    "aiCc.stats.service": "서비스 운영",
    "aiCc.stats.costReduction": "비용 절감",
    "aiCc.stats.satisfaction": "고객 만족도",
    "aiCc.cta.title": "AI CC로 상담센터를 혁신하세요",
    "aiCc.cta.description":
      "인공지능 기반 상담 시스템으로 고객 서비스 품질을 향상시키세요",
    "aiCc.cta.button": "솔루션 상담",

    // Solutions - DEXMA
    "dexma.subtitle": "DEXMA 영상 인식 솔루션",
    "dexma.description":
      "딥러닝 기반 영상 분석 기술로 보안과 분석을 강화하는 지능형 영상 인식 솔루션입니다.",
    "dexma.features.faceRecognition": "안면 인식",
    "dexma.features.faceRecognition.desc":
      "정확한 얼굴 인식으로 출입 통제 및 보안 시스템 구축",
    "dexma.features.plateRecognition": "차량 번호 인식",
    "dexma.features.plateRecognition.desc":
      "자동차 번호판을 실시간으로 인식하여 주차 관리 최적화",
    "dexma.features.aqua": "DEXMA AQUA",
    "dexma.features.aqua.desc": "수중 환경에서의 영상 분석 및 모니터링 시스템",
    "dexma.benefits.security": "보안 강화",
    "dexma.benefits.operational": "운영 효율성",
    "dexma.benefits.security.item1": "무인 보안 시스템 구축",
    "dexma.benefits.security.item2": "실시간 위험 상황 감지",
    "dexma.benefits.security.item3": "정확한 신원 확인",
    "dexma.benefits.operational.item1": "인력 운영비 절감",
    "dexma.benefits.operational.item2": "자동화된 관리 시스템",
    "dexma.benefits.operational.item3": "데이터 기반 의사결정",
    "dexma.cta.title": "DEXMA로 스마트 보안을 구축하세요",
    "dexma.cta.description":
      "딥러닝 기반 영상 인식으로 차원이 다른 보안 시스템을 경험하세요",
    "dexma.cta.button": "시연 요청",

    // Services - Visible ARS
    "visibleArs.subtitle": "보이는 ARS 시스템",
    "visibleArs.description":
      "시각적 ARS 시스템으로 고객 경험을 개선하고 편리한 전화 서비스를 제공합니다.",
    "visibleArs.features.visualMenu": "시각적 메뉴",
    "visibleArs.features.visualMenu.desc":
      "음성 안내와 함께 화면에 표시되는 직관적인 메뉴",
    "visibleArs.features.touchInput": "터치 입력",
    "visibleArs.features.touchInput.desc":
      "스마트폰 터치로 간편하게 메뉴 선택 가능",
    "visibleArs.features.realTimeInfo": "실시간 정보",
    "visibleArs.features.realTimeInfo.desc":
      "대기시간, 상담원 연결 상태 등 실시간 정보 제공",
    "visibleArs.features.multilingual": "다국어 지원",
    "visibleArs.features.multilingual.desc":
      "여러 언어로 화면 메뉴 및 안내 제공",
    "visibleArs.features.accessibility": "접근성",
    "visibleArs.features.accessibility.desc":
      "시각장애인을 위한 음성 가이드 및 큰 글씨 지원",
    "visibleArs.features.customization": "커스터마이징",
    "visibleArs.features.customization.desc":
      "기업별 맞춤형 디자인 및 메뉴 구성",
    "visibleArs.benefits.customerSatisfaction": "고객 만족도 향상",
    "visibleArs.benefits.operational": "운영 효율성",
    "visibleArs.benefits.customerSatisfaction.item1":
      "직관적인 메뉴 구성으로 편의성 증대",
    "visibleArs.benefits.customerSatisfaction.item2":
      "대기시간 단축으로 스트레스 감소",
    "visibleArs.benefits.customerSatisfaction.item3":
      "다양한 연령층에서 쉬운 사용",
    "visibleArs.benefits.operational.item1": "상담원 업무 부담 경감",
    "visibleArs.benefits.operational.item2": "정확한 부서 연결로 효율성 증대",
    "visibleArs.benefits.operational.item3": "통화량 분산으로 대기시간 감소",
    "visibleArs.useCases.title": "적용 분야",
    "visibleArs.useCases.callCenter": "콜센터",
    "visibleArs.useCases.callCenter.desc":
      "고객상담센터의 효율적인 통화 라우팅",
    "visibleArs.useCases.hospital": "병원",
    "visibleArs.useCases.hospital.desc": "진료 예약, 접수, 문의 업무 자동화",
    "visibleArs.useCases.financial": "금융기관",
    "visibleArs.useCases.financial.desc": "계좌 조회, 대출 상담, 카드 업무",
    "visibleArs.cta.title": "보이는 ARS로 고객 경험을 개선하세요",
    "visibleArs.cta.description":
      "시각적 메뉴로 더 편리하고 효율적인 전화 서비스를 제공하세요",
    "visibleArs.cta.button": "도입 상담",

    // Services - IVR
    "ivr.subtitle": "IVR 음성 응답 시스템",
    "ivr.description":
      "지능형 음성 응답 시스템으로 고객 서비스를 자동화하고 운영 효율성을 향상시킵니다.",
    "ivr.features.voiceRecognition": "음성 인식",
    "ivr.features.voiceRecognition.desc":
      "자연어 음성 명령을 정확하게 인식하고 처리",
    "ivr.features.autoRouting": "자동 라우팅",
    "ivr.features.autoRouting.desc": "고객 요청에 따른 적절한 부서 자동 연결",
    "ivr.features.multilingual": "다국어 지원",
    "ivr.features.multilingual.desc": "여러 언어로 음성 안내 및 응답 제공",
    "ivr.features.personalization": "개인화 서비스",
    "ivr.features.personalization.desc":
      "발신번호 인식을 통한 맞춤형 서비스 제공",
    "ivr.features.analytics": "통계 분석",
    "ivr.features.analytics.desc":
      "통화 패턴 분석 및 서비스 개선 인사이트 제공",
    "ivr.features.flexibleSettings": "유연한 설정",
    "ivr.features.flexibleSettings.desc":
      "비즈니스 요구에 맞는 맞춤형 메뉴 구성",
    "ivr.benefits.costReduction": "비용 절감",
    "ivr.benefits.serviceQuality": "서비스 품질 향상",
    "ivr.benefits.costReduction.item1": "상담원 인건비 절약",
    "ivr.benefits.costReduction.item2": "24시간 무인 서비스 운영",
    "ivr.benefits.costReduction.item3": "반복 업무 자동화",
    "ivr.benefits.serviceQuality.item1": "대기시간 단축",
    "ivr.benefits.serviceQuality.item2": "일관된 서비스 품질",
    "ivr.benefits.serviceQuality.item3": "정확한 정보 전달",
    "ivr.workflow.title": "IVR 처리 과정",
    "ivr.workflow.step1": "전화 수신",
    "ivr.workflow.step1.desc": "고객의 전화를 IVR 시스템이 자동 수신",
    "ivr.workflow.step2": "음성 분석",
    "ivr.workflow.step2.desc": "고객의 음성 명령을 인식하고 분석",
    "ivr.workflow.step3": "의도 파악",
    "ivr.workflow.step3.desc": "고객의 요청 사항과 의도를 정확히 파악",
    "ivr.workflow.step4": "서비스 제공",
    "ivr.workflow.step4.desc": "적절한 정보 제공 또는 담당자 연결",
    "ivr.cta.title": "IVR로 고객 서비스를 자동화하세요",
    "ivr.cta.description":
      "지능형 음성 응답 시스템으로 효율적인 고객 서비스를 구축하세요",
    "ivr.cta.button": "시스템 구축 상담",

    // Agentic AI - DXHUND
    "dxhund.subtitle": "DX HUND 에이전틱 AI",
    "dxhund.description":
      "비즈니스 프로세스를 자동화하는 지능형 AI 에이전트로 업무 효율성을 극대화합니다.",
    "dxhund.features.autonomous": "자율 실행",
    "dxhund.features.autonomous.desc":
      "사용자 개입 없이 복잡한 업무를 자동으로 처리",
    "dxhund.features.multiSystem": "다중 시스템 연동",
    "dxhund.features.multiSystem.desc":
      "여러 시스템과 API를 통합하여 업무 프로세스 최적화",
    "dxhund.features.intelligentDecision": "지능형 의사결정",
    "dxhund.features.intelligentDecision.desc":
      "데이터 분석을 통한 최적의 의사결정 수행",
    "dxhund.features.realTimeLearning": "실시간 학습",
    "dxhund.features.realTimeLearning.desc":
      "업무 패턴을 학습하여 지속적으로 성능 개선",
    "dxhund.features.exceptionHandling": "예외 처리",
    "dxhund.features.exceptionHandling.desc":
      "예상치 못한 상황에 대한 유연한 대응 능력",
    "dxhund.features.workflowManagement": "워크플로우 관리",
    "dxhund.features.workflowManagement.desc":
      "복잡한 업무 흐름을 체계적으로 관리하고 실행",
    "dxhund.useCases.title": "활용 분야",
    "dxhund.useCases.customerService": "고객 서비스",
    "dxhund.useCases.customerService.desc": "고객 문의 자동 처리 및 문제 해결",
    "dxhund.useCases.dataAnalysis": "데이터 분석",
    "dxhund.useCases.dataAnalysis.desc":
      "대용량 데이터 자동 분석 및 보고서 생성",
    "dxhund.useCases.salesManagement": "영업 관리",
    "dxhund.useCases.salesManagement.desc":
      "리드 생성, 고객 관리, 영업 프로세스 자동화",
    "dxhund.useCases.financialManagement": "재무 관리",
    "dxhund.useCases.financialManagement.desc":
      "회계 처리, 예산 관리, 재무 분석 자동화",
    "dxhund.useCases.hrManagement": "인사 관리",
    "dxhund.useCases.hrManagement.desc":
      "채용, 평가, 급여 계산 등 인사 업무 자동화",
    "dxhund.useCases.supplyChain": "공급망 관리",
    "dxhund.useCases.supplyChain.desc": "재고 관리, 주문 처리, 배송 최적화",
    "dxhund.benefits.productivity": "생산성 향상",
    "dxhund.benefits.costReduction": "비용 절감",
    "dxhund.benefits.productivity.item1": "반복 업무 95% 자동화",
    "dxhund.benefits.productivity.item2": "업무 처리 속도 10배 향상",
    "dxhund.benefits.productivity.item3": "24시간 무중단 업무 처리",
    "dxhund.benefits.costReduction.item1": "인력 비용 70% 절감",
    "dxhund.benefits.costReduction.item2": "오류율 90% 감소",
    "dxhund.benefits.costReduction.item3": "시스템 운영비 최적화",
    "dxhund.architecture.title": "AI 에이전트 구조",
    "dxhund.architecture.reasoning": "추론 엔진",
    "dxhund.architecture.reasoning.desc": "상황 분석 및 최적 행동 계획 수립",
    "dxhund.architecture.execution": "실행 엔진",
    "dxhund.architecture.execution.desc": "계획된 작업의 자동 실행",
    "dxhund.architecture.knowledge": "지식 베이스",
    "dxhund.architecture.knowledge.desc": "업무 지식 및 경험 축적",
    "dxhund.architecture.feedback": "피드백 루프",
    "dxhund.architecture.feedback.desc": "결과 분석 및 성능 개선",
    "dxhund.cta.title": "DX HUND로 비즈니스를 자동화하세요",
    "dxhund.cta.description":
      "에이전틱 AI로 업무 혁신을 경험하고 경쟁력을 강화하세요",
    "dxhund.cta.button": "AI 도입 컨설팅",

    // Agentic AI - RETRIEVER
    "retriever.subtitle": "RETRIEVER RAG AI",
    "retriever.description":
      "Retrieval-Augmented Generation 기술로 정확하고 신뢰할 수 있는 AI 응답을 제공합니다.",
    "retriever.features.documentSearch": "문서 검색",
    "retriever.features.documentSearch.desc":
      "대용량 문서에서 질문과 관련된 정확한 정보 검색",
    "retriever.features.knowledgeFusion": "지식 융합",
    "retriever.features.knowledgeFusion.desc":
      "검색된 정보와 AI 지식을 결합하여 정확한 답변 생성",
    "retriever.features.realTimeUpdate": "실시간 업데이트",
    "retriever.features.realTimeUpdate.desc":
      "최신 정보를 반영한 실시간 지식 베이스 업데이트",
    "retriever.cta.title": "RETRIEVER로 지식을 활용하세요",
    "retriever.cta.description":
      "RAG 기술로 정확하고 신뢰할 수 있는 AI 서비스를 구축하세요",
    "retriever.cta.button": "RAG 솔루션 상담",

    // Reference - Case Studies
    "caseStudies.subtitle": "도입 사례",
    "caseStudies.description":
      "다양한 산업군에서 GMISSION 솔루션의 성공적인 도입 사례를 확인하세요",
    "caseStudies.cases.financial": "금융기관 AI FAX 도입",
    "caseStudies.cases.financial.desc":
      "대형 은행의 팩스 업무 자동화로 처리 시간 80% 단축",
    "caseStudies.cases.hospital": "병원 AI OCR 적용",
    "caseStudies.cases.hospital.desc":
      "종합병원의 진료기록 디지털화로 업무 효율성 향상",
    "caseStudies.cases.public": "공공기관 AI CC 구축",
    "caseStudies.cases.public.desc": "콜센터 자동화로 시민 만족도 95% 향상",
    "caseStudies.cta.title": "귀하의 성공 사례를 만들어보세요",
    "caseStudies.cta.description": "GMISSION과 함께 디지털 혁신을 이루어보세요",
    "caseStudies.cta.button": "사례 상담 요청",

    // Reference - Clients
    "clientsPage.subtitle": "GMISSION을 신뢰하는 고객사",

    // Reference - Partners
    "partnersPage.subtitle": "비즈니스 파트너",
    "partnersPage.description": "GMISSION과 함께하는 파트너들을 소개합니다",

    // News - Notice
    "noticePage.subtitle": "공지사항",
    "noticePage.description": "GMISSION의 최신 소식을 확인하세요",

    // News - Media
    "mediaPage.subtitle": "언론보도",
    "mediaPage.description": "GMISSION의 언론 보도 자료를 확인하세요",

    // News - Gallery
    "galleryPage.subtitle": "갤러리",
    "galleryPage.description": "GMISSION의 다양한 활동 사진을 확인하세요",
  },
  ja: {
    // Navigation
    "nav.gmission": "GMISSION",
    "nav.solution": "ソリューション",
    "nav.service": "サービス",
    "nav.agenticAi": "Agentic AI",
    "nav.reference": "リファレンス",
    "nav.news": "ニュース",
    "nav.contact": "お問い合わせ",

    // Submenu
    "submenu.greeting": "ご挨拶",
    "submenu.history": "沿革",
    "submenu.patents": "特許",
    "submenu.aiFax": "AI Fax",
    "submenu.aiOcr": "AI OCR",
    "submenu.aiCc": "AI CC",
    "submenu.dexma": "DEXMA",
    "submenu.fillOne": "Fill One",
    "submenu.visibleArs": "Visible ARS",
    "submenu.ivr": "IVR",
    "submenu.dxhund": "DXHund",
    "submenu.retriever": "Retriever",
    "submenu.caseStudies": "ケーススタディ",
    "submenu.clients": "クライアント",
    "submenu.partners": "パートナー",
    "submenu.notice": "お知らせ",
    "submenu.media": "メディア",
    "submenu.gallery": "ギャラリー",

    // Hero section
    "hero.title": "AIベースのデジタル革新ソリューション",
    "hero.subtitle":
      "GMISSIONは最先端のAI技術でビジネスのデジタルトランスフォーメーションを推進します",
    "hero.cta": "詳細を見る",

    // Language
    "language.korean": "한국어",
    "language.japanese": "日本語",
    "language.english": "English",

    // Solutions
    "solutions.title": "AIソリューション",
    "solutions.subtitle":
      "AI基盤の革新的なソリューションでビジネス効率を最大化",
    "solutions.aiFax.title": "AI FAX",
    "solutions.aiFax.description": "インテリジェントFAX自動化ソリューション",
    "solutions.aiOcr.title": "AI OCR",
    "solutions.aiOcr.description": "文書自動認識・データ抽出",
    "solutions.aiCc.title": "AI CC",
    "solutions.aiCc.description":
      "インテリジェントコールセンターソリューション",
    "solutions.dexma.title": "DEXMA",
    "solutions.dexma.description":
      "ディープラーニングベース映像認識ソリューション",
    "solutions.agenticTitle": "Agentic AIソリューション",
    "solutions.dxhund": "DXHUND",
    "solutions.dxhundDesc": "インテリジェントデータ分析・処理エージェント",
    "solutions.retriever": "RETRIEVER",
    "solutions.retrieverDesc": "高度情報検索・推薦システム",
    "solutions.detailBtn": "詳細を見る",
    "solutions.features.webFax": "ウェブFAX",
    "solutions.features.appFax": "アプリFAX",
    "solutions.features.cloudFax": "クラウドFAX",
    "solutions.features.voiceFax": "音声FAX",
    "solutions.features.autoFax": "無人FAX",
    "solutions.features.docRecognition": "文書認識",
    "solutions.features.textExtraction": "テキスト抽出",
    "solutions.features.dataConversion": "データ変換",
    "solutions.features.autoClassification": "自動分類",
    "solutions.features.chatBot": "相談ボット",
    "solutions.features.chatAI": "チャットボット",
    "solutions.features.stt": "STT",
    "solutions.features.tts": "TTS",
    "solutions.features.faceRecognition": "顔認識",
    "solutions.features.plateRecognition": "車両番号認識",
    "solutions.features.dexmaAqua": "DEXMA AQUA",

    // Clients
    "clients.title": "主要顧客",
    "clients.subtitle":
      "様々な分野の先導企業がGMISSIONのソリューションを信頼しています",
    "clients.publicOrganizations": "公共機関",
    "clients.financialSector": "金融機関",
    "clients.generalCompanies": "一般企業",
    "clients.moreBtn": "もっと多くの顧客を見る",
    "clients.statsTitle": "GMISSIONと共にする企業",
    "clients.totalClients": "総顧客",
    "clients.publicOrgs": "公共機関",
    "clients.financialOrgs": "金融機関",
    "clients.generalOrgs": "一般企業",

    // Contact
    "contact.title": "お問い合わせ",
    "contact.subtitle":
      "AIソリューションについてご不明な点がございましたら、お気軽にお問い合わせください",
    "contact.formTitle": "お問い合わせフォーム",
    "contact.company": "会社名",
    "contact.name": "担当者名",
    "contact.position": "役職",
    "contact.phone": "連絡先",
    "contact.email": "メール",
    "contact.source": "お知りになったきっかけ",
    "contact.content": "お問い合わせ内容",
    "contact.placeholder": "お問い合わせ内容を詳しくご記入ください",
    "contact.submit": "お問い合わせ送信",
    "contact.infoTitle": "連絡先情報",
    "contact.phoneLabel": "電話番号",
    "contact.emailLabel": "メール",
    "contact.addressLabel": "住所",
    "contact.hoursTitle": "営業時間",
    "contact.weekdays": "平日",
    "contact.saturday": "土曜日",
    "contact.sunday": "日曜日",
    "contact.holidays": "祝日",
    "contact.closed": "休業",
    "contact.quickTitle": "クイックお問い合わせ",
    "contact.kakaoBtn": "カカオトーク相談",
    "contact.callBtn": "電話相談予約",
    "contact.selectPlaceholder": "選択してください",
    "contact.sourceSearch": "検索エンジン",
    "contact.sourceReferral": "知人の紹介",
    "contact.sourceWebsite": "ウェブサイト",
    "contact.sourceSocial": "ソーシャルメディア",
    "contact.sourceOther": "その他",

    // Footer
    "footer.description":
      "AI基盤の革新的なソリューションで企業のデジタル革新を牽引するグローバルIT企業です。",
    "footer.solutionsTitle": "主要ソリューション",
    "footer.companyTitle": "会社情報",
    "footer.about": "会社紹介",
    "footer.history": "沿革",
    "footer.patents": "特許・認証",
    "footer.cases": "導入事例",
    "footer.notice": "お知らせ",
    "footer.tel": "電話",
    "footer.fax": "FAX",
    "footer.mail": "メール",
    "footer.address": "住所",
    "footer.bizLic": "事業者登録番号",
    "footer.representative": "代表者",
    "footer.copyright": "© 2024 GMISSION. All rights reserved.",
    "footer.topBtn": "TOP",

    // Pages
    "pages.about.greeting.title": "ご挨拶",
    "pages.about.greeting.subtitle":
      "AIベースのデジタル革新を牽引するGMISSIONです",
    "pages.about.history.title": "沿革",
    "pages.about.history.subtitle":
      "GMISSIONの成長過程と主要成果をご紹介します",
    "pages.about.patents.title": "特許・認証",
    "pages.about.patents.subtitle":
      "GMISSIONの技術力を証明する特許と認証書をご確認ください",

    "pages.solutions.aiFax.title": "AI FAX",
    "pages.solutions.aiFax.subtitle":
      "インテリジェントFAX自動化ソリューションで業務効率を最大化",
    "pages.solutions.aiOcr.title": "AI OCR",
    "pages.solutions.aiOcr.subtitle":
      "文書自動認識・データ抽出でデジタル変換を加速化",
    "pages.solutions.aiCc.title": "AI CC",
    "pages.solutions.aiCc.subtitle":
      "インテリジェントコールセンターソリューションで顧客サービスを革新",
    "pages.solutions.dexma.title": "DEXMA",
    "pages.solutions.dexma.subtitle":
      "ディープラーニングベース映像認識ソリューションでセキュリティと分析を強化",

    "pages.services.fillOne.title": "FillOne",
    "pages.services.fillOne.subtitle":
      "スマートレタリングサービスで顧客応答率を向上",
    "pages.services.visibleArs.title": "ビジブルARS",
    "pages.services.visibleArs.subtitle": "視覚的ARSシステムで顧客体験を改善",
    "pages.services.ivr.title": "IVR",
    "pages.services.ivr.subtitle":
      "インテリジェント音声応答システムで顧客サービスを自動化",

    "pages.agenticAi.dxhund.title": "DXHUND",
    "pages.agenticAi.dxhund.subtitle":
      "インテリジェントデータ分析・処理エージェント",
    "pages.agenticAi.retriever.title": "RETRIEVER",
    "pages.agenticAi.retriever.subtitle": "高度情報検索・推薦システム",

    "pages.reference.caseStudies.title": "導入事例",
    "pages.reference.caseStudies.subtitle":
      "GMISSIONソリューションの成功的な導入事例をご確認ください",
    "pages.reference.clients.title": "顧客",
    "pages.reference.clients.subtitle":
      "GMISSIONを信頼する様々な分野の顧客をご紹介します",
    "pages.reference.partners.title": "パートナー",
    "pages.reference.partners.subtitle":
      "GMISSIONと共にするビジネスパートナーをご紹介します",

    "pages.news.notice.title": "お知らせ",
    "pages.news.notice.subtitle":
      "GMISSIONの最新ニュースと重要なお知らせをご確認ください",
    "pages.news.media.title": "メディア報道",
    "pages.news.media.subtitle":
      "GMISSIONのメディア報道資料とニュースをご確認ください",
    "pages.news.gallery.title": "ギャラリー",
    "pages.news.gallery.subtitle":
      "GMISSIONの多様な活動とイベント写真をご確認ください",

    // Detail Pages Content
    // About - Greeting
    "greeting.ceoName": "韓準燮",
    "greeting.ceoTitle": "代表取締役",
    "greeting.ceoMessage":
      "GMISSIONはAI技術を通じて全ての人がより良い生活を送れるよう支援することを目標としています。私たちの革新的なソリューションで顧客の業務効率を最大化し、デジタル変革の旅路で頼もしいパートナーになります。",
    "greeting.ceoQuote": "- GMISSION代表取締役 韓準燮",
    "greeting.vision.innovation": "革新",
    "greeting.vision.innovationDesc":
      "最先端のAI技術を基盤に絶えず革新し、顧客に最高のソリューションを提供します。",
    "greeting.vision.trust": "信頼",
    "greeting.vision.trustDesc":
      "顧客との約束を守り、透明で誠実なビジネスで信頼される企業になります。",
    "greeting.vision.growth": "成長",
    "greeting.vision.growthDesc":
      "顧客と共に成長し、持続可能なビジネスモデルで共生の価値を創出します。",
    "greeting.mission.title": "私たちのミッション",
    "greeting.mission.description":
      "AI技術の民主化を通じて全ての企業がデジタル変革の恩恵を享受できるようにし、革新的なソリューションで顧客の成功を支援してより良い未来を作ります。",
    "greeting.stats.clients": "顧客企業",
    "greeting.stats.patents": "特許・認証",
    "greeting.stats.experience": "事業経験",

    // About - History
    "history.title": "GMISSION沿革",
    "history.2024.title": "2024年",
    "history.2024.item1": "SW高成長クラブ選定（科学技術情報通信部）",
    "history.2024.item2":
      "FillOneソリューション調達庁デジタルサービスモール登録",
    "history.2024.item3": "G-PASS認証取得",
    "history.2020-2023.title": "2020-2023年",
    "history.2020-2023.item1": "AI CCソリューション高度化",
    "history.2020-2023.item2": "DEXMA映像認識ソリューション開発",
    "history.2020-2023.item3": "AI OCRソリューション発売",
    "history.2020-2023.item4": "Agentic AIソリューション開発",
    "history.2015-2019.title": "2015-2019年",
    "history.2015-2019.item1": "AI技術研究開発本格開始",
    "history.2015-2019.item2": "ディープラーニング専門開発チーム構成",
    "history.2015-2019.item3": "AIコールセンターソリューション開発",
    "history.2000-2014.title": "2000-2014年",
    "history.2000-2014.item1": "株式会社GMISSION設立（2000年）",
    "history.2000-2014.item2": "企業向けFAXソリューション発売",
    "history.2000-2014.item3": "ウェブベースFAXソリューション開発",
    "history.2000-2014.item4": "B2B事業本格化",
    "history.achievements.title": "主要成果",
    "history.achievements.clients": "顧客企業",
    "history.achievements.solutions": "ソリューション",
    "history.achievements.patents": "特許",
    "history.achievements.experience": "経験",

    // Solutions - AI Fax
    "aiFax.subtitle": "AIベースFAX自動化ソリューション",
    "aiFax.description":
      "人工知能技術を活用してFAX業務を完全に自動化し、業務効率を最大化する次世代FAXソリューションです。",
    "aiFax.features.webFax.title": "ウェブFAX",
    "aiFax.features.webFax.desc":
      "ブラウザですぐに使えるウェブベースFAXソリューション",
    "aiFax.features.appFax.title": "アプリFAX",
    "aiFax.features.appFax.desc":
      "モバイルアプリによるいつでもどこでもFAX送受信",
    "aiFax.features.cloudFax.title": "クラウドFAX",
    "aiFax.features.cloudFax.desc": "クラウドベース拡張可能なFAXサービス",
    "aiFax.features.voiceFax.title": "音声FAX",
    "aiFax.features.voiceFax.desc": "音声認識によるFAX内容自動変換",
    "aiFax.features.autoFax.title": "無人FAX",
    "aiFax.features.autoFax.desc": "24時間自動運営される無人FAXシステム",
    "aiFax.features.aiRecognition.title": "AI認識",
    "aiFax.features.aiRecognition.desc": "人工知能による文書自動分類・処理",
    "aiFax.benefits.title": "導入効果",
    "aiFax.benefits.efficiency.title": "業務効率向上",
    "aiFax.benefits.efficiency.item1": "FAX送受信自動化で業務時間80%短縮",
    "aiFax.benefits.efficiency.item2": "文書自動分類・ルーティング",
    "aiFax.benefits.efficiency.item3": "リアルタイム送受信状況モニタリング",
    "aiFax.benefits.cost.title": "コスト削減",
    "aiFax.benefits.cost.item1": "紙・トナーコスト節約",
    "aiFax.benefits.cost.item2": "電話回線コスト最適化",
    "aiFax.benefits.cost.item3": "人件費削減",
    "aiFax.cta.title": "AI FAXソリューションをご体験ください",
    "aiFax.cta.description": "無料体験でAI FAXの強力な機能を直接ご確認ください",
    "aiFax.cta.button": "無料体験申込",

    // Services - FillOne
    "fillOne.subtitle": "FillOneスマートレタリングサービス",
    "fillOne.description":
      "受信者のスマートフォンに発信者の情報を表示し、顧客の電話応答率を向上させる革新的なサービスです。",
    "fillOne.howItWorks.title": "サービス動作原理",
    "fillOne.howItWorks.step1.title": "電話発信",
    "fillOne.howItWorks.step1.desc":
      "顧客に電話をかけるとシステムが自動的に作動します",
    "fillOne.howItWorks.step2.title": "情報表示",
    "fillOne.howItWorks.step2.desc":
      "受信者画面に企業情報（ロゴ、社名）が表示されます",
    "fillOne.howItWorks.step3.title": "自動ポップアップ",
    "fillOne.howItWorks.step3.desc":
      "通話終了後、設定されたウェブページが自動的にポップアップされます",
    "fillOne.features.title": "主要機能",
    "fillOne.features.companyInfo.title": "企業情報表示",
    "fillOne.features.companyInfo.desc":
      "受信者のスマートフォン画面に企業ロゴ、社名、CIを含む画像が表示され、電話の信頼性を向上させます。",
    "fillOne.features.autoPopup.title": "自動ウェブページポップアップ",
    "fillOne.features.autoPopup.desc":
      "通話終了後、ホームページ、予約ページ、アンケートなど事前に設定したウェブページが自動的にポップアップされます。",
    "fillOne.features.flexibleSettings.title": "柔軟な設定",
    "fillOne.features.flexibleSettings.desc":
      "顧客別、期間別、時間別、サービス別に異なる画像とポップアップページを設定できます。",
    "fillOne.features.analytics.title": "統計分析",
    "fillOne.features.analytics.desc":
      "ドロップコール減少率、通話完了率、ウェブページアクセス率など様々な統計データを提供します。",
    "fillOne.benefits.title": "導入効果",
    "fillOne.benefits.response.title": "応答率向上",
    "fillOne.benefits.response.desc": "スパム電話誤認防止で電話応答率大幅向上",
    "fillOne.benefits.trust.title": "信頼度向上",
    "fillOne.benefits.trust.desc": "正確な発信者情報で顧客信頼度向上",
    "fillOne.benefits.sales.title": "売上向上",
    "fillOne.benefits.sales.desc": "自動ウェブページ連結で即時予約・購入誘導",
    "fillOne.cta.title": "FillOneで顧客応答率を向上させましょう",
    "fillOne.cta.description":
      "スマートレタリングサービスでより多くの顧客と繋がり売上を向上させてください",
    "fillOne.cta.button": "無料体験開始",

    // Common Terms
    "common.freeTrial": "無料体験",
    "common.learnMore": "詳細を見る",
    "common.getStarted": "始める",
    "common.keyFeatures": "主要機能",
    "common.benefits": "導入効果",
    "common.howItWorks": "動作原理",

    // About - Patents
    "patents.title": "特許",
    "patents.certifications": "認証",
    "patents.techCompetitiveness": "技術競争力現況",
    "patents.techCompetitivenessDesc": "GMISSIONの技術的優秀性を示す数値",
    "patents.registeredPatents": "登録特許",
    "patents.certifications.count": "保有認証",
    "patents.techFields": "技術分野",
    "patents.rdExperience": "研究開発経験",
    "patents.items.aiFax": "AIベースFAX自動化システム",
    "patents.items.aiOcr": "ディープラーニングベース文書認識システム",
    "patents.items.videoRecognition":
      "リアルタイム映像分析オブジェクト認識システム",
    "patents.items.aiChatbot": "AI相談ボット自然言語処理システム",
    "patents.certs.swClub": "SW高成長クラブ",
    "patents.certs.gpass": "G-PASS認証",
    "patents.certs.iso": "ISO 27001",

    // Solutions - AI OCR
    "aiOcr.subtitle": "AI OCR文書認識ソリューション",
    "aiOcr.description":
      "人工知能技術を活用した高精度文書認識およびデータ抽出でデジタル変換を加速化するソリューションです。",
    "aiOcr.features.docRecognition": "文書認識",
    "aiOcr.features.docRecognition.desc":
      "様々な形態の文書を正確に認識しテキストを抽出します",
    "aiOcr.features.textExtraction": "テキスト抽出",
    "aiOcr.features.textExtraction.desc":
      "画像からテキストを自動抽出し編集可能な形態に変換",
    "aiOcr.features.dataConversion": "データ変換",
    "aiOcr.features.dataConversion.desc":
      "抽出されたデータを多様な形式に変換し構造化",
    "aiOcr.features.autoClassification": "自動分類",
    "aiOcr.features.autoClassification.desc":
      "文書タイプを自動分類し適切な処理ワークフローを適用",
    "aiOcr.features.qualityVerification": "品質検証",
    "aiOcr.features.qualityVerification.desc":
      "認識結果の正確性を検証し誤りを自動補正",
    "aiOcr.features.apiIntegration": "API連動",
    "aiOcr.features.apiIntegration.desc":
      "既存システムと簡単に連動できるRESTful API提供",
    "aiOcr.benefits.automation": "業務自動化",
    "aiOcr.benefits.accuracy": "正確性向上",
    "aiOcr.benefits.automation.item1": "手作業データ入力業務90%減少",
    "aiOcr.benefits.automation.item2": "文書処理速度10倍向上",
    "aiOcr.benefits.automation.item3": "24時間無人処理可能",
    "aiOcr.benefits.accuracy.item1": "99.5%以上認識精度",
    "aiOcr.benefits.accuracy.item2": "ヒューマンエラー除去",
    "aiOcr.benefits.accuracy.item3": "一貫した品質保証",
    "aiOcr.useCases.title": "適用分野",
    "aiOcr.useCases.financial": "金融書類",
    "aiOcr.useCases.financial.desc":
      "身分証、通帳、給与明細書など金融関連書類処理",
    "aiOcr.useCases.contracts": "契約書",
    "aiOcr.useCases.contracts.desc": "各種契約書および法律文書のデジタル化",
    "aiOcr.useCases.receipts": "領収書/請求書",
    "aiOcr.useCases.receipts.desc": "領収書、税金計算書、請求書自動処理",
    "aiOcr.useCases.medical": "医療記録",
    "aiOcr.useCases.medical.desc": "処方箋、診療記録、検査結果紙デジタル化",
    "aiOcr.useCases.education": "教育文書",
    "aiOcr.useCases.education.desc":
      "成績表、卒業証明書、試験紙など教育関連文書",
    "aiOcr.useCases.public": "公文書",
    "aiOcr.useCases.public.desc": "住民票、事業者登録証など公共文書",
    "aiOcr.stats.accuracy": "認識精度",
    "aiOcr.stats.processingTime": "平均処理時間",
    "aiOcr.stats.languages": "対応言語",
    "aiOcr.stats.formats": "文書形式",
    "aiOcr.cta.title": "AI OCRで文書業務を革新しましょう",
    "aiOcr.cta.description":
      "正確で速い文書認識でデジタルトランスフォーメーションを始めましょう",
    "aiOcr.cta.button": "デモ体験",

    // Solutions - AI CC
    "aiCc.subtitle": "AI CC相談センターソリューション",
    "aiCc.description":
      "人工知能ベース相談センターソリューションで顧客サービスを革新し相談品質を向上させます。",
    "aiCc.features.consultationBot": "相談ボット",
    "aiCc.features.consultationBot.desc":
      "AIベース自動相談システムで24時間顧客対応",
    "aiCc.features.chatBot": "チャットボット",
    "aiCc.features.chatBot.desc":
      "リアルタイムチャットベース顧客相談および問い合わせ処理",
    "aiCc.features.stt": "STT",
    "aiCc.features.stt.desc": "音声をテキストに変換し相談内容を自動記録",
    "aiCc.features.tts": "TTS",
    "aiCc.features.tts.desc": "テキストを自然な音声に変換して応答",
    "aiCc.benefits.serviceQuality": "サービス品質向上",
    "aiCc.benefits.operational": "運営効率性",
    "aiCc.benefits.serviceQuality.item1": "一貫した相談品質保証",
    "aiCc.benefits.serviceQuality.item2": "24時間無停止サービス",
    "aiCc.benefits.serviceQuality.item3": "多言語対応",
    "aiCc.benefits.operational.item1": "相談員業務負担軽減",
    "aiCc.benefits.operational.item2": "反復問い合わせ自動処理",
    "aiCc.benefits.operational.item3": "相談データ自動分析",
    "aiCc.stats.autoResponse": "自動応答率",
    "aiCc.stats.service": "サービス運営",
    "aiCc.stats.costReduction": "コスト削減",
    "aiCc.stats.satisfaction": "顧客満足度",
    "aiCc.cta.title": "AI CCで相談センターを革新しましょう",
    "aiCc.cta.description":
      "人工知能ベース相談システムで顧客サービス品質を向上させましょう",
    "aiCc.cta.button": "ソリューション相談",

    // Solutions - DEXMA
    "dexma.subtitle": "DEXMA映像認識ソリューション",
    "dexma.description":
      "ディープラーニングベース映像分析技術でセキュリティと分析を強化するインテリジェント映像認識ソリューションです。",
    "dexma.features.faceRecognition": "顔認識",
    "dexma.features.faceRecognition.desc":
      "正確な顔認識で出入り管理およびセキュリティシステム構築",
    "dexma.features.plateRecognition": "車両番号認識",
    "dexma.features.plateRecognition.desc":
      "自動車ナンバープレートをリアルタイムで認識し駐車管理最適化",
    "dexma.features.aqua": "DEXMA AQUA",
    "dexma.features.aqua.desc":
      "水中環境での映像分析およびモニタリングシステム",
    "dexma.benefits.security": "セキュリティ強化",
    "dexma.benefits.operational": "運営効率性",
    "dexma.benefits.security.item1": "無人セキュリティシステム構築",
    "dexma.benefits.security.item2": "リアルタイム危険状況検知",
    "dexma.benefits.security.item3": "正確な身元確認",
    "dexma.benefits.operational.item1": "人力運営費削減",
    "dexma.benefits.operational.item2": "自動化された管理システム",
    "dexma.benefits.operational.item3": "データベース意思決定",
    "dexma.cta.title": "DEXMAでスマートセキュリティを構築しましょう",
    "dexma.cta.description":
      "ディープラーニングベース映像認識で次元の違うセキュリティシステムを体験しましょう",
    "dexma.cta.button": "デモ要請",

    // Services - Visible ARS
    "visibleArs.subtitle": "ビジブルARSシステム",
    "visibleArs.description":
      "視覚的ARSシステムで顧客体験を改善し便利な電話サービスを提供します。",
    "visibleArs.features.visualMenu": "視覚的メニュー",
    "visibleArs.features.visualMenu.desc":
      "音声案内と共に画面に表示される直感的なメニュー",
    "visibleArs.features.touchInput": "タッチ入力",
    "visibleArs.features.touchInput.desc":
      "スマートフォンタッチで簡単にメニュー選択可能",
    "visibleArs.features.realTimeInfo": "リアルタイム情報",
    "visibleArs.features.realTimeInfo.desc":
      "待ち時間、相談員接続状態などリアルタイム情報提供",
    "visibleArs.features.multilingual": "多言語対応",
    "visibleArs.features.multilingual.desc":
      "複数言語で画面メニューおよび案内提供",
    "visibleArs.features.accessibility": "アクセシビリティ",
    "visibleArs.features.accessibility.desc":
      "視覚障害者のための音声ガイドおよび大きな文字対応",
    "visibleArs.features.customization": "カスタマイジング",
    "visibleArs.features.customization.desc":
      "企業別カスタムデザインおよびメニュー構成",
    "visibleArs.benefits.customerSatisfaction": "顧客満足度向上",
    "visibleArs.benefits.operational": "運営効率性",
    "visibleArs.benefits.customerSatisfaction.item1":
      "直感的なメニュー構成で利便性向上",
    "visibleArs.benefits.customerSatisfaction.item2":
      "待ち時間短縮でストレス減少",
    "visibleArs.benefits.customerSatisfaction.item3":
      "様々な年齢層で簡単な使用",
    "visibleArs.benefits.operational.item1": "相談員業務負担軽減",
    "visibleArs.benefits.operational.item2": "正確な部署接続で効率性向上",
    "visibleArs.benefits.operational.item3": "通話量分散で待ち時間減少",
    "visibleArs.useCases.title": "適用分野",
    "visibleArs.useCases.callCenter": "コールセンター",
    "visibleArs.useCases.callCenter.desc":
      "顧客相談センターの効率的な通話ルーティング",
    "visibleArs.useCases.hospital": "病院",
    "visibleArs.useCases.hospital.desc": "診療予約、受付、問い合わせ業務自動化",
    "visibleArs.useCases.financial": "金融機関",
    "visibleArs.useCases.financial.desc": "口座照会、融資相談、カード業務",
    "visibleArs.cta.title": "ビジブルARSで顧客体験を改善しましょう",
    "visibleArs.cta.description":
      "視覚的メニューでより便利で効率的な電話サービスを提供しましょう",
    "visibleArs.cta.button": "導入相談",

    // Services - IVR
    "ivr.subtitle": "IVR音声応答システム",
    "ivr.description":
      "インテリジェント音声応答システムで顧客サービスを自動化し運営効率性を向上させます。",
    "ivr.features.voiceRecognition": "音声認識",
    "ivr.features.voiceRecognition.desc":
      "自然言語音声コマンドを正確に認識し処理",
    "ivr.features.autoRouting": "自動ルーティング",
    "ivr.features.autoRouting.desc": "顧客要請に応じた適切な部署自動接続",
    "ivr.features.multilingual": "多言語対応",
    "ivr.features.multilingual.desc": "複数言語で音声案内および応答提供",
    "ivr.features.personalization": "個人化サービス",
    "ivr.features.personalization.desc": "発信番号認識による個人化サービス提供",
    "ivr.features.analytics": "統計分析",
    "ivr.features.analytics.desc":
      "通話パターン分析およびサービス改善インサイト提供",
    "ivr.features.flexibleSettings": "柔軟な設定",
    "ivr.features.flexibleSettings.desc":
      "ビジネス要求に合わせたカスタムメニュー構成",
    "ivr.benefits.costReduction": "コスト削減",
    "ivr.benefits.serviceQuality": "サービス品質向上",
    "ivr.benefits.costReduction.item1": "相談員人件費節約",
    "ivr.benefits.costReduction.item2": "24時間無人サービス運営",
    "ivr.benefits.costReduction.item3": "反復業務自動化",
    "ivr.benefits.serviceQuality.item1": "待ち時間短縮",
    "ivr.benefits.serviceQuality.item2": "一貫したサービス品質",
    "ivr.benefits.serviceQuality.item3": "正確な情報伝達",
    "ivr.workflow.title": "IVR処理過程",
    "ivr.workflow.step1": "電話受信",
    "ivr.workflow.step1.desc": "顧客の電話をIVRシステムが自動受信",
    "ivr.workflow.step2": "音声分析",
    "ivr.workflow.step2.desc": "顧客の音声コマンドを認識し分析",
    "ivr.workflow.step3": "意図把握",
    "ivr.workflow.step3.desc": "顧客の要請事項と意図を正確に把握",
    "ivr.workflow.step4": "サービス提供",
    "ivr.workflow.step4.desc": "適切な情報提供または担当者接続",
    "ivr.cta.title": "IVRで顧客サービスを自動化しましょう",
    "ivr.cta.description":
      "インテリジェント音声応答システムで効率的な顧客サービスを構築しましょう",
    "ivr.cta.button": "システム構築相談",

    // Agentic AI - DXHUND
    "dxhund.subtitle": "DX HUNDエージェンティックAI",
    "dxhund.description":
      "ビジネスプロセスを自動化するインテリジェントAIエージェントで業務効率性を最大化します。",
    "dxhund.features.autonomous": "自律実行",
    "dxhund.features.autonomous.desc": "ユーザー介入なしに複雑な業務を自動処理",
    "dxhund.features.multiSystem": "多重システム連動",
    "dxhund.features.multiSystem.desc":
      "複数システムとAPIを統合し業務プロセス最適化",
    "dxhund.features.intelligentDecision": "インテリジェント意思決定",
    "dxhund.features.intelligentDecision.desc":
      "データ分析による最適な意思決定実行",
    "dxhund.features.realTimeLearning": "リアルタイム学習",
    "dxhund.features.realTimeLearning.desc":
      "業務パターンを学習し継続的に性能改善",
    "dxhund.features.exceptionHandling": "例外処理",
    "dxhund.features.exceptionHandling.desc":
      "予想外の状況に対する柔軟な対応能力",
    "dxhund.features.workflowManagement": "ワークフロー管理",
    "dxhund.features.workflowManagement.desc":
      "複雑な業務フローを体系的に管理し実行",
    "dxhund.useCases.title": "活用分野",
    "dxhund.useCases.customerService": "顧客サービス",
    "dxhund.useCases.customerService.desc":
      "顧客問い合わせ自動処理および問題解決",
    "dxhund.useCases.dataAnalysis": "データ分析",
    "dxhund.useCases.dataAnalysis.desc":
      "大容量データ自動分析およびレポート生成",
    "dxhund.useCases.salesManagement": "営業管理",
    "dxhund.useCases.salesManagement.desc":
      "リード生成、顧客管理、営業プロセス自動化",
    "dxhund.useCases.financialManagement": "財務管理",
    "dxhund.useCases.financialManagement.desc":
      "会計処理、予算管理、財務分析自動化",
    "dxhund.useCases.hrManagement": "人事管理",
    "dxhund.useCases.hrManagement.desc":
      "採用、評価、給与計算など人事業務自動化",
    "dxhund.useCases.supplyChain": "サプライチェーン管理",
    "dxhund.useCases.supplyChain.desc": "在庫管理、注文処理、配送最適化",
    "dxhund.benefits.productivity": "生産性向上",
    "dxhund.benefits.costReduction": "コスト削減",
    "dxhund.benefits.productivity.item1": "反復業務95%自動化",
    "dxhund.benefits.productivity.item2": "業務処理速度10倍向上",
    "dxhund.benefits.productivity.item3": "24時間無停止業務処理",
    "dxhund.benefits.costReduction.item1": "人力コスト70%削減",
    "dxhund.benefits.costReduction.item2": "エラー率90%減少",
    "dxhund.benefits.costReduction.item3": "システム運営費最適化",
    "dxhund.architecture.title": "AIエージェント構造",
    "dxhund.architecture.reasoning": "推論エンジン",
    "dxhund.architecture.reasoning.desc": "状況分析および最適行動計画策定",
    "dxhund.architecture.execution": "実行エンジン",
    "dxhund.architecture.execution.desc": "計画された作業の自動実行",
    "dxhund.architecture.knowledge": "知識ベース",
    "dxhund.architecture.knowledge.desc": "業務知識および経験蓄積",
    "dxhund.architecture.feedback": "フィードバックループ",
    "dxhund.architecture.feedback.desc": "結果分析および性能改善",
    "dxhund.cta.title": "DX HUNDでビジネスを自動化しましょう",
    "dxhund.cta.description":
      "エージェンティックAIで業務革新を体験し競争力を強化しましょう",
    "dxhund.cta.button": "AI導入コンサルティング",

    // Agentic AI - RETRIEVER
    "retriever.subtitle": "RETRIEVER RAG AI",
    "retriever.description":
      "Retrieval-Augmented Generation技術で正確で信頼できるAI応答を提供します。",
    "retriever.features.documentSearch": "文書検索",
    "retriever.features.documentSearch.desc":
      "大容量文書から質問と関連した正確な情報検索",
    "retriever.features.knowledgeFusion": "知識融合",
    "retriever.features.knowledgeFusion.desc":
      "検索された情報とAI知識を結合し正確な回答生成",
    "retriever.features.realTimeUpdate": "リアルタイム更新",
    "retriever.features.realTimeUpdate.desc":
      "最新情報を反映したリアルタイム知識ベース更新",
    "retriever.cta.title": "RETRIEVERで知識を活用しましょう",
    "retriever.cta.description":
      "RAG技術で正確で信頼できるAIサービスを構築しましょう",
    "retriever.cta.button": "RAGソリューション相談",

    // Reference - Case Studies
    "caseStudies.subtitle": "導入事例",
    "caseStudies.description":
      "様々な産業分野でのGMISSIONソリューションの成功的な導入事例をご確認ください",
    "caseStudies.cases.financial": "金融機関AI FAX導入",
    "caseStudies.cases.financial.desc":
      "大手銀行のFAX業務自動化で処理時間80%短縮",
    "caseStudies.cases.hospital": "病院AI OCR適用",
    "caseStudies.cases.hospital.desc":
      "総合病院の診療記録デジタル化で業務効率性向上",
    "caseStudies.cases.public": "公共機関AI CC構築",
    "caseStudies.cases.public.desc": "コールセンター自動化で市民満足度95%向上",
    "caseStudies.cta.title": "あなたの成功事例を作ってみませんか",
    "caseStudies.cta.description":
      "GMISSIONと共にデジタル革新を成し遂げましょう",
    "caseStudies.cta.button": "事例相談要請",

    // Reference - Clients
    "clientsPage.subtitle": "GMISSIONを信頼する顧客企業",

    // Reference - Partners
    "partnersPage.subtitle": "ビジネスパートナー",
    "partnersPage.description": "GMISSIONと共にするパートナーをご紹介します",

    // News - Notice
    "noticePage.subtitle": "お知らせ",
    "noticePage.description": "GMISSIONの最新ニュースをご確認ください",

    // News - Media
    "mediaPage.subtitle": "メディア報道",
    "mediaPage.description": "GMISSIONのメディア報道資料をご確認ください",

    // News - Gallery
    "galleryPage.subtitle": "ギャラリー",
    "galleryPage.description": "GMISSIONの様々な活動写真をご確認ください",
  },
  en: {
    // Navigation
    "nav.gmission": "GMISSION",
    "nav.solution": "Solutions",
    "nav.service": "Services",
    "nav.agenticAi": "Agentic AI",
    "nav.reference": "References",
    "nav.news": "News",
    "nav.contact": "Contact",

    // Submenu
    "submenu.greeting": "Greeting",
    "submenu.history": "History",
    "submenu.patents": "Patents",
    "submenu.aiFax": "AI Fax",
    "submenu.aiOcr": "AI OCR",
    "submenu.aiCc": "AI CC",
    "submenu.dexma": "DEXMA",
    "submenu.fillOne": "Fill One",
    "submenu.visibleArs": "Visible ARS",
    "submenu.ivr": "IVR",
    "submenu.dxhund": "DXHund",
    "submenu.retriever": "Retriever",
    "submenu.caseStudies": "Case Studies",
    "submenu.clients": "Clients",
    "submenu.partners": "Partners",
    "submenu.notice": "Notice",
    "submenu.media": "Media",
    "submenu.gallery": "Gallery",

    // Hero section
    "hero.title": "AI-Powered Digital Innovation Solutions",
    "hero.subtitle":
      "GMISSION leads business digital transformation with cutting-edge AI technology",
    "hero.cta": "Learn More",

    // Language
    "language.korean": "한국어",
    "language.japanese": "日本語",
    "language.english": "English",

    // Solutions
    "solutions.title": "AI Solutions",
    "solutions.subtitle":
      "Maximize business efficiency with innovative AI-based solutions",
    "solutions.aiFax.title": "AI FAX",
    "solutions.aiFax.description": "Intelligent fax automation solution",
    "solutions.aiOcr.title": "AI OCR",
    "solutions.aiOcr.description": "Document recognition and data extraction",
    "solutions.aiCc.title": "AI CC",
    "solutions.aiCc.description": "Intelligent call center solution",
    "solutions.dexma.title": "DEXMA",
    "solutions.dexma.description":
      "Deep learning-based image recognition solution",
    "solutions.agenticTitle": "Agentic AI Solutions",
    "solutions.dxhund": "DXHUND",
    "solutions.dxhundDesc": "Intelligent data analysis and processing agent",
    "solutions.retriever": "RETRIEVER",
    "solutions.retrieverDesc":
      "Advanced information retrieval and recommendation system",
    "solutions.detailBtn": "Learn More",
    "solutions.features.webFax": "Web Fax",
    "solutions.features.appFax": "App Fax",
    "solutions.features.cloudFax": "Cloud Fax",
    "solutions.features.voiceFax": "Voice Fax",
    "solutions.features.autoFax": "Automated Fax",
    "solutions.features.docRecognition": "Document Recognition",
    "solutions.features.textExtraction": "Text Extraction",
    "solutions.features.dataConversion": "Data Conversion",
    "solutions.features.autoClassification": "Auto Classification",
    "solutions.features.chatBot": "Consultation Bot",
    "solutions.features.chatAI": "Chatbot",
    "solutions.features.stt": "STT",
    "solutions.features.tts": "TTS",
    "solutions.features.faceRecognition": "Face Recognition",
    "solutions.features.plateRecognition": "License Plate Recognition",
    "solutions.features.dexmaAqua": "DEXMA AQUA",

    // Clients
    "clients.title": "Key Clients",
    "clients.subtitle":
      "Leading companies across various industries trust GMISSION's solutions",
    "clients.publicOrganizations": "Public Organizations",
    "clients.financialSector": "Financial Sector",
    "clients.generalCompanies": "General Companies",
    "clients.moreBtn": "View More Clients",
    "clients.statsTitle": "Companies Working with GMISSION",
    "clients.totalClients": "Total Clients",
    "clients.publicOrgs": "Public Organizations",
    "clients.financialOrgs": "Financial Institutions",
    "clients.generalOrgs": "General Companies",

    // Contact
    "contact.title": "Contact Us",
    "contact.subtitle":
      "If you have any questions about our AI solutions, feel free to contact us anytime",
    "contact.formTitle": "Contact Form",
    "contact.company": "Company",
    "contact.name": "Name",
    "contact.position": "Position",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.source": "How did you hear about us?",
    "contact.content": "Message",
    "contact.placeholder": "Please write your inquiry in detail",
    "contact.submit": "Send Message",
    "contact.infoTitle": "Contact Information",
    "contact.phoneLabel": "Phone",
    "contact.emailLabel": "Email",
    "contact.addressLabel": "Address",
    "contact.hoursTitle": "Business Hours",
    "contact.weekdays": "Weekdays",
    "contact.saturday": "Saturday",
    "contact.sunday": "Sunday",
    "contact.holidays": "Holidays",
    "contact.closed": "Closed",
    "contact.quickTitle": "Quick Contact",
    "contact.kakaoBtn": "KakaoTalk Consultation",
    "contact.callBtn": "Schedule Phone Consultation",
    "contact.selectPlaceholder": "Please select",
    "contact.sourceSearch": "Search Engine",
    "contact.sourceReferral": "Referral",
    "contact.sourceWebsite": "Website",
    "contact.sourceSocial": "Social Media",
    "contact.sourceOther": "Other",

    // Footer
    "footer.description":
      "A global IT company leading corporate digital innovation with innovative AI-based solutions.",
    "footer.solutionsTitle": "Main Solutions",
    "footer.companyTitle": "Company Information",
    "footer.about": "About Us",
    "footer.history": "History",
    "footer.patents": "Patents & Certifications",
    "footer.cases": "Case Studies",
    "footer.notice": "Notice",
    "footer.tel": "Tel",
    "footer.fax": "Fax",
    "footer.mail": "Email",
    "footer.address": "Address",
    "footer.bizLic": "Business License",
    "footer.representative": "Representative",
    "footer.copyright": "© 2024 GMISSION. All rights reserved.",
    "footer.topBtn": "TOP",

    // Pages
    "pages.about.greeting.title": "Greeting",
    "pages.about.greeting.subtitle":
      "GMISSION leads AI-based digital innovation",
    "pages.about.history.title": "History",
    "pages.about.history.subtitle":
      "Discover GMISSION's growth journey and key achievements",
    "pages.about.patents.title": "Patents & Certifications",
    "pages.about.patents.subtitle":
      "Explore patents and certifications that prove GMISSION's technical excellence",

    "pages.solutions.aiFax.title": "AI FAX",
    "pages.solutions.aiFax.subtitle":
      "Maximize operational efficiency with intelligent fax automation solutions",
    "pages.solutions.aiOcr.title": "AI OCR",
    "pages.solutions.aiOcr.subtitle":
      "Accelerate digital transformation with automatic document recognition and data extraction",
    "pages.solutions.aiCc.title": "AI CC",
    "pages.solutions.aiCc.subtitle":
      "Revolutionize customer service with intelligent call center solutions",
    "pages.solutions.dexma.title": "DEXMA",
    "pages.solutions.dexma.subtitle":
      "Enhance security and analytics with deep learning-based image recognition solutions",

    "pages.services.fillOne.title": "FillOne",
    "pages.services.fillOne.subtitle":
      "Increase customer response rates with smart lettering services",
    "pages.services.visibleArs.title": "Visible ARS",
    "pages.services.visibleArs.subtitle":
      "Improve customer experience with visual ARS systems",
    "pages.services.ivr.title": "IVR",
    "pages.services.ivr.subtitle":
      "Automate customer service with intelligent voice response systems",

    "pages.agenticAi.dxhund.title": "DXHUND",
    "pages.agenticAi.dxhund.subtitle":
      "Intelligent data analysis and processing agent",
    "pages.agenticAi.retriever.title": "RETRIEVER",
    "pages.agenticAi.retriever.subtitle":
      "Advanced information retrieval and recommendation system",

    "pages.reference.caseStudies.title": "Case Studies",
    "pages.reference.caseStudies.subtitle":
      "Explore successful implementation cases of GMISSION solutions",
    "pages.reference.clients.title": "Clients",
    "pages.reference.clients.subtitle":
      "Meet diverse clients who trust GMISSION across various industries",
    "pages.reference.partners.title": "Partners",
    "pages.reference.partners.subtitle":
      "Discover business partners working together with GMISSION",

    "pages.news.notice.title": "Notice",
    "pages.news.notice.subtitle":
      "Check GMISSION's latest news and important announcements",
    "pages.news.media.title": "Media Coverage",
    "pages.news.media.subtitle":
      "View GMISSION's press releases and media coverage",
    "pages.news.gallery.title": "Gallery",
    "pages.news.gallery.subtitle":
      "Browse photos of GMISSION's various activities and events",

    // Detail Pages Content
    // About - Greeting
    "greeting.ceoName": "Jun-seob Han",
    "greeting.ceoTitle": "CEO",
    "greeting.ceoMessage":
      "GMISSION aims to help everyone live a better life through AI technology. We will maximize our customers' work efficiency with our innovative solutions and become a reliable partner in the journey of digital transformation.",
    "greeting.ceoQuote": "- GMISSION CEO Jun-seob Han",
    "greeting.vision.innovation": "Innovation",
    "greeting.vision.innovationDesc":
      "We continuously innovate based on cutting-edge AI technology to provide customers with the best solutions.",
    "greeting.vision.trust": "Trust",
    "greeting.vision.trustDesc":
      "We keep our promises to customers and become a trusted company through transparent and honest business.",
    "greeting.vision.growth": "Growth",
    "greeting.vision.growthDesc":
      "We grow together with our customers and create value for mutual prosperity through sustainable business models.",
    "greeting.mission.title": "Our Mission",
    "greeting.mission.description":
      "Through the democratization of AI technology, we enable all companies to enjoy the benefits of digital transformation, and support customer success with innovative solutions to create a better future.",
    "greeting.stats.clients": "Clients",
    "greeting.stats.patents": "Patents & Certifications",
    "greeting.stats.experience": "Business Experience",

    // About - History
    "history.title": "GMISSION History",
    "history.2024.title": "2024",
    "history.2024.item1":
      "Selected for SW High-Growth Club (Ministry of Science and ICT)",
    "history.2024.item2":
      "FillOne solution registered in Public Procurement Service Digital Service Mall",
    "history.2024.item3": "Acquired G-PASS certification",
    "history.2020-2023.title": "2020-2023",
    "history.2020-2023.item1": "AI CC solution advancement",
    "history.2020-2023.item2": "DEXMA video recognition solution development",
    "history.2020-2023.item3": "AI OCR solution launch",
    "history.2020-2023.item4": "Agentic AI solution development",
    "history.2015-2019.title": "2015-2019",
    "history.2015-2019.item1": "Full-scale AI technology R&D launch",
    "history.2015-2019.item2":
      "Deep learning specialist development team formation",
    "history.2015-2019.item3": "AI call center solution development",
    "history.2000-2014.title": "2000-2014",
    "history.2000-2014.item1": "GMISSION Corporation establishment (2000)",
    "history.2000-2014.item2": "Enterprise fax solution launch",
    "history.2000-2014.item3": "Web-based fax solution development",
    "history.2000-2014.item4": "B2B business full-scale launch",
    "history.achievements.title": "Key Achievements",
    "history.achievements.clients": "Clients",
    "history.achievements.solutions": "Solutions",
    "history.achievements.patents": "Patents",
    "history.achievements.experience": "Experience",

    // Solutions - AI Fax
    "aiFax.subtitle": "AI-Based Fax Automation Solution",
    "aiFax.description":
      "A next-generation fax solution that completely automates fax operations using artificial intelligence technology and maximizes work efficiency.",
    "aiFax.features.webFax.title": "Web Fax",
    "aiFax.features.webFax.desc":
      "Web-based fax solution that can be used directly in the browser",
    "aiFax.features.appFax.title": "App Fax",
    "aiFax.features.appFax.desc":
      "Fax transmission and reception anytime, anywhere through mobile apps",
    "aiFax.features.cloudFax.title": "Cloud Fax",
    "aiFax.features.cloudFax.desc": "Cloud-based scalable fax service",
    "aiFax.features.voiceFax.title": "Voice Fax",
    "aiFax.features.voiceFax.desc":
      "Automatic conversion of fax content through voice recognition",
    "aiFax.features.autoFax.title": "Automated Fax",
    "aiFax.features.autoFax.desc":
      "24-hour unmanned fax system that operates automatically",
    "aiFax.features.aiRecognition.title": "AI Recognition",
    "aiFax.features.aiRecognition.desc":
      "Automatic document classification and processing through artificial intelligence",
    "aiFax.benefits.title": "Implementation Benefits",
    "aiFax.benefits.efficiency.title": "Work Efficiency Improvement",
    "aiFax.benefits.efficiency.item1":
      "80% reduction in work time through fax transmission automation",
    "aiFax.benefits.efficiency.item2":
      "Automatic document classification and routing",
    "aiFax.benefits.efficiency.item3":
      "Real-time transmission status monitoring",
    "aiFax.benefits.cost.title": "Cost Reduction",
    "aiFax.benefits.cost.item1": "Paper and toner cost savings",
    "aiFax.benefits.cost.item2": "Telephone line cost optimization",
    "aiFax.benefits.cost.item3": "Personnel operating cost reduction",
    "aiFax.cta.title": "Experience AI FAX Solution",
    "aiFax.cta.description":
      "Experience the powerful features of AI Fax directly through a free trial",
    "aiFax.cta.button": "Apply for Free Trial",

    // Services - FillOne
    "fillOne.subtitle": "FillOne Smart Lettering Service",
    "fillOne.description":
      "An innovative service that displays caller information on the recipient's smartphone to increase customer phone response rates.",
    "fillOne.howItWorks.title": "How the Service Works",
    "fillOne.howItWorks.step1.title": "Phone Call",
    "fillOne.howItWorks.step1.desc":
      "The system automatically activates when you call a customer",
    "fillOne.howItWorks.step2.title": "Information Display",
    "fillOne.howItWorks.step2.desc":
      "Company information (logo, company name) is displayed on the recipient's screen",
    "fillOne.howItWorks.step3.title": "Auto Popup",
    "fillOne.howItWorks.step3.desc":
      "After the call ends, the preset webpage automatically pops up",
    "fillOne.features.title": "Key Features",
    "fillOne.features.companyInfo.title": "Company Information Display",
    "fillOne.features.companyInfo.desc":
      "Company logo, name, and CI-included images are displayed on the recipient's smartphone screen to enhance phone trust.",
    "fillOne.features.autoPopup.title": "Automatic Webpage Popup",
    "fillOne.features.autoPopup.desc":
      "After the call ends, preset webpages such as homepage, reservation page, or survey automatically pop up.",
    "fillOne.features.flexibleSettings.title": "Flexible Settings",
    "fillOne.features.flexibleSettings.desc":
      "Different images and popup pages can be set by customer, period, time, and service.",
    "fillOne.features.analytics.title": "Statistical Analysis",
    "fillOne.features.analytics.desc":
      "Provides various statistical data including drop call reduction rate, call completion rate, and webpage access rate.",
    "fillOne.benefits.title": "Implementation Benefits",
    "fillOne.benefits.response.title": "Response Rate Improvement",
    "fillOne.benefits.response.desc":
      "Significant increase in phone response rate by preventing spam call misidentification",
    "fillOne.benefits.trust.title": "Trust Enhancement",
    "fillOne.benefits.trust.desc":
      "Customer trust improvement through accurate caller information",
    "fillOne.benefits.sales.title": "Sales Increase",
    "fillOne.benefits.sales.desc":
      "Immediate reservation and purchase induction through automatic webpage connection",
    "fillOne.cta.title": "Increase Customer Response Rates with FillOne",
    "fillOne.cta.description":
      "Connect with more customers and increase sales with smart lettering service",
    "fillOne.cta.button": "Start Free Trial",

    // Common Terms
    "common.freeTrial": "Free Trial",
    "common.learnMore": "Learn More",
    "common.getStarted": "Get Started",
    "common.keyFeatures": "Key Features",
    "common.benefits": "Benefits",
    "common.howItWorks": "How It Works",

    // About - Patents
    "patents.title": "Patents",
    "patents.certifications": "Certifications",
    "patents.techCompetitiveness": "Technology Competitiveness Status",
    "patents.techCompetitivenessDesc":
      "Figures demonstrating GMISSION's technical excellence",
    "patents.registeredPatents": "Registered Patents",
    "patents.certifications.count": "Held Certifications",
    "patents.techFields": "Technology Fields",
    "patents.rdExperience": "R&D Experience",
    "patents.items.aiFax": "AI-Based Fax Automation System",
    "patents.items.aiOcr": "Deep Learning-Based Document Recognition System",
    "patents.items.videoRecognition":
      "Real-time Video Analysis Object Recognition System",
    "patents.items.aiChatbot":
      "AI Consultation Bot Natural Language Processing System",
    "patents.certs.swClub": "SW High-Growth Club",
    "patents.certs.gpass": "G-PASS Certification",
    "patents.certs.iso": "ISO 27001",

    // Solutions - AI OCR
    "aiOcr.subtitle": "AI OCR Document Recognition Solution",
    "aiOcr.description":
      "A solution that accelerates digital transformation with high-precision document recognition and data extraction using artificial intelligence technology.",
    "aiOcr.features.docRecognition": "Document Recognition",
    "aiOcr.features.docRecognition.desc":
      "Accurately recognizes various types of documents and extracts text",
    "aiOcr.features.textExtraction": "Text Extraction",
    "aiOcr.features.textExtraction.desc":
      "Automatically extracts text from images and converts to editable format",
    "aiOcr.features.dataConversion": "Data Conversion",
    "aiOcr.features.dataConversion.desc":
      "Converts and structures extracted data in various formats",
    "aiOcr.features.autoClassification": "Auto Classification",
    "aiOcr.features.autoClassification.desc":
      "Automatically classifies document types and applies appropriate processing workflows",
    "aiOcr.features.qualityVerification": "Quality Verification",
    "aiOcr.features.qualityVerification.desc":
      "Verifies accuracy of recognition results and automatically corrects errors",
    "aiOcr.features.apiIntegration": "API Integration",
    "aiOcr.features.apiIntegration.desc":
      "Provides RESTful API for easy integration with existing systems",
    "aiOcr.benefits.automation": "Work Automation",
    "aiOcr.benefits.accuracy": "Accuracy Improvement",
    "aiOcr.benefits.automation.item1":
      "90% reduction in manual data entry work",
    "aiOcr.benefits.automation.item2":
      "10x improvement in document processing speed",
    "aiOcr.benefits.automation.item3": "24-hour unmanned processing capability",
    "aiOcr.benefits.accuracy.item1": "99.5%+ recognition accuracy",
    "aiOcr.benefits.accuracy.item2": "Human error elimination",
    "aiOcr.benefits.accuracy.item3": "Consistent quality assurance",
    "aiOcr.useCases.title": "Application Areas",
    "aiOcr.useCases.financial": "Financial Documents",
    "aiOcr.useCases.financial.desc":
      "Processing financial documents such as ID cards, bank books, pay stubs",
    "aiOcr.useCases.contracts": "Contracts",
    "aiOcr.useCases.contracts.desc":
      "Digitization of various contracts and legal documents",
    "aiOcr.useCases.receipts": "Receipts/Invoices",
    "aiOcr.useCases.receipts.desc":
      "Automatic processing of receipts, tax invoices, and bills",
    "aiOcr.useCases.medical": "Medical Records",
    "aiOcr.useCases.medical.desc":
      "Digitization of prescriptions, medical records, and test results",
    "aiOcr.useCases.education": "Educational Documents",
    "aiOcr.useCases.education.desc":
      "Educational documents such as transcripts, diplomas, and test papers",
    "aiOcr.useCases.public": "Public Documents",
    "aiOcr.useCases.public.desc":
      "Public documents such as resident registration extracts and business registration certificates",
    "aiOcr.stats.accuracy": "Recognition Accuracy",
    "aiOcr.stats.processingTime": "Average Processing Time",
    "aiOcr.stats.languages": "Supported Languages",
    "aiOcr.stats.formats": "Document Formats",
    "aiOcr.cta.title": "Revolutionize Document Work with AI OCR",
    "aiOcr.cta.description":
      "Start digital transformation with accurate and fast document recognition",
    "aiOcr.cta.button": "Try Demo",

    // Solutions - AI CC
    "aiCc.subtitle": "AI CC Call Center Solution",
    "aiCc.description":
      "Revolutionize customer service and improve consultation quality with AI-based call center solutions.",
    "aiCc.features.consultationBot": "Consultation Bot",
    "aiCc.features.consultationBot.desc":
      "24-hour customer response with AI-based automatic consultation system",
    "aiCc.features.chatBot": "Chatbot",
    "aiCc.features.chatBot.desc":
      "Real-time chat-based customer consultation and inquiry processing",
    "aiCc.features.stt": "STT",
    "aiCc.features.stt.desc":
      "Converts voice to text for automatic consultation content recording",
    "aiCc.features.tts": "TTS",
    "aiCc.features.tts.desc": "Converts text to natural voice for responses",
    "aiCc.benefits.serviceQuality": "Service Quality Improvement",
    "aiCc.benefits.operational": "Operational Efficiency",
    "aiCc.benefits.serviceQuality.item1":
      "Consistent consultation quality assurance",
    "aiCc.benefits.serviceQuality.item2": "24-hour uninterrupted service",
    "aiCc.benefits.serviceQuality.item3": "Multilingual support",
    "aiCc.benefits.operational.item1": "Reduced workload for consultants",
    "aiCc.benefits.operational.item2":
      "Automatic processing of repetitive inquiries",
    "aiCc.benefits.operational.item3": "Automatic consultation data analysis",
    "aiCc.stats.autoResponse": "Auto Response Rate",
    "aiCc.stats.service": "Service Operation",
    "aiCc.stats.costReduction": "Cost Reduction",
    "aiCc.stats.satisfaction": "Customer Satisfaction",
    "aiCc.cta.title": "Revolutionize Your Call Center with AI CC",
    "aiCc.cta.description":
      "Improve customer service quality with AI-based consultation systems",
    "aiCc.cta.button": "Solution Consultation",

    // Solutions - DEXMA
    "dexma.subtitle": "DEXMA Video Recognition Solution",
    "dexma.description":
      "An intelligent video recognition solution that enhances security and analysis with deep learning-based video analysis technology.",
    "dexma.features.faceRecognition": "Face Recognition",
    "dexma.features.faceRecognition.desc":
      "Build access control and security systems with accurate facial recognition",
    "dexma.features.plateRecognition": "License Plate Recognition",
    "dexma.features.plateRecognition.desc":
      "Real-time recognition of license plates for optimized parking management",
    "dexma.features.aqua": "DEXMA AQUA",
    "dexma.features.aqua.desc":
      "Video analysis and monitoring system for underwater environments",
    "dexma.benefits.security": "Security Enhancement",
    "dexma.benefits.operational": "Operational Efficiency",
    "dexma.benefits.security.item1": "Unmanned security system construction",
    "dexma.benefits.security.item2": "Real-time dangerous situation detection",
    "dexma.benefits.security.item3": "Accurate identity verification",
    "dexma.benefits.operational.item1": "Personnel operating cost reduction",
    "dexma.benefits.operational.item2": "Automated management system",
    "dexma.benefits.operational.item3": "Data-driven decision making",
    "dexma.cta.title": "Build Smart Security with DEXMA",
    "dexma.cta.description":
      "Experience next-level security systems with deep learning-based video recognition",
    "dexma.cta.button": "Request Demo",

    // Services - Visible ARS
    "visibleArs.subtitle": "Visible ARS System",
    "visibleArs.description":
      "Improve customer experience and provide convenient phone services with visual ARS systems.",
    "visibleArs.features.visualMenu": "Visual Menu",
    "visibleArs.features.visualMenu.desc":
      "Intuitive menu displayed on screen with voice guidance",
    "visibleArs.features.touchInput": "Touch Input",
    "visibleArs.features.touchInput.desc":
      "Easy menu selection with smartphone touch",
    "visibleArs.features.realTimeInfo": "Real-time Information",
    "visibleArs.features.realTimeInfo.desc":
      "Real-time information such as wait time and agent connection status",
    "visibleArs.features.multilingual": "Multilingual Support",
    "visibleArs.features.multilingual.desc":
      "Screen menus and guidance in multiple languages",
    "visibleArs.features.accessibility": "Accessibility",
    "visibleArs.features.accessibility.desc":
      "Voice guide and large text support for the visually impaired",
    "visibleArs.features.customization": "Customization",
    "visibleArs.features.customization.desc":
      "Custom design and menu configuration for each company",
    "visibleArs.benefits.customerSatisfaction":
      "Customer Satisfaction Improvement",
    "visibleArs.benefits.operational": "Operational Efficiency",
    "visibleArs.benefits.customerSatisfaction.item1":
      "Increased convenience with intuitive menu structure",
    "visibleArs.benefits.customerSatisfaction.item2":
      "Reduced stress by shortening wait times",
    "visibleArs.benefits.customerSatisfaction.item3":
      "Easy use across various age groups",
    "visibleArs.benefits.operational.item1": "Reduced workload for consultants",
    "visibleArs.benefits.operational.item2":
      "Increased efficiency with accurate department connections",
    "visibleArs.benefits.operational.item3":
      "Reduced wait times by distributing call volume",
    "visibleArs.useCases.title": "Application Areas",
    "visibleArs.useCases.callCenter": "Call Center",
    "visibleArs.useCases.callCenter.desc":
      "Efficient call routing for customer service centers",
    "visibleArs.useCases.hospital": "Hospital",
    "visibleArs.useCases.hospital.desc":
      "Automation of medical appointments, reception, and inquiries",
    "visibleArs.useCases.financial": "Financial Institution",
    "visibleArs.useCases.financial.desc":
      "Account inquiry, loan consultation, and card services",
    "visibleArs.cta.title": "Improve Customer Experience with Visible ARS",
    "visibleArs.cta.description":
      "Provide more convenient and efficient phone services with visual menus",
    "visibleArs.cta.button": "Implementation Consultation",

    // Services - IVR
    "ivr.subtitle": "IVR Voice Response System",
    "ivr.description":
      "Automate customer service and improve operational efficiency with intelligent voice response systems.",
    "ivr.features.voiceRecognition": "Voice Recognition",
    "ivr.features.voiceRecognition.desc":
      "Accurately recognizes and processes natural language voice commands",
    "ivr.features.autoRouting": "Auto Routing",
    "ivr.features.autoRouting.desc":
      "Automatic connection to appropriate departments based on customer requests",
    "ivr.features.multilingual": "Multilingual Support",
    "ivr.features.multilingual.desc":
      "Voice guidance and responses in multiple languages",
    "ivr.features.personalization": "Personalization Service",
    "ivr.features.personalization.desc":
      "Personalized service through caller ID recognition",
    "ivr.features.analytics": "Statistical Analysis",
    "ivr.features.analytics.desc":
      "Call pattern analysis and service improvement insights",
    "ivr.features.flexibleSettings": "Flexible Settings",
    "ivr.features.flexibleSettings.desc":
      "Custom menu configuration tailored to business needs",
    "ivr.benefits.costReduction": "Cost Reduction",
    "ivr.benefits.serviceQuality": "Service Quality Improvement",
    "ivr.benefits.costReduction.item1": "Consultant personnel cost savings",
    "ivr.benefits.costReduction.item2": "24-hour unmanned service operation",
    "ivr.benefits.costReduction.item3": "Repetitive task automation",
    "ivr.benefits.serviceQuality.item1": "Reduced wait times",
    "ivr.benefits.serviceQuality.item2": "Consistent service quality",
    "ivr.benefits.serviceQuality.item3": "Accurate information delivery",
    "ivr.workflow.title": "IVR Processing Flow",
    "ivr.workflow.step1": "Call Reception",
    "ivr.workflow.step1.desc":
      "IVR system automatically receives customer calls",
    "ivr.workflow.step2": "Voice Analysis",
    "ivr.workflow.step2.desc":
      "Recognizes and analyzes customer voice commands",
    "ivr.workflow.step3": "Intent Recognition",
    "ivr.workflow.step3.desc":
      "Accurately identifies customer requests and intentions",
    "ivr.workflow.step4": "Service Provision",
    "ivr.workflow.step4.desc":
      "Provides appropriate information or connects to staff",
    "ivr.cta.title": "Automate Customer Service with IVR",
    "ivr.cta.description":
      "Build efficient customer service with intelligent voice response systems",
    "ivr.cta.button": "System Construction Consultation",

    // Agentic AI - DXHUND
    "dxhund.subtitle": "DX HUND Agentic AI",
    "dxhund.description":
      "Maximize work efficiency with intelligent AI agents that automate business processes.",
    "dxhund.features.autonomous": "Autonomous Execution",
    "dxhund.features.autonomous.desc":
      "Automatically processes complex tasks without user intervention",
    "dxhund.features.multiSystem": "Multi-System Integration",
    "dxhund.features.multiSystem.desc":
      "Optimizes business processes by integrating multiple systems and APIs",
    "dxhund.features.intelligentDecision": "Intelligent Decision Making",
    "dxhund.features.intelligentDecision.desc":
      "Performs optimal decision making through data analysis",
    "dxhund.features.realTimeLearning": "Real-time Learning",
    "dxhund.features.realTimeLearning.desc":
      "Continuously improves performance by learning work patterns",
    "dxhund.features.exceptionHandling": "Exception Handling",
    "dxhund.features.exceptionHandling.desc":
      "Flexible response capability to unexpected situations",
    "dxhund.features.workflowManagement": "Workflow Management",
    "dxhund.features.workflowManagement.desc":
      "Systematically manages and executes complex work flows",
    "dxhund.useCases.title": "Application Areas",
    "dxhund.useCases.customerService": "Customer Service",
    "dxhund.useCases.customerService.desc":
      "Automatic processing of customer inquiries and problem solving",
    "dxhund.useCases.dataAnalysis": "Data Analysis",
    "dxhund.useCases.dataAnalysis.desc":
      "Automatic analysis of large-scale data and report generation",
    "dxhund.useCases.salesManagement": "Sales Management",
    "dxhund.useCases.salesManagement.desc":
      "Lead generation, customer management, and sales process automation",
    "dxhund.useCases.financialManagement": "Financial Management",
    "dxhund.useCases.financialManagement.desc":
      "Automation of accounting processing, budget management, and financial analysis",
    "dxhund.useCases.hrManagement": "HR Management",
    "dxhund.useCases.hrManagement.desc":
      "Automation of HR tasks such as recruitment, evaluation, and salary calculation",
    "dxhund.useCases.supplyChain": "Supply Chain Management",
    "dxhund.useCases.supplyChain.desc":
      "Inventory management, order processing, and delivery optimization",
    "dxhund.benefits.productivity": "Productivity Improvement",
    "dxhund.benefits.costReduction": "Cost Reduction",
    "dxhund.benefits.productivity.item1": "95% automation of repetitive tasks",
    "dxhund.benefits.productivity.item2":
      "10x improvement in work processing speed",
    "dxhund.benefits.productivity.item3":
      "24-hour uninterrupted work processing",
    "dxhund.benefits.costReduction.item1": "70% reduction in personnel costs",
    "dxhund.benefits.costReduction.item2": "90% reduction in error rates",
    "dxhund.benefits.costReduction.item3": "System operating cost optimization",
    "dxhund.architecture.title": "AI Agent Architecture",
    "dxhund.architecture.reasoning": "Reasoning Engine",
    "dxhund.architecture.reasoning.desc":
      "Situation analysis and optimal action plan establishment",
    "dxhund.architecture.execution": "Execution Engine",
    "dxhund.architecture.execution.desc":
      "Automatic execution of planned tasks",
    "dxhund.architecture.knowledge": "Knowledge Base",
    "dxhund.architecture.knowledge.desc":
      "Accumulation of work knowledge and experience",
    "dxhund.architecture.feedback": "Feedback Loop",
    "dxhund.architecture.feedback.desc":
      "Result analysis and performance improvement",
    "dxhund.cta.title": "Automate Your Business with DX HUND",
    "dxhund.cta.description":
      "Experience work innovation and strengthen competitiveness with Agentic AI",
    "dxhund.cta.button": "AI Implementation Consulting",

    // Agentic AI - RETRIEVER
    "retriever.subtitle": "RETRIEVER RAG AI",
    "retriever.description":
      "Provides accurate and reliable AI responses with Retrieval-Augmented Generation technology.",
    "retriever.features.documentSearch": "Document Search",
    "retriever.features.documentSearch.desc":
      "Accurate information retrieval from large documents related to questions",
    "retriever.features.knowledgeFusion": "Knowledge Fusion",
    "retriever.features.knowledgeFusion.desc":
      "Combines retrieved information with AI knowledge to generate accurate answers",
    "retriever.features.realTimeUpdate": "Real-time Update",
    "retriever.features.realTimeUpdate.desc":
      "Real-time knowledge base updates reflecting the latest information",
    "retriever.cta.title": "Utilize Knowledge with RETRIEVER",
    "retriever.cta.description":
      "Build accurate and reliable AI services with RAG technology",
    "retriever.cta.button": "RAG Solution Consultation",

    // Reference - Case Studies
    "caseStudies.subtitle": "Case Studies",
    "caseStudies.description":
      "Explore successful implementations of GMISSION solutions across various industries",
    "caseStudies.cases.financial":
      "Financial Institution AI FAX Implementation",
    "caseStudies.cases.financial.desc":
      "80% reduction in processing time through fax automation at major banks",
    "caseStudies.cases.hospital": "Hospital AI OCR Application",
    "caseStudies.cases.hospital.desc":
      "Improved operational efficiency through digitization of medical records at general hospitals",
    "caseStudies.cases.public": "Public Organization AI CC Construction",
    "caseStudies.cases.public.desc":
      "95% improvement in citizen satisfaction through call center automation",
    "caseStudies.cta.title": "Create Your Success Story",
    "caseStudies.cta.description":
      "Achieve digital innovation together with GMISSION",
    "caseStudies.cta.button": "Request Case Consultation",

    // Reference - Clients
    "clientsPage.subtitle": "Clients Who Trust GMISSION",

    // Reference - Partners
    "partnersPage.subtitle": "Business Partners",
    "partnersPage.description":
      "Meet the partners working together with GMISSION",

    // News - Notice
    "noticePage.subtitle": "Notice",
    "noticePage.description": "Check GMISSION's latest news",

    // News - Media
    "mediaPage.subtitle": "Media Coverage",
    "mediaPage.description": "Check GMISSION's media coverage materials",

    // News - Gallery
    "galleryPage.subtitle": "Gallery",
    "galleryPage.description": "Check photos of GMISSION's various activities",
  },
};

interface LanguageProviderProps {
  children: ReactNode;
  initialLanguage?: Language;
}

export function LanguageProvider({
  children,
  initialLanguage = "ko",
}: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(initialLanguage);

  // language 변화 시 side effect 처리 및 cookie 저장
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
    }
    if (typeof window !== "undefined") {
      window.localStorage.setItem("language", language);
      // 1년 유효 쿠키 저장
      document.cookie = `language=${language}; path=/; max-age=31536000`;
    }
  }, [language]);

  // 언어 변경 함수
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return (translations[language] as Record<string, string>)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
