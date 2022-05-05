import React, { useState } from 'react'
import chart from "../../assets/chart2.png";
import list from "../../assets/list.png";
import { Button, Heading, VStack, Textarea, Input } from "@chakra-ui/react";
import { Formik } from "formik";
import * as Yup from "yup";
import InputField from "../InputField";
import axios from "../../api/axios";
import { useAuth } from '../../auth-context';

export default function Claims({ setSuccessMsg, setErrorMsg }) {
  const [formSwitch, setFormSwitch] = useState({page1: true, page2: false});
  const {token} = useAuth();
  
  const CLAIM_URL = "/claim";
  return (
    <div className="container md:flex px-5 pt-3 mb-10">
      <div className= "md:w-3/6 mr-[2rem]">
      <div className="bg-white shadow-lg p-6 border-2 border-gray">
        <div className='mb-5'>
          <h1 className="font-medium">Claims Overview</h1>
        </div>
      <div className="">
      <img src={ chart } alt='chart' />
      </div>
      <div className="mt-3">
      <img src={ list } alt='list' />
      </div>
      </div>
      </div>

      <div className=" md:w-3/6 flex justify-center" >
      <div className="bg-white shadow-lg p-6 border-2 border-gray w-full max-w-[450px]">
        <Formik
      initialValues={{
        previousPosition: "",
        companyName: "",
        companyEmail: "",
        incidentDate: "",
        incidentDescription: "",
        witnessName: "",
        witnessPhone: "",
        witnessEmail: "",
      }}
      validationSchema={Yup.object({
        previousPosition: Yup.string()
          .required("This field is required"),
        companyName: Yup.string()
          .required("This field is required"),
        companyEmail: Yup.string()
          .required("This field is required")
          .email("Invalid email"),
        incidentDate: Yup.string()
          .required("This field is required"),
        incidentDescription: Yup.string()
          .required("This field is required"),
        witnessName: Yup.string()
          .required("This field is required"),
        witnessPhone: Yup.number()
          .required("This field is required")
          .min(8, "Number is too short")
          .typeError("Please enter a valid phone number"),
        witnessEmail: Yup.string()
          .required("This field is required")
          .email("Invalid email"),
      })}
      onSubmit={async (values, actions) => {
      
        const data = {
          ...values
        }
        try {
          const response = await axios.post(CLAIM_URL, data, {
            headers: { "Content-Type": "application/json",
          "auth-token": token, },
          });
          console.log(response.data)
          setSuccessMsg(
            "Claim submitted successfully!"
          );
          setTimeout(() => {
            setSuccessMsg("");
          }, 7000);

        } catch (error) {
          if (error.response) {
            setErrorMsg(error.response.data);
            setTimeout(() => {
              setErrorMsg("");
            }, 7000);
          }
        }

        actions.resetForm();
      }}
    >
      {(formik) => (
        <VStack
          as="form"
          justifyContent="center"
          onSubmit={formik.handleSubmit}
        >
          <Heading color="brand.300" mb="10px" as="h3" size="md" >
            Evidence Form
          </Heading>

        {(formSwitch.page1 === true && formSwitch.page2 === false) && (
          <div className='w-full mt-5'>

          <Heading mb="30px" color="brand.300" as="h4" size="sm">
            Claim Details
          </Heading>

          <InputField
          fieldType={Input}
            label="Position previously occupied"
            name="previousPosition"
            type="text"
            placeholder="Position"
          />

          <InputField
          fieldType={Input}
            label="When did the incident occur?"
            name="incidentDate"
            type="text"
            placeholder="dd/mm/yyyy"
          />

          <InputField
          fieldType={Textarea}
            label="Describe what happened?"
            name="incidentDescription"
            type="text"
            placeholder="Detailed description"
          />
                

          <div className="pt-5 w-full flex justify-center" >
            <div className="w-[80%] py-2 rounded flex items-center justify-center text-white bg-cactus-brown mr-[10px] text-base text-bold cursor-pointer"
            
            onClick={()=>{setFormSwitch({page1: false, page2: true})}}
          >
            Next
          </div>
          </div>
        </div>

        )}

        {(formSwitch.page1 === false && formSwitch.page2 === true) && (
          <div className='w-full mt-5'>
          <Heading pb="30px" color="brand.300" as="h4" size="sm">
            Other Parties
          </Heading>

          <InputField fieldType={Input} label="Witness's Full Name" name="witnessName" placeholder="enter name" />

          <InputField
          fieldType={Input}
            label="Witness Phone Number"
            name="witnessPhone"
            type="tel"
            placeholder="Witness phone number"
          />

          <InputField
          fieldType={Input}
            label="Witness Email"
            name="witnessEmail"
            type="email"
            placeholder="Witness email"
          />

          <InputField
          fieldType={Input}
            label="Company Name"
            name="companyName"
            type="text"
            placeholder="Company Name"
          />

          <InputField
          fieldType={Input}
            label="Company Email"
            name="companyEmail"
            type="email"
            placeholder="Company email"
          />
                

          <div className="pt-5 w-full flex">
            <div className="w-[20%] py-2 rounded flex items-center justify-center text-white bg-cactus-brown mr-[10px] text-base text-bold cursor-pointer"
            
            onClick={()=>{setFormSwitch({page1: true, page2: false})}}
          >
            Back
          </div>
          
          <Button
            width="80%"
            type="submit"
             _hover={{ bg: 'brand.100', color: '#ffffff' }}
            variant="solid"
            color="brand.100"
            bg="#ffffff"
            border='2px'
            borderColor="brand.100"
          >
            Make Claim
          </Button>
         
          </div>
        </div>

        )}

                  
        </VStack>
      )}
    </Formik>

      </div>
      </div>
    </div>
  )
}
