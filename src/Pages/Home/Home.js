import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Chats from "../Chats/Chats";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import Loading from "../Shared/Loading/Loading";
import Hero from "./Hero/Hero";
import StayClose from "./StayClose/StayClose";

const Home = () => {
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return <Loading />;
  }
  if (user) {
    return <Chats />;
  }
  return (
    <div>
      <Header />
      <Hero />
      <StayClose />
      <Footer />
    </div>
  );
};

export default Home;
