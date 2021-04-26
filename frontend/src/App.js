import './App.css';
import Header from './components/header'
import Card from './components/card'
import Table from './components/table'
import Trow from './components/trow'

import down from './down-arrow.png';
import up from './up-arrow.png';
import dollar from './dollar.png'


import { useEffect, useState } from 'react';
import api from './service/axios';


function App() {

  const [operations, setOperations] = useState([]);
  const [total, setTotal] = useState('')
  const [entrada, setEntrada] = useState(null)
  const [saida, setSaida] = useState('')

  useEffect(() => {

    api.get('/operations').then(res => {

      const entrada = res.data.filter(operation => operation.type === "entrada")
      .reduce((acc, cv) => {
        return acc + parseFloat(cv.value)
      }, 0);

      const saida = res.data.filter(operation => operation.type === "saida")
      .reduce((acc, cv) => {
        return acc + parseFloat(cv.value)
      }, 0);

      setEntrada(entrada);
      setSaida(saida);
      setTotal(entrada - saida)

      setOperations(res.data)});
  
  

  }, []);

  return (
    <div className="content">
      <Header />
      <div className="card-content">
        <Card title="Entrada" icon={up} value={entrada}/>
        <Card title="Saída" icon={down} style={{ margin: "0 20px" }}  value={saida}/>
        <Card title="Total" icon={dollar} style={totalCard} value={total}/>
      </div>
      <Table>
        {
          operations.map(operation => {
            return(
            operation.type === "entrada" ?
              <Trow
                key={operation.id} title={operation.title}
                value={"-$ "+ operation.value} date={operation.createdAt}
                p={{ color: "#33CC95" }}
              />
              :
              <Trow
                key={operation.id} title={operation.title}
                value={"-$ "+ operation.value} date={operation.createdAt}
                p={{ color: "#E62E4D" }}
              />

            )
          }

          )
        }

      </Table>
    </div>
  );
}

const totalCard = {
  background: "#33CC95", color: "white",
}

export default App;
