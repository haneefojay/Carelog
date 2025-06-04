import { useState } from "react";
import "../styles/CareChat.css";
import Send from "../assets/send.png";
import CareChatIcon from "../assets/careailogo.png";

const CareAIChat = () => {
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const smartSuggestions = [
    "Give me the past medical records of John Doe",
    "How many beds are available currently?",
    "What is the most common illness in my hospital",
    "How many patients are currently diagnosed with fever?",
  ]

  // Mock responses for demonstration
  const getMockResponse = (query) => {
    if (query.toLowerCase().includes("fever")) {
      return {
        type: "text",
        content:
          "As of now, there are 70 patients currently diagnosed of fever in the hospital. This includes both in-patient and emergency care units.",
      }
    } else if (query.toLowerCase().includes("john doe")) {
      return {
        type: "structured",
        content: {
          patientName: "John Doe",
          dateOfBirth: "14-Feb-1980",
          patientId: "#1234567",
          visits: [
            {
              type: "Outpatient Visit",
              date: "12-Mar-2021",
              diagnoses: "Type 2 Diabetes Mellitus",
              medications: "Metformin 500mg BID",
              physician: "Dr. A. Okafor",
            },
          ],
          labReviews: [
            {
              date: "15-Sep-2024",
              findings: "Elevated A1C (8.1%), Vitamin D Deficiency",
              medications: "Vitamin D3, Adjusted Metformin dosage",
              physician: "Dr. A. Okafor",
            },
          ],
        },
      }
    } else if (query.toLowerCase().includes("beds")) {
      return {
        type: "text",
        content:
          "Currently, there are 45 beds available across all departments. This includes 20 general ward beds, 15 ICU beds, and 10 emergency department beds.",
      }
    } else if (query.toLowerCase().includes("common illness")) {
      return {
        type: "text",
        content:
          "The most common illness in the hospital currently is respiratory tract infections, accounting for 35% of all admissions, followed by diabetes-related complications at 22%.",
      }
    } else {
      return {
        type: "text",
        content: "I couldn't find this information in your hospital data.",
      }
    }
  }

  const handleSendMessage = async (messageText) => {
    if (!messageText.trim()) return

    // Add user message
    const userMessage = {
      id: Date.now(),
      type: "user",
      content: messageText,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI response delay
    setTimeout(() => {
      const response = getMockResponse(messageText)
      const aiMessage = {
        id: Date.now() + 1,
        type: "ai",
        content: response.content,
        contentType: response.type,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, aiMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleSuggestionClick = (suggestion) => {
    handleSendMessage(suggestion)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleSendMessage(inputValue)
  }

  const renderStructuredContent = (content) => {
    return (
      <div className="structured-content">
        <div className="patient-header">
          <div>Patient Name: {content.patientName}</div>
          <div>Date of Birth: {content.dateOfBirth}</div>
          <div>Patient ID: {content.patientId}</div>
        </div>

        {content.visits &&
          content.visits.map((visit, index) => (
            <div key={index} className="visit-section">
              <div className="visit-header">
                {visit.type} - {visit.date}
              </div>
              <ul className="visit-details">
                <li>Diagnoses: {visit.diagnoses}</li>
                <li>Medications Prescribed: {visit.medications}</li>
                <li>Attending Physician: {visit.physician}</li>
              </ul>
            </div>
          ))}

        {content.labReviews &&
          content.labReviews.map((lab, index) => (
            <div key={index} className="lab-section">
              <div className="lab-header">Lab Review - {lab.date}</div>
              <ul className="lab-details">
                <li>Findings: {lab.findings}</li>
                <li>Medications Prescribed: {lab.medications}</li>
                <li>Attending Physician: {lab.physician}</li>
              </ul>
            </div>
          ))}
      </div>
    )
  }

  const showWelcomeScreen = messages.length === 0

  return (
    <div className="care-ai-container">
      {showWelcomeScreen ? (
        <div className="welcome-screen">
          <div className="welcome-logo-container">
            <div>
              <div className="logo-icon">
                <img src={CareChatIcon} alt="Care AI Logo" className="care-ai-logo" />
              </div>
            </div>
            <h1 className="greeting">
              Hi I'm <span className="care-ai-text">Care AI</span>
            </h1>
          </div>

          <div className="suggestions-section">
            <h3 className="suggestions-title">Smart suggestions</h3>
            <div className="suggestions-container">
              <div className="suggestions-grid">
                {smartSuggestions.map((suggestion, index) => (
                  <button key={index} className="suggestion-button" onClick={() => handleSuggestionClick(suggestion)}>
                    <span className="suggestion-text">{suggestion}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="chat-container">
          <div className="messages-container">
            {messages.map((message) => (
              <div key={message.id} className={`message ${message.type}-message`}>
                <div className="message-content">
                  {message.type === "ai" && message.contentType === "structured"
                    ? renderStructuredContent(message.content)
                    : message.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="message ai-message">
                <div className="message-content typing-indicator">Thinking...</div>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="input-container">
        <form onSubmit={handleSubmit} className="input-form">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask about patients, diagnosis, medical history and the likes"
            className="message-input"
          />
          <button type="submit" className="send-button" disabled={!inputValue.trim()}>
            <img src={Send} className="send-icon" />
          </button>
        </form>
      </div>
    </div>
  )
}

export default CareAIChat
