import React from 'react'

import { Flex, Heading, Box, Text, Link } from '@chakra-ui/core'

const Index = ({ quotes }) => (
  <Flex justify="center" align="center" direction="column" height="100%">
    <Box m="auto" />
    <Box px={6} pt={16}>
      <Heading size="xl">POSSAWAT SUKSAI</Heading>
      <Heading
        size="xs"
        color="gray.600"
        letterSpacing="0.0625em"
        textAlign="right"
        width="100%"
      >
        triamudom 81 | programmer | photographer
      </Heading>
      <Text mt={8} textAlign="center" fontStyle="italic">
        {quotes}
      </Text>
    </Box>
    <Box m="auto" />
    <Box mb={16}>
      <Text>
        <Text fontWeight={700} display="inline" mr={30}>
          MARK
        </Text>
        <Link
          href="https://github.com/iammarkps"
          target="_blank"
          rel="noopener noreferrer"
          mr={30}
        >
          GitHub
        </Link>
        <Link
          href="https://medium.com/@iammark._"
          target="_blank"
          rel="noopener noreferrer"
          mr={30}
        >
          Blog
        </Link>
        <Link
          href="https://www.instagram.com/iammark._/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </Link>
      </Text>
    </Box>
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
