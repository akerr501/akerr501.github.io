import { motion } from "framer-motion";
import colors from "../resources/data/colors.json";

function BoldText(props) {
  var indices = [];
  for(const bold of props.boldText) {
    var foundIndex = props.text.toLowerCase().indexOf(bold);
    if(foundIndex >= 0) indices.push({ "start": foundIndex, "length": bold.length });
  }
  if(indices.length === 0) return props.text;

  indices.sort((a, b) => { return a.start - b.start; });
  var start = 0;
  var boldingArray = [];

  for(var item of indices){
    var startToIndex = item.start - start;
    if(startToIndex > 0){
      boldingArray.push({ "start": start, "length": startToIndex, "bold": false });
    }
    boldingArray.push({ "start": item.start, "length": item.length, "bold": true });
    start = item.start + item.length;
  }

  if(start < props.text.length) boldingArray.push({ "start": start, "length": props.text.length, "bold": false });

  return (
    <div className={props.className}>
      {boldingArray.map((item) => {
        var itemText = props.text.substr(item.start, item.length);
        if(item.bold) {
          return (
              <motion.div
                key={itemText}
                className={"hover-color inline"}
                whileHover={{ scaleY: 1.1, scaleX: 1.05}}
                whileTap={{ scaleY: 1.1, scaleX: 1.05}}
                transition={{ type: "spring", bounce: 0.15}}
              >
                <b>{itemText}</b>
              </motion.div>
          );
        }
        else return itemText;
      })}
    </div>
  );
}

export default BoldText;
