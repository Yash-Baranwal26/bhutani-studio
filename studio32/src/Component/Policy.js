import React from "react";
import { FaInstagram } from "react-icons/fa";

export default function Policy() {
  return (
    <>
      <div className="m-8 border border-black ">
        <h3 className="text-center font-bold text-4xl pt-2 underline">
          Privacy Policy
        </h3>

        <p className="text-center p-2 ml-5 mr-5">
          At Estatex Landbase Private Limited, we prioritize the protection of
          your personal information and have created this privacy policy to
          ensure your data is safe and secure while you interact with our
          website.
        </p>

        <p className="text-center p-2 ml-5 mr-5">
          <span className="text-sl font-semibold">
            {" "}
            Updates to Privacy Policy :-{" "}
          </span>{" "}
          This privacy policy may be updated or revised periodically without
          prior notice. We encourage you to review this page regularly to stay
          informed about any changes or modifications.
        </p>

        <p className="text-center p-2 ml-5 mr-5">
          <span className="text-sl font-semibold">
            {" "}
            Collection and Use of User Information:-
          </span>{" "}
          By accessing and using our website, you agree to comply with our
          privacy policy and consent to the collection and use of the
          information you provide. While some areas of our website can be
          explored without submitting any personal details, certain sections may
          require you to share information such as your name, email address, and
          phone number. This data is essential for granting you access to
          specific content, products, or services, and for maintaining
          communication with you. Rest assured, your information is kept
          confidential and will not be shared with third parties without your
          explicit consent.
        </p>

        <p className="text-center p-2 ml-5 mr-5">
          <span className="text-sl font-semibold"> Security Measures:- </span>{" "}
          To protect your personal data, we implement advanced encryption
          protocols for all data transmissions between your device and our
          servers. Additionally, we enforce strict access controls and maintain
          high standards of confidentiality among our employees.
        </p>

        <p className="text-center p-2 ml-5 mr-5">
          <span className="text-sl font-semibold"> Use of Cookies:- </span> Our
          website may use cookies to enhance security, maintain session
          continuity, and provide a personalized browsing experience. Please
          note that rejecting cookies may limit your ability to access certain
          features or services on our site.
        </p>

        <p className="ml-5 mr-5">
          If you have any questions or suggestions regarding our privacy policy
          or how we handle your information, please feel free to contact us at
          +919990190505.
        </p>
      </div>
      <footer
        className="bg-gray-900 text-gray-400 py-10 px-5 md:px-20"
        id="footer"
      >
        <div className="flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0">
          {/* Left Section */}
          <div className="md:w-1/3">
            <img className="logo mb-4" src="images/nav-logo.png" alt="Logo" />
          </div>

          {/* Middle Section */}
          <div className="md:w-1/3 flex flex-col justify-center items-center text-center md:text-left">
            <p className="font-bold text-2xl text-white mb-2">Contact Us</p>
            <p className="text-4xl font-bold">9990190505</p>
          </div>

          {/* Right Section */}
          <div className="md:w-1/3 flex flex-col items-center md:items-end text-center">
            <p className="text-white mb-2 font-bold text-2xl flex justify-center w-full">
              Follow Us On
            </p>
            <a
              href="https://www.instagram.com/estatexlandbase?igshid=Zm53ejUyZjZ1c3N6"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
              className="flex justify-center w-full"
            >
              <FaInstagram className="text-2xl hover:text-pink-400 transition-colors cursor-pointer text-white" />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className=" border-t border-gray-700 pt-6 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>
            Estatex Landabse Pvt. Ltd. (Marketed By - Authorised Channel
            Partner) | Project Registration No :- DLRERA2024P0003 | Agency RERA
            NO:RC/HARERA/GGM/2203/1798/2023/216 Disclaimer : This is not the
            official website of developer & property, it belongs to authorised
            channel partner for information purpose only. All rights for logo &
            images are reserved to developer. Thank you for visiting our
            website. This disclaimer ("Disclaimer") is applicable to this
            website and all microsites and websites owned by us. By using or
            accessing this website you agree with the Disclaimer without any
            qualification or limitation.
          </p>
        </div>
        <p className="text-center">
          Disclaimer -{" "}
          {/* <Link to="/policy" className="text-gray-400 hover:text-gray-500"> */}
            Privacy Policy
          {/* </Link> */}
        </p>
      </footer>
    </>
  );
}
