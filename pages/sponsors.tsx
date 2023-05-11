type Sponsor = {
  name: string
  logo: string
  url?: string
  tier: string
}

const sponsors: Sponsor[] = [
  {
    name: "Ford",
    logo: "/images/sponsors/Ford.svg",
    url: "https://www.ford.com/",
    tier: "Platinum",
  },
  {
    name: "Amazon",
    logo: "/images/sponsors/Amazon.svg",
    url: "https://www.aboutamazon.com/",
    tier: "Platinum",
  },
  {
    name: "Bosch",
    logo: "/images/sponsors/Bosch.svg",
    url: "https://www.bosch.us/",
    tier: "Platinum",
  },
  {
    name: "Forvia",
    logo: "/images/sponsors/Forvia.svg",
    url: "https://www.forvia.com/",
    tier: "Gold",
  },
  {
    name: "Little Caesars",
    logo: "/images/sponsors/Little Caesars.svg",
    url: "https://littlecaesars.com/en-us/",
    tier: "Gold",
  },
  {
    name: "eTAS",
    logo: "/images/sponsors/eTAS.svg",
    url: "https://www.etas.com/en/",
    tier: "Gold",
  },
  {
    name: "Stand Out Stickers",
    logo: "/images/sponsors/StandOut Stickers.svg",
    url: "https://www.standoutstickers.com/",
    tier: "Silver",
  },
  {
    name: "GitHub",
    logo: "/images/sponsors/GitHub.svg",
    url: "http://github.com/",
    tier: "Silver",
  },
  {
    name: "University of Michigan Dearborn | College of Engineering and Computer Science",
    logo: "/images/sponsors/UMD - CECS.png",
    url: "https://umdearborn.edu/cecs",
    tier: "Silver",
  },
  {
    name: "AI Futures",
    logo: "/images/sponsors/AI Futures.svg",
    url: "https://aifutures.us/",
    tier: "Bronze",
  },
  {
    name: "echo3D",
    logo: "/images/sponsors/echo3D.png",
    url: "https://www.echo3d.com/",
    tier: "Bronze",
  },
  {
    name: "Verbwire",
    logo: "/images/sponsors/Verbwire.png",
    url: "https://www.verbwire.com/",
    tier: "Bronze",
  },
]

const SponsorContent = ({ sponsor }: { sponsor: Sponsor }) => {
  const { name, logo, url } = sponsor
  return (
    <a href={url} target="_blank">
      <div className="relative flex h-40 w-full justify-center rounded-md border-2 p-8">
        <img src={logo} alt={name} className="object-contain" />
      </div>
    </a>
  )
}

const SponsorsRow = ({
  sponsors,
  tier,
}: {
  sponsors: Sponsor[]
  tier: string
}) => {
  const tierClassMapping: { [key: string]: string } = {
    Platinum: "w-12/12",
    Gold: "w-6/12",
    Silver: "w-4/12",
    Bronze: "w-3/12",
  }
  return (
    <div className="mb-4 flex flex-col justify-center lg:flex-row">
      {sponsors.map((sponsor, index) => (
        <div
          key={index}
          className={`lg:${tierClassMapping[tier]} w-full lg:mr-0`}
        >
          <SponsorContent sponsor={sponsor} />
        </div>
      ))}
    </div>
  )
}

const Sponsors = () => {
  const tiers = ["Platinum", "Gold", "Silver", "Bronze"]

  return (
    <div className="w-full px-10 pt-20 md:px-20 lg:px-40 lg:pb-20">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">
        Sponsors
      </h1>
      {tiers.map(tier => (
        <SponsorsRow
          sponsors={sponsors.filter(sponsor => sponsor.tier === tier)}
          tier={tier}
        />
      ))}
    </div>
  )
}

export default Sponsors
