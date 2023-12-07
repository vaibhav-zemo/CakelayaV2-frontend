import React from "react";
import {
  Heading,
  Text,
  VStack,
  Box,
  UnorderedList,
  ListItem,
  Highlight,
} from "@chakra-ui/react";

const About = () => {
  const headingStyle = {
    fontSize: "5xl",
    textAlign: "center",
    marginBottom: "24px",
  };
  return (
    <VStack px={10} gap={16} mt={8} mb={16}>
      <Box>
        <Heading style={headingStyle}>Work for Social Cause</Heading>
        <Text>
          For every order you place with us, we donate 5% of the net order value
          to the KOSHISH EDUCATIONAL & WELFARE SOCIETY (an initiative of one of
          the alumni of KNIT). The main aim of the NGO lies in imparting and
          providing the best educational facilities to the ones who are less
          privileged. You can mail us at contact@cakelaya.com, to know more
          about our previous donations to the society. We don't charge anything
          extra for the same, rather from the order you place, we just take out
          5% of it to donate to the society.
        </Text>
      </Box>
      <Box>
        <Heading style={headingStyle}>About Us</Heading>
        <Text>
          We are a bunch of students, currently studying at Kamla Nehru
          Institute of Technology, Sultanpur. One of the problems we observe
          students encounter during a birthday party or some other occasion is
          getting an affordable and delicious cake. Students had to travel for
          about 5-6 km to just get a cake. Few players had a monopoly. They gave
          students cake at a very expensive rate. As they were very well aware
          of the fact, that the student has come 5-6 km far, he/she will surely
          purchase it and try to get back to the hostel as soon as possible. To
          avoid students experiencing such an unlikely scenario, we thought of
          providing a solution for the same problem. Cakeलाया ? is a start-up
          based on delivering cakes and other savouries to your room at your
          convenience. All you need is just to take a chill pill, enjoy the
          occasion with your closed ones and let us take care of all your cake
          and zingy needs!
        </Text>
      </Box>
      <Box>
        <Heading style={headingStyle}>Our Aim and Vision</Heading>
        <Text>
          Our main aim is to solve the cake delivery problems that persist
          currently in Tier 2 and Tier 3 cities. The current marketplace lacks
          efficient players to tackle the problem of cake delivery to your
          doorstep. If there are, they all sell cake at a very expensive rate.
          The prices are over-hiked. Our aim and vision are to address the same
          concern. To tackle this problem, we have tied up with small/local
          bakers/players/vendors in the market itself and there will be no role
          of any big bakers/players/vendors dominating the market and exploiting
          small/local bakers/players/vendors in the market. Local
          bakers/players/vendors will be contacted to deliver your orders to you
          once you place an order. In this way, even the small vendors won't be
          affected and a healthy marketplace environment will be developed. We
          want the customer and shopkeeper both get benefit from our services.
          After the lockdown, where several businesses have suffered from heavy
          losses, digitalisation and technology are the way to help them.
          Pricing is set in such a way that even the shopkeeper remains profited
          as well and students get the best and cheapest cake possible in the
          city. We prefer quality over anything. Your health is of utmost
          priority to us and thus all the cakes delivered are freshly baked and
          prepared within 15 minutes thereafter the order is placed. Cake forms
          an important and integral part of any occasion and adds flavours to
          it, be it your anniversary, your birthday, your internship party or
          your placement party. All we request from you is to give our services
          a try and emerge with a hassle-free experience. Wouldn't that be
          convenient for all of us, to sit in our room, in our cosy bed, and
          just scan a QR code to get the best quality cake at the lowest
          possible price (and we assure you that!)? Sounds interesting? Right?
          We know, it does!
        </Text>
      </Box>
      <Box>
        <Heading style={headingStyle}>Our Key Values</Heading>
        <Box>
          <Text>
            We value each of our customers every time, through premium products,
            services and value for money. We are driven by innovation,
            technology & people-first approach. Our core values encroach upon
            Character, Commitment, Compliance, Doing the Most Difficult Task
            First, Ethics, Fair-Play, Finishing to the End, Integrity,
            Ownership, Persistence, Transparency, and Trustworthiness.
            Compassion: Empathy, Gratitude, Inclusiveness and Respect. Customer
            Centric: Accountability, Customer (External as well as Internal i.e.
            Employees & Partners), Pro- Feedback, and Responsiveness. Collective
            Growth: Community service, Cost-Consciousness, Inclusiveness,
            Profitability, Social Responsibility, and Sustainability. Continuous
            Transformation: Adaptability, Agility, Being Devil's Advocate,
            Collaboration, Continuous Improvement, Curiosity, Diversity,
            Experiment, Innovation, Introspection, Resilience, Sharing, and
            Seeking Knowledge.
          </Text>
          <UnorderedList mt={4}>
            <ListItem>
              <Highlight query={"Compassion"} styles={{ fontWeight: "700" }}>
                Compassion: Empathy, Gratitude, Inclusiveness and Respect.
              </Highlight>
            </ListItem>
            <ListItem>
              <Highlight
                query={"Customer Centric"}
                styles={{ fontWeight: "700" }}
              >
                Customer Centric: Accountability, Customer (External as well as
                Internal i.e. Employees & Partners), Pro- Feedback, and
                Responsiveness.
              </Highlight>
            </ListItem>
            <ListItem>
              <Highlight
                query={"Collective Growth"}
                styles={{ fontWeight: "700" }}
              >
                Collective Growth: Community service, Cost-Consciousness,
                Inclusiveness, Profitability, Social Responsibility, and
                Sustainability.
              </Highlight>
            </ListItem>
            <ListItem>
              <Highlight
                query={"Continuous Transformation"}
                styles={{ fontWeight: "700" }}
              >
                Continuous Transformation: Adaptability, Agility, Being Devil's
                Advocate, Collaboration, Continuous Improvement, Curiosity,
                Diversity, Experiment, Innovation, Introspection, Resilience,
                Sharing, and Seeking Knowledge.
              </Highlight>
            </ListItem>
          </UnorderedList>
        </Box>
      </Box>
      <Box>
        <Heading style={headingStyle}>Refund and Cancellation</Heading>
        <Box>
          <Text mb={4}>
            Currently, the option to cancel your order is not available on our
            website, so we request everyone to place the order with utmost care!
            In case, if you want to update your delivery address or change your
            cake flavour, that can be done by contacting the official email ID
            mentioned below. For refunds, for requests with a genuine reason,
            your refund is processed immediately after verification, and the
            amount is refunded back to your original payment method within 1-2
            business days. For any further queries, please feel free to write us
            at our official mail ID as mentioned below
          </Text>
          <Highlight query={"NOTE"} styles={{ fontWeight: "700" }}>
            NOTE: In case of any refunds initiated by users, the amount will be
            refunded after a standard 5% order value deduction.
          </Highlight>
        </Box>
      </Box>
      <Box>
        <Heading style={headingStyle} >Shipping Policy</Heading>
        <Text mb={4}>
          All the cakes are delivered to you by third-party bakery vendors, and
          the company hold no responsibilities for the same. We are just an
          online platform which enables local bakers to list on our platform and
          sell their products online.
        </Text>
      </Box>
    </VStack>
  );
};

export default About;
