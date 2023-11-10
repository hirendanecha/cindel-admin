import AuthWrapperFive from '@/app/shared/auth-layout/auth-wrapper-five';
import SignInForm from './sign-in-form';
import Image from 'next/image';
import WaveShape from '@/components/shape/wave';
import { metaObject } from '@/config/site.config';
import homeFront from '@public/home-front.png';
import { Title } from '@/components/ui/text';

export const metadata = {
  ...metaObject('Sign In 5'),
};

export default function SignInPage() {
  return (
    <AuthWrapperFive
      title={
        <div className="mb-0 flex flex-col max-lg:mb-3">
          <Title as="h2" className="mb-1 text-[22px] font-bold text-[#333333]">
            Welcome back, Hills
          </Title>

          <Title as="h2" className="mb-2 text-[22px] font-bold text-[#333333]">
            Please login to continue using the app
          </Title>
        </div>
      }
      pageImage={
        <div className="relative h-full w-full">
          <Image
            src={homeFront}
            alt="homeFront"
            fill
            priority
            className="h-full w-full object-cover"
          />
        </div>
      }
      isSocialLoginActive
    >
      <SignInForm />
    </AuthWrapperFive>
  );
}
