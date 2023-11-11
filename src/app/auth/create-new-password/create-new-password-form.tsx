import React, { useState } from 'react';

import Link from 'next/link';
import toast from 'react-hot-toast';
import { SubmitHandler } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useMedia } from '@/hooks/use-media';
import { Form } from '@/components/ui/form';
import { Text } from '@/components/ui/text';
import { routes } from '@/config/routes';
import { BsArrowLeft } from 'react-icons/bs';
import { Password } from '@/components/ui/password';
// import {
//   forgetPasswordSchema,
//   ForgetPasswordSchema,
// } from '@/utils/validators/forget-password.schema';

const initialValues = {
  password: '',
  conformPassword: '',
};

const CreateNewPasswordForm = () => {
  const [reset, setReset] = useState({});
  const isMedium = useMedia('(max-width: 1200px)', false);

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log('Forgot password form data->', data);
    //   toast.success(
    //     <Text>
    //       Reset link sent to this email:{' '}
    //       <Text as="b" className="font-semibold">
    //         {data.email}
    //       </Text>
    //     </Text>
    //   );
    setReset(initialValues);
  };

  return (
    <div className="xl:pe-12 2xl:pe-20">
      <Form<any>
        // validationSchema={forgetPasswordSchema}
        resetValues={reset}
        onSubmit={onSubmit}
        useFormProps={{
          defaultValues: initialValues,
        }}
      >
        {({ register, formState: { errors } }) => (
          <div className="space-y-5 lg:space-y-6">
            <Password
              label="New password"
              placeholder="Enter your new password"
              size={isMedium ? 'lg' : 'xl'}
              color="info"
              className="[&>label>span]:text-[14px]"
              {...register('password')}
              //   error={errors.password?.message}
            />

            <Password
              label="Confirm new password"
              placeholder="Enter new confirm password"
              size={isMedium ? 'lg' : 'xl'}
              color="info"
              className="[&>label>span]:text-[14px]"
              {...register('conformPassword')}
              //   error={errors.password?.message}
            />

            <Button
              className="w-full bg-[#344054] text-[14px]"
              type="submit"
              size={isMedium ? 'lg' : 'xl'}
            >
              Set new password
            </Button>
          </div>
        )}
      </Form>
    </div>
  );
};

export default CreateNewPasswordForm;
