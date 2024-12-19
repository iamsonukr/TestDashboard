const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto px-4 md:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="mb-6 md:mb-0">
            <h5 className="text-lg font-semibold text-white mb-4">
              Customer Service
            </h5>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-gray-400 transition duration-200"
                >
                  Terms & Condition
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-400 transition duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-400 transition duration-200"
                >
                  Refund Policy
                </a>
              </li>
              <li>
                <a
                  href="/#faq"
                  className="hover:text-gray-400 transition duration-200"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <h5 className="text-lg font-semibold text-white mb-4">Follow Us</h5>
            <div className="flex space-x-6">
              <a
                href="#"
                className="hover:text-gray-400 transition duration-200"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a
                href="#"
                className="hover:text-gray-400 transition duration-200"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a
                href="#"
                className="hover:text-gray-400 transition duration-200"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm">
          <p>Copyright © 2024 Go Rapid Food - All Rights Reserved.</p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
