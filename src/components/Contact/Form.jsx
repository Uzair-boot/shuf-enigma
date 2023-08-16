import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { SubmitButton, TextFields, TextareaAutosizes } from "./ContactStyle";
import swal from "sweetalert";


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
        
          <TextFields
            type="text"
            placeholder="Your Name"
            {...register("name")}
            fullWidth
            required
          />
        

        
          <TextFields
            type="email"
            placeholder="Your Email"
            {...register("email")}
            fullWidth
            required
          />
        

        
          <TextFields
            type="text"
            placeholder="Which Service Are You Interested In?"
            {...register("subject")}
            fullWidth
            required
          />
        

        
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
        

        
          <SubmitButton type="submit">Send</SubmitButton>
        
      </form>
    </>
  );
}
