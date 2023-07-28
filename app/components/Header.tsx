import { type FC } from 'react';
import Image from 'next/image';

export const Header: FC = () => (
  <>
    <h1>Homeless Stories Project</h1>
    <p>
      Creating awareness and empathy for the challenges of living in
      homelessness through stories told by the people experiencing it, and those
      dedicated to helping them
    </p>
    <div>
      <Image
        alt="profile picture"
        src="https://source.unsplash.com/random/56x56"
        width={56}
        height={56}
        className="rounded-full"
      />
      <div>
        <p>Linda Farnes</p>
        <p>28 Jul 2023</p>
      </div>
    </div>
  </>
);
