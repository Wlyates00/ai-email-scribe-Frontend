import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./demo.css";

const Demo = () => {
  const [isProcessing, setisProcessing] = useState(false);

  const handleDemoSubmit = async () => {
    document.getElementById("emailOutput").innerText = "[Generating]";

    // Stopping people from spamming results
    setisProcessing(true);

    // Grabbing values from their respective input fields
    const tone = document.getElementById("custom-tone").value;
    const promptText = document.getElementById("field").value;

    // Trying an API call to the BUILT backend (not Open AI API)
    try {
      // Send a POST request to your backend API
      const response = await fetch(process.env.REACT_APP_OPENAI_API_URL, {
        // Sending to the server
        method: "POST",
        // Setting header Content-Type
        headers: {
          "Content-Type": "application/json",
        },
        // Setting the body of the json to be sent
        body: JSON.stringify({
          tone: tone,
          promptText: promptText,
        }),
      });

      // If call was successful
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to generate email");
      }

      const data = await response.json();
      const generatedEmail = data.generatedEmail.trim();

      // Save the generated email to localStorage
      localStorage.setItem("lastGeneratedEmail", generatedEmail);

      // Display the generated email in the output div
      document.getElementById("emailOutput").innerText = generatedEmail;
      setisProcessing(false);
    } catch (error) {
      console.error("Error:", error);
      document.getElementById(
        "emailOutput"
      ).innerText = `Error: ${error.message}`;
      setisProcessing(false);
    }
  };
  return (
    <Container className="demo-container d-flex justify-content-center align-items-center">
      <Row className="row demo-row justify-content-center">
        <Col
          xs={6}
          className="demo-col d-flex flex-column align-items-center text-center"
        >
          <h1 className="header" id="demo-header">
            Try Out Our Demo
          </h1>
          <p className="desc" id="demo-desc">
            We strive to make emailing easier for users. Given a tone along with
            a prompt, our extension provides an easy way to get emails to others
            faster.
          </p>
          <br />
        </Col>
        <Col m={5} className="d-flex justify-content-center align-items-center">
          <form
            className="demo-form"
            style={{ width: "305px", height: "fit-content" }}
          >
            <div className="logo"></div>

            <label htmlFor="tone">
              <b>Tone:</b>
            </label>
            <br />
            <div className="select-dropdown" name="" id="custom-tone" required>
              <select>
                <option value="Happy">Happy</option>
                <option value="angry">Angry</option>
                <option value="sad">Sad</option>
                <option value="apologetic">Apologetic</option>
                <option value="sincere">Sincere</option>
              </select>
            </div>
            <br />

            <label htmlFor="prompt">
              <b>Prompt:</b>
            </label>
            <br />
            <textarea
              type="prompt"
              name="prompt"
              id="field"
              style={{ height: "40%", minHeight: "100px", resize: "none" }}
              placeholder="Example: Complain to the HOA about recent trespassing incidents"
              required
            ></textarea>
            <br />

            <input
              className="submit-btn"
              id="submit"
              type="button"
              value="Generate Email"
              onClick={handleDemoSubmit}
              disabled={isProcessing}
            />

            <div
              className="output"
              id="emailOutput"
              style={{ marginTop: "20px" }}
            ></div>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Demo;
