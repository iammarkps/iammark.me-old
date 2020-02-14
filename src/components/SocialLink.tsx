import React from 'react'

import { Link as ChakraLink } from '@chakra-ui/core'
import styled from '@emotion/styled'

const Link = styled(ChakraLink)`
  transition: all 0.15s ease-out;

  :hover {
    color: black;
  }
`

export const SocialLink = ({ href, children, mr }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    fontSize={['14px', '16px']}
    mr={mr}
  >
    {children}
  </Link>
)
