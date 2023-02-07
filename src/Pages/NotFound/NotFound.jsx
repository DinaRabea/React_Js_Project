import React from "react";
function NotFound(){
    return(
        <>
          <div className="container-flud text-center">
          <h2 className="fw-bold text-dark "> Page Not Found</h2>
          <p className="text-secondary pb-3 pt-3">We couldn't find what you were looking for.</p>
          <p className="text-dark">Please contact the owner of the site that linked you to the original URL and let them know their link is broken.</p>
          </div>
        </>
    )
}
export default NotFound