import ConditionsData from "./ConditionsData";

function ConditionItems(condition){
    // console.log(condition)
    return(
        <div className="row">
            <div className="col-sm-12">
                <div className="row">
                    <div className="col-sm-12">
                        <h5>{condition.conditionNames}</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <p>{condition.conditionDescription}</p>
                        <ul>{condition.conditionLevelEffects}</ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ExhaustFx(props){

    return(
        <li>
            <b>{props.level}</b> {props.effect}
        </li>
    )
}

function ConditionsRow(){
    // let exhaustedEffects = ConditionsData.levelEffect.map(
    //     (currentExhaustion) => {
    //         return <ConditionItems
    //             exhaustionLevel={currentExhaustion.levelEffect.level}
    //             exhaustionEffect={currentExhaustion.levelEffect.effect}
    //         />
    //     }
    // )

    let mappedConditions = ConditionsData.map(
        (currentConditionItem) => { 
            let exhaustion;
            if(currentConditionItem.conditionName === "Exhaustion"){

                 exhaustion = currentConditionItem.levelEffect.map(
                    (exhaust) => {
                        return <ExhaustFx 
                            level={exhaust.level}
                            effect = {exhaust.effect}
                        />
                    }
                )
            }
            console.log(currentConditionItem.levelEffect)
            return <ConditionItems
                conditionNames={currentConditionItem.conditionName}
                conditionDescription={currentConditionItem.description}
                conditionLevelEffects={exhaustion}
            />
        }
    )
            

    return(
        <div className="row">
            <div className="col-sm-12">
                {mappedConditions}
            </div>
        </div>
    )
}

export default ConditionsRow