import Image from 'next/image';

export default function Submissions() {
  return (
    <div className="h-screen w-full flex items-center justify-center overflow-hidden bg-lightgreen-site">
      <Image
        src="/images/submissions/closed.png"
        alt="Submissions Closed Notice"
        width={800}
        height={800}
        className="object-contain"
      />
    </div>
  );
}
