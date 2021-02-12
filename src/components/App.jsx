import React from "react";
import Header from "./Header";
import emojipedia from "../emojipedia";
import Entry from "./Entry";
import Footer from "./Footer";

function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      desc={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <Header />
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
      <Footer />
    </div>
  );
}

export default App;
