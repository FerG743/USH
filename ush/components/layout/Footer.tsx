import React from 'react';
import { Separator } from '@/components/ui/separator';

export const Footer = () => {
  const footerLinks = {
    services: ["Wealth Management", "Asset Protection", "Private Banking", "Estate Planning"],
    company: ["About", "Team", "Careers", "Contact"],
    legal: ["Privacy Policy", "Terms of Service", "Disclosures", "Regulatory Information"]
  };

  const socialLinks = ["LinkedIn", "Twitter", "Instagram"];

  return (
    <footer className="py-12 border-t border-zinc-800 mt-auto">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="text-2xl font-bold tracking-tighter mb-6">HUSH</div>
            <p className="text-zinc-400 text-sm">
              Discrete wealth management solutions for discerning clients since 2004.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">Services</h3>
            <ul className="space-y-3 text-zinc-400 text-sm">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">Company</h3>
            <ul className="space-y-3 text-zinc-400 text-sm">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">Legal</h3>
            <ul className="space-y-3 text-zinc-400 text-sm">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Separator className="bg-zinc-800 mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center text-zinc-400 text-sm">
          <p>© 2025 Hush Financial Services. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {socialLinks.map((link, index) => (
              <a key={index} href="#" className="hover:text-white transition-colors">{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
