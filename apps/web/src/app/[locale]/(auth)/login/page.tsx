'use client';

import Link from 'next/link';

import Form from '@/components/Form';
import { LogoIcon } from '@/components/IconSvg';
import Text from '@/components/Text';
import { cn } from '@/utils';

export default function Login() {
  return (
    <div className="flex flex-col items-center">
      <header
        className={cn('w-11/12   max-w-3xl  mx-auto mt-10 flex justify-between items-center')}
      >
        <div className={cn('flex flex-row items-center gap-4')}>
          <LogoIcon />
          <Text variant="h4">Socialize</Text>
        </div>
        <div className={cn('flex flex-row items-center gap-4')}>
          <Text variant="body_md__r">have an account?</Text>
          <Link href={'/sign'}>
            <Text variant="body_md__r" className="text-darkgreen">
              Sign in!
            </Text>
          </Link>
        </div>
      </header>
      <section className="max-w-3xl flex flex-col justify-between ">
        <div className="flex flex-col items-center">
          <Text variant="h3">Create Your Account</Text>
          <Text variant="body_s__r" className="font-medium">
            Sign up into your account
          </Text>
        </div>
        <div className="mt-12 flex flex-row gap-8 justify-center">
          <button className=" px-6 py-4 border-2 border-solid border-primary rounded-lg">
            Google
          </button>
          <button className=" px-6 py-4 border-2 border-solid border-primary rounded-lg">
            Facebook
          </button>
        </div>
        <Text
          variant="body_md__r"
          className="mx-auto mt-12 text-center  after:contents-[''] after:absolute relative after:w-11/12 after:-left-full   after:top-1/2 after:-translate-y-1/2 after:h-1 after:bg-[#dadada] before:contents-['']  after:contents-[''] before:absolute   before:w-11/12 before:-right-full   before:top-1/2 before:-translate-y-1/2 before:h-1 before:bg-[#dadada]  	"
        >
          Or continue with
        </Text>
      </section>
      <Form type="login" />
    </div>
  );
}
