import Image from 'next/image';
import ForgetPasswordForm from './forgot-password-form';
import AuthWrapperFive from '@/app/shared/auth-layout/auth-wrapper-five';
import WaveShape from '@/components/shape/wave';
import { Title } from '@/components/ui/text';
import homeFront from '@public/home-front.png';

export default function ForgotPassword() {
  return (
    <AuthWrapperFive
      title={
        <div className="mb-1 flex flex-col">
          <Title as="h2" className="mb-1 text-[22px] font-bold text-[#333333]">
            Forgot password?
          </Title>

          <Title
            as="h2"
            className="mb-2 text-[16px] font-normal text-[#333333]"
          >
            To reset your password, please enter your registered email id. We
            will send you the password reset link
          </Title>
        </div>
      }
      pageImage={
        <div className="relative h-full w-full">
          <Image
            src={homeFront}
            alt="Sign Up Thumbnail"
            fill
            priority
            // sizes="(max-width: 768px) 100vw"
            sizes="100vw"
            className="h-full object-cover"
          />
        </div>
      }
    >
      <ForgetPasswordForm />
    </AuthWrapperFive>
  );
}
