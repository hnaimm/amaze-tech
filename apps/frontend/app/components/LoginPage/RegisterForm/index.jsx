"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import * as Form from "@radix-ui/react-form";
import axios from "axios";
import { Button } from "@radix-ui/themes";
import { toast } from "react-toastify";

const RegisterForm = () => {
  const router = useRouter();

  const [submitting, setSubmitting] = useState(false);
  const handleRegister = (data) => {
    setSubmitting(true);

    axios
      .post("http://localhost:8000/auth/register/", data)
      .then(function (response) {
        if (response.status == 200) {
          toast.success("Account Created Successfully!");

          router.push(`/verify`);
        }
      })
      .catch(function (error) {
        if (error?.response?.data?.message?.length > 0) {
          error?.response?.data?.message.forEach((message) => {
            toast.error(message);
          });
        }
      })
      .finally(function () {
        setSubmitting(false);
      });
  };

  return (
    <Form.Root
      className="FormRoot"
      onSubmit={(event) => {
        if (submitting) return;
        // prevent default form submission
        event.preventDefault();

        const data = Object.fromEntries(new FormData(event.currentTarget));
        handleRegister(data);
      }}
    >
      <p className="Text font-semibold text-center">Personal Information</p>

      <Form.Field className="FormField" name="firstName">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <Form.Label className="Label">First Name</Form.Label>
          <Form.Message className="FormMessage" match="valueMissing">
            This field is required
          </Form.Message>
          <Form.Message className="FormMessage" match="typeMismatch">
            Please provide a text
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input className="Input" type="text" required />
        </Form.Control>
      </Form.Field>

      <Form.Field className="FormField" name="lastName">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <Form.Label className="Label">Last Name</Form.Label>
          <Form.Message className="FormMessage" match="valueMissing">
            This field is required
          </Form.Message>
          <Form.Message className="FormMessage" match="typeMismatch">
            Please provide a text
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input className="Input" type="text" required />
        </Form.Control>
      </Form.Field>

      <Form.Field className="FormField" name="phoneNumber">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <Form.Label className="Label">Phone Number</Form.Label>
          <Form.Message className="FormMessage" match="valueMissing">
            This field is required
          </Form.Message>
          <Form.Message className="FormMessage" match="typeMismatch">
            Please provide a text
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input className="Input" type="text" required />
        </Form.Control>
      </Form.Field>

      <p className="Text font-semibold text-center pt-10">Account Details</p>

      <Form.Field className="FormField" name="username">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <Form.Label className="Label">Username</Form.Label>
          <Form.Message className="FormMessage" match="valueMissing">
            This field is required
          </Form.Message>
          <Form.Message className="FormMessage" match="typeMismatch">
            Please provide a text
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input className="Input" type="text" required />
        </Form.Control>
      </Form.Field>

      <Form.Field className="FormField" name="email">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <Form.Label className="Label">Email</Form.Label>
          <Form.Message className="FormMessage" match="valueMissing">
            This field is required
          </Form.Message>
          <Form.Message className="FormMessage" match="typeMismatch">
            Please provide a valid email
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input className="Input" type="email" required />
        </Form.Control>
      </Form.Field>

      <Form.Field className="FormField" name="password">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <Form.Label className="Label">Password</Form.Label>
          <Form.Message className="FormMessage" match="valueMissing">
            This field is required
          </Form.Message>
          <Form.Message className="FormMessage" match="typeMismatch">
            Please provide a valid password
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input className="Input" type="password" required />
        </Form.Control>
      </Form.Field>

      <Form.Submit asChild>
        <Button className="SubmitButton green" disabled={submitting}>
          {!submitting ? "Register" : "Registering.."}
        </Button>
      </Form.Submit>
    </Form.Root>
  );
};

export default RegisterForm;
