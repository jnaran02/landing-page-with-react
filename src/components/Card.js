import React from 'react'

const Card = (props)=> {
  return (
    <div className="col-3">
      <div className="card text-center" style={{ width: "17rem" }}>
        <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.paragraph}</p>
          <a href="/#" className="btn btn-primary">
            Find Out More!
          </a>
        </div>
      </div>
    </div>
  );
}
export default Card;
