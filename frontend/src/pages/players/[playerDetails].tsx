import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useWindowSize } from 'react-use'
import Nav from '@/components/Nav'
import PlayersCarrousel from '@/components/Carroucel/PlayersCarroucel'
import Footer from '@/components/Footer'
import { arrowUpLeft } from '@/components/icons/icons'
import { playersSquad } from '@/data/playersData'
import { idolsSquad } from '@/data/idolsData'
import { staffData } from '@/data/staffData'

interface BaseProfile {
  id?: number
  playerNumber?: number
  name: string
  position: string
  imageUrl: string
  PlaceOfBirth?: string
}

interface PlayerOrIdolProfile extends BaseProfile {
  birthDate: string
  Captain?: boolean
}

interface StaffProfile extends BaseProfile {}

type Profile = PlayerOrIdolProfile | StaffProfile

function isPlayerOrIdolProfile(
  profile: Profile,
): profile is PlayerOrIdolProfile {
  return (profile as PlayerOrIdolProfile).birthDate !== undefined
}

const PlayerDetails = () => {
  const { width } = useWindowSize()
  const router = useRouter()
  const { playerDetails } = router.query

  if (typeof playerDetails !== 'string') {
    return <div>Invalid or missing player details</div>
  }

  const profileNumber = parseInt(playerDetails, 10)
  let profile: Profile | undefined =
    playersSquad.find((player) => player.playerNumber === profileNumber) ||
    idolsSquad.find((idols) => idols.playerNumber === profileNumber) ||
    staffData.find((staff) => staff.playerNumber === profileNumber)

  let profileType = profile
    ? playersSquad.includes(profile as any)
      ? 'player'
      : idolsSquad.includes(profile as any)
        ? 'idol'
        : 'staff'
    : null

  let age = 'Unknown'
  if (profile && isPlayerOrIdolProfile(profile)) {
    const birthDate = new Date(profile.birthDate)
    const currentDate = new Date()
    const difference = currentDate.getTime() - birthDate.getTime()
    age = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25)).toString()
  }

  if (!profile) {
    return <div>Profile not found</div>
  }

  return (
    <div>
      <Nav />
      <div className="flex flex-col justify-center items-center space-y-4 my-10">
        {profileType && (
          <div className="flex justify-center">
            <Image
              src={profile.imageUrl}
              width={300}
              height={300}
              alt={profile.name}
              className="rounded-md border-2"
            />
            <div className="flex flex-col ml-10 space-y-5">
              <h2 className="font-extrabold text-3xl">{profile.name}</h2>
              <p className="font-bold">
                Position:{' '}
                <span className="font-extrabold text-xl">
                  {profile.position}
                </span>
              </p>
              <p>
                Place Of Birth:{' '}
                <span className="font-extrabold text-xl">
                  {profile.PlaceOfBirth || 'Unknown'}
                </span>
              </p>
              {profileType !== 'staff' && (
                <>
                  <p>
                    Age: <span className="font-extrabold text-xl">{age}</span>
                  </p>
                </>
              )}
            </div>
          </div>
        )}
      </div>
      <PlayersCarrousel />
      <div className="mb-10 mt-5">
        <Link
          href="/players"
          className="flex items-center justify-center space-x-3 hover:underline hover:scale-110 transition-transform ease-out duration-300"
        >
          <span className="ml-5">Back to player</span>
          <span>{arrowUpLeft}</span>
        </Link>
      </div>
      <Footer />
    </div>
  )
}

export default PlayerDetails
