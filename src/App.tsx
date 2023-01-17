import { createRef } from "react";
import "./styles.scss";

function App() {
  return (
    <div className="App">
      <main>
        <iframe
          title="Margot 2 Seater Sofa, Old Rose Velvet"
          height={800}
          frameBorder="0"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking
          execution-while-out-of-viewport
          execution-while-not-rendered
          web-share
          src="https://sketchfab.com/models/b3d693a003c94f4e989c08fe08c3af8c/embed?autostart=1&camera=0&preload=1&transparent=1&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_hint=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0"
        />
      </main>
      <aside>
        <span>CÓDIGO: #54890</span>
        <h1>Sofá Margot II (Rosé)</h1>
        <p>R$ 4.000</p>
        <button>Compre Agora</button>
      </aside>
    </div>
  );
}

export default App;
