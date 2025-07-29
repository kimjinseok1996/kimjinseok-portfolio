export const historyData = [
  {
    date: "2021. 06.",
    company: "임팩트컴퍼니(SI)",
    projects: [
      {
        title: "남해마늘한우 축제",
        description: "지자체 행사용 홈페이지",
        period: "2021.06 ~ 2021.07",
        text: "메인화면 UI 개발 작업 / 슬라이드 기능 개발",
        contribution: 60,
        img: "cow",
        stack: ["html", "css", "javascript", "jquery", "bootstrap"],
      },
      {
        title: "슈퍼카밸런스 게임",
        description: "성향에 따라 알맞은 슈퍼카가 매칭되는 밸런스 게임",
        period: "2021.08 ~ 2021.09",
        text: "- CSS Animation을 사용하여 사용자 입력에 따라 슬라이드, 모양이 변경되는 등 인터렉티브한 동작 기능 구현 <br /> - 유저가 선택한 답변들을 SessionStorage에 저장하여 결과페이지에 적용",
        contribution: 100,
        img: "suragame",
        stack: ["html", "css", "javascript", "jquery", "bootstrap"],
      },
      {
        title: "쇼핑몰 리닷",
        description: "욕실용품 쇼핑몰 홈페이지",
        period: "2021.08 ~ 2022.12",
        text: "- 아임포트, 이니시스모듈을 사용하여 구매기능을 구현 <br>- SNS로그인 라이브러리 사용하여 Kakao, Naver 로그인 구현 <br>- 주문목록, 장바구니 DB 테이블 작업 <br>- Ajax 통신 활용하여 장바구니, 주문목록 DB 테이블 과 API 연동 및 Sql쿼리 작성 <br>- 상품등록, 관리, 재고관리등 관리자페이지 기능 구현",
        contribution: 80,
        img: "lidot",
        stack: [
          "html",
          "css",
          "javascript",
          "jquery",
          "bootstrap",
          "ajax",
          "nodejs",
          "mysql",
        ],
      },
      {
        title: "차량 유지ˑ관리 제공 시스템",
        description: "차량 시공관리 시스템, 차량 주차장 관리 시스템",
        period: "2022.10 ~ 2022.11",
        text: "- SessionStorage에 로그인 정보 저장하여 로그인 기능 구현 <br>- 차량 관리 로직 연구, 개발 <br>- JSON데이터 조작을 통하여 건물 층별 주차위치 표시기능 작업 <br>- 차량등록, 리스트 DB 테이블 작성 <br>- Ajax통신으로 차량등록, 리스트화 DB 테이블 과 연계 <br>",
        contribution: 100,
        img: "hansung",
        stack: [
          "html",
          "css",
          "javascript",
          "jquery",
          "bootstrap",
          "ajax",
          "nodejs",
          "mysql",
        ],
      },
      {
        title: "차량 장비 개조 관리 시스템",
        description: "차량 장비별 개조 관리",
        period: "2022.06 ~ 2022.10",
        text: "- 차량장비 신청 기능 작업(웹앱) <br>- 장비에 따른 비용 산정 및 계산 <br>- 신청 장비에 따라 견적서 화면 개발, 비용 계산 <br>- 각 회원이 신청한 장비 리스트 관리자화면 개발, 통계화면 개발",
        contribution: 1000,
        img: "abys",
        stack: [
          "html",
          "css",
          "javascript",
          "jquery",
          "bootstrap",
          "ajax",
          "nodejs",
          "mysql",
        ],
      },
      {
        title: "학생 교육관리 시스템",
        description: "공무원학생들을 위한 교육관리 시스템",
        period: "2022.05 ~ 2022.12",
        text: "- Zustand를 사용하여 로그인정보 상태 관리 <br>- 학생들이 시험을 치르기위한 시험 스케쥴링 시스템 로직  개발 <br>- REST API 및 Sql쿼리 작성 <br>- 공용으로 쓰이는 모달 컴포넌트 작성, 리팩터링 <br>- 학생들 시험 결과 JSON 정보를 이용하여 통계 도출, 통계화면 개발",
        contribution: 90,
        img: "yg",
        stack: ["react", "zustand", "bootstrap", "axios", "nodejs", "mysql"],
      },
    ],
  },
  {
    date: "2023. 01.",
    company: "(주)아싸",
    projects: [
      {
        title: "아싸플러스",
        description: "아이스크림&주류 무인판매 매장 가맹점 모집 사이트",
        period: "2023.02 ~ 2023.03",
        text: "- 전체적인 화면 레이아웃 설계, 퍼블리싱 작업 <br>- Scroll 메소드와 CSS 에니메이션으로 인터렉티브한 동작 구현 <br>- Ajax 통신으로 백앤드개발자와 앱푸쉬알림 가맹문의 데이터 통신 <br>- EmailJs 를 사용하여 가맹문의 데이터 특정 이메일로 전송하는 기능 구현",
        contribution: 100,
        img: "assaplus",
        stack: ["html", "css", "javascript", "jquery", "bootstrap", "ajax"],
      },
    ],
  },
  {
    date: "2023. 05.",
    company: "씨엠엔피",
    projects: [
      {
        title: "씨엠엔피 홈페이지",
        description: "회사 소개 페이지",
        period: "",
        text: `- 회사 소개 페이지 레이아웃 설계, 퍼블리싱 작업 <br>
              - Scroll 메소드와 CSS 에니메이션으로 인터렉티브한 동작 구현 <br>
              - Google Cloud Platform 에서 Cloude Build 기능을 활용하여 CI/CD 구축 <br>
              - Docker를 사용하여 배포 환경 구성 <br>`,
        contribution: 100,
        img: "",
        stack: [
          "html",
          "css",
          "javascript",
          "jquery",
          "bootstrap",
          "php",
          "docker",
          "gcp",
        ],
      },
      {
        title: "케어플러스",
        description: "대리 기사 프로그램 멤버쉽 가입 페이지",
        period: "",
        text: `- KM과 Figma로 협업하여 렌딩페이지 작업 <br>
              - vuex로 상태관리, mixin으로 공통 함수 관리 <br>
              - JWT를 Android에서 전달 받아 인증데이터 관리 <br>
              - Axios로 API통신 <br>
              - dotenv로 환경변수 설정 <br>
              - webpack override로 빌드 설정(compression-webpack-plugin, terser-webpack-plugin, gzip 등) <br>
              - Android 브릿지함수로 앱와 통신 <br>
              - 코드 스플리팅, Lazy Loading을 사용하여 페이지별 코드 분리`,
        contribution: 100,
        img: "",
        stack: ["vue", "axios", "bootstrap", "webpack", "figma"],
      },
      {
        title: "콜마너 기사용 앱",
        description: "대리 기사 프로그램 일부 웹뷰페이지",
        period: "",
        text: `- vuex로 상태관리, mixin으로 공통 함수 관리 <br>
              - JWT를 Android에서 전달 받아 인증데이터 관리 <br>
              - Axios로 API통신 <br>
              - dotenv로 환경변수 설정 <br>
              - webpack override로 빌드 설정(compression-webpack-plugin, terser-webpack-plugin, gzip 등) <br>
              - Android 브릿지함수로 앱와 통신 <br>
              - SIMG와 보험가입관련 협업(보험 데이터를 SIMG측 페이지로 전달, 보험 가입완료 응답값으로 화면처리 ) <br>
              - Kakao Map API를 사용하여 지도 기능 구현, 좌표값 관리(현장콜) <br>
              - 코드 스플리팅, Lazy Loading을 사용하여 페이지별 코드 분리`,
        contribution: 90,
        img: "",
        stack: ["vue", "axios", "bootstrap", "webpack", "figma"],
      },
    ],
  },
];
