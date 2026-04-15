# 동서대 분실물센터 — PWA

<p align="left">
  <img src="https://img.shields.io/badge/HTML5-PWA-E34F26?logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/Leaflet.js-Map-199900?logo=leaflet&logoColor=white" />
  <img src="https://img.shields.io/badge/ServiceWorker-Offline-4285F4?logo=googlechrome&logoColor=white" />
</p>

---

## 📌 프로젝트 개요

동서대학교 캠퍼스 내 **분실물 등록 및 조회 서비스**를 제공하는 PWA(Progressive Web App)입니다.  
별도 앱 설치 없이 모바일 브라우저에서 홈 화면에 추가하여 앱처럼 사용할 수 있습니다.

---

## 🎯 주요 기능

| 기능 | 설명 |
|------|------|
| 분실물 등록 | 습득 장소, 물품 정보, 이미지 업로드 |
| 지도 기반 위치 표시 | Leaflet.js 캠퍼스 지도 위에 습득 위치 핀 표시 |
| 분실물 목록 조회 | 등록된 분실물 검색 및 필터링 |
| 오프라인 지원 | Service Worker 캐싱으로 네트워크 없이도 기본 화면 유지 |
| 홈 화면 추가 | PWA manifest로 앱 아이콘 추가 지원 (iOS / Android) |

---

## 📁 파일 구조

```
aws_test/
├── index.html       # 메인 SPA (분실물 등록·조회 UI)
├── manifest.json    # PWA 메타정보 (앱 이름·아이콘·색상)
├── sw.js            # Service Worker (오프라인 캐싱)
├── icon-192.png     # PWA 아이콘 192×192
└── icon-512.png     # PWA 아이콘 512×512
```

---

## 🚀 실행 방법

```bash
# 로컬 서버 (Python)
python -m http.server 8080
# → http://localhost:8080
```

> PWA 기능(Service Worker, 홈 화면 추가)은 **HTTPS 환경** 또는 `localhost`에서만 동작합니다.

---

## 🛠 기술 스택

- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **지도**: Leaflet.js 1.9.4
- **PWA**: Web App Manifest, Service Worker (Cache API)
- **폰트**: Google Fonts — Noto Sans KR

---

## 👤 개발자

**westjun1021** — Frontend / PWA Developer  
Email: tjwns4603@gmail.com
