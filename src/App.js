import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import formula from './formula';
import { Button } from 'react-bootstrap';

function App() {

  var [final, setFinal] = React.useState(0);
  var [attack, setAttack] = React.useState(1000);
  var [critRate, setCritRate] = React.useState(50);
  var [critDmg, setCritDmg] = React.useState(100);
  var [eleBonusDmg, setEleBonusDmg] = React.useState(0);
  var [modifier, setModifier] = React.useState(100);
  var [logs, updateLog] = React.useState([]);
  var [description, setDescription] = React.useState("");

  //var [isNoblesse, togglenNoblesse] = React.useState(0);

  //Final Calc Refresh
  const finalCalc = () => {
    // const final = attack * (critRate / 100);
    const final = formula(attack, critRate, critDmg, eleBonusDmg, modifier);
    setFinal(final);
  }
  //Event listener
  React.useEffect(finalCalc, [critRate, final, critDmg, eleBonusDmg, attack]);
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
    setDescription(event.target.value)
  }

  const pushLog = () => {
    const entry = {
      final: final,
      desc: description === "" ? "No description" : description,
      metric: `Attack: ${attack}, Crit%: ${critRate}, CritDmg%: ${critDmg}, Elem%:${critDmg}, Mod: ${modifier}`
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
    alert(logs)
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
              <label for="attack" className="font-weight-bold">Attack</label>
              <input className="form-control" id="attackInput" placeholder="Input total Attack" value={attack} onChange={handleAttackChange} />
              <small className="form-text text-muted" id="attackInput">Your total attack, which is displayed as Base Atk + Atk Bonus at the details screen.</small>
            </div>
            <div className="form-group">
              <label for="attack" className="font-weight-bold">Crit%</label>
              <input className="form-control" id="critInput" placeholder="Input crit rate" value={critRate} onChange={handleCritRateChange} />
              <small className="form-text text-muted" id="critInput">Critical rate percentage.</small>
            </div>
            <div className="form-group">
              <label for="attack" className="font-weight-bold">CritDmg%</label>
              <input className="form-control" id="critDmgInput" placeholder="Input crit damage" value={critDmg} onChange={handleCritDamageChange} />
              <small className="form-text text-muted" id="critDmgInput">Critical damage percentage.</small>
            </div>
            <div className="form-group">
              <label for="attack" className="font-weight-bold">Ele%</label>
              <input className="form-control" id="eleInput" placeholder="Input elemental bonus damage" value={eleBonusDmg} onChange={handleElementalBonusDamageChange} />
              <small className="form-text text-muted" id="eleInput">Elemental damage bonus (Electro, Pyro, etc.).</small>
            </div>
            <div className="form-group">
              <label for="attack" className="font-weight-bold">Skill Modifier (WiP)</label>
              <input disabled className="form-control" id="modifier" placeholder="Input skill modifier" value={modifier} onChange={handleModifierChange} />
              <small className="form-text text-muted" id="eleInput">Your skill modifier.</small>
            </div>

          </form>
          <div className="p-4 d-flex justify-content-center flex-column w-50">
            <div className="mb-5 text-center">
              <h5 className="">Average final damage:</h5>
              <h3 className="text-dark display-3">{final}</h3>
            </div>
            <form>
              <div className="form-group text-center">
                <input className="form-control" placeholder="Log description/alias" value={description} onChange={handleDescriptionChange}></input>
                <small className="text-dark">Save current values with description/alias attached to the log.</small>
              </div>
              <div className="form-group d-flex justify-content-center">
                <button type="button" className="btn btn-dark d-block mx-2" onClick={pushLog}>Add to logs</button>
                <button id="clearBtn" type="button" className="btn btn-dark d-block mx-2" onClick={clearLog}>Clear log</button>
              </div>

            </form>
            {/* <Button variant="dark" onClick={pushLog}>Add to logs</Button> */}
            {/* <Button variant="dark" onClick={clearLog}>Clear logs</Button> */}
            {/* <Button variant="danger" onClick={debug}>Debug</Button> */}
          </div>
        </div>
        <div className="pb-3 d-flex justify-content-center align-items-center flex-column">
          <h5 className="d-flex align-self-start">Logs:</h5>
          <div className="p-2 border overflow-auto" style={{ height: "25vh", backgroundColor: "#efefef", width: "80vw" }}>
            <pre>{renderLogLines()}</pre>
          </div>
          <small className="text-dark align-self-start">Log is still ugly I know. Will work on tidier log.</small>
        </div>
      </div>
    </div >
  );
}

export default App;

// To Do:
// Finish the form