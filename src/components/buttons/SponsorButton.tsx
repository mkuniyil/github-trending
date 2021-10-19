import React from 'react'
import { ListButton } from './ListButton'
import SponsorIcon from '../icons/SponsorIcon'

export const SponsorButton = () => (
  <span className="self-end px-1">
    <ListButton Icon={SponsorIcon} text="Sponsor" />
  </span>
)
