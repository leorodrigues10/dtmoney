import { useEffect, useState } from "react";

function Trow(props) {

  const [date, setDate] = useState('');

  useEffect(() => {
      const date = props.date.split("T")[0];
      setDate(date.split("-").reverse().join("/"))

  }, [props.date])
  return (
    <tr className="tr-body">
      <td>{props.title}</td>
      <td style={props.p}>{props.value}</td>
      <td>{date}</td>
    </tr>
  );
}

export default Trow;