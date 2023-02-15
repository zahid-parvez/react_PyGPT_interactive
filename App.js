import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import './index.css';

function App() {
  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);

  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        temperature: 0.5,
        max_tokens: 200,
      });
      setResult(response.data.choices[0].text);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    // <main className="main">
    <div className="container">
      <textarea
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Hi there, how can I help you.."
        className="textarea"
      ></textarea>

      <button
        onClick={handleClick}
        disabled={loading || prompt.length === 0}
        className="btn"
      >
        {loading ? "Generating..." : "Generate"}
      </button>
      <div className="result">
        <label >{result}</label>
      </div>
      <footer>
      <p color="white">Developed By : <a href="https://github.com/zahid-parvez">Zahid Parvez</a></p>
        <div class="footer-copyright">
          <p>Copyright @ 2023 All Rights Reserved.</p>
        </div>
      </footer>
    </div>
    // </main>
  );
}


export default App;