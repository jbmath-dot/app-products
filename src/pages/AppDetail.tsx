// Based on the Astryx product-detail page template.
import {useState, type CSSProperties} from 'react';
import {VStack, HStack} from '@astryxdesign/core/Layout';
import {Grid} from '@astryxdesign/core/Grid';
import {Text, Heading} from '@astryxdesign/core/Text';
import {Button} from '@astryxdesign/core/Button';
import {Badge} from '@astryxdesign/core/Badge';
import {Divider} from '@astryxdesign/core/Divider';
import {Collapsible, CollapsibleGroup} from '@astryxdesign/core/Collapsible';
import {AspectRatio} from '@astryxdesign/core/AspectRatio';
import {SelectableCard} from '@astryxdesign/core/SelectableCard';
import {List, ListItem} from '@astryxdesign/core/List';
import {Link} from '@astryxdesign/core/Link';
import {findApp, BRAND, type AppInfo} from '../data/apps';

// Custom CSS limited to what Astryx components can't express today
// (no Image primitive, no sticky prop) — same as the template.
const stickyInfo: CSSProperties = {
  position: 'sticky',
  top: 'var(--spacing-8)',
  alignSelf: 'start',
};
const heroImage: CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  borderRadius: 'var(--radius-container)',
};
const thumbImage: CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
};

function ScreenshotGallery({app}: {app: AppInfo}) {
  const [selected, setSelected] = useState(0);
  return (
    <VStack gap={3}>
      <AspectRatio ratio={9 / 16}>
        <img
          style={heroImage}
          src={app.screenshots[selected]}
          alt={`${app.name} 화면 ${selected + 1}`}
        />
      </AspectRatio>
      {app.screenshots.length > 1 && (
        <Grid columns={4} gap={2}>
          {app.screenshots.map((src, i) => (
            <AspectRatio key={i} ratio={9 / 16}>
              <SelectableCard
                label={`화면 ${i + 1} 보기`}
                isSelected={selected === i}
                onChange={() => setSelected(i)}
                variant="transparent"
                padding={0}
                width="100%"
                height="100%">
                <img style={thumbImage} src={src} alt="" />
              </SelectableCard>
            </AspectRatio>
          ))}
        </Grid>
      )}
    </VStack>
  );
}

function AppInfoColumn({app}: {app: AppInfo}) {
  return (
    <VStack gap={5}>
      <VStack gap={2}>
        <Text type="display-2" as="h1">
          {app.name}
        </Text>
        <HStack gap={2} vAlign="center">
          <Text type="large" weight="bold">
            {app.price}
          </Text>
          <Text type="body" color="secondary">
            {app.category}
          </Text>
          {app.status === 'coming-soon' && (
            <Badge variant="blue" label="출시 예정" />
          )}
        </HStack>
      </VStack>
      <Text type="large" weight="normal">
        {app.description}
      </Text>
      <VStack gap={2}>
        {app.playStoreUrl ? (
          <Button
            label="구글 플레이에서 받기"
            variant="primary"
            size="lg"
            href={app.playStoreUrl}
            target="_blank"
          />
        ) : (
          <Button label="곧 구글 플레이에 출시됩니다" size="lg" isDisabled />
        )}
      </VStack>
      <VStack gap={2}>
        <Heading level={2}>주요 기능</Heading>
        <List edge="flush" hasDividers>
          {app.features.map(f => (
            <ListItem key={f.title} label={f.title} description={f.description} />
          ))}
        </List>
      </VStack>
      <CollapsibleGroup type="multiple" defaultValue={['faq']}>
        <Divider />
        <Collapsible
          value="faq"
          trigger={<Heading level={3}>자주 묻는 질문</Heading>}>
          <List edge="flush">
            {app.faqs.map(q => (
              <ListItem key={q.question} label={q.question} description={q.answer} />
            ))}
          </List>
        </Collapsible>
        <Divider />
        <Collapsible
          value="privacy"
          defaultIsOpen={false}
          trigger={<Heading level={3}>개인정보와 문의</Heading>}>
          <VStack gap={2}>
            <Text type="body">{app.privacy.storage}</Text>
            <Link href={`#/privacy/${app.id}`} isStandalone>
              개인정보처리방침 전문 보기
            </Link>
            <Text type="supporting" color="secondary">
              문의: {BRAND.contactEmail}
            </Text>
          </VStack>
        </Collapsible>
        <Divider />
      </CollapsibleGroup>
    </VStack>
  );
}

export default function AppDetailPage({appId}: {appId: string}) {
  const app = findApp(appId);
  if (!app) {
    return (
      <>
        <VStack gap={3}>
          <Heading level={1}>앱을 찾을 수 없어요</Heading>
          <Link href="#/" isStandalone>
            앱 목록으로 돌아가기
          </Link>
        </VStack>
      </>
    );
  }
  return (
    <>
      <Grid columns={{minWidth: 320, repeat: 'fit'}} gap={5}>
        <ScreenshotGallery app={app} />
        <VStack gap={0} style={stickyInfo}>
          <AppInfoColumn app={app} />
        </VStack>
      </Grid>
    </>
  );
}
