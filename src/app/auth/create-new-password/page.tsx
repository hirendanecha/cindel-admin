'use client';

// import ForgetPasswordForm from './forgot-password-form';
import { siteConfig } from '@/config/site.config';
import Link from 'next/link';
import Image from 'next/image';
import { Title } from '@/components/ui/text';
import { useMedia } from '@/hooks/use-media';
import { Button } from '@/components/ui/button';
import { routes } from '@/config/routes';
import { BsArrowLeft } from 'react-icons/bs';
import CreateNewPasswordForm from './create-new-password-form';

export default function CreatePassword() {
  const isMedium = useMedia('(max-width: 1200px)', false);

  return (
    <div className="flex min-h-screen w-full flex-col justify-between">
      <header className="flex items-center justify-between p-4 lg:px-16 lg:py-6 2xl:px-24">
        <Link href={'/'}>
          <Image
            src={siteConfig.logo}
            alt={siteConfig.title}
            className="dark:invert"
            priority
          />
        </Link>
      </header>

      <div className="flex w-full flex-col justify-center px-5">
        <div className="mx-auto w-full max-w-md py-12 md:max-w-lg lg:max-w-xl 2xl:pb-8 2xl:pt-2">
          <div className="mb-3 flex flex-col">
            <Title
              as="h2"
              className="mb-1 text-[22px] font-bold text-[#333333]"
            >
              Create new password
            </Title>

            <Title
              as="h2"
              className="mb-2 text-[16px] font-normal text-[#333333]"
            >
              Set new password for your account so that you can login and access
              all the features
            </Title>
          </div>

          <CreateNewPasswordForm />

          <Link
            href={routes.auth.signIn5}
            className="font-semibold text-gray-700 transition-colors hover:text-primary"
          >
            <div className="mt-6 flex items-center text-[14px] leading-loose text-[#4B5563]">
              <BsArrowLeft className="me-2 text-[18px]" />
              Back to login
            </div>
          </Link>
        </div>
      </div>

      <div className="inline-block w-full" />
    </div>
  );
}
