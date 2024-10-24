import React from 'react';
import profilePicBlank from '../../imgs/profilePicBlank.webp';

const teamMembers = [
  {
    name: 'Daniel',
    role: 'Position',
    imgSrc: profilePicBlank,
  },
  {
    name: 'Soledad',
    role: 'Sales',
    imgSrc: profilePicBlank,
  },
  {
    name: 'Carlos',
    role: 'Position',
    imgSrc: profilePicBlank,
  },
  {
    name: 'Sahid',
    role: 'Position',
    imgSrc: profilePicBlank
  },
  {
    name: 'Brian',
    role: 'Sales',
    imgSrc: profilePicBlank
  },
  {
    name: 'Dennis',
    role: 'Sales',
    imgSrc: profilePicBlank
  },
  {
    name: 'Refugio',
    role: 'Sales',
    imgSrc: profilePicBlank
  },
  {
    name: 'Alfonso',
    role: 'Sales',
    imgSrc: profilePicBlank
  },
  {
    name: 'Roger',
    role: 'Sales',
    imgSrc: profilePicBlank
  }
];

export default function Team() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-black mb-12">Team</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8">
            {teamMembers.map((member, index) => (
                <div key={index} className="text-black mx-2"> 
                <img
                    src={member.imgSrc}
                    alt={member.name}
                    className="rounded-full w-48 h-48 object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}
