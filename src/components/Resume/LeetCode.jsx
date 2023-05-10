import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BoldText from "../BoldText";
import { useState, useEffect } from 'react';
import {ProgressRing} from 'progress-ring-component-react';
import Loading from '../Loading';
import { motion } from "framer-motion";

import colors from "../../resources/data/colors.json";
import { HiOutlineStar } from 'react-icons/hi';
import { IoCalendarOutline } from "react-icons/io5";
import { BiBarChartAlt2 } from 'react-icons/bi';
import { BsPatchCheck } from 'react-icons/bs';

function LeetCode(props) {

  const [posts, setPosts] = useState([]);
  useEffect(() => {
      fetch('https://leetcode-stats-api.herokuapp.com/Serosidium')
         .then((response) => response.json())
         .then((data) => {
            // console.log(data);
            setPosts(data);
         })
         .catch((err) => {
            console.log(err.message);
            setPosts({
              "success": "false"
            })
         });
   }, []);


   // total solved
   // acceptance rate
   // reputation
   // rank
   // submissions this year
   var totalS = posts.totalSolved
   var acceptanceR = posts.acceptanceRate
   var reputation = posts.reputation
   var rank = posts.ranking
   var subCal = posts.submissionCalendar;




   if(acceptanceR !== undefined) {
     var subCount = 0
     const map = new Map(Object.entries(JSON.parse(JSON.stringify(subCal))));

     map.forEach((item, i) => subCount += item );

     rank = "#" + rank.toString();

     console.log(rank);

     return (
       <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 1.5 }}
      >
         <Row className="justify-content-center align-items-center">
           <Col xs="8" sm="8" md="8" lg="8" xl="8" xxl="8">
             <div>
               <div className="leetcode-title">
                 <BsPatchCheck className="me-1" />
                 <BoldText text={totalS + " problems solved"} boldText={[totalS.toString()]} theme={props.theme}/>
               </div>
             </div>

             <div>
               <div className="leetcode-title">
                 <HiOutlineStar className="me-1" />
                 <BoldText text={reputation + " reputation"} boldText={[reputation.toString()]} theme={props.theme} />
               </div>
             </div>
             <div>
               <div className="leetcode-title">
                 <BiBarChartAlt2 className="me-1"/>
                 <BoldText text={"Ranked " + rank} boldText={[rank.toString()]} theme={props.theme} />
               </div>
             </div>
             <div>
               <div className="leetcode-title">
                 <IoCalendarOutline className="me-1" />
                 <BoldText text={subCount + " submissions in " + (new Date()).getFullYear()} boldText={[subCount.toString()]}  theme={props.theme}/>
               </div>
             </div>

           </Col>
           <Col xs="4" sm="4" md="4" lg="4" xl="4" xxl="4">
             <ProgressRing
               percentage={acceptanceR}
               round-linecap={true}
               radius={40}
               int-size={20}
               stroke-width={6}
               duration={3000}
               colors={new Map(Object.entries({0:colors.mainDarker}))}
             >
               <div className="leetcode-rate-text mt-4">Solve Rate</div>
             </ProgressRing>

           </Col>


         </Row>
       </motion.div>

     );
   }
   else if(posts.success === undefined){
     return (
       <div className="leetcode-loading mt-5">
         <Loading />
       </div>
     );
   }
   else {
     return (
       <motion.div
         className = "leetcode-error-text"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 1.5 }}
       >
         <BoldText text={"An error occured while loading Leetcode data"} boldText={["error", "leetcode"]} theme={props.theme}/>
       </motion.div>
     )
   }
}

export default LeetCode;
