"use client";
import { useState } from "react";

export default function QuizPage() {
  const soal = [
    {
      pertanyaan: "Choose the correct synonym of 'essential'.",
      jawaban: "necessary",
      opsi: ["optional", "funny", "necessary", "trivial"]
    },
    {
      pertanyaan: "Complete the sentence: She ___ in Yogyakarta for five years.",
      jawaban: "has lived",
      opsi: ["lived", "has lived", "lives", "was living"]
    },
    {
      pertanyaan: "Identify the correct sentence:",
      jawaban: "They have completed the task.",
      opsi: [
        "They has completed the task.",
        "They have completed the task.",
        "They completing the task.",
        "They completes the task."
      ]
    },
    {
      pertanyaan: "Find the antonym of 'difficult'.",
      jawaban: "easy",
      opsi: ["hard", "confusing", "easy", "complex"]
    },
    {
      pertanyaan: "Choose the correct preposition: The book is ___ the table.",
      jawaban: "on",
      opsi: ["on", "at", "to", "in"]
    },
    {
      pertanyaan: "What is the correct passive form of: 'The students wrote the essay'?",
      jawaban: "The essay was written by the students.",
      opsi: [
        "The students were writing the essay.",
        "The essay is written by the students.",
        "The essay wrote the students.",
        "The essay was written by the students."
      ]
    },
    {
      pertanyaan: "Choose the correct word: The results were ___ surprising.",
      jawaban: "quite",
      opsi: ["very", "much", "quite", "many"]
    },
    {
      pertanyaan: "Complete the sentence: If I ___ taller, I could play basketball.",
      jawaban: "were",
      opsi: ["was", "am", "were", "be"]
    },
    {
      pertanyaan: "Choose the correct article: We saw ___ elephant at the zoo.",
      jawaban: "an",
      opsi: ["an", "a", "the", "at"]
    },
    {
      pertanyaan: "Find the correct reported speech: He said, 'I will join the team.'",
      jawaban: "He said that he would join the team.",
      opsi: [
        "He said he will join the team.",
        "He said that he joined the team.",
        "He said that he would join the team.",
        "He said to join the team."
      ]
    }
  ];

  const [index, setIndex] = useState(0);
  const [skor, setSkor] = useState(0);
  const [selesai, setSelesai] = useState(false);
  const [mulai, setMulai] = useState(false);
  const [jawabanUser, setJawabanUser] = useState([]);

  const cekJawaban = (jawab) => {
    setJawabanUser([...jawabanUser, jawab]);
    if (jawab === soal[index].jawaban) setSkor(skor + 1);
    if (index < soal.length - 1) {
      setIndex(index + 1);
    } else {
      setSelesai(true);
    }
  };

  return (
    <>
 

      <main className="quiz-section">
        {!mulai ? (
          <div className="card intro">
            <h2>Selamat Datang di Kuis Bahasa Inggris</h2>
            <p>Platform ini dirancang untuk melatih kemampuan akademikmu secara interaktif.</p>
            <div className="quiz-info">
              <p><strong>Materi:</strong> Bahasa Inggris Akademik</p>
              <p><strong>Jumlah Soal:</strong> {soal.length}</p>
              <p><strong>Penilaian:</strong> Otomatis</p>
            </div>
            <div className="cta-wrapper">
              <a href="/" className="btn">Kembali</a>
              <button className="btn primary" onClick={() => setMulai(true)}>Mulai Kuis</button>
            </div>
          </div>
        ) : !selesai ? (
          <div className="card">
            <h2>Soal {index + 1} / {soal.length}</h2>
            <p className="question">{soal[index].pertanyaan}</p>
            <div className="progress">
              <div className="bar" style={{ width: `${((index + 1) / soal.length) * 100}%` }} />
            </div>
            <div className="options">
              {soal[index].opsi.map((opsi) => (
                <button key={opsi} className="btn option" onClick={() => cekJawaban(opsi)}>
                  {opsi}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="card">
            <h2>Hasil Kuis Kamu</h2>
            <div className="score-circle">{Math.round((skor / soal.length) * 100)}%</div>
            <p>Kamu menjawab <strong>{skor}</strong> dari <strong>{soal.length}</strong> soal dengan benar.</p>
            <div className="hasil-list">
              {soal.map((item, i) => {
                const benar = item.jawaban === jawabanUser[i];
                return (
                  <div key={i} className={`hasil-item ${benar ? "benar" : "salah"}`}>
                    <p><strong>Soal {i + 1}:</strong> {item.pertanyaan}</p>
                    <p>Jawaban Kamu: <span>{jawabanUser[i] || "-"}</span></p>
                    <p>Jawaban Benar: <span>{item.jawaban}</span></p>
                  </div>
                );
              })}
            </div>
            <a href="/" className="btn">Kembali ke Beranda</a>
          </div>
        )}
      </main>


    </>
  );
}
