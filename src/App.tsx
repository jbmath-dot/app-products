import {useEffect, useState} from 'react';
import {Layout, LayoutHeader, LayoutContent} from '@astryxdesign/core/Layout';
import {TopNav, TopNavHeading, TopNavItem} from '@astryxdesign/core/TopNav';
import {BRAND} from './data/apps';
import HomePage from './pages/Home';
import AppDetailPage from './pages/AppDetail';
import PrivacyPage from './pages/Privacy';

// 주소 뒤 #/... 로 화면을 고릅니다 (GitHub Pages에서 새로고침해도 깨지지 않음).
function useHashRoute(): string[] {
  const read = () =>
    window.location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  const [parts, setParts] = useState(read);
  useEffect(() => {
    const onChange = () => {
      setParts(read());
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  return parts;
}

export default function App() {
  const [page, id] = useHashRoute();

  let content;
  if (page === 'app' && id) {
    content = <AppDetailPage appId={id} />;
  } else if (page === 'privacy' && id) {
    content = <PrivacyPage appId={id} />;
  } else {
    content = <HomePage />;
  }

  return (
    <Layout
      header={
        <LayoutHeader hasDivider padding={0}>
          <TopNav
            heading={<TopNavHeading heading={BRAND.name} headingHref="#/" />}
            endContent={
              <TopNavItem
                label="앱 목록"
                href="#/"
                isSelected={page === undefined}
              />
            }
          />
        </LayoutHeader>
      }
      content={<LayoutContent padding={6}>{content}</LayoutContent>}
    />
  );
}
