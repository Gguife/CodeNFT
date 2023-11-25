import "./Style.css";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const dashboardArray = [
  {
    title: "Coleções",
    number: "300",
  },
  {
    title: "Usuários",
    number: "+100k",
  },
  {
    title: "Negociações",
    number: "+30k",
  },
  {
    title: "Visualizações",
    number: "+1 M",
  },
];

const NumberCard = () =>{
  return(
    <div className="numberCard">
        <motion.div className="box numberCard-container"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: .7,
            ease: [0, 0.71, 0.2, 1.01]
        }}>
          {dashboardArray.map((i, k) =>(
            <motion.div className="box numberCard-content"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            key={k}
            transition={{
              duration: 1,
              delay: 0.9 + k * 0.3,
              ease: [0, 0.71, 0.2, 1.01]
            }}>
              <div className="number-desc">  
                <p>{i.number}</p>
                <span>{i.title}</span>
              </div>
              {k < 3 && <div className="line"></div>}
            </motion.div> 
          ))}
        </motion.div>
        <motion.div className="box numberCard-slide"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: .7,
            ease: [0, 0.71, 0.2, 1.01]
        }}>
          <Swiper spaceBetween={0} slidesPerView={1}>
            {dashboardArray.map((i, k) => (
              <div key={k}>
                <SwiperSlide className="numberSlide-content">
                  <p>{i.number}</p>
                  <span>{i.title}</span>
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </motion.div>
    </div>
  )
}

export default NumberCard;