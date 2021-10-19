import React from 'react'

type ErrorProps = {
  error: unknown
}

export const Error: React.FC<ErrorProps> = ({ error }) => {
  return <p data-testid="error-element">{`An error has occurred: ${(error as Error).message}`}</p>
}
