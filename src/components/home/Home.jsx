import BreakNews from "../breakNews/BreakNews";
import HighLights from "../highlights/HighLights";
import LastNews from "../lastNews/LastNews";
import Layout from "../layout/Layout";
import Sponserd from "../sponserd/Sponserd";
import Updates from "../updates/Updates";

function Home() {
  return (
    <>
      <Layout>
        <LastNews />
        <BreakNews />
        <HighLights />
        <Sponserd />
        <Updates />
      </Layout>
    </>
  );
}

export default Home;
