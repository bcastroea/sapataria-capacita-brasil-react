import './TamanhosSelector.css';

export default function TamanhosSelector({ selectedTamanhos, setSelectedTamanhos }) {
  const tamanhosDisponiveis = [37, 38, 39, 40, 41, 42, 43, 44];

  const toggleTamanho = (t) => {
    if (selectedTamanhos.includes(t)) {
      setSelectedTamanhos(selectedTamanhos.filter((num) => num !== t));
    } else {
      setSelectedTamanhos([...selectedTamanhos, t]);
    }
  };

  return (
    <div className="tamanhos-container">
      {tamanhosDisponiveis.map((t) => (
        <button
          type="button"
          key={t}
          onClick={() => toggleTamanho(t)}
          className={selectedTamanhos.includes(t) ? "selected" : ""}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
