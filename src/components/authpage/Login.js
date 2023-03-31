import Places from "../searches/locationSearch";
import Input from "./Input";
import { AuthContainer, Form, LinkTo, SubmitButton } from "./style";

export default function Login() {
  return (
    <AuthContainer>
      <Form>
        <Input text={"EMAIL"} type={"email"} />
        <Input text={"PASSWORD"} type={"password"} />
      </Form>
      <SubmitButton type="submit">LOGIN</SubmitButton>
      <LinkTo href="/auth/sign/up">
        NEW HERE? <span>SIGN UP!</span>
      </LinkTo>
    </AuthContainer>
  );
}
