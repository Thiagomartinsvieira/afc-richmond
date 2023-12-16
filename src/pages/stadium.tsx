import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import Title from '@/components/Title'
import StadiumCard from '@/components/Stadium'
import { stadiumGallery } from '@/data/stadiumGallery'

const StadiumPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <Title title="Nelson Road" />
      <div className="relative w-full h-96">
        <img
          className="w-full h-full object-cover"
          src="https://pbs.twimg.com/media/FdMBViDXwAEJtai.jpg:large"
          alt="Nelson Road Stadium"
        />
        <h3 className="m-2 font-extralight">Capacity: 25.486</h3>
      </div>
      <div className="container mx-auto mt-8 mb-12">
        <h2 className="text-center font-extrabold">About</h2>
        <hr className="mt-1" />
        <br />
        <p className="text-lg leading-relaxed text-center">
          Nelson Road is a fictional football stadium in the London Borough of
          Richmond upon Thames featured in the Apple TV+ series, Ted Lasso. It
          is the stadium for AFC Richmond, and according to Arlo White,
          Richmondites simply call it The Dog Track.
          <br />
          <br />
          The “Dogtrack” or “Dogpound,” as named by the supporters, is the
          official home ground of AFC Richmond. The supporters have a love-hate
          relationship with the stadium itself; however, according to many
          supporters, it's very important to the community.
        </p>
      </div>
      <div className="container mx-auto mb-12">
        <h2 className="text-center font-extrabold">The History</h2>
        <br />
        <p className="text-lg leading-relaxed text-center">
          During World War I, their stadium was used as a field hospital. And
          then in November 1914, posters went up around Richmond area,
          soliciting men to try out for a football team. The men were duped; it
          wasn't for a football tryout, but there were recruiters waiting to
          encourage those boys to fight World War I.
          <br />
          <br />
          There were 400 lads enlisted, and they had their physical at the
          treatment room in Nelson Road Stadium. A lot of those brave soldiers
          didn't come home from the war, and ever since then, the players always
          thought that the treatment room is cursed.
        </p>
      </div>
      <div className="container mx-auto mb-12">
        <h2 className="text-center font-extrabold">Stadium Gallery</h2>
        <br />
        <div className="flex flex-wrap justify-center">
          {stadiumGallery.map((stadium, i) => (
            <StadiumCard
              key={i}
              name={stadium.name}
              imageUrl={stadium.imageUrl}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default StadiumPage
