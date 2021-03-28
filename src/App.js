import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import formula from './tools/formula';
import { Button } from 'react-bootstrap';
import multiplicative from './tools/em';

function App() {

  //State definitions
  var [final, setFinal] = React.useState(0);
  var [attack, setAttack] = React.useState(1000);
  var [critRate, setCritRate] = React.useState(50);
  var [critDmg, setCritDmg] = React.useState(100);
  var [eleBonusDmg, setEleBonusDmg] = React.useState(0);
  var [modifier, setModifier] = React.useState(100);
  var [logs, updateLog] = React.useState([]);
  var [description, setDescription] = React.useState("");
  var [eleMastery, setEleMastery] = React.useState(0);
  var [reaction, setReaction] = React.useState(0);
  //var [isNoblesse, togglenNoblesse] = React.useState(0);

  //Final Calc Refresh
  const finalCalc = () => {
    const final = formula(attack, eleMastery, critRate, critDmg, eleBonusDmg, modifier, reaction).toFixed(1);
    setFinal(final);
  } //Event listener
  React.useEffect(finalCalc, [critRate, final, critDmg, eleBonusDmg, attack, eleMastery, reaction]);


  //onChange handlers
  const handleAttackChange = (event) => {
    setAttack(event.target.value);
  };
  const handleCritRateChange = (event) => {
    setCritRate(event.target.value);
  }
  const handleCritDamageChange = (event) => {
    setCritDmg(event.target.value);
  }
  const handleElementalBonusDamageChange = (event) => {
    setEleBonusDmg(event.target.value);
  }
  const handleModifierChange = (event) => {
    setModifier(event.target.value);
  }
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  }
  const handleEleMasteryChange = (event) => {
    setEleMastery(event.target.value);
  }
  const handleNoReaction = (event) => {
    setReaction(0);
  }
  const handleReactionFull = (event) => {
    setReaction(1);
  }
  const handleReactionReverse = (event) => {
    setReaction(2);
  }

  const handleDescriptionInputKeyPress = (event) => {
    var code = event.keyCode || event.which;
    if (code === 13) {
      event.preventDefault();
      pushLog();
    }
  }

  const pushLog = () => {
    var reactionString = "No reaction"
    if (reaction === 1) {
      reactionString = "Full Vaporize/Melt"
    } else if (reaction === 2) {
      reactionString = "Reverse Vaporize/Melt"
    }
    const entry = {
      final: final,
      desc: description === "" ? "No description" : description,
      metric: `Attack: ${attack}, EM: ${eleMastery}, Reaction: ${reactionString}, Crit%: ${critRate}, CritDmg%: ${critDmg}, Elem%:${critDmg}, Mod: ${modifier}`
    }
    updateLog(logs.concat(entry))
    setDescription("");
  }
  const clearLog = () => {
    updateLog([]);
  }
  const renderLog = (log) => {
    return (
      <code>{JSON.stringify(log)}<br /></code>
    );
  }
  const renderLogLines = () => {
    return logs.map((log) => renderLog(log))
  }
  const debug = () => {
    const x = multiplicative(370)
    alert(x)
  }

  return (
    <div className="justify-content-center align-items-center min-vh-100 bg-light d-flex flex-column">
      <div className="py-4 min-vw-100 text-center text-light bg-dark">
        <h1 className="display-4">Genshin Impact: Simple Average Calculator</h1>
      </div>
      <div className="d-flex flex-column">
        <div className="p-2 d-flex justify-content-center">
          {/* Input */}
          <form className="p-4">
            <div className="form-group">
              <label for="attackInput" className="font-weight-bold">Attack</label>
              <input className="form-control" id="attackInput" placeholder="Input total Attack" value={attack} onChange={handleAttackChange} />
              <small className="form-text text-muted" id="attackInput">Your total attack, which is displayed as Base Atk + Atk Bonus at the details screen.</small>
            </div>
            <div className="form-group">
              <label for="emInput" className="font-weight-bold">EM</label>
              <input className="form-control" id="emInput" placeholder="Input elemental mastery" value={eleMastery} onChange={handleEleMasteryChange} />
              <small className="form-text text-muted" id="emInput">Elemental mastery</small>
              <div class="form-check">
                <input onChange={handleNoReaction} checked={reaction === 0} class="form-check-input" type="radio" name="reactionRadio" id="noReaction" />
                <label class="form-check-label" for="noReaction">
                  No reaction
                </label>
              </div>
              <div className="d-flex">
                <div class="form-check mr-2">
                  <input onChange={handleReactionFull} checked={reaction === 1} class="form-check-input" type="radio" name="reactionRadio" id="reactionFull" />
                  <label class="form-check-label" for="reactionFull">
                    Vaporize/Melt (2x)
                </label>
                </div>
                <div class="form-check">
                  <input onChange={handleReactionReverse} checked={reaction === 2} class="form-check-input" type="radio" name="reactionRadio" id="reactionReverse" />
                  <label class="form-check-label" for="reactionReverse">
                    Reverse Vaporize/Melt (1.5x)
                </label>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label for="critInput" className="font-weight-bold">Crit%</label>
              <input className="form-control" id="critInput" placeholder="Input crit rate" value={critRate} onChange={handleCritRateChange} />
              <small className="form-text text-muted" id="critInput">Critical rate percentage.</small>
            </div>
            <div className="form-group">
              <label for="critDmgInput" className="font-weight-bold">CritDmg%</label>
              <input className="form-control" id="critDmgInput" placeholder="Input crit damage" value={critDmg} onChange={handleCritDamageChange} />
              <small className="form-text text-muted" id="critDmgInput">Critical damage percentage.</small>
            </div>
            <div className="form-group">
              <label for="eleInput" className="font-weight-bold">Ele%</label>
              <input className="form-control" id="eleInput" placeholder="Input elemental bonus damage" value={eleBonusDmg} onChange={handleElementalBonusDamageChange} />
              <small className="form-text text-muted" id="eleInput">Elemental damage bonus (Electro, Pyro, etc.).</small>
            </div>
            <div className="form-group">
              <label for="modifierInput" className="font-weight-bold">Skill Modifier (WiP)</label>
              <input disabled className="form-control" id="modifierInput" placeholder="Input skill modifier" value={modifier} onChange={handleModifierChange} />
              <small className="form-text text-muted" id="eleInput">Your skill modifier.</small>
            </div>

          </form>
          <div className="px-4 py-2 d-flex justify-content-center flex-column w-50">
            <div className="mb-5 text-center">
              <h5 className="">Average final damage:</h5>
              <h3 className="text-dark display-3">{final}</h3>
              {/* <h3 className="text-dark display-3">{reaction}</h3> */}
            </div>
            <form>
              <div className="form-group text-center">
                <input id="descriptionInput" className="form-control" placeholder="Log description/alias" value={description} onChange={handleDescriptionChange} onKeyPress={handleDescriptionInputKeyPress}></input>
                <small className="text-dark">Save current values with description/alias attached to the log.</small>
              </div>
              <div className="form-group d-flex justify-content-center">
                <button id="pushBtn" type="button" className="btn btn-dark d-block mx-2" onClick={pushLog}>Add to logs</button>
                <button id="clearBtn" type="button" className="btn btn-dark d-block mx-2" onClick={clearLog}>Clear log</button>
                <button id="debug" type="button" className="btn btn-danger d-block mx-2" onClick={debug}>Debug</button>
              </div>
            </form>
          </div>
        </div>
        <div className="pb-3 d-flex justify-content-center align-items-center flex-column">
          <h5 className="d-flex align-self-start">Logs:</h5>
          <div className="p-2 border overflow-auto" style={{ height: "25vh", backgroundColor: "#efefef", width: "80vw" }}>
            <pre>{renderLogLines()}</pre>
          </div>
        </div>
      </div>
      <small className="pb-2">Features to be added: Tidier logs, elemental mastery and reactions, Noblesse/Gambler, Mobile Polish</small>
      <small>Last push: This section.</small>
    </div >
  );
}

export default App;

// To Do:
// Finish the form