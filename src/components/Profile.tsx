'use client';

import Image from 'next/image';

export default function Profile() {
  return (
    <div className="bg-gray-800 rounded-lg p-8 shadow-lg border border-purple-500/20">
      <h2 className="text-xl font-semibold mb-6 text-white bg-gradient-to-r from-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
        Profile : Title
      </h2>
      <div className="flex gap-8">
        <div className="relative w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full overflow-hidden">
          <Image
            src="/profile.jpg"
            alt="Profile"
            fill
            className="object-cover"
            sizes="(max-width: 128px) 100vw, 128px"
            priority
          />
        </div>
        <div className="flex-1">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg mb-2 text-purple-400">_I AM</h3>
              <p className="text-gray-300">이름 : 이프로</p>
              <p className="text-gray-300">포지션: PM 서비스 기획 / FE Developer(jr)</p>
            </div>
            
            <div>
              <h3 className="text-lg mb-2 text-purple-400">_Contact</h3>
              <p className="text-gray-300">Email : leepro@naver.com</p>
              <p className="text-gray-300">Phone : +082 - 1234-5678</p>
            </div>
            
            <div>
              <h3 className="text-lg mb-2 text-purple-400">_Channel</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="font-medium w-16 text-gray-300">SNS :</span>
                  <div className="flex-1 h-8 bg-gray-700/50 rounded border border-purple-500/20"></div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium w-16 text-gray-300">GitHub :</span>
                  <div className="flex-1 h-8 bg-gray-700/50 rounded border border-purple-500/20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 