import { type FC } from 'react';
import Image from 'next/image';
import { Content } from '@/app/components/Content';

export const Header: FC = () => (
  <Content className="flex flex-col items-center gap-10 mt-24">
    <div className="flex flex-col items-center justify-center gap-6 text-center">
      <h1 className="text-5xl font-semibold text-gray-900">
        Homeless Stories Project
      </h1>
      <p className="text-xl font-light text-center text-gray-500">
        Creating awareness and empathy for the challenges of living in
        homelessness through stories told by the people experiencing it, and
        those dedicated to helping them
      </p>
    </div>

    <div className="flex gap-4">
      <Image
        alt="profile picture"
        src="https://source.unsplash.com/random/56x56"
        width={56}
        height={56}
        className="rounded-full"
      />
      <div className="flex flex-col w-max">
        <p className="text-lg">Linda Farnes</p>
        <p className="flex justify-between w-full text-base text-gray-500">
          <span>28</span>
          <span>Jul</span>
          <span>2023</span>
        </p>
      </div>
    </div>
  </Content>
);
