import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { SubmitButton, TextFields, TextareaAutosizes } from "./ContactStyle";
import swal from "sweetalert";
import Fade from "react-reveal/Fade";

export default function Form() {
  const { register, handleSubmit } = useForm();

  const onSubmission = (data) => {
    axios.post("http://localhost:3000/contact/post-contact-query", data);

    swal({
      title: "Request Submitted",
      text: "We'll get back to you soon.",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmission)}>
        <Fade left>
          <TextFields
            type="text"
            placeholder="Your Name"
            {...register("name")}
            fullWidth
            required
          />
        </Fade>

        <Fade right>
          <TextFields
            type="email"
            placeholder="Your Email"
            {...register("email")}
            fullWidth
            required
          />
        </Fade>

        <Fade left>
          <TextFields
            type="text"
            placeholder="Which Service Are You Interested In?"
            {...register("subject")}
            fullWidth
            required
          />
        </Fade>

        <Fade right>
          <TextareaAutosizes
            minRows={10}
            {...register("message")}
            placeholder="Tell us a bit more about your project idea..."
            style={{
              maxWidth: "100%",
              width: "99%",
              border: "1px solid #C4C4C4",
              borderRadius: "3px",
            }}
          />
        </Fade>

        <Fade left>
          <SubmitButton type="submit">Send</SubmitButton>
        </Fade>
      </form>
    </>
  );
}
