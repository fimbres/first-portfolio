import React from 'react';
import Components from './FormStyles';
import { useForm } from './useForm';

interface Form{
  name: string;
  email: string;
  message: string;
}

interface Errors{
  name?: string;
  email?: string;
  message?: string;
}

const initialForm : Form = {
  name: "",
  email: "",
  message: "",
};

const validationForm = (form : Form) => {
  let errors : Errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  if(!form.name.trim()){
    errors.name = 'Your name is required.';
  }
  else if(!regexName.test(form.name.trim())){
    errors.name = 'Your name is not valid, try again.';
  }

  if(!form.email.trim()){
    errors.email = 'Your email is required.';
  }
  else if(!regexEmail.test(form.email.trim())){
    errors.email = 'Your email is not valid, try again.';
  }

  if(!form.message.trim()){
    errors.message = 'Your message is required.';
  }
  else if(!regexComments.test(form.message.trim())){
    errors.message = 'Your message must be less than 255 characters.';
  }

  return errors;
};

export default function FormControl() {
  const {form,
    errors,
    loading,
    response,
    handleSubmit,
    handleBlur,
    handleChange} = useForm(initialForm, validationForm);

  return (
    <Components.Container onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
        <h4>Let's keep in touch!</h4>
        {loading ? <Components.Info>Please wait...</Components.Info> : <></>}
        {response && <Components.Success>{response}</Components.Success>}
        <Components.Input type="text" name="name" placeholder="Your Name" onChange={(e: React.FormEvent<HTMLInputElement>) => handleChange(e)} onBlur={(e: React.FormEvent<HTMLInputElement>) => handleBlur(e)} value={form.name} required />
        {errors.name && <Components.Errors>{errors.name}</Components.Errors>}
        <Components.Input type="text" name="email" placeholder="Your Email" onChange={(e: React.FormEvent<HTMLInputElement>) => handleChange(e)} onBlur={(e: React.FormEvent<HTMLInputElement>) => handleBlur(e)} value={form.email} required/>
        {errors.email && <Components.Errors>{errors.email}</Components.Errors>}
        <Components.Input placeholder="Let me know how can I help you..."  name="message"  onChange={(e: React.FormEvent<HTMLInputElement>) => handleChange(e)} onBlur={(e: React.FormEvent<HTMLInputElement>) => handleBlur(e)} value={form.message} required/>
        {errors.message && <Components.Errors>{errors.message}</Components.Errors>}
        <Components.Button type="submit">Send Message</Components.Button>
    </Components.Container>
  )
}
