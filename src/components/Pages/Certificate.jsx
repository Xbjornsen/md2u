import React, { useState } from "react";
import { FaPaperPlane, FaTrash } from "react-icons/fa";
import { sendQuestionToGpt } from "../../services/api"; // Import the API function
import CertificateForm from './CertificateForm'

const Certificate = () => {
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [patient, setPatient] = useState({
        name: "",
        birthdate: "",
        email: "",
        address: "",
        symptoms: "",
        workOrSchool: "",
        daysOff: "",
        startDate: "",
        endDate: "",
    })
    const [inputText, setInputText] = useState("");

    const handleFormSubmit = async (fullName, birthdate, email, address, symptoms, workOrSchool, daysOff, startDate, endDate ) => {
        setPatient({ ...patient, name: fullName, birthdate: birthdate, email: email, address: address, symptoms: symptoms, workOrSchool: workOrSchool, daysOff: daysOff, startDate:startDate, endDate:endDate });
        const question = `Hi Doctor, my name is ${fullName}, i want to request ${daysOff} days off for these symptoms ${symptoms}`;
        console.log(question)
        setIsLoading(true);
        try {
            // Send the question and previous questions to GPT API
            const gptResponse = await sendQuestionToGpt(question, "MedicalCertificateForm");
            if (gptResponse) {
                // Create a new message object with the question and response
                const newMessage = { question: "", response: gptResponse };
                // Update the messages state by adding the new message to the array
                setMessages(prevMessages => [...prevMessages, newMessage]);
            }
        } catch (error) {
            console.error("Failed to send question to GPT API:", error);
        }
        setIsLoading(false); 
        // Clear the input text
        setInputText("");
    };


    const handleSendQuestion = async () => {
        console.log(patient)

        if (inputText.trim() !== "") {
            setIsLoading(true);
            // Create a new message object with the input text as question and empty response
            const newMessage = { question: inputText, response: "" };

            // Add the new message to the messages state
            setMessages(prevMessages => [...prevMessages, newMessage]); // Use functional update with setMessages
            console.log()
            try {
                // Send the question and previous questions to GPT API and update the response in the newMessage object
                const gptResponse = await sendQuestionToGpt(inputText, "MedicalCertificateForm");
                if (gptResponse) {
                    newMessage.response = gptResponse;
                    setMessages(prevMessages => prevMessages.map((message) => message.question === newMessage.question ? newMessage : message));
                    // Update the messages state with the updated response
                }
            } catch (error) {
                console.error("Failed to send question to GPT API:", error);
            }

            // Clear the input text
            setInputText("");
            setIsLoading(false); 
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter" && !event.shiftKey) {
            // Check if Enter key is pressed without Shift key
            handleSendQuestion();
        }
    };

    // Function to handle refreshing the chat
    const handleRefreshChat = () => {
        // Clear the messages state
        setMessages([]);
    };

    return (
        <div className="flex-1 flex-col container mx-auto max-w-5xl p-2 h-screen">
            <div><CertificateForm onFormSubmit={handleFormSubmit} /></div>
            <div className="flex-row inset-x-0 p-2 border shadow-md">
                <div className="flex-1 overflow-y-auto ">
                    <ul className="space-y-2">
                        {messages.map((message, index) => (
                            <li key={index} className="flex-col justify-between">
                                <div className="flex-grow text-right px-2 py-2">
                                    <div className="bg-blue-200 p-2 rounded-lg inline-block">
                                        {message.question}
                                    </div>
                                </div>
                                <div className="flex-shrink text-left px-2 py-2">
                                    <div className=" bg-green-300 text-grey p-2 rounded-lg inline-block" >
                                        {/* Split the response into paragraphs */}
                                        {message.response.split("\n").map((paragraph, i) => (
                                            <p key={i}>{paragraph}</p>
                                        ))}
                                        {/* Render lists */}
                                        {message.response.includes("1.") && (
                                            <ol>
                                                {message.response
                                                    .split("\n")
                                                    .filter((line) => line.startsWith("1."))
                                                    .map((item, i) => (
                                                        <li key={i}>{item}</li>
                                                    ))}
                                            </ol>
                                        )}
                                        {message.response.includes("-") && (
                                            <ul>
                                                {message.response
                                                    .split("\n")
                                                    .filter((line) => line.startsWith("-"))
                                                    .map((item, i) => (
                                                        <li key={i}>{item}</li>
                                                    ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-row">
                    <button
                        className="bg-blue-400 text-white hover:text-grey-700 px-4 py-2 mr-2 rounded"
                        onClick={handleRefreshChat}
                    >
                        <FaTrash />
                    </button>
                    <textarea
                        className="flex-grow resize-none border focus-within:border-gray-100 border-gray-300 rounded p-2 mr-2 "
                        placeholder="Type your reply..."
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        onKeyDown={handleKeyPress}
                        disabled={isLoading}
                    />
                    <button
                        className="bg-blue-400 text-white px-4 rounded"
                        onClick={handleSendQuestion}
                    >
                        <FaPaperPlane />
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Certificate;
