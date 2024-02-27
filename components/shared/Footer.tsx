import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <div className="flex items-center">
            <Image
              src="/assets/images/logo.webp"
              alt="logo"
              width={64}
              height={64}
            />
            <div className="ml-2 items-start flex flex-col">
              <p className="text-2xl font-bold">Caymac</p>
              <span className="block font-bold mt-[-5px]">Events</span>
            </div>
          </div>
        </Link>
        <p>2024 Caymac Events. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
