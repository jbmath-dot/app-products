// 이 파일만 고치면 사이트 내용이 바뀝니다.
// [채워 주세요] 표시가 있는 곳은 실제 앱 정보로 바꿔야 합니다.

export interface AppFeature {
  title: string;
  description: string;
}

export interface AppFaq {
  question: string;
  answer: string;
}

export interface AppInfo {
  id: string; // 주소에 쓰이는 영문 이름 (예: math-quiz)
  name: string;
  tagline: string; // 한 줄 소개
  description: string; // 자세한 소개
  category: string; // 예: 교육, 생산성
  price: string; // 예: '무료', '2,900원', '무료(앱 내 구매 있음)'
  status: 'released' | 'coming-soon';
  playStoreUrl?: string; // 출시 후 https://play.google.com/store/apps/details?id=패키지이름
  icon: string; // public/ 기준 경로
  screenshots: string[]; // public/ 기준 경로, 세로 화면 캡처 권장
  features: AppFeature[];
  faqs: AppFaq[];
  privacy: {
    collects: string[]; // 수집하는 정보 (없으면 빈 배열)
    storage: string; // 저장 위치·기간
    thirdParty: string; // 제3자 제공 여부
    updatedAt: string; // 시행일 YYYY-MM-DD
  };
}

export const BRAND = {
  name: '[채워 주세요] 개발자·브랜드 이름',
  slogan: '수업과 일상을 가볍게 만드는 앱',
  intro:
    '교실에서 직접 겪은 불편함에서 출발해, 꼭 필요한 기능만 담아 만듭니다.',
  contactEmail: '[채워 주세요] 문의용 이메일',
};

const PLACEHOLDER_ICON = 'images/app-icon-placeholder.svg';
const PLACEHOLDER_SCREEN = 'images/screen-placeholder.svg';

export const APPS: AppInfo[] = [
  {
    id: 'app-one',
    name: '[채워 주세요] 첫 번째 앱 이름',
    tagline: '앱을 한 문장으로 소개하는 자리입니다.',
    description:
      '누가, 어떤 상황에서, 무엇을 더 쉽게 할 수 있는지 2~3문장으로 적어 주세요. 구글 플레이 스토어의 "자세한 설명"과 같은 내용을 써도 됩니다.',
    category: '교육',
    price: '무료',
    status: 'coming-soon',
    icon: PLACEHOLDER_ICON,
    screenshots: [PLACEHOLDER_SCREEN, PLACEHOLDER_SCREEN, PLACEHOLDER_SCREEN],
    features: [
      {title: '핵심 기능 1', description: '이 기능으로 무엇이 편해지는지 적어 주세요.'},
      {title: '핵심 기능 2', description: '이 기능으로 무엇이 편해지는지 적어 주세요.'},
      {title: '핵심 기능 3', description: '이 기능으로 무엇이 편해지는지 적어 주세요.'},
    ],
    faqs: [
      {question: '인터넷이 없어도 쓸 수 있나요?', answer: '[채워 주세요] 실제 앱 동작에 맞게 답해 주세요.'},
      {question: '결제 후 환불은 어떻게 하나요?', answer: '구글 플레이 환불 정책에 따라 구글 플레이에서 신청할 수 있습니다.'},
    ],
    privacy: {
      collects: [],
      storage: '[채워 주세요] 예: 입력한 내용은 사용자의 기기 안에만 저장되며, 앱을 지우면 함께 삭제됩니다.',
      thirdParty: '[채워 주세요] 예: 개인정보를 외부에 제공하지 않습니다.',
      updatedAt: '2026-11-11',
    },
  },
  {
    id: 'app-two',
    name: '[채워 주세요] 두 번째 앱 이름',
    tagline: '앱을 한 문장으로 소개하는 자리입니다.',
    description:
      '누가, 어떤 상황에서, 무엇을 더 쉽게 할 수 있는지 2~3문장으로 적어 주세요.',
    category: '생산성',
    price: '[채워 주세요] 가격',
    status: 'coming-soon',
    icon: PLACEHOLDER_ICON,
    screenshots: [PLACEHOLDER_SCREEN, PLACEHOLDER_SCREEN],
    features: [
      {title: '핵심 기능 1', description: '이 기능으로 무엇이 편해지는지 적어 주세요.'},
      {title: '핵심 기능 2', description: '이 기능으로 무엇이 편해지는지 적어 주세요.'},
    ],
    faqs: [
      {question: '여러 기기에서 쓸 수 있나요?', answer: '[채워 주세요] 실제 앱 동작에 맞게 답해 주세요.'},
    ],
    privacy: {
      collects: [],
      storage: '[채워 주세요]',
      thirdParty: '[채워 주세요]',
      updatedAt: '2026-11-11',
    },
  },
];

export function findApp(id: string): AppInfo | undefined {
  return APPS.find(app => app.id === id);
}
