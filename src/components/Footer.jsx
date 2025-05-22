import React, { useEffect, useState } from 'react';
import { footerList } from '../data/data';
import { Send, ArrowUp } from 'lucide-react';

const Footer = () => {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="py-16 bg-neutral-800">
        <div className="container">
          {/* footer top */}
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-[1fr_0.7fr_0.7fr_0.7fr]">
            {/* footer brand */}
            <div>
              <div>
                <img src="/images/footer-logo.png" alt="footer logo" />
              </div>
              <p className="mt-3 text-white">
                Simple, secure, and smart payments <br /> built for everyday use.
              </p>
            </div>

            {/* footer list */}
            {footerList.map((list) => (
              <div className="" key={list.id}>
                <p className="text-white text-xl font-semibold mb-3">{list.title}</p>
                <ul className="grid gap-3">
                  {list.links.map((link, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-neutral-300 hover:text-neutral-50 transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Newsletter input */}
            <div>
              <h4 className="text-xl text-white font-semibold">Newsletter Signup</h4>
              <p className="mt-3 mb-5 text-white">
                Stay updated with the latest <br /> features and offers.
              </p>

              <div className="bg-white relative rounded-full max-w-[300px]">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full h-full py-4 indent-5 rounded-full"
                  required
                />
                <button
                  type="submit"
                  className="absolute top-1/2 right-2 -translate-y-1/2 bg-purple-400 h-[80%] w-18 flex items-center text-white justify-center rounded-full hover:bg-purple-700 transition-colors"
                >
                  <Send size={24} />
                </button>
              </div>
            </div>
          </div>

          {/* footer bottom */}
          <p className="mt-16 text-center text-white">
            &copy; {new Date().getFullYear()} Monexa All rights reserved.
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-[70px] right-[30px] bg-[#b179fe] text-white w-[46px] h-[46px] text-[22px] rounded-full z-[999] transition-all duration-500 hover:scale-110 flex items-center justify-center"
          aria-label="Go to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </> 
  );
};

export default Footer;
