import React from 'react';
import Image from 'next/image';

interface Socials {
  twitter?: string;
  instagram?: string;
  [key: string]: string | undefined;
}

interface Props {
  name: string;
  nickname?: string;
  image?: string;
  bio?: string;
  socials?: Socials;
}

export default function WrestlerCard({ name, nickname, image, bio, socials }: Props) {
  const imgSrc = image || '/placeholder-wrestler.jpg';

  return (
    <article className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl overflow-hidden shadow-lg" aria-label={`${name} card`}>
      <div className="h-56 w-full relative bg-gray-700">
        <Image src={imgSrc} alt={`${name} photo`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
      </div>

      <div className="p-4">
        <h3 className="text-xl font-extrabold text-red-500">{name}</h3>
        {nickname && <p className="text-sm italic text-gray-400">{nickname}</p>}
        {bio && <p className="mt-2 text-gray-300 text-sm">{bio}</p>}

        {socials && (
          <div className="mt-4 flex space-x-3">
            {socials.twitter && (
              <a href={socials.twitter} target="_blank" rel="noreferrer" className="text-blue-400 text-sm hover:underline">
                Twitter
              </a>
            )}
            {socials.instagram && (
              <a href={socials.instagram} target="_blank" rel="noreferrer" className="text-pink-400 text-sm hover:underline">
                Instagram
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
