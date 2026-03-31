import { useState } from "react";

import data from "./data.json";

import Card from "./Card";

import Modal from "./Modal";

import "./App.css";

function App() {

  const [selected, setSelected] = useState(null);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("ALL");

  const filtered = data.filter((item) => {

    const matchSearch = item.name

      .toLowerCase()

      .includes(search.toLowerCase());

    const matchClass =

      filter === "ALL" || item.class.toLowerCase() === filter.toLowerCase();

    return matchSearch && matchClass;

  });

  return (
<div className="app">
<header className="header">
<h1>SCP Secure Database</h1>
<p>Classified anomaly archive</p>
</header>
<div className="controls">
<input

          type="text"

          placeholder="Search SCP by name..."

          value={search}

          onChange={(e) => setSearch(e.target.value)}

        />
<select value={filter} onChange={(e) => setFilter(e.target.value)}>
<option value="ALL">All Classes</option>
<option value="Safe">Safe</option>
<option value="Euclid">Euclid</option>
<option value="Keter">Keter</option>
</select>
</div>
<div className="card-grid">

        {filtered.map((item) => (
<Card

            key={item.id}

            item={item}

            onClick={() => setSelected(item)}

          />

        ))}
</div>

      {selected && (
<Modal item={selected} onClose={() => setSelected(null)} />

      )}
</div>

  );

}

export default App;
 