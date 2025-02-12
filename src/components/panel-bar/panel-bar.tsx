import { PanelTools, PanelToolsType } from "../../types";

import { FiCircle } from "react-icons/fi";
import "./panel-bar-style.css";

type PanelBarProps = {
  tool: PanelToolsType;
  setTool: (tool: PanelToolsType) => void;
};

export function PanelBar({ tool, setTool }: PanelBarProps) {
  return (
    <div className="panelBar">
      {Object.values(PanelTools).map((t, index) => (
        <div
          className={`inputWrapper ${tool === t ? "selected" : ""}`}
          key={t}
          onClick={() => setTool(t)}
        >
          <input
            type="radio"
            id={t}
            checked={tool === t}
            onChange={() => setTool(t)}
            readOnly
          />
          <label htmlFor={t}>{t}</label>
          {t === "circle" && <FiCircle />}
        </div>
      ))}
    </div>
  );
}
