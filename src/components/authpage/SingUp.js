import Input from "./Input";
import BackOne from "./backOne";
import { AuthContainer, Form, LinkTo, SubmitButton } from "./style";

export default function SingUp() {
    return (
        <AuthContainer>
          <h1>JOIN US!</h1>
          <Form>
            <Input text={"EMAIL"} type={"email"} />
            <Input text={"PASSWORD"} type={"password"} />
            <Input text={"CONFIRM PASSWORD"} type={"password"} />
            <Input text={"ADDRESS"} type="location" />
            <Input text={"NAME"} type={"text"} />
            <Input text={"BUSINESS NAME"} type={"text"} />
          </Form>
          <SubmitButton type="submit">SIGN UP</SubmitButton>
          <LinkTo href="/auth/sign/in">
            ALREADY HAVE AN ACCOUNT? <span>LOG IN!</span>
          </LinkTo>
          <BackOne />
        </AuthContainer>
      );
};
