import { h } from "preact";
import { useState } from "preact/hooks";
import './griditems.css';

export default function GridItems({ className, id, items }) {
  const [fullView, setFullView] = useState({index: null})

  const ViewFullItem = (i) => {
    if (fullView?.index == i) {
      setFullView({index: null})
    } else 
      setFullView({index: i})
  }
  return (
    <div className="grid-center-all container">
      {items.map((item, i) => (
        <div className="poster">
          <div className="banner">
            <img src={item?.poster} alt={item?.title}/>
          </div>
          <h3 className="text-center py-1">{item?.title}</h3>
          <pre className="item_description" style={{maxHeight: fullView?.index===i?"100%":""}}>
            {item?.description}
            <br/> <a href={`joinus/f/${item.route}`} className="my-1 form-link">HERE'S THE FORM</a>
            </pre>
          <button className="poster-button" onClick={() => ViewFullItem(i)}>{fullView?.index===i?"SEE LESS":"SEE MORE"}</button>
        </div>
      ))}
    </div>
  );
}
