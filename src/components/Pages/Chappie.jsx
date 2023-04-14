import React, { useState } from "react";
import { FaPaperPlane, FaTrash } from "react-icons/fa";
import { sendQuestionToGpt } from "../../services/api"; // Import the API function

const Chappie = () => {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState("");

    // Function to handle sending a question
    const handleSendQuestion = async () => {
        if (inputText.trim() !== "") {
            // Create a new message object with the input text as question and empty response
            const newMessage = { question: inputText, response: "" };

            // Add the new message to the messages state
            setMessages((prevMessages) => [...prevMessages, newMessage]); // Use functional update with setMessages

            // Send the question and previous questions to GPT API and update the response in the newMessage object
            const gptResponse = await sendQuestionToGpt(inputText);
            if (gptResponse) {
                newMessage.response = gptResponse;
                setMessages((prevMessages) =>
                    prevMessages.map((message) =>
                        message.question === newMessage.question ? newMessage : message
                    )
                ); // Update the messages state with the updated response
            }

            // Clear the input text
            setInputText("");
        }
    };
    // Function to handle refreshing the chat
    const handleRefreshChat = () => {
        // Clear the messages state
        setMessages([]);
    };
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            // Check if Enter key is pressed
            handleSendQuestion();
        }
    };

    return (
        <div className="flex-1 container mx-auto px-4 py-8">
            <div className="flex flex-col">
                <div className="flex-1 overflow-y-auto">
                    <ul className="space-y-2">
                        {messages.map((message, index) => (
                            <li key={index} className="flex-col justify-between">
                                <div className="flex-grow text-right px-2 py-2">
                                    <div className="bg-blue-200 p-2 rounded-lg inline-block">
                                        {message.question}
                                    </div>
                                </div>
                                <div className="flex-shrink text-left px-2 py-2">
                                    <div className=" bg-green-300 text-grey p-2 rounded-lg inline-block">
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
                <div className="flex">
                    <textarea
                        className="flex-grow h-20 resize-none border focus-within:border-gray-100 border-gray-300 rounded p-2 mr-2 ml-14"
                        placeholder="Type your question..."
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        onKeyDown={handleKeyPress}
                    />
                    <button
                        className="bg-blue-400 text-white px-4 py-2 rounded"
                        onClick={handleSendQuestion}
                    >
                        <FaPaperPlane />
                    </button>
                    <div className="text-right absolute left ">
                        <button
                            className="text-white hover:text-grey-700 bg-blue-400 px-4 py-8 rounded"
                            onClick={handleRefreshChat}
                        >
                            <FaTrash />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chappie;
