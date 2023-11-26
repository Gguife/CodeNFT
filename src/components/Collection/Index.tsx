import "./Style.css";
import Motion from "../Motion";
import {motion} from "framer-motion";
import { item } from "../../lib/Variants";

import Profile1 from "../../assets/profile1.png";
import Profile2 from "../../assets/profile2.png";
import Profile3 from "../../assets/profile3.png";
import Profile4 from "../../assets/profile4.png";

const Collection = () =>{
  return(
    <Motion className="section collection-section" id="collection">
      <motion.header variants={item} className="collection-header">
        <h4>Colecionadores</h4>
        <button className="button">
          Ver Todos
        </button>
      </motion.header>
      <table className="table">
        <thead>
          <motion.tr className="tr" variants={item}>
            <th>Colecionadores</th>
            <th>Volume</th>
            <th>Piso</th>
            <th>Items</th>
          </motion.tr>
        </thead>
        <tbody>
          <motion.tr variants={item}>
            <td>
              <div className="profile">
                <span>
                  <img src={Profile1} alt="Amanda Profile" />
                </span>
                Amanda
              </div>
            </td>
            <td>
              <div className="vol">
                230.38 ETH{" "}
                <span className="volNumber">
                  +50.20%
                </span>
              </div>
            </td>
            <td>
              <div className="vol">
                12.38 ETH{" "}
                <span className="volNumber">
                  +50.20%
                </span>
              </div>
            </td>
            <td>138</td>
          </motion.tr>
          <motion.tr variants={item}>
            <td>
              <div className="profile">
                <span>
                  <img src={Profile2} alt="Fernando Profile" />
                </span>
                Fernando
              </div>
            </td>
            <td>
              <div className={"vol"}>
                189.25 ETH{" "}
                <span className="volNumber">
                  +33.11%
                </span>
              </div>
            </td>
            <td>
              <div className={"vol"}>
                54.38 ETH{" "}
                <span className="volNumber">
                  +70.45%
                </span>
              </div>
            </td>
            <td>105</td>
          </motion.tr>
          <motion.tr variants={item}>
            <td>
              <div className="profile">
                <span>
                  <img src={Profile3} alt="Bruna Profile" />
                </span>
                Bruna
              </div>
            </td>
            <td>
              <div className={"vol"}>
                963 ETH{" "}
                <span className="volNumber">
                  +78.20%
                </span>
              </div>
            </td>
            <td>
              <div className={"vol"}>
                30.96 ETH{" "}
                <span className="volNumber">
                  +25.60%
                </span>
              </div>
            </td>
            <td>88</td>
          </motion.tr>
          <motion.tr variants={item}>
            <td>
              <div className="profile">
                <span>
                  <img src={Profile4} alt="José Profile" />
                </span>
                José
              </div>
            </td>
            <td>
              <div className={"vol"}>
                421.66 ETH{" "}
                <span className="volNumber">
                  +46.20%
                </span>
              </div>
            </td>
            <td>
              <div className={"vol"}>
                130.38 ETH{" "}
                <span className="volNumber">
                  +50.20%
                </span>
              </div>
            </td>
            <td>56</td>
          </motion.tr>
        </tbody>
      </table>
    </Motion>
  )
}

export default Collection;