import Input from "./Input";
import BackOne from "./backOne";
import { AuthContainer, Form, LinkTo, SubmitButton } from "./style";

export default function Login() {
  return (
    <AuthContainer>
      <h1>WELCOME BACK!</h1>
      <Form>
        <Input text={"EMAIL"} type={"email"} />
        <Input text={"PASSWORD"} type={"password"} />
      </Form>
      <SubmitButton type="submit">LOGIN</SubmitButton>
      <LinkTo href="/auth/sign/up">
        NEW HERE? <span>SIGN UP!</span>
      </LinkTo>
      <BackOne />
    </AuthContainer>
  );
}
