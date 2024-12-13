import { HeaderData, ProductHeaderData } from '@/types/header';
import { AbleStackServices, AblestackListData, ProductContentData } from '@/types/products';

import CellSrc from '@/public/images/products/cell.png';
import CubeSrc from '@/public/images/products/cube.png';
import GenieSrc from '@/public/images/products/genie.png';
import GlueSrc from '@/public/images/products/glue.png';
import KoralSrc from '@/public/images/products/koral.png';
import LinkSrc from '@/public/images/products/link.png';
import MoldSrc from '@/public/images/products/mold.png';
import OverSrc from '@/public/images/products/over.png';
import SiloSrc from '@/public/images/products/silo.png';
import TrackSrc from '@/public/images/products/track.png';
import WallSrc from '@/public/images/products/wall.png';

export const ablestackServices = [
  'cube',
  'cell',
  'glue',
  'mold',
  'track',
  'wall',
  'koral',
  'genie',
  'silo',
  'over',
  'link',
] as const;

export const ablestackHeaderData: HeaderData = {
  title: {
    mainText: 'ABLESTACK HCI',
  },
  description: (
    <>
      복잡한 구조의 전통적 기업 데이터센터의 문제점을 해결하고, IT 환경의 급속한 발전으로 인해
      발생하는
      <br />
      문제점을 해결하기 위해 단일 서버 구성으로 모든 인프라와 플랫폼을 실행할 수 있도록 고안된
      <br />
      HCI 플랫폼 입니다.
    </>
  ),
  bgClassName: 'bg-products-header-ablestack',
  heightClassName: 'min-h-[450px] lg:min-h-[506px]',
  buttonData: {
    text: '개요 보러가기',
    href: '/',
  },
};

export const ablestackList: AblestackListData[] = [
  {
    title: 'ABLESTACK Standard 구성요소',
    ablestackService: [
      {
        path: 'cube',
        title: 'Cube : 운영체제',
        description: 'ABLESTACK의 모든 패키지가 포함된 Server OS',
      },
      {
        path: 'cell',
        title: 'Cell : 가상화',
        description: '고성능을 제공하는 내장된 커널 기반 하이퍼바이저',
      },
      {
        path: 'glue',
        title: 'Glue : 스토리지',
        description: '가상머신 기반 소프트웨어 정의 스토리지',
      },
      {
        path: 'mold',
        title: 'Mold : 관리',
        description: '통합관리를 제공하는 클라우드 플랫폼',
      },
      {
        path: 'track',
        title: 'Track : 네트워크',
        description: '가상머신 및 컨테이너를 위한 소프트웨어 정의 네트워크',
      },
      {
        path: 'wall',
        title: 'Wall : 모니터링',
        description: '인프라 전체 및 애플리케이션 통합 모니터링 플랫폼',
      },
    ],
  },
  {
    title: 'ABLESTACK Enterprise 구성요소',
    ablestackService: [
      {
        path: 'koral',
        title: 'Koral : K8S 컨테이너',
        description: 'Kubernetes Cluster 배포 및 운영을 위한 K8S 플랫폼',
      },
      {
        path: 'genie',
        title: 'Genie : 구성 및 배포 자동화',
        description: '애플리케이션 배포 및 모니터링 자동화를 위한 laC플랫폼',
      },
      {
        path: 'silo',
        title: 'Silo : 스토리지 서비스',
        description: '다양한 스토리지 서비스를 제공하는 플랫폼',
      },
      {
        path: 'over',
        title: 'Over : 장애 및 재해 관리',
        description: '안정성을 높이기 위한 이중화/재해복구 지원',
      },
      {
        path: 'link',
        title: 'Link : 보안 네트워크',
        description: 'VPC, Micro Segmentation',
      },
    ],
  },
];

export const productsHeaderData: { [K in AbleStackServices]: ProductHeaderData } = {
  cube: {
    title: 'Cube 운영체제',
    bgClassName: `bg-products-header-cube`,
    description:
      'Cube는 ABLESTACK을 구성하는 모든 소프트웨어 패키지와 구성마법사 그리고 웹 기반 호스트 관리플랫폼을 포함하는 Linux 기반 서버 OS 입니다.',
    descriptionMaxWidth: 'max-w-[522px]',
  },
  cell: {
    title: 'Cell 가상화',
    bgClassName: `bg-products-header-cell`,
    description:
      'Cell은 호스트 내에서 구역을 정해 실행되는 가상머신 또는 컨테이너를 실행하기 위한 하이퍼바이저입니다. 말 그대로 하나의 호스트의 자원을 쪼개서 각 각의 역할을 수행하는 작은 단위의 세포 또는 방인 가상머신을 실행하기 위한 환경을 제공하는 플랫폼입니다.',
    descriptionMaxWidth: 'max-w-[746px]',
    contentMaxWidth: 'max-w-[746px]',
  },
  glue: {
    title: 'Glue 스토리지',
    bgClassName: `bg-products-header-glue`,
    description:
      'Glue는 ABLESTACK의 스토리지 플랫폼의 이름입니다. 호스트에 있는 디스크를 이용해 통합된 저장공간을 제공하고, 다양한 형태로 스토리지 서비스를 제공하는 HCI 스토리지의 특성을 잘 설명할 수 있는 단어로, 통합 스토리지 라는 의미를 담고 있습니다.',
    descriptionMaxWidth: 'max-w-[522px]',
  },
  mold: {
    title: 'Mold 관리',
    bgClassName: `bg-products-header-mold`,
    description:
      'Mold는 가상머신을 생성하고 운영하며, 다양한 네트워크, 스토리지 서비스, 자동화 기능, 백업, 재해복구 기능 등의 다양한 클라우드/가상화 관련 기능을 웹 UI를 통해 사용할 수 있는 플랫폼 입니다.',
    descriptionMaxWidth: 'max-w-[522px]',
  },
  track: {
    title: 'Track 네트워크',
    bgClassName: `bg-products-header-track`,
    description:
      'Track은 ABLESTACK에 가상화된 네트워킹 레이어를 구성하는 플랫폼으로, 가상화 영역에 소프트웨어 정의된 네트워크를 배포합니다. 신속하게 사용자 단위로 격리된 네트워크를 배포하고 활용할 수 있습니다.',
    descriptionMaxWidth: 'max-w-[522px]',
  },
  wall: {
    title: 'Wall 모니터링',
    bgClassName: `bg-products-header-wall`,
    description:
      'Wall은 ABLESTASCK을 구성하는 모든 인프라 및 사용자 가상머신, 애플리케이션을 모니터링하는 통합 모니터링 플랫폼 입니다.',
    descriptionMaxWidth: 'max-w-[522px]',
  },
  koral: {
    title: 'Koral K8S 컨테이너',
    bgClassName: `bg-products-header-koral`,
    description:
      'Mold를 통해 자동으로 배포되는 Kubernetes 클러스터로 컨테이너를 이용한 애플리케이션 프로비저닝, 운영 및 수명주기 관리, 클러스터 확장 등의 관리가 매우 단순화 됩니다.',
    descriptionMaxWidth: 'max-w-[522px]',
  },
  genie: {
    title: 'Genie IaC 플랫폼',
    bgClassName: `bg-products-header-genie`,
    description:
      '사용자가 생성한 워크플로우를 기반으로 멀티 클라우드 환경에서 가상머신 및 애플리케이션과 상태 모니터링 등을 자동으로 배포할 수 있도록 지원하는 멀티 클라우드 IT 자동화 플랫폼 입니다.',
    descriptionMaxWidth: 'max-w-[522px]',
  },
  silo: {
    title: 'Silo 스토리지 서비스',
    bgClassName: `bg-products-header-silo`,
    description:
      '기업이 IT 서비스를 운영하면서 필요한 다양한 스토리지 기능을 ABLESTACK을 통해 제공하는 플랫폼으로, 스토리지 확장의 유연성을 높여주고 다양한 방식으로 Glue의 활용성을 높여줍니다.',
    descriptionMaxWidth: 'max-w-[522px]',
  },
  over: {
    title: 'Over 장애 및 재해 관리',
    bgClassName: `bg-products-header-over`,
    description:
      'Over는 ABLESTASCK의 가상 인프라 및 애플리케이션에서 발생할 수 있는 다양한 장애 및 재해 상황을 대응하기 위한 복구 플랫폼으로 기업의 Mission Critical 애플리케이션을 효과적으로 보호합니다.',
    descriptionMaxWidth: 'max-w-[522px]',
  },
  link: {
    title: 'Link 보안네트워크',
    bgClassName: `bg-products-header-link`,
    description:
      '가시성 높은 보안 정책을 기반으로 가상머신 및 애플리케이션에 대한 공격에 완벽한 방어 환경을 제공하며, 다양한 퍼블릭 클라우드와의 네트워크 연결을 지원합니다.',
    descriptionMaxWidth: 'max-w-[522px]',
  },
};

export const productsContentData: { [K in AbleStackServices]: ProductContentData } = {
  cube: {
    imgSrc: CubeSrc,
    description:
      '모든 x86 서버에 하드웨어 의존성 없이 설치하여 사용가능하며, 최적화된 커널 및 IO 처리 모듈을 통해 고성능 환경을 제공합니다.',
    subDescriptions: [
      '표준 Linux OS',
      'ABLESTACK을 위한 모든 패키지가 포함',
      '웹 브라우저만 있으면 어디서든 호스트의 디바이스, 서비스, 네트워킹 등을 관리 가능',
      '클라우드 환경을 배포 마법사를 통해 배포 가능',
    ],
  },
  cell: {
    imgSrc: CellSrc,
    description:
      'Cell은 CentOS KVM을 기반으로 ABLESTACK 운영에 최적화된 기능을 추가한 내장된 하이퍼바이저입니다. Cell 하이퍼바이저는 다음과 같은 주요 컴포넌트로 구성됩니다.',
    subDescriptions: [
      'Cube OS에 이미 하이퍼바이저가 내장되어 있어 별도의 하이퍼바이저 라이선스 불필요',
      '베어메탈 하이퍼바이저 전환으로 최신 커널 적용을 통한 고성능 IO 구현',
      'Cell 뿐만 아니라 VM ware, Hyper V, Xen 등 기존의 하이퍼바이저도 호환 가능',
    ],
  },
  glue: {
    imgSrc: GlueSrc,
    description:
      'Glue는 ABLESTACK HCI의 핵심 구성요소로 HCI의 스토리지를 제공하기 위한 플랫폼입니다. 다음의 그림은 ABLESTACK HCI의 전체 구성요소 중 Glue가 제공하는 기능을 아키텍처로 표현합니다.',
    subDescriptions: [
      '서버에 내장된 디스크 만으로 대규모 스토리지 제공 및 장애 시에도 자가진단 및 자가복구',
      '중복 제거 및 압축으로 원본 데이터 대비 최대 80% 용량 절감하여 고효율 보장',
      '운영 중 무제한 용량 확장 가능, 무한한 유즈케이스',
    ],
  },
  mold: {
    imgSrc: MoldSrc,
    description:
      '모든 x86 서버에 하드웨어 의존성 없이 설치하여 사용가능하며, 최적화된 커널 및 IO 처리 모듈을 통해 고성능 환경을 제공합니다.',
    subDescriptions: [
      '표준 Linux OS',
      'ABLESTACK을 위한 모든 패키지가 포함',
      '웹 브라우저만 있으면 어디서든 호스트의 디바이스, 서비스, 네트워킹 등을 관리 가능',
      '클라우드 환경을 배포 마법사를 통해 배포 가능',
    ],
  },
  track: {
    imgSrc: TrackSrc,
    description:
      'Track은 가상 라우터 기반의 오버레이 소프트웨어 정의 네트워크를 제공합니다. 다양한 네트워크 기능을 빠르게 구성하고 관리할 수 있습니다.',
    subDescriptions: [
      '별도의 어플라이언스 설치 없이 사용 가능',
      '다양한 네트워크 기능 제공 (L2, L3, DNS 등)',
      '외부 접속의 원천 차단으로 높은 보안성 제공',
      '웹 UI를 통해 모든 네트워크 자원에 대한 통제 가능',
    ],
  },
  wall: {
    imgSrc: WallSrc,
    description:
      '엔터프라이즈 모니터링 플랫폼인 Wall은ABLESTACK HCI는 HCI를 구성하는 모든 호스트 및 가상머신, 그리고 사용자가 모니터링하기 원하는 인프라에 대한 매트릭을 쿼리하고 시각화하며, 임계치 설정에 따른 경고를 받을 수 있습니다.',
    subDescriptions: [
      '실시간 모니터링 정보 제공',
      'DB, 웹 애플리케이션 등을 커스텀 모니터링 가능',
      '임계치 설정값을 기반으로 알람 제공',
      '사용량 통계를 통해 확장 시점 예측 정보 제공',
    ],
  },
  koral: {
    imgSrc: KoralSrc,
    description:
      '클릭 한 번으로 대부분의 작업 처리가 가능하고, 인프라 및 애플리케이션의 운영을 자동화할 수 있어 효율적으로 인프라를 관리할 수 있습니다.',
    subDescriptions: [
      '실시간 모니터링 정보 제공',
      'DB, 웹 애플리케이션 등을 커스텀 모니터링 가능',
      '임계치 설정값을 기반으로 알람 제공',
      '사용량 통계를 통해 확장 시점 예측 정보 제공',
    ],
  },
  genie: {
    imgSrc: GenieSrc,
    description:
      'Genie는 범용 언어를 기반으로 수행되는 자동화 도구로, 어려운 작업을 반복적으로 수행할 수 있도록 미리 생성한 플레이북을 기반으로 에이전트 없이 버튼 하나만 누르면 전사적으로 가상머신, 컨테이너, 네트워크, 애플리케이션 등을 배포할 수 있습니다.',
    subDescriptions: [
      '워크플로우 기반 자동화',
      'AWS, GCP, Azure 등 다양한 클라우드 서비스에서의 자동화 제공',
      '사전 정의 워크플로우 제공을 통해 다양한 오픈소스 플랫폼을 쉽게 배포 및 사용할 수 있는 환경 제공',
      '자동으로 배토된 자원 및 상태를 모니터링 가능',
    ],
  },
  silo: {
    imgSrc: SiloSrc,
    subDescriptions: [
      '다양한 상용 SDS를 연결하여 스토리지 확장 유연성 제공',
      '오브젝트 스토리지 게이트웨이 제공 및 브라우저를 제공하여 빅데이터 / AI 데이터 관리 가능',
      '베어메탈 / 하이퍼바이저 연결 지원',
      '오브젝트 스토리지 브라우저 및 웹 기반 NAS 등 웹 브라우저 통한 다양한 방식의 스토리지 활용 가능',
    ],
  },
  over: {
    imgSrc: OverSrc,
    subDescriptions: [
      'Active-Active DR',
      'UI를 통해 가상머신 단위로 DR 설정을 지원하여 효율적인 DR 관리가 가능하며, 가상머신 단위로 상태 모니터링 지원',
      'Mission Critical 애플리케이션이 무중단으로 운영되는 것을 보장하기 위한 서버 이중화 지원',
    ],
  },
  link: {
    imgSrc: LinkSrc,
    subDescriptions: [
      'Zero Trust 기반의 높은 보안성과 멀티 클라우드 연결 지원',
      '가상머신, 컨테이너, 애플리케이션에 대한 격리를 지원하여 중요 애플리케이션 및 공유 서비스의 손상 방지',
      '소프트웨어적으로 정의된 보안정책 관리 기능',
    ],
  },
};