import GridRow from "../GridRow";
import SkillsDetails from "./SkillsDetails";

function Skills(props) {
  var highs = [];
  var mids = [];
  var lows = [];

  for(var item of props.skills){
    if(item.experience === "high") highs.push(item);
    else if (item.experience === "medium") mids.push(item);
    else lows.push(item);
  }
  return (
    <GridRow>
      <SkillsDetails title="Advanced" infoText = "Worked on several projects and at least one class with these" skills={highs} />
      <SkillsDetails title="Intermediate" infoText = "Worked on at least one project and class with these" skills={mids} />
      <SkillsDetails title="Novice" infoText = "Taken at least one class or tinkered with these" skills={lows} />
    </GridRow>
  );
}

export default Skills;
