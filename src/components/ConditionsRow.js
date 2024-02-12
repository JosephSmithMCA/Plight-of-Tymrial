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
                        {/* <ul>
                            <li>{condition.conditionLevelEffects[0]}</li>
                            <li>{condition.conditionLevelEffects[1]}</li>
                            <li>{condition.conditionLevelEffects[2]}</li>
                            <li>{condition.conditionLevelEffects[3]}</li>
                            <li>{condition.conditionLevelEffects[4]}</li>
                            <li>{condition.conditionLevelEffects[5]}</li>
                        </ul> */}
                    </div>
                </div>
            </div>
        </div>
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
            return <ConditionItems
                conditionNames={currentConditionItem.conditionName}
                conditionDescription={currentConditionItem.description}
                conditionLevelEffects={currentConditionItem.levelEffect}
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