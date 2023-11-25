import "./Style.css";

import NFT1 from "../../assets/nft-1.png";
import NFT2 from "../../assets/nft-2.png"
import NFT3 from "../../assets/nft-3.png"
import NFT1Mobile from "../../assets/mobile/nft-1.png";
import NFT2Mobile from "../../assets/mobile/nft-2.png";
import NFT3Mobile from "../../assets/mobile/nft-3.png";

import {motion} from "framer-motion";
import { item } from "../../lib/Variants";

import Motion from "../Motion";



const TopNFT = () =>{
  return(
    <Motion className="section-nft" id="nfts">
      <motion.h3 variants={item} className={"section-title"}>
        TOP NFTs
      </motion.h3>
      <motion.div className={"nfts-images"}>
        <motion.picture variants={item}>
          <source srcSet={NFT1Mobile} media="(max-width: 727px)" />
          <img src={NFT1} alt="NFT 1" />
        </motion.picture>
        <motion.picture variants={item}>
          <source srcSet={NFT2Mobile} media="(max-width: 727px)" />
          <img src={NFT2} alt="NFT 2" />
        </motion.picture>
        <motion.picture variants={item}>
          <source srcSet={NFT3Mobile} media="(max-width: 727px)" />
          <img src={NFT3} alt="NFT 3" />
        </motion.picture>
      </motion.div>
    </Motion>
  )
}

export default TopNFT;