import React, { useState } from "react";
// import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

const Plans = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [percent, setPercent] = useState(null);
  const [premium, setPremium] = useState(null);
  const salary = 100000;

  //Function to calculate premium
  const calcPremium = (num, percent) => {
    const prem = (num / 100) * percent;
    setPremium(prem);
  };

  //Fluterwave payment configuration
  const config = {
    public_key: process.env.REACT_APP_PAYMENT_KEY,
    tx_ref: Date.now(),
    amount: premium,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    redirect_url:
      "https://tushup-cactus.herokuapp.com/handle-flutterwave-payment",
    customer: {
      email: "okwudirejoy@gmail.com",
      phonenumber: "07064586146",
      name: "Joy Okwudire",
    },
    customizations: {
      title: "Cactus Premium Payment",
      description: "Payment for Cactus Insurance premium",
      logo: "../../assets/cactuslogo.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <>
      <div className="px-10 py-10">
        <div className="max-w-7xl m-auto">
          <section id="plan" className="">
            <header className="text-center w-full flex justify-center">
              <div className="max-w-[700px]">
                <h3 className="text-5xl font-bold mb-5 text-gray-900">
                  Choose Flexible Pricing Plan For Yourself.
                </h3>
                <p className="text-xl text-gray-400 mb-2">
                  Make good deal just for you to take your experience to the
                  next level
                </p>
                <br />
                <button className="text-lg font-bold border-2 border-cactus-brown bg-cactus-brown text-white w-60 py-3 rounded-lg">
                  Monthly
                </button>
                {/* <button className="text-lg px-3 font-bold text-gray-500">
                Annual saves 30%
              </button> */}
              </div>
            </header>
            <div className="flex flex-col mt-10 mx-5 space-y-5 md:space-y-0 md:flex-row md:space-x-5 md:mx-0 justify-between">
              <div className="flex-1x hover:lg:w-custom hover:mb-10 hover:lg:px-4 hover:py-10 hover:text-center">
                <div className="bg-white p-10 rounded-lg shadow-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-2xl font-bold  text-gray-900">
                        Lite
                      </h4>
                      <br />
                      <h4 className="text-lg font-bold text-gray-900">
                        2% of monthly income
                      </h4>
                    </div>
                  </div>

                  <hr className="text-gray-100 mt-5" />
                  {/* start list section */}
                  <div className="mt-10">
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <div className="bg-[#30D158] rounded-full p-1">
                          {/* <AiOutlineCheck size="1.5em" /> */}
                          <svg
                                  className="flex-shrink-0 h-4 w-4 text-white"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  aria-hidden="true"
                                >
                                <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                        <span className="ml-3 text-base font-medium text-gray-900">
                          Get paid 40% of your salary in the event of a job loss
                        </span>
                      </li>
                      <li className="flex items-center">
                        <div className=" bg-[#c4c4c4] rounded-full p-1">
                          {/* <AiOutlineCheck size="1.5em" /> */}
                          <svg
                                  className="flex-shrink-0 h-4 w-4 text-white"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  aria-hidden="true"
                                >
                                <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                        <span className="ml-3 text-base text-gray-900">
                          View job vacancies
                        </span>
                      </li>
                      <li className="flex items-center">
                        <div className="bg-[#c4c4c4] rounded-full p-1">
                          {/* <AiOutlineCheck size="1.5em" /> */}
                          <svg
                                  className="flex-shrink-0 h-4 w-4 text-white"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  aria-hidden="true"
                                >
                                <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                        <span className="ml-3 text-base text-gray-900">
                          Hiring companies see your resume
                        </span>
                      </li>
                    </ul>
                  </div>
                  {/* end of list section */}
                  <div className="mt-10">
                    <button
                      onClick={() => {
                        onOpen();
                        setPercent(2);
                        calcPremium(salary, 2);
                      }}
                      className="text-lg font-bold bg-white border-2 border-cactus-brown text-cactus-brown hover:bg-cactus-brown hover:text-white w-60 py-3 rounded-lg"
                    >
                      Choose Plan
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex-1x hover:lg:w-custom hover:mb-10 hover:lg:px-4 hover:py-10 hover:text-center">
                <div className="bg-white p-10 rounded-lg shadow-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-2xl font-bold  text-gray-900">
                        Basic
                      </h4>
                      <br />
                      <h4 className="text-lg font-bold text-gray-900">
                        4% of monthly income
                      </h4>
                    </div>
                  </div>

                  <hr className="text-gray-100 mt-5" />
                  {/* start list section */}
                  <div className="mt-10">
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <div className="bg-[#30D158] rounded-full p-1">
                          {/* <AiOutlineCheck size="1.5em" /> */}
                          <svg
                            className="flex-shrink-0 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                           <path
                           stroke-linecap="round"
                           stroke-linejoin="round"
                           stroke-width="2"
                           d="M5 13l4 4L19 7"
                          />
                       </svg>
                        </div>
                        <span className="ml-3 text-base font-medium text-gray-900">
                          Get paid 50% of your salary in the event of a job loss
                        </span>
                      </li>
                      <li className="flex items-center">
                        <div className="bg-[#30D158] rounded-full p-1">
                          {/* <AiOutlineCheck size="1.5em" className="bg-white" /> */}
                          <svg
                            className="flex-shrink-0 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="ml-3 text-base font-medium text-gray-900">
                          View job vacancies
                        </span>
                      </li>
                      <li className="flex items-center">
                        <div className="bg-[#c4c4c4] rounded-full p-1">
                          {/* <AiOutlineClose size="1.5em" /> */}
                              <svg
                                  className="flex-shrink-0 h-4 w-4 text-white"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  aria-hidden="true"
                                >
                                <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                        <span className="ml-3 text-base text-gray-900">
                          Hiring Companies see your resume
                        </span>
                      </li>
                    </ul>
                  </div>
                  {/* end of list section */}
                  <div className="mt-10">
                    <button
                      onClick={() => {
                        onOpen();
                        setPercent(4);
                        calcPremium(salary, 4);
                      }}
                      className="text-lg font-bold bg-white border-2 border-cactus-brown text-cactus-brown hover:bg-cactus-brown hover:text-white w-60 py-3 rounded-lg"
                    >
                      Choose Plan
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex-1x hover:lg:w-custom hover:mb-10 hover:lg:px-4 hover:py-10 hover:text-center">
                <div className="bg-white p-10 rounded-lg shadow-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-2xl font-bold  text-gray-900">
                        Plus
                      </h4>
                      <br />
                      <h4 className="text-lg font-bold text-gray-900">
                        6% of monthy income
                      </h4>{" "}
                    </div>
                  </div>

                  <hr className="text-gray-100 mt-5" />
                  {/* start list section */}
                  <div className="mt-10">
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <div className="bg-[#30D158] rounded-full p-1">
                          {/* <AiOutlineCheck size="1.5em" /> */}
                          <svg
                                  className="flex-shrink-0 h-4 w-4 text-white"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  aria-hidden="true"
                                >
                                <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                        <span className="ml-3 text-base font-medium text-gray-900">
                          Get paid 65% of your salary in the event of a job loss
                        </span>
                      </li>
                      <li className="flex items-center">
                        <div className=" bg-[#30D158] rounded-full p-1">
                          {/* <AiOutlineClose size="1.5em" /> */}
                          <svg
                                  className="flex-shrink-0 h-4 w-4 text-white"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  aria-hidden="true"
                                >
                                <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                        <span className="ml-3 text-base font-medium text-gray-900">
                          View job vacancies
                        </span>
                      </li>
                      <li className="flex items-center">
                        <div className="bg-[#30D158] rounded-full p-1">
                          {/* <AiOutlineClose size="1.5em" /> */}
                          <svg
                                  className="flex-shrink-0 h-4 w-4 text-white"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  aria-hidden="true"
                                >
                                <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                        <span className="ml-3 text-base font-medium text-gray-900">
                          Hiring Companies see your resume
                        </span>
                      </li>
                    </ul>
                  </div>
                  {/* end of list section */}
                  <div className="mt-10">
                    <button
                      onClick={() => {
                        onOpen();
                        setPercent(6);
                        calcPremium(salary, 6);
                      }}
                      className="text-lg font-bold bg-white border-2 border-cactus-brown text-cactus-brown hover:bg-cactus-brown hover:text-white w-60 py-3 rounded-lg"
                    >
                      Choose Plan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <h3>
              <span>{percent}</span>
              <span>%</span>
            </h3>
            <h3>
              Salary: <span>{salary}</span>
            </h3>
            <h3>
              Premium: <span>{premium}</span>
            </h3>
          </ModalBody>

          <div className="w-full flex justify-center items-center my-5">
            <Button
              onClick={() => {
                handleFlutterPayment({
                  callback: (response) => {
                    console.log(response);
                    closePaymentModal(); // this will close the modal programmatically
                  },
                  onClose: () => {},
                });
              }}
              type="submit"
              variant="solid"
              color="#ffffff"
              bg="brand.100"
              _hover={{ bg: "brand.300" }}
              mr={3}
            >
              Proceed to pay
            </Button>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Plans;
