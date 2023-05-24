import { ASSET_ROUTES } from '@/constants/asset-routes.constant';
import Image from 'next/image';
import MainCta from './components/main-cta.component';

export default function Main() {
  return (
    <div>
      <Image
        src={ASSET_ROUTES.PNG.NBM_HERO}
        width={0}
        height={0}
        sizes='100vw'
        style={{ width: '100%', height: 'auto' }}
      />
      <MainCta></MainCta>
    </div>
  );
}
