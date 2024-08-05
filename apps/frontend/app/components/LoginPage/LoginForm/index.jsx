import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import * as Form from "@radix-ui/react-form";
import axios from "axios";
import { Button } from "@radix-ui/themes";
import { toast } from "react-toastify";

const LoginForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sourcePage = searchParams.get("source");

  const [submitting, setSubmitting] = useState(false);
  const handleLogin = (data) => {
    setSubmitting(true);

    axios
      .post("http://localhost:8000/auth/login/", data)
      .then(function (response) {
        if (response.status == 200) {
          const { access_token, user } = response.data;

          localStorage.setItem("access_token", access_token);
          localStorage.setItem("user", JSON.stringify(user));

          toast.success("Logged in Successfully!");

          router.push(sourcePage ? `/${sourcePage}` : "/");
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
        handleLogin(data);
      }}
    >
      <p className="Text font-semibold text-center pt-2 pb-6">
        Enter Account Details
      </p>

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
          {!submitting ? "Login" : "Loggin In.."}
        </Button>
      </Form.Submit>
    </Form.Root>
  );
};

export default LoginForm;
