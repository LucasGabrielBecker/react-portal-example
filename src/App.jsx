import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [isOpen, setisOpen] = useState(false);
  const handleOpenModal = () => {
    setisOpen(true);
  };
  return (
    <div className="wrapper">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
        alt="ReactLogo"
        id="reactlogo"
      />
      <button onClick={handleOpenModal}>Open Modal</button>
      <div className="not-to-fancy">
        <h3>My not to fancy div</h3>
      </div>

      <main>
        <h2>React portal example</h2>

        <p>
          Normaly, we return a element by its render method, it is mounted
          inside DOM as a child node for the closest parent node.
        </p>
        <p>
          With <i> ReactDom.createPortal</i> we can change its behavior by
          rendering the component at the DOM node beside the root node.
        </p>
        <p>
          By using this structure we can style or use our `brother` element as
          we want. The event propagation is not impacted by this change. The
          React virtual DOM can still figure out where the portal is placed.
        </p>
      </main>
      {isOpen && <Modal setisOpen={setisOpen} />}
    </div>
  );
}

export default App;
