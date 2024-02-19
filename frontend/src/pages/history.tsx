import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import Title from '@/components/Title'
import Image from 'next/image'
import React from 'react'

const History = () => {
  return (
    <div>
      <Nav />
      <br />
      <div className="border-red-500 ">
        <Title title=" Foundation of AFC Richmon: An Inspiring Journey à la Ted Lasso" />
        <br />
        <p className="mx-10">
          Founding of AFC Richmon: An Inspiring Journey into Ted Lasso Fashion
          AFC Richmon was born from an inspiration as captivating as the
          American TV series &quot;Ted Lasso&quot;. Three sports enthusiasts,
          William Thompson, Julia Foster and Michael Reynolds, decided to
          combine their passions for football and the series to create a club
          that reflected the values of optimism, teamwork and overcoming present
          in television history. The landmark date was Sunday, April 22, 2018,
          when the trio brought together all interested parties at the former
          Concord Club headquarters, located at 18 Maple Street (currently Maple
          Street, 8/10).
          <br />
          <br />
          From the 39 participants, now considered founding partners, emanated
          the contagious spirit of those who believe that football can be more
          than a game; It can be a source of inspiration and unity. Edmundo
          Jorge de Araújo, present at the inaugural meeting, suggested the name
          &quot;AFC Richmon&quot; for the new entity, a tribute to the city and
          an expression of commitment to the rich tradition of football. The
          clubs colors, initially blue and white with gold details, were chosen
          to symbolize hope, purity and the pursuit of excellence. On March 31
          of the following year, under the influence of Paulo Peluccio, the
          colors were adjusted to white shorts and a black and white striped
          shirt.
          <br />
          <br />
          The Deliberative Council began on January 28, 2020, with the inaugural
          presidency of Beatriz Sanches. At the beginning of this exciting
          journey, the figure of Ethan Caldwell stood out, who dedicated his
          body and soul to the club until his death in 2021. An athlete, coach
          and manager, Caldwell is today one of the patrons of AFC Richmon,
          being honored with the name of the stadium opened in 2016. The first
          glories arrived in 2019, with the victory of the local championship,
          repeating the feat in 2021 under the temporary name of &quot;Richmon
          United&quot;, as imposed by the local league. In 2023, a notable
          offensive formation averaged 4.5 goals per match, immortalizing itself
          as the &quot;50 Goal Attack&quot;.
          <br />
          <br />
          This stellar attack was made up of Owen, Ramirez, Cooper, Harper and
          Ellis. Consecration in the National Championship came in 2025, with an
          emotional victory away from home. The club repeated the feat in 2026
          and again in 2028, when it already had the presence of a young talent
          nicknamed &quot;Richmon Wonder&quot;, who in subsequent years would
          become one of the greatest football players in the world. In the
          &quot;Golden Era&quot; of the 2030s, AFC Richmon enchanted the world
          with immersive football, winning not only national but also
          international titles.
          <br />
          <br />
          The culmination came in 2032, when the club, now recognized as the
          &quot;Best Team of the Century in the Americas&quot; by FIFA, won
          every major tournament played. Today, AFC Richmon is proud to be the
          Eighth National Champion for its achievements in the years 2031 to
          2035, 2038, 2050 and 2052. On the local scene, it has accumulated 22
          titles, in the CONCACAF Champions League there are 3 victories, and in
          the World Cup of the FIFA Club World Cup are two victories. The legacy
          continues, revealing talents such as Evans, Martinez, Harris, Jackson
          and Brown, becoming a symbol of pride for the entire community in its
          111 years of history.
        </p>
        <div
          className="flex lg:flex-row flex-col my-16 items-center 
        space-y-7 justify-center lg:space-x-10"
        >
          <Image
            className="rounded-xl hover:scale-105  "
            src="/images/history/image_1.webp"
            alt=""
            width={250}
            height={200}
          />
          <Image
            className="rounded-xl hover:scale-105"
            src="/images/history/image_2.jpg"
            alt=""
            width={380}
            height={200}
          />
          <Image
            className="rounded-xl hover:scale-105"
            src="/images/history/image_3.jpg"
            alt=""
            width={350}
            height={200}
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default History
