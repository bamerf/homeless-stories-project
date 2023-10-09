import Link from 'next/link';
import Image from 'next/image';

import { Nav } from '@/app/components/Nav';
import { Header } from '@/app/components/Header';
import { Content } from '@/app/components/Content';
import { YoutubeIcon } from '@/app/components/icons/Youtube';
import { FacebookIcon } from '@/app/components/icons/Facebook';
import { InstagramIcon } from '@/app/components/icons/Instagram';

import image from '@/images/man-and-sun.png';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Nav />
      <Header />
      <div className="w-[960px] h-[500px] flex justify-center items-center overflow-hidden mt-16 mb-16">
        <Image alt="man under sun" src={image} width={960} height={500} />
      </div>
      <Content className="mb-24">
        <div className="flex flex-col gap-8 text-gray-500">
          <p>
            There are over half a million (nearly 600k and growing) people in
            this self proclaimed greatest country on earth, who are unable for
            whatever reasons, to live in proper homes, to enjoy the simplest of
            luxuries most of us blissfully take for granted - taking a shower,
            washing their hair, putting on clean clothes, cooking a meal, having
            a safe place to sleep and a comfortable bed to sleep in, having some
            place to get out of the heat or the cold, the rain or the snow, or
            to get medical help when they are sick or injured.
          </p>

          <p className="text-3xl font-bold text-neutral-900">
            And every one of them has a story.
          </p>

          <p>
            My goal in starting this blog is to give as many as would like to a
            safe place to tell their stories, and in so doing, to re-humanize
            the people society has dehumanized, marginalized, and demonized - as
            if they are somehow exploiting or defrauding or impoverishing our
            society, just by being alive.
          </p>

          <p>
            Most of us are so fortunate as not to be able to even imagine what
            it would be like to be homeless, much less what circumstances might
            ever lead us to such a desperate situation (although more of us are
            finding out every single day).
          </p>

          <p>
            My hope is that, by introducing you to some of the people
            experiencing homelessness in our communities, we all might gain more
            insight and compassion for these people society has failed, who have
            been victimized, traumatized, and terrorized, not only by mean
            spirited individuals, but also by local, state and federal
            governments, who often care more about fixing optics than fixing
            problems.
          </p>

          <p>
            I hope these interviews will be enlightening and thought provoking,
            and that this blog will be a place where homeless people can tell
            their stories and feel heard and understood and validated as human
            beings; and where those of us fortunate enough to live in homes will
            begin to see our homeless population through new eyes of humanity.
          </p>

          <p>
            My dad told me one time that there isn&apos;t a person alive who
            isn&apos;t good at something I&apos;m not, and doesn&apos;t know
            something I don&apos;t. That all people deserve respect. I hope he
            would be proud of me for starting this journey.
          </p>

          <p>
            I hope this project will generate enough revenue to provide
            desperately needed services to the homeless population - like shower
            buses, health and dental care, mental health services, social
            services, and nutritious meals on wheels.
          </p>

          <p>
            I hope by shining a light on this growing epidemic, we will shame
            politicians into fixing the insane, inhumane policies that lead to
            homelessness in the first place, instead of trying to bulldoze the
            glaring evidence of their own indifference and negligence.
          </p>

          <p>
            I hope you will all share these stories widely on all your social
            media outlets. I hope you will start similar projects in your own
            communities, and post pictures and stories here - or start your own
            blogs! I hope you will post ideas and suggestions for improving this
            blog, and for improving conditions for these people.
          </p>
        </div>
        <hr className="mt-12 mb-6" />
        <div className="flex justify-end gap-3">
          {/* <button className="py-[10px] px-4 border rounded-lg flex items-center">
            <span className="mr-2">
              <div className="w-5 h-5 bg-gray-300" />
            </span>
            Copy link
          </button> */}
          <Link
            href="https://www.instagram.com/homeless_stories_project/"
            referrerPolicy="no-referrer"
            target="_blank"
            className="p-[10px] border rounded-lg"
          >
            <InstagramIcon />
          </Link>
          <Link
            href="https://www.facebook.com/HomelessStoriesProject215?mibextid=LQQJ4d"
            referrerPolicy="no-referrer"
            target="_blank"
            className="p-[10px] border rounded-lg"
          >
            <FacebookIcon />
          </Link>
          <Link
            href="https://youtube.com/@HomelessStoriesProject"
            referrerPolicy="no-referrer"
            target="_blank"
            className="p-[10px] border rounded-lg"
          >
            <YoutubeIcon />
          </Link>
        </div>
      </Content>
    </main>
  );
}
