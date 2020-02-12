import React from 'react'

import { Flex, Heading, Box, Text, Link as ChakraLink } from '@chakra-ui/core'
import styled from '@emotion/styled'

const Link = styled(ChakraLink)`
  transition: all 0.15s ease-out;

  :hover {
    color: black;
  }
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
        <Link
          href="https://github.com/iammarkps"
          target="_blank"
          rel="noopener noreferrer"
          mr={30}
          fontSize={['14px', '16px']}
        >
          GitHub
        </Link>
        <Link
          href="https://medium.com/@iammark._"
          target="_blank"
          rel="noopener noreferrer"
          mr={30}
          fontSize={['14px', '16px']}
        >
          Blog
        </Link>
        <Link
          href="https://www.instagram.com/iammark._/"
          target="_blank"
          rel="noopener noreferrer"
          fontSize={['14px', '16px']}
        >
          Instagram
        </Link>
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
