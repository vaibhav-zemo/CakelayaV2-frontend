import React from "react";
import {
  Heading,
  Text,
  VStack,
  Box,
  UnorderedList,
  ListItem,
  Highlight,
  Link,
} from "@chakra-ui/react";

const PrivacyPolicy = () => {
  return (
    <VStack px={10} gap={10} mt={8} mb={16}>
      <Heading fontSize={"5xl"} textAlign={"center"}>
        Privacy Policy
      </Heading>
      <VStack gap={4} alignItems={"start"}>
        <Box>
          <Highlight query={"Note"} styles={{ fontWeight: "700" }}>
            Note: Our Privacy Policy is subject to change at any time without
            notice. To make sure you are aware of any changes, please review
            this Privacy Policy Page periodically. By visiting this website you
            agree to be bound by the terms and conditions of this Privacy
            Policy. If you do not agree please do not use or access our Website.
            By mere use of the Website, you expressly consent to our use and
            disclosure of your personal information in accordance with this
            Privacy Policy. This Privacy Policy is incorporated into and subject
            to the Terms of Use.
          </Highlight>
        </Box>
        <Box>
          <Text>
            What personal information do we collect from the people who visit
            our blog, website or app? When ordering or registering on our site,
            as appropriate, you may be asked to enter your name, email address,
            receiver name, delivery address, billing address, phone number or
            other details to help you with your experience. How do we use your
            information? We may use the information we collect from you when you
            register, make a purchase, sign up for our newsletter, respond to a
            survey or marketing communication, surf the website, or use certain
            other site features in the following ways:
          </Text>
          <UnorderedList>
            <ListItem>
              To personalize your experience and to allow us to deliver the type
              of content and product offerings in which you are most interested.
            </ListItem>
            <ListItem>To improve our website to better serve you.</ListItem>
            <ListItem>
              To allow us to better service you in responding to your customer
              service requests.
            </ListItem>
            <ListItem>
              To administer a contest, promotion, survey or other site feature.
            </ListItem>
            <ListItem>To quickly process your transactions.</ListItem>
            <ListItem>
              To ask for ratings and reviews of services or products.
            </ListItem>
            <ListItem>
              To follow up with them after correspondence (live chat, email or
              phone inquiries).
            </ListItem>
            <ListItem>
              To send transnational and promotional messages on your registered
              phone number.
            </ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <Text fontWeight="700">How do we protect your information?</Text>
          <Text>
            Our website is scanned regularly for security holes and known
            vulnerabilities to make your visit to our site as safe as possible.
            We use regular Malware Scanning. Your personal information is
            contained behind secured networks and is only accessible by a
            limited number of persons who have special access rights to such
            systems and are required to keep the information confidential. In
            addition, all sensitive/credit information you supply is encrypted
            via Secure Socket Layer (SSL) technology. We implement a variety of
            security measures when a user places an order enters, submits, or
            accesses their information to maintain the safety of your personal
            information. All transactions are processed through a gateway
            provider and are not stored or processed on our servers.
          </Text>
        </Box>
        <Box>
          <Text fontWeight="700">Do we use ‘cookies’?</Text>
          <Text>
            Yes. Cookies are small files that a site or its service provider
            transfers to your computer’s hard drive through your Web browser (if
            you allow) that enable the site’s or service provider’s systems to
            recognize your browser and capture and remember certain information.
            For instance, we use cookies to help us remember and process the
            items in our shopping cart. They are also used to help us understand
            your preferences based on previous or current site activity, which
            enables us to provide you with improved services. We also use
            cookies to help us compile aggregate data about site traffic and
            site interaction so that we can offer better site experiences and
            tools in the future. We use cookies to: Help remember and process
            the items in the shopping cart. Understand and save user’s
            preferences for future visits. You can choose to have your computer
            warn you each time a cookie is being sent, or you can choose to turn
            off all cookies. You do this through your browser settings. Since
            the browser is a little different, look at your browser’s Help Menu
            to learn the correct way to modify your cookies. If you turn cookies
            off, some features will be disabled. It won’t affect the user’s
            experience make your site experience more efficient and may not
            function properly. However, you will still be able to place the
            orders.
          </Text>
        </Box>
        <Box>
          <Text fontWeight="700">Third-Party Disclosure</Text>
          <Text>
            We do not sell, trade, or otherwise transfer to outside parties your
            Personally Identifiable Information.
          </Text>
        </Box>
        <Box>
          <Text fontWeight="700">Third-Party Links</Text>
          <Text>
            We do not include or offer third-party products or services on our
            website.
          </Text>
        </Box>
        <Box>
          <Text fontWeight="700">Google</Text>
          <Text>
            Google’s advertising requirements can be summed up by Google’s
            Advertising Principles. They are put in place to provide a positive
            experience for users.
          </Text>
          <Box display={"flex"}>
            <Text mr={1} fontWeight={"700"}>
              Link:
            </Text>
            <Link color={'blue'} href="" textDecor={'underline'} >
              https://support.google.com/adwordspolicy/answer/1316548?hl=en
            </Link>
          </Box>
          <Text>We have not enabled Google AdSense on our website.</Text>
        </Box>
        <Box>
          <Text fontWeight="700">We collect your Email Address to:</Text>
          <Text>
            Send information, respond to inquiries, and/or other requests or
            questions. Process orders and send information and updates about
            orders. Send you additional information related to your product
            and/or service. Market to our mailing list or continue to send
            emails to our clients after the original transaction has occurred.
          </Text>
          <Text>
            We also allow users to unsubscribe by using the link at the bottom
            of each email. If at any time you would like to unsubscribe from
            receiving future emails, you can email us at{" "}
            <Link>support@cakelaya.com</Link>{" "}
          </Text>
        </Box>
        <Box>
          <Text fontWeight={"700"}>Contacting Us</Text>
          <Text>
            If there are any questions regarding this privacy policy, you may
            contact us at the Email ID mentioned on the page below.
          </Text>
        </Box>
      </VStack>
    </VStack>
  );
};

export default PrivacyPolicy;
