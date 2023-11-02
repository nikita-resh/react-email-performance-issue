import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

export const EmailVerificationEmail = () => (
  <Html>
    <Head />
    <Preview>Your login code for the app</Preview>
    <Tailwind>
      <Body>
        <Container>
          <Heading>Verify registration at app</Heading>
          <Section>
            <Button href="https://linear.app">Confirm email</Button>
          </Section>
          <Text>
            If you have not recently created an account on SOME_APP, please feel
            free to disregard this email. If you have any concerns or questions,
            don't hesitate to reach out to our support team.
          </Text>
          <Hr />
          <Link href="https://linear.app">SOME APP</Link>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default EmailVerificationEmail;
