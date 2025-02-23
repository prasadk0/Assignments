import { useState } from "react";

export default function MatchRunIncrement() {
  const [score, setScore] = useState({ run: 0, wickets: 0 });
  const [message, setMessage] = useState({ value: 0, key: "", display: false });

  const changeHandler = (e, key) => {
    const value = Number(e.target.value);
    if (isNaN(value) || value < 0) return;
    setScore((prev) => ({ ...prev, [key]: value }));
    setMessage({ value, key, display: true });
    setTimeout(() => setMessage({ value: 0, key: "", display: false }), 2000);
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <span className="text-lg font-bold">
        India: {score.run}/{score.wickets}
      </span>

      <div className={message.display ? "block text-green-500" : "hidden"}>
        +{message.value} {message.key} added
      </div>

      <div className="flex gap-4">
        <input
          type="number"
          placeholder="Runs Added"
          min="0"
          onChange={(e) => changeHandler(e, "run")}
          className="border p-2 rounded-lg"
        />
        <input
          type="number"
          placeholder="Wickets Added"
          min="0"
          max="10"
          onChange={(e) => changeHandler(e, "wickets")}
          className="border p-2 rounded-lg"
        />
      </div>
    </div>
  );
}
