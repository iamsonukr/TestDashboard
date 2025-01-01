import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerSections = [
    // {
    //   title: "Customer Service",
    //   links: [
    //     { text: "Terms & Conditions", href: "/terms" },
    //     { text: "Privacy Policy", href: "/privacy" },
    //     { text: "Refund Policy", href: "/refund" },
    //     { text: "FAQs", href: "/faq" }
    //   ]
    // },
    // {
    //   title: "Quick Links",
    //   links: [
    //     { text: "About Us", href: "/about" },
    //     { text: "Our Services", href: "/menu" },
    //     { text: "Order Now", href: "/order" },
    //     { text: "Contact Us", href: "/contact" }
    //   ]
    // },
    {
      title: "Contact Info",
      content: (
        <div className="space-y-3">
          <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-gray-400 transition duration-200">
            <Phone size={16} />
            <span>+1 612-616-5019
            </span>
          </a>
          <a href="mailto:info@gorapid.food" className="flex items-center gap-2 hover:text-gray-400 transition duration-200">
            <Mail size={16} />
            <span>contact@yarpacom.com</span>
          </a>
          <div className="flex gap-2">
            <MapPin size={20} />
            <span>5700 Colfax Ave N
            Brooklyn Center MN, 55430</span>
          </div>
        </div>
      )
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 ">
      <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">
        <div className="flex md:flex-row items-center flex-col  gap-8">
          <div className="w-2/3">
            <img src="./logoYarpa.jpg" alt="" width={`30%`} />
          </div>
          <div className="">

          {footerSections.map((section, index) => (
            <div key={index}>
              <h2 className="text-lg font-semibold text-white mb-4">
                {section.title}
              </h2>
              {section.links ? (
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="hover:text-gray-400 transition duration-200"
                        >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                section.content
              )}
            </div>
          ))}
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-4">
              Connect With Us
            </h2>
            <div className="space-y-4">
              <p className="text-sm">
                Stay updated with our latest offers and updates!
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="hover:text-gray-400 transition duration-200"
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex items-center justify-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-center">
              Copyright © {currentYear} Yarpacom - All Rights Reserved.
            </p>
            {/* <p className="text-sm">
              Designed with ❤️ for Hygiene everywhere
            </p> */}
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;