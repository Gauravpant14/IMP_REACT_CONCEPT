import React, { useState } from "react";
import BasicForm from "./BasicForm";

const AllForms = () => {
  const [formOpen, setFormOpen] = useState({
    form1: true,
    form2: false,
    form3: false,
  });
  const getInfo = (e, i) => {
    console.log(i);
    if (i === 1) {
      setFormOpen((p) => {
        return {
          form1: true,
          form2: false,
          form3: false,
        };
      });
    } else if (i === 2) {
      setFormOpen((p) => {
        return {
          form1: false,
          form2: true,
          form3: false,
        };
      });
    } else if (i === 3) {
      setFormOpen((p) => {
        return {
          form1: false,
          form2: false,
          form3: true,
        };
      });
    }

    // setFormTwo(false);
    // setFormThree(false);
  };

  return (
    <div>
      <div class="tabs is-toggle">
        <ul>
          <li class={formOpen.form1 ? 'is-active' : ''} onClick={(e, i = 1) => getInfo(e, i)}>
            <a>
              <span class="icon is-small">
                <i class="fas fa-image" aria-hidden="true"></i>
              </span>
              <span name="one">Form 1</span>
            </a>
          </li>
         
          <li class={formOpen.form2 ? 'is-active' : ''} onClick={(e, i = 2) => getInfo(e, i)}>
            <a>
              <span class="icon is-small">
                <i class="fas fa-film" aria-hidden="true"></i>
              </span>
              <span>Form 2</span>
            </a>
          </li>
          <li class={formOpen.form3 ? 'is-active' : ''} onClick={(e, i = 3) => getInfo(e, i)}>
            <a>
              <span class="icon is-small">
                <i class="far fa-file-alt" aria-hidden="true"></i>
              </span>
              <span>Form 3</span>
            </a>
          </li>
        </ul>
      </div>
      {formOpen.form1 && (
        <div className="container">
          <h1>Form 1</h1>
          <BasicForm />
        </div>
      )}
      {formOpen.form2 && (
        <div className="container">
          <h1>Form 2</h1>
          <BasicForm />
        </div>
      )}
      {formOpen.form3 && (
        <div className="container">
          <h1>Form 3</h1>
          <BasicForm />
        </div>
      )}
    </div>
  );
};

export default AllForms;
