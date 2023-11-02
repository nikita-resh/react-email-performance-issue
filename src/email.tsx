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
        <Container className="mx-auto py-5 pt-20 pb-48 max-w-screen-xs">
          <Heading className="text-2xl leading-5 font-normal text-gray-800 pt-4">
            Verify registration at app
          </Heading>
          <Section>
            <Button href="https://linear.app">Confirm email</Button>
          </Section>
          <Text className="mb-4 text-base leading-5 text-gray-700">
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
