import React, { useContext } from "react";
import { DarkTheme } from "./App"; //import 해줘야함

const Thedeepsub = () => {
  const { dark, setDark } = useContext(DarkTheme);
  console.log(dark);
  return (
    <>
      <div className="dark_btn">
        <label htmlFor="btn" className={`${dark ? "on" : ""}`}>
          {dark ? "light" : "dark"}
        </label>
        <button id="btn" onClick={() => setDark(!dark)}>
          mode
        </button>
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
        perspiciatis quas quod animi nesciunt impedit deleniti veritatis amet
        explicabo tempora necessitatibus, totam blanditiis odit sapiente
        quibusdam fugit quisquam dignissimos! Odit necessitatibus totam vitae
        esse error libero omnis minus! Fugiat iure sapiente illum perspiciatis
        voluptas, dolore esse assumenda facilis, sit ducimus iste quos vel
        magni, quo quia cumque! Sed qui harum illo maiores, eaque porro nobis
        voluptatibus unde tenetur aliquam dolores dolorem, nulla, possimus ea?
        Tenetur dolor animi enim qui rem. Voluptas minima molestias blanditiis
        aperiam esse iste alias harum maxime veniam quia. Laboriosam sequi,
        assumenda illo voluptates debitis, alias soluta eum dolorum, eaque
        molestias magni. Amet adipisci nostrum aliquid aperiam illo esse commodi
        soluta eligendi debitis ut aliquam ducimus, explicabo dolorum vero.
        Labore blanditiis praesentium impedit non, aliquid veniam aperiam ipsam
        sint quod esse, tenetur adipisci odio ex exercitationem necessitatibus,
        ipsa architecto excepturi dolor incidunt ea a vero hic consectetur?
        Explicabo architecto eaque libero minima, repellendus soluta ut in
        delectus error illo quisquam exercitationem assumenda enim facilis
        doloremque cupiditate sapiente accusantium earum quaerat! Amet ea
        possimus dolor magni, quisquam accusantium ipsa recusandae beatae, non a
        dolorem earum sed fugit exercitationem aliquid magnam laboriosam veniam
        tempora? Laudantium atque fugiat facilis eum.
      </div>
    </>
  );
};

export default Thedeepsub;
