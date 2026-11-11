// 앱별 개인정보처리방침. 구글 플레이 등록 시 이 페이지 주소
// (https://<아이디>.github.io/<저장소>/#/privacy/<앱id>)를 입력합니다.
import {VStack} from '@astryxdesign/core/Layout';
import {Text, Heading} from '@astryxdesign/core/Text';
import {List, ListItem} from '@astryxdesign/core/List';
import {Link} from '@astryxdesign/core/Link';
import {Divider} from '@astryxdesign/core/Divider';
import {findApp, BRAND} from '../data/apps';

export default function PrivacyPage({appId}: {appId: string}) {
  const app = findApp(appId);
  if (!app) {
    return (
      <>
        <Heading level={1}>앱을 찾을 수 없어요</Heading>
      </>
    );
  }
  const {privacy} = app;
  return (
    <>
      <VStack gap={6} maxWidth={760}>
        <VStack gap={2}>
          <Heading level={1}>{app.name} 개인정보처리방침</Heading>
          <Text type="supporting" color="secondary">
            시행일: {privacy.updatedAt}
          </Text>
        </VStack>
        <Text type="body">
          {BRAND.name}(이하 "개발자")은 「개인정보 보호법」에 따라 이용자의
          개인정보를 보호하고, 관련 고충을 빠르게 처리할 수 있도록 다음과 같이
          개인정보처리방침을 둡니다.
        </Text>
        <Divider />
        <VStack gap={2}>
          <Heading level={2}>1. 수집하는 개인정보</Heading>
          {privacy.collects.length === 0 ? (
            <Text type="body">
              이 앱은 이름, 연락처, 위치 등 이용자를 알아볼 수 있는 개인정보를
              수집하지 않습니다.
            </Text>
          ) : (
            <List edge="flush">
              {privacy.collects.map(c => (
                <ListItem key={c} label={c} />
              ))}
            </List>
          )}
        </VStack>
        <VStack gap={2}>
          <Heading level={2}>2. 저장 위치와 보관 기간</Heading>
          <Text type="body">{privacy.storage}</Text>
        </VStack>
        <VStack gap={2}>
          <Heading level={2}>3. 제3자 제공</Heading>
          <Text type="body">{privacy.thirdParty}</Text>
        </VStack>
        <VStack gap={2}>
          <Heading level={2}>4. 이용자의 권리</Heading>
          <Text type="body">
            이용자는 언제든지 앱을 삭제해 앱에 저장된 정보를 지울 수 있으며,
            아래 연락처로 개인정보 관련 문의·삭제 요청을 할 수 있습니다.
          </Text>
        </VStack>
        <VStack gap={2}>
          <Heading level={2}>5. 문의처</Heading>
          <Text type="body">이메일: {BRAND.contactEmail}</Text>
        </VStack>
        <VStack gap={2}>
          <Heading level={2}>6. 방침의 변경</Heading>
          <Text type="body">
            이 방침이 바뀌면 시행일과 함께 이 페이지에 알립니다.
          </Text>
        </VStack>
        <Link href={`#/app/${app.id}`} isStandalone>
          {app.name} 소개로 돌아가기
        </Link>
      </VStack>
    </>
  );
}
