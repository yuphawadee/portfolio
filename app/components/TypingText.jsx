'use client'
import { useState, useEffect } from 'react';

const Typing = ({ words, typingSpeed = 100, deleteSpeed = 50, delay = 4000 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [isCursorVisible, setIsCursorVisible] = useState(true);

  useEffect(() => {
    let timeout;

    if (!isDeleting && currentLetterIndex < words[currentWordIndex].length) {
      // กำลังพิมพ์ตัวอักษร
      timeout = setTimeout(() => {
        setDisplayText(prev => prev + words[currentWordIndex][currentLetterIndex]);
        setCurrentLetterIndex(currentLetterIndex + 1);
      }, typingSpeed);
    } else if (isDeleting && currentLetterIndex > 0) {
      // กำลังลบตัวอักษร
      timeout = setTimeout(() => {
        setDisplayText(prev => prev.slice(0, -1));
        setCurrentLetterIndex(currentLetterIndex - 1);
      }, deleteSpeed);
    } else if (!isDeleting && currentLetterIndex === words[currentWordIndex].length) {
      // พิมพ์ข้อความเสร็จแล้ว เริ่มลบทันที
      timeout = setTimeout(() => {
        setIsDeleting(true);
        setIsCursorVisible(true); // ทำให้ cursor ปรากฏ
      }, delay);
    } else if (isDeleting && currentLetterIndex === 0) {
      // ลบข้อความเสร็จแล้ว ไปยังคำถัดไป
      setIsDeleting(false);
      setCurrentWordIndex((currentWordIndex + 1) % words.length); // วนลูปคำ
      setIsCursorVisible(true); // ทำให้ cursor ปรากฏ
    }

    // ทำให้ cursor กะพริบ
    const blinkInterval = setInterval(() => {
      setIsCursorVisible(prev => !prev);
    }, 500); // เปลี่ยนทุก 500ms

    return () => {
      clearTimeout(timeout);
      clearInterval(blinkInterval);
    };
  }, [currentLetterIndex, isDeleting, words, currentWordIndex, typingSpeed, deleteSpeed, delay]);

  return (
    <div className="typing-text">
      {displayText}
      {isCursorVisible && <span className="cursor">|</span>}
    </div>
  );
};

export default function TypingText() { 
  return (
    <div className='text-2xl lg:text-3xl text-[#AAAAAA]'>
      <Typing
        words={["Crafting Modern Web Applications!", "Building Responsive and Accessible Websites!", "Focused on Performance and User Experience!"]}
        typingSpeed={100}
        deleteSpeed={50}
        delay={4000} // ตั้งค่า delay เป็น 0 เพื่อให้การลบข้อความเกิดขึ้นทันที
      />
    </div>
  );
}
