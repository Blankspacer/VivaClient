import { MoveLeft } from "lucide-react";
import Marquee from "react-fast-marquee";
import aci from "../../assets/ACI.png";
import arko from "../../assets/Arko.png";
import arong from "../../assets/Arong.png";
import bengal from "../../assets/bengal-bee.png";
import brand from "../../assets/Brand.png";
import eco from "../../assets/eco.png";
import haque from "../../assets/Haque.png";
import jhianxzu from "../../assets/jhianxzu.png";
import jngi from "../../assets/jngi.png";
import matador from "../../assets/Matador.png";
import oneMan from "../../assets/one-man.png";
import rfl from "../../assets/RFL.png";
import sicl from "../../assets/sicl.png";
import tongi from "../../assets/tongi.png";
import walton from "../../assets/walton.png";
import youngwan from "../../assets/yongwang.png";

const ClientSection = () => {
  return (
    <div>
      <h1 className="text-white text-center font-bold text-4xl uppercase">
        {" "}
        Some Of Our Clients{" "}
      </h1>

      <Marquee speed={100} pauseOnHover={true} onFinish={MoveLeft}>
        <div className="mt-10 h-24 item  xbg-[#251b1a] bg-white py-3 bg-opacity-5 flex gap-14">
          <img src={aci} alt="" />
          <img src={arko} alt="" />
          <img src={arong} alt="" />
          <img src={bengal} alt="" />
          <img src={brand} alt="" />
          <img src={eco} alt="" />
          <img src={haque} alt="" />
          <img src={jhianxzu} alt="" />
          <img src={jngi} alt="" />
          <img src={matador} alt="" />
          <img src={oneMan} alt="" />
          <img src={rfl} alt="" />
          <img src={sicl} alt="" />
          <img src={tongi} alt="" />
          <img src={walton} alt="" />
          <img src={youngwan} alt="" />
        </div>
      </Marquee>
    </div>
  );
};

export default ClientSection;
