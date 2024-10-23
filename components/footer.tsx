import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Instagram, Linkedin, Rss, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">CINNAMON</h2>
            <p className="text-xl font-semibold mb-6">All software, zero bullshit.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Zagreb</h3>
            <p>Slavonska avenija 6,</p>
            <p>10000, Zagreb, Croatia</p>
            <p>+385 95 382 9188</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">New York</h3>
            <p>500 7th Ave, New York,</p>
            <p>NY 10018, United States</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Belgrade</h3>
            <p>Požeška 58</p>
            <p>11000, Belgrade, Serbia</p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="font-semibold">Our newsletter</h3>
            <div className="flex gap-2">
              <Input type="email" placeholder="Your E-mail" />
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                Subscribe
              </Button>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="text-sm">
              © 2024 Cinnamon{' '}
              <Link href="/privacy" className="hover:text-primary">
                Privacy Policy
              </Link>
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-primary">
                <Rss className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;