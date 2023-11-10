'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Title } from '@/components/ui/text';
import cn from '@/utils/class-names';
import {
  PiAppleLogoBold,
  PiArrowLeftBold,
  PiFacebookLogoBold,
  PiGithubLogoBold,
  PiLinkedinLogoBold,
} from 'react-icons/pi';
import { FcGoogle } from 'react-icons/fc';
import TreeShape from '@/components/shape/tree';
import { siteConfig } from '@/config/site.config';

const socialShare = [
  {
    title: 'Apple',
    icon: <PiAppleLogoBold className="h-auto w-3.5 text-gray-900" />,
  },
  {
    title: 'Google',
    icon: <FcGoogle className="h-auto w-3.5" />,
  },
  {
    title: 'Facebook',
    icon: <PiFacebookLogoBold className="h-auto w-3.5 text-[#1877F2]" />,
  },
  {
    title: 'GitHub',
    icon: <PiGithubLogoBold className="h-auto w-3.5 text-gray-900" />,
  },
  {
    title: 'LinkedIn',
    icon: <PiLinkedinLogoBold className="h-auto w-3.5 text-[#0A66C2]" />,
  },
];

export default function AuthWrapperFive({
  children,
  title,
  pageImage,
  isSocialLoginActive = false,
  wrapperClassName = '',
  formClassName = '',
  backHomeClassName = '',
}: {
  children: React.ReactNode;
  title: React.ReactNode;
  pageImage?: React.ReactNode;
  isSocialLoginActive?: boolean;
  wrapperClassName?: string;
  formClassName?: string;
  backHomeClassName?: string;
}) {
  return (
    <>
      <div className="inline-block min-h-screen w-full max-lg:p-4">
        <div className="grid h-screen w-full grid-cols-2 max-lg:grid-cols-1">
          <div className="flex h-full w-full justify-center px-4 max-lg:px-0">
            <div
              className={cn(
                'w-full max-w-sm sm:max-w-xl xl:shrink-0 2xl:w-[656px] 2xl:max-w-none',
                formClassName
              )}
            >
              <div className="mb-3 mt-20 px-4 text-center lg:px-0 lg:text-start">
                <Link
                  href={'/'}
                  className="mb-6 inline-block max-w-[168px] xl:mb-8"
                >
                  <Image src={siteConfig.logo} alt={siteConfig.title} />
                </Link>
              </div>

              <div
                className="flex flex-col justify-center"
                style={{ height: 'calc(100% - 200px)' }}
              >
                <Title
                  as="h2"
                  className="mb-1 text-[26px] leading-normal @container md:text-3xl md:!leading-normal lg:pe-8 lg:text-3xl xl:pe-16 xl:text-[32px] 2xl:pe-0 2xl:text-4xl"
                >
                  {title}
                </Title>

                {children}
              </div>
            </div>
          </div>

          <div className="hidden h-full w-full lg:inline-block 2xl:inline-block">
            <div className="h-full w-full text-center">{pageImage}</div>
          </div>
        </div>
      </div>
    </>
  );
}
