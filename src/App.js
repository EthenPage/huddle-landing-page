import React from "react";
import Card from "./Components/Card";
import Header from "./Components/Header";
import IMAGES from "./Assets/Images";
import Footer from "./Components/Footer";
import Floatcard from "./Components/Floatcard";

const App = () => {
  const data = [
    {
      id: 1,
      head: "Grow Together",
      desc: "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.",
      img: IMAGES.card1,
    },
    {
      id: 2,
      head: "Flowing Conversations",
      desc: "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",
      img: IMAGES.card2,
    },
    {
      id: 3,
      head: "Your Users",
      desc: "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.",
      img: IMAGES.card3,
    },
  ];
  return (
    <React.StrictMode>
      <Header />
      <main>
        <Card head={data[0].head} desc={data[0].desc} img={data[0].img} />
        <Card head={data[1].head} desc={data[1].desc} img={data[1].img} />
        <Card head={data[1].head} desc={data[2].desc} img={data[2].img} />
        <Floatcard />
      </main>
      <Footer />
    </React.StrictMode>
  );
};

export default App;
