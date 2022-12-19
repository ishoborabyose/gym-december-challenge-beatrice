
import Alumni from "../components/Alumni";
import Connected from "../components/Connected";
import Degree from "../components/Degree";
import Discover from "../components/Discover";
import Giving from "../components/Giving";
import Grid from "../components/Grid";
import Header from "../components/Header";
import Hero from "../components/Hero";
import News from "../components/News";
import Numbers from "../components/Numbers";
import Podcast from "../components/Podcast";
import PresidentThomas from "../components/PresidentThomas";
import Ranking from "../components/Ranking";
import Schools from "../components/Schools";
import Tum from "../components/Tum";
// import Video from "../components/Video";

export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <Tum />
    {/* <Video /> */}
    <News />
    <Grid />
   <Discover />
   <Degree />
  <PresidentThomas />
  <Numbers />
  <Schools />
  <Alumni />
  <Podcast />
<Connected />
<Giving />
    </>
  )
}
