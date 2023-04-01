import React from "react";

const CalltoActionSection = () => {
  return (
    <div className="subscribe-section bg-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2 className="">Necesitas nuestra ayuda?</h2>
              <p>Registrate y obtén nuestra ayuda por correo...</p>
              <form className="form-section">
                <input placeholder="Tu Email..." name="email" type="email" />
                <input value="Si, yo quiero!" name="subscribe" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalltoActionSection;
