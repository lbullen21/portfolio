import Image from 'next/image';

interface IconProps {
  name: string;
  className?: string;
  alt?: string;
}

export default function Icon({ name, className = "w-6 h-6", alt }: IconProps) {
  return (
    <Image
      src={`/icons/${name}.svg`}
      alt={alt || `${name} icon`}
      width={24}
      height={24}
      className={className}
    />
  );
}