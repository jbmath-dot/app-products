// Based on the Astryx centered-hero page template.
import type {CSSProperties} from 'react';
import {VStack, HStack} from '@astryxdesign/core/Layout';
import {Text, Heading} from '@astryxdesign/core/Text';
import {Button} from '@astryxdesign/core/Button';
import {Icon} from '@astryxdesign/core/Icon';
import {Card} from '@astryxdesign/core/Card';
import {Grid} from '@astryxdesign/core/Grid';
import {Badge} from '@astryxdesign/core/Badge';
import {ArrowRightIcon} from '@heroicons/react/20/solid';
import {APPS, BRAND, type AppInfo} from '../data/apps';

// No Image primitive in Astryx yet: fixed square for the app icon.
const appIcon: CSSProperties = {
  width: 'var(--spacing-16, 64px)',
  height: 'var(--spacing-16, 64px)',
  borderRadius: 'var(--radius-container)',
  objectFit: 'cover',
  flexShrink: 0,
};

function AppCard({app}: {app: AppInfo}) {
  return (
    <Card>
      <VStack gap={4}>
        <HStack gap={4} vAlign="center">
          <img src={app.icon} alt="" style={appIcon} />
          <VStack gap={1}>
            <Heading level={3}>{app.name}</Heading>
            <HStack gap={2} vAlign="center">
              <Text type="supporting" color="secondary">
                {app.category} · {app.price}
              </Text>
              {app.status === 'coming-soon' && (
                <Badge variant="blue" label="출시 예정" />
              )}
            </HStack>
          </VStack>
        </HStack>
        <Text type="body" color="secondary">
          {app.tagline}
        </Text>
        <HStack gap={2}>
          <Button
            label="자세히 보기"
            variant="primary"
            href={`#/app/${app.id}`}
            endContent={<Icon icon={ArrowRightIcon} size="sm" color="inherit" />}
          />
          {app.playStoreUrl && (
            <Button
              label="구글 플레이"
              variant="secondary"
              href={app.playStoreUrl}
              target="_blank"
            />
          )}
        </HStack>
      </VStack>
    </Card>
  );
}

export default function HomePage() {
  return (
    <>
      <VStack gap={10}>
        <VStack gap={6} hAlign="center">
          <VStack gap={3} hAlign="center">
            <Heading
              level={1}
              type="display-2"
              justify="center"
              textWrap="balance">
              {BRAND.slogan}
            </Heading>
            <Text
              type="body"
              color="secondary"
              justify="center"
              textWrap="balance">
              {BRAND.intro}
            </Text>
          </VStack>
          <HStack gap={3}>
            <Button
              label="앱 둘러보기"
              variant="primary"
              clickAction={() =>
                document
                  .getElementById('apps')
                  ?.scrollIntoView({behavior: 'smooth'})
              }
              endContent={
                <Icon icon={ArrowRightIcon} size="sm" color="inherit" />
              }
            />
          </HStack>
        </VStack>
          <VStack gap={6} id="apps">
            <Heading level={2}>앱 목록</Heading>
            <Grid columns={{minWidth: 300, repeat: 'fit'}} gap={4}>
              {APPS.map(app => (
                <AppCard key={app.id} app={app} />
              ))}
            </Grid>
          </VStack>
        <Text type="supporting" color="secondary" justify="center">
          문의: {BRAND.contactEmail}
        </Text>
      </VStack>
    </>
  );
}
