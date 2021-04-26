import React from "react";

const Content = () => {
  return (
    <div className="row my-5">
      <div className="col-md-8 ">
        <h2>What We Do</h2>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deserunt
          neque tempore recusandae animi soluta quasi? Asperiores rem dolore
          eaque vel, porro, soluta unde debitis aliquam laboriosam. Repellat
          explicabo, maiores!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis optio
          neque consectetur consequatur magni in nisi, natus beatae quidem quam
          odit commodi ducimus totam eum, alias, adipisci nesciunt voluptate.
          Voluptatum.
        </p>
        <a className="btn btn-primary btn-lg" href="/#">
          Call to Action &raquo;
        </a>
      </div>
      <div className="col-md-4 mb-5">
        <h2>Contact Us</h2>
        <hr />
        <address>
          <strong>Start Bootstrap</strong>
          <br />
          3481 Melrose Place
          <br />
          Beverly Hills, CA 90210
          <br />
        </address>
        <address>
          <abbr title="Phone">P :</abbr>
          (123) 456-7890
          <br />
          <abbr title="Email">E :</abbr>
          <a href="mailto:#">name@example.com</a>
        </address>
      </div>
    </div>
  );
};
export default Content;