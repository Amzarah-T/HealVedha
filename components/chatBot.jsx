"use client"

import { processReq } from '@/helpers/processRequest';
import { API_ROUTE } from '@/utils/commonConstants';
import { POST } from '@/utils/requestActionConstants';
import { ChatBubbleBottomCenterIcon } from '@heroicons/react/24/outline';
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'

function ChatBot() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I assist you today?', sender: 'bot' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom when messages change
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleMessageSend = async () => {
    if (inputValue.trim() === '') return;

    console.log('Message is sending.....', inputValue)

    // Add user message
    const newMessages = [...messages, { text: inputValue, sender: 'user' }];
    setMessages(newMessages);

    // // Simulate bot response (for demo purposes)
    const result = await axios.post(API_ROUTE + "/public/bot/prompt", {prompt: inputValue});
    
    console.log("resulrs", result)
    setTimeout(() => {
      setMessages([
        ...newMessages,
        { text: result.data.result ? result.data.result.message : result.data.message, sender: 'bot' },
      ]);
    }, 500);

    setInputValue('');
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <div style={{ position: 'fixed', bottom: 0, right: 0, margin: 30 }}>
        <Button onPress={onOpen} color='success' className="max-w-fit"><ChatBubbleBottomCenterIcon className='text-white' /> </Button>
      </div>

      <Modal
        isOpen={isOpen}
        placement={'center'}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">You can chat with our assistant</ModalHeader>
              <ModalBody>
                <div className="w-full mx-auto p-4 bg-white rounded-lg shadow-lg">
                  <div className="overflow-y-auto max-h-80 flex flex-col gap-2">
                    {messages.map((message, index) => (
                      <Message key={index} message={message} />
                    ))}
                    <div ref={messagesEndRef}></div>
                  </div>
                  <div className="flex items-center space-x-2 mt-4">
                    <form className='flex justify-between w-full' action={() => {
                      handleMessageSend()
                    }}>
                      <input
                        type="text"
                        className="flex-1 border rounded-lg px-4 py-2 focus:outline-none  focus:ring focus:ring-purple-200 focus:border-purple-300"
                        placeholder="Type your message..."
                        value={inputValue}
                        onChange={handleInputChange}
                      />
                      <button
                        className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 focus:outline-none active:outline-none focus:ring focus:ring-purple-200 focus:border-purple-300"
                        type='submit'
                      >
                        Send
                      </button>
                    </form>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}


const getFormatedValue = (message) => {
  let result = "";
  
  try {
    result = Object.values(message).join('');
  } catch {
    result = message;
  }

  return result
}


const Message = ({ message }) => (
  <div
    className={`flex justify-between p-2 rounded-lg ${message.sender === 'bot' ? 'bg-gray-100 text-gray-800 self-start' : 'bg-green-500 text-white self-end'}`}
    style={{ maxWidth: '80%' }}
  >
    {getFormatedValue(message.text)}
    {/* {console.log(getFormatedValue(message.text))} */}
  </div>
);

export default ChatBot;