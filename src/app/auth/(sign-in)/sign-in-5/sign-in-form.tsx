'use client';

import Link from 'next/link';
import { SubmitHandler } from 'react-hook-form';
import { Password } from '@/components/ui/password';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { useMedia } from '@/hooks/use-media';
import { Text } from '@/components/ui/text';
import { Form } from '@/components/ui/form';
import { routes } from '@/config/routes';
import { loginSchema, LoginSchema } from '@/utils/validators/login.schema';
import { Checkbox } from '@/components/ui/checkbox';

const initialValues: LoginSchema = {
  email: 'admin@admin.com',
  password: 'admin',
  rememberMe: true,
};

export default function SignInForm() {
  const isMedium = useMedia('(max-width: 1200px)', false);
  const onSubmit: SubmitHandler<LoginSchema> = (data) => {
    console.log('Sign in data ->', data);
  };

  return (
    <div className="xl:pe-12 2xl:pe-20">
      <Form<LoginSchema>
        validationSchema={loginSchema}
        onSubmit={onSubmit}
        useFormProps={{
          mode: 'onChange',
          defaultValues: initialValues,
        }}
      >
        {({ register, formState: { errors } }) => (
          <div className="space-y-5 lg:space-y-6">
            <Input
              type="email"
              size={isMedium ? 'lg' : 'xl'}
              label="Email"
              placeholder="Enter your email"
              color="info"
              className="[&>label>span]:text-[14px]"
              {...register('email')}
              error={errors.email?.message}
            />
            <Password
              label="Password"
              placeholder="Enter your password"
              size={isMedium ? 'lg' : 'xl'}
              color="info"
              className="[&>label>span]:text-[14px]"
              {...register('password')}
              error={errors.password?.message}
            />
            <div className="flex items-center justify-between">
              <Checkbox
                label="Remember me"
                size="sm"
                {...register('rememberMe')}
                className="[&>.rizzui-checkbox-container>.rizzui-checkbox-label]:ml-2 [&>.rizzui-checkbox-container>.rizzui-checkbox-label]:text-[14px] [&>.rizzui-checkbox-container]:text-[14px] [&>.rizzui-checkbox-container]:text-[#4b5563]"
              />

              <Link
                href={routes.auth.forgotPassword5}
                className="h-auto p-0 text-[14px] text-[#4B5563] transition-colors hover:no-underline"
              >
                Forget Password?
              </Link>
            </div>
            <Button
              className="w-full bg-[#344054] text-[14px]"
              type="submit"
              size={isMedium ? 'lg' : 'xl'}
            >
              Login
            </Button>
          </div>
        )}
      </Form>
      <Text className="mt-6 text-center text-[14px] leading-loose text-[#4B5563] lg:mt-9">
        Don’t have an account?{' '}
        <Link
          href={routes.auth.signUp5}
          className="font-bold text-[#4B5563] transition-colors"
        >
          Sign Up
        </Link>
      </Text>
    </div>
  );
}
