import GridRow from "../GridRow";
import BoldText from "../BoldText";


function ResumeDetails(props) {
  return (
    <GridRow>
      <div className="resume-details-title pt-1">
        <div className="resume-details-title-one pe-4">{props.titleOne}</div>
        <div className="resume-details-title-two">{props.titleTwo}</div>
      </div>
      <div className="resume-details-subtitle py-1">
        {props.subtitle}
      </div>
      {props.description !== undefined &&
        <div className="resume-details-description">
          <BoldText text={props.description} boldText={props.descriptionBolds} theme={props.theme} />
        </div>
      }
      <ul className="contribution-list">
        {props.accomplishments.map(( accomp ) =>
          <li key={accomp} className="c-list-item">
            <BoldText text={accomp} boldText={props.accomplishmentBolds} theme={props.theme}/>
          </li>
        )}
      </ul>
    </GridRow>
  );
}

export default ResumeDetails;
