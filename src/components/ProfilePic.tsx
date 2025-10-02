import Image from 'next/image';

export default function ProfilePic() {
  return (
    <div className="flex justify-center lg:justify-center">
      <div className="relative">
        <div className="text-center">
          {/* Gradient border circle around image */}
          <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4 p-2">
            <div className="w-full h-full overflow-hidden rounded-full relative">
              <Image
                src="/profile.jpeg"
                alt="Lauren Peña"
                fill
                className="object-cover"
                sizes="320px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}