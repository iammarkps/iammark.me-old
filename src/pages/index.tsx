import React from 'react'

import { Flex as FlexBox, Heading, Box, Text } from '@chakra-ui/core'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'

import { SocialLink } from '../components/SocialLink'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const Flex = styled(FlexBox)`
  animation: ${fadeIn} 2s;
`

const Index = ({ quotes }) => (
  <Flex
    justify="center"
    align="center"
    direction="column"
    height="100%"
    boxShadow="inset 0px 0px 0px 8px #222"
  >
    <Box m="auto" />
    <Box px={6} mt={[32, 16]}>
      <Heading size="xl">POSSAWAT SUKSAI</Heading>
      <Heading
        size="xs"
        color="gray.600"
        letterSpacing="0.0625em"
        textAlign={['left', 'right']}
        width="100%"
        mt={[2, 0]}
      >
        TU81 | programmer | photographer
      </Heading>
      <Text mt={8} textAlign="center" fontStyle="italic">
        {quotes}
      </Text>
    </Box>
    <Box m="auto" />
    <Flex mb={[8, 16]} direction={['column', 'row']} color="#666">
      <Flex justify="center" align="center">
        <Text
          fontWeight={700}
          display="inline"
          mr={[0, 30]}
          mb={['8px', 0]}
          fontSize={['14px', '16px']}
        >
          Mark
        </Text>
      </Flex>
      <Box>
        <SocialLink href="https://github.com/iammarkps">GitHub</SocialLink>
        <SocialLink href="https://blog.iammark.me">Blog</SocialLink>
        <SocialLink href="https://www.instagram.com/iammark._/">
          Instagram
        </SocialLink>
      </Box>
    </Flex>
  </Flex>
)

Index.getInitialProps = async () => {
  const Quotes = [
    'Aut viam inveniam aut faciam',
    'Fugit inreparabile tempus',
    'Quinon proficit deficit',
    'Omne ignotum pro magnifico',
    'Audentes fortuna iuvat',
    'Non omnia possumus omnes'
  ]

  return { quotes: Quotes[Math.floor(Math.random() * Quotes.length)] }
}

export default Index
